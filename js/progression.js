// Builds the Progression page from data/progression.js.
(function () {
    const D = window.HKC_PROGRESSION;
    if (!D) return;
    const RQ = { world: [100, 500, 2000, 5000], region: [35, 170, 700, 1700], realm: [3, 10, 25, 60] };
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const q = (k, n) => { const t = RQ[k]; return n <= t[0] ? 'legendary' : n <= t[1] ? 'epic' : n <= t[2] ? 'rare' : n <= t[3] ? 'uncommon' : 'common'; };
    const rv = (k, n) => n ? '<span class="q-' + q(k, n) + '">' + n.toLocaleString('en-US') + '</span>' : '<span class="q-common">–</span>';
    const trio = (r, cls) => {
        cls = cls || 'rank-trio';
        if (!r) return '<div class="' + cls + ' none">Not ranked</div>';
        return '<div class="' + cls + '"><span><small>World</small>' + rv('world', r.world) + '</span>' +
            '<span><small>Region</small>' + rv('region', r.region) + '</span>' +
            '<span><small>Realm</small>' + rv('realm', r.realm) + '</span></div>';
    };
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const nice = s => { const [y, m, d] = s.split('-').map(Number); return MONTHS[m - 1] + ' ' + d + ', ' + y; };
    const dur = min => { const h = Math.floor(min / 60), m = min % 60; return h ? h + 'h ' + m + 'm' : m + 'm'; };
    const plural = (n, w) => n + ' ' + w + (n !== 1 ? 's' : '');
    const icon = id => 'images/bosses/' + id + '.jpg';
    const killed = b => !!(b.mythic && b.mythic.killed);
    const rankOf = m => (m && (m.world || m.region || m.realm)) ? { world: m.world, region: m.region, realm: m.realm } : null;

    const raidRow = r => {
        const m = r.bosses.filter(killed).length, h = r.bosses.filter(b => b.heroic).length, n = r.bosses.length;
        const badge = r.noBadge ? '<span></span>' : m === n ? '<span class="ach ce">Cutting Edge</span>' : h === n ? '<span class="ach aotc">Ahead of the Curve</span>' : '<span></span>';
        const brows = r.bosses.map(b => {
            const x = b.mythic || {};
            const kd = typeof x.killed === 'string' ? nice(x.killed) : (killed(b) ? 'Killed' : '—');
            return '<tr class="' + (killed(b) ? 'k' : '') + '"><td><img src="' + icon(b.icon) + '" alt="" onerror="this.style.visibility=\'hidden\'">' + esc(b.name) + '</td>' +
                '<td>' + kd + '</td><td>' + (x.pulls || '') + '</td><td>' + rv('world', x.world) + '</td><td>' + rv('region', x.region) + '</td><td>' + rv('realm', x.realm) + '</td></tr>';
        }).join('');
        return '<details class="raid-row"><summary><span class="raid-name">' + esc(r.name) + '</span>' +
            '<span class="raid-prog"><b>' + m + '/' + n + '</b> M · ' + h + '/' + n + ' H</span>' + badge + trio(r.ranks, 'rank-trio small') + '</summary>' +
            '<table class="boss-table"><thead><tr><th>Boss</th><th>Mythic kill</th><th>Pulls</th><th>World</th><th>Region</th><th>Realm</th></tr></thead>' +
            '<tbody>' + brows + '</tbody></table></details>';
    };

    // ---------- current season ----------
    const cur = D.current, bs = cur.bosses;
    const mk = bs.filter(killed).length, hk = bs.filter(b => b.heroic).length;
    const pulls = bs.reduce((a, b) => a + ((b.mythic && b.mythic.pulls) || 0), 0);
    const mins = bs.reduce((a, b) => a + ((b.mythic && b.mythic.minutes) || 0), 0);
    const prog = bs.find(b => !killed(b) && b.mythic && b.mythic.pulls);
    const cards = bs.map(b => {
        const m = b.mythic || {};
        let st, meta = '', rk = '', cls;
        if (killed(b)) {
            st = '<span class="pstat killed">' + (typeof m.killed === 'string' ? 'Killed ' + nice(m.killed) : 'Killed') + '</span>';
            if (m.pulls) meta = plural(m.pulls, 'pull') + ' · ' + plural(m.nights, 'night') + ' · ' + dur(m.minutes);
            rk = trio(rankOf(m)); cls = 'killed';
        } else if (m.pulls) {
            st = '<span class="pstat prog">In progress' + (typeof m.progress === 'number' ? ' · best ' + m.progress.toFixed(1) + '%' : '') + '</span>';
            meta = m.pulls + ' pulls · ' + plural(m.nights, 'night') + ' · ' + dur(m.minutes);
            cls = 'progress';
        } else {
            st = '<span class="pstat none">Not started</span>'; cls = 'notstarted';
        }
        return '<div class="boss-card ' + cls + '"><img class="boss-icon" src="' + icon(b.icon) + '" alt="" onerror="this.style.visibility=\'hidden\'">' +
            '<div class="boss-info"><div class="boss-name">' + esc(b.name) + '</div>' + st +
            (meta ? '<div class="boss-meta">' + meta + '</div>' : '') + rk + '</div></div>';
    }).join('');
    const curEl = document.getElementById('prog-current');
    if (curEl) curEl.innerHTML =
        '<div class="prog-hero"><div class="prog-hero-main"><div class="prog-season">' + esc(cur.season) + '</div>' +
        '<div class="prog-raid">' + esc(cur.raid) + '</div>' +
        '<div class="prog-count"><b>' + mk + '/' + bs.length + '</b> Mythic <span>· ' + hk + '/' + bs.length + ' Heroic</span></div></div>' +
        '<div class="prog-hero-ranks">' + trio(cur.ranks, 'rank-trio big') + '</div>' +
        '<div class="prog-hero-stats"><div><small>Progression pulls</small><b>' + pulls.toLocaleString('en-US') + '</b></div>' +
        '<div><small>Time in combat</small><b>' + dur(mins) + '</b></div>' +
        '<div><small>Current boss</small><b>' + (prog ? esc(prog.name) : 'Cleared') + '</b>' +
        (prog && typeof prog.mythic.progress === 'number' ? '<span>best ' + prog.mythic.progress.toFixed(1) + '%</span>' : '') + '</div></div></div>' +
        '<div class="boss-grid">' + cards + '</div>' +
        (cur.sideRaids && cur.sideRaids.length ? '<div class="side-raids">' + cur.sideRaids.map(raidRow).join('') + '</div>' : '');

    // ---------- raid history ----------
    const histEl = document.getElementById('prog-history');
    if (histEl) histEl.innerHTML = D.history.map(s => {
        const rows = s.raids.map(raidRow).join('');
        return '<div class="season-card" id="season-' + slug(s.season) + '"><div class="season-name">' + esc(s.season) + '</div>' + rows + '</div>';
    }).join('');

    const upd = document.getElementById('prog-updated');
    if (upd) upd.textContent = 'Ranks and progression updated ' + nice(D.updated);

    // ---------- sidebar timeline: one entry per expansion, seasons underneath ----------
    const list = document.querySelector('.page-timeline .timeline-list');
    if (list) {
        const ICONS = {
            'Midnight': 'icon-midnight.png', 'The War Within': 'icon-the-war-within.png', 'Dragonflight': 'icon-dragonflight.png',
            'Shadowlands': 'icon-shadowlands.png', 'Battle for Azeroth': 'icon-battle-for-azeroth.png', 'Legion': 'icon-legion.png',
            'Warlords of Draenor': 'icon-warlords-of-draenor.png'
        };
        const groups = [];
        D.history.forEach(s => {
            const mm = s.season.match(/^(.*) Season (\d+)$/);
            const exp = mm ? mm[1] : s.season, label = mm ? 'Season ' + mm[2] : s.season;
            if (!groups.length || groups[groups.length - 1].exp !== exp) groups.push({ exp, seasons: [] });
            groups[groups.length - 1].seasons.push({ label, id: 'season-' + slug(s.season) });
        });
        list.insertAdjacentHTML('beforeend', groups.map(g =>
            '<li class="tl-era" data-sec="' + g.seasons[0].id + '"><a href="#' + g.seasons[0].id + '" class="tl-era-link">' +
            (ICONS[g.exp] ? '<span class="tl-icon"><img src="images/eras/' + ICONS[g.exp] + '" alt=""></span>' : '<span class="tl-icon dot"><span class="tl-dot"></span></span>') +
            '<span class="tl-name">' + esc(g.exp) + '</span></a><ol class="tl-subs">' +
            g.seasons.map(s => '<li><a href="#' + s.id + '" data-target="' + s.id + '">' + s.label + '</a></li>').join('') +
            '</ol></li>').join(''));
    }
})();
