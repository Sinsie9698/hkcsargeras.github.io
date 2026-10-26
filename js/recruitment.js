// Home page: recruitment box, built from data/recruitment.js.
(function () {
    const R = window.HKC_RECRUITMENT, el = document.getElementById('recruit');
    if (!R || !el) return;
    const NAMES = { 'death-knight': 'Death Knight', 'demon-hunter': 'Demon Hunter', druid: 'Druid', evoker: 'Evoker', hunter: 'Hunter', mage: 'Mage', monk: 'Monk', paladin: 'Paladin', priest: 'Priest', rogue: 'Rogue', shaman: 'Shaman', warlock: 'Warlock', warrior: 'Warrior' };
    const chips = list => list.map(s => '<span class="rc-spec cls-' + s[0] + '">' + s[1] + ' <small>' + NAMES[s[0]] + '</small></span>').join('');
    el.innerHTML = R.open
        ? '<p class="rec-note">' + R.note + '</p>' +
          (R.high.length ? '<div class="rec-tier"><span class="rec-label">High priority</span><div class="rec-specs">' + chips(R.high) + '</div></div>' : '') +
          (R.medium.length ? '<div class="rec-tier"><span class="rec-label">Medium priority</span><div class="rec-specs">' + chips(R.medium) + '</div></div>' : '')
        : '<p class="rec-note">Recruitment is currently closed.</p>';
})();
