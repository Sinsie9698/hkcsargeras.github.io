// Updates the current season in data/progression.js from Raider.IO.
// Run by .github/workflows/update-progression.yml (daily), or locally: node scripts/update-progression.mjs
//
// What it updates (current raid + sideRaids only; history is never touched):
//   - raid ranks (world / region / realm)
//   - Mythic kill dates for newly killed bosses
//   - region / realm rank for killed bosses (when Raider.IO lists the guild in its top 50 for the realm)
//   - best % and pull count for bosses still in progress
//   - Heroic kills
// Pull counts, nights and time for killed bosses are left as they are; a new kill starts with none.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const FILE = path.join(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..', 'data', 'progression.js');
const GUILD = { region: 'us', realm: 'sargeras', name: 'Hello Kitty Club' };
const TZ = 'America/Chicago';
const API = 'https://raider.io';
const g = `region=${GUILD.region}&realm=${GUILD.realm}`;
const gname = encodeURIComponent(GUILD.name);

async function get(url) {
    if (process.env.RIO_FIXTURES) {
        const fx = JSON.parse(fs.readFileSync(process.env.RIO_FIXTURES, 'utf8'));
        if (!(url in fx)) throw new Error('no fixture for ' + url);
        return fx[url];
    }
    const r = await fetch(API + url, { headers: { 'User-Agent': 'hkc-website-progression-updater' } });
    if (!r.ok) throw new Error(r.status + ' ' + url);
    return r.json();
}
const day = iso => new Date(iso).toLocaleDateString('en-CA', { timeZone: TZ });
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const isHKC = e => e.guild && e.guild.name === GUILD.name && e.guild.realm && e.guild.realm.slug === GUILD.realm;
const rank3 = r => (r && (r.world || r.region || r.realm)) ? { world: r.world || undefined, region: r.region || undefined, realm: r.realm || undefined } : null;

function fmtObj(o) {
    if (!o) return 'null';
    const keys = ['killed', 'progress', 'pulls', 'nights', 'minutes', 'world', 'region', 'realm'];
    const parts = keys.filter(k => o[k] !== undefined && o[k] !== null).map(k => k + ': ' + (typeof o[k] === 'string' ? '"' + o[k] + '"' : o[k]));
    return '{ ' + parts.join(', ') + ' }';
}
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function main() {
    let text = fs.readFileSync(FILE, 'utf8');
    const sandbox = { window: {} };
    vm.runInNewContext(text, sandbox);
    const D = sandbox.window.HKC_PROGRESSION;
    const cur = D.current;
    if (!cur.rio) throw new Error('current.rio (Raider.IO raid slug) is missing in data/progression.js');

    const raids = [{ obj: cur, main: true }, ...(cur.sideRaids || []).map(r => ({ obj: r, main: false }))];
    const sd = await get(`/api/v1/raiding/static-data?expansion_id=${cur.rioExpansion}`);
    const profile = await get(`/api/v1/guilds/profile?${g}&name=${gname}&fields=raid_rankings`);
    let details = null;
    try { details = (await get(`/api/guilds/details?${g}&guild=${gname}`)).guildDetails; } catch (e) { console.warn('details unavailable:', e.message); }

    let changed = false;
    const head = text.slice(0, text.indexOf('history: ['));
    let newHead = head;

    for (const { obj: raid, main } of raids) {
        const sr = sd.raids.find(r => r.slug === raid.rio);
        if (!sr) { console.warn('Raider.IO has no raid', raid.rio, '- season may have changed; skipping'); continue; }
        const encBy = Object.fromEntries(sr.encounters.map(e => [norm(e.name), e.slug]));
        const prog = details && details.raidProgress && details.raidProgress.find(r => r.raid === raid.rio);
        const att = details && details.raidAttempt && details.raidAttempt.find(r => r.raid === raid.rio);
        const heroicDone = new Set(((prog && prog.encountersDefeated && prog.encountersDefeated.heroic) || []).map(e => e.slug));

        // raid ranks
        const rr = profile.raid_rankings && profile.raid_rankings[raid.rio] && rank3(profile.raid_rankings[raid.rio].mythic);
        if (JSON.stringify(rr) !== JSON.stringify(rank3(raid.ranks))) {
            const ranksTxt = rr ? fmtObj(rr) : 'null';
            const re = main ? /(current: \{[\s\S]*?ranks: )(null|\{[^}]*\})/ : new RegExp('(name: "' + esc(raid.name) + '",[\\s\\S]*?ranks: )(null|\\{[^}]*\\})');
            newHead = newHead.replace(re, (m, a) => a + ranksTxt);
            console.log(raid.name || raid.raid, 'ranks ->', ranksTxt); changed = true;
        }

        for (const b of raid.bosses) {
            const slug = encBy[norm(b.name)];
            if (!slug) { console.warn('no Raider.IO encounter for', b.name); continue; }
            const before = JSON.stringify({ h: b.heroic, m: b.mythic });
            const m = b.mythic ? { ...b.mythic } : null;
            let mm = m;
            const heroic = b.heroic || heroicDone.has(slug);

            if (!(m && m.killed)) {
                const k = await get(`/api/v1/guilds/boss-kill?${g}&guild=${gname}&raid=${raid.rio}&boss=${slug}&difficulty=mythic`);
                if (k && k.kill && k.kill.defeatedAt) {
                    // pull counts from before the kill would be out of date, so they are dropped (add them from Warcraft Logs if wanted)
                    mm = { killed: day(k.kill.defeatedAt) };
                } else {
                    const a = att && att.encounters && (att.encounters.mythic || []).find(e => e.slug === slug);
                    if (a && a.pullCount) {
                        const best = Math.round(a.bestPercent * 10) / 10;
                        mm = m ? { ...m } : {};
                        if (typeof mm.progress !== 'number' || best < mm.progress) mm.progress = best;
                        if (!mm.pulls) mm.pulls = a.pullCount; // Raider.IO undercounts pulls, so never overwrite logged ones
                    }
                }
            }
            if (mm && mm.killed) {
                const br = await get(`/api/v1/raiding/boss-rankings?raid=${raid.rio}&boss=${slug}&difficulty=mythic&${g}`);
                const e = (br.bossRankings || []).find(isHKC);
                if (e) { mm.region = e.regionRank || mm.region; mm.realm = e.rank || mm.realm; }
            }
            const after = JSON.stringify({ h: heroic, m: mm });
            if (after !== before) {
                const re = new RegExp('(\\{ name: "' + esc(b.name) + '", icon: \\d+, heroic: )(true|false)(, mythic: )(null|\\{[^}]*\\})( \\})');
                if (!re.test(newHead)) { console.warn('could not find line for', b.name); continue; }
                newHead = newHead.replace(re, (x, a, _h, c, _m, e) => a + heroic + c + fmtObj(mm) + e);
                console.log(b.name, '->', heroic ? 'H' : '-', fmtObj(mm)); changed = true;
            }
        }
    }

    if (!changed) { console.log('No changes.'); return; }
    const today = new Date().toLocaleDateString('en-CA', { timeZone: TZ });
    newHead = newHead.replace(/updated: "\d{4}-\d{2}-\d{2}"/, 'updated: "' + today + '"');
    text = newHead + text.slice(head.length);
    vm.runInNewContext(text, { window: {} }); // sanity check: still valid JS
    fs.writeFileSync(FILE, text);
    console.log('data/progression.js updated.');
}

main().catch(e => { console.error(e); process.exit(1); });
