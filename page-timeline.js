// Sticky page timeline: highlights the section (and sub-item) you are reading.
(function () {
    const tl = document.querySelector('.page-timeline');
    if (!tl) return;
    const body = document.querySelector('.story-body');
    const fill = tl.querySelector('.timeline-fill');
    const eras = [...tl.querySelectorAll('.tl-era')].map(li => ({
        li,
        el: document.getElementById(li.dataset.sec),
        subs: [...li.querySelectorAll('.tl-subs a[data-target]')].map(a => ({ a, el: document.getElementById(a.dataset.target) }))
    }));
    const visible = el => el && el.offsetParent !== null;

    tl.addEventListener('click', e => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const tab = a.closest('[data-tab]');
        if (tab && window.hkcGalleryOpen) {
            e.preventDefault();
            window.hkcGalleryOpen(tab.dataset.tab, true);
            const target = document.getElementById(a.getAttribute('href').slice(1));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(update, 0);
    });

    let ticking = false;
    function update() {
        ticking = false;
        const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
        const line = atEnd ? window.innerHeight * 0.8 : window.innerHeight * 0.35;
        const shown = eras.filter(e => visible(e.el));
        let cur = shown[0];
        shown.forEach(e => { if (e.el.getBoundingClientRect().top <= line) cur = e; });
        const ci = eras.indexOf(cur);
        eras.forEach((e, k) => {
            e.li.classList.toggle('current', e === cur);
            e.li.classList.toggle('past', visible(e.el) && k < ci);
            e.subs.forEach(s => s.a.classList.remove('active'));
        });
        if (cur && cur.subs.length) {
            let s = cur.subs[0];
            const subLine = atEnd ? line : 180;
            cur.subs.forEach(x => { if (visible(x.el) && x.el.getBoundingClientRect().top <= subLine) s = x; });
            s.a.classList.add('active');
        }
        const b = body.getBoundingClientRect();
        fill.style.height = (Math.min(1, Math.max(0, (line - b.top) / b.height)) * 100) + '%';
    }
    window.hkcTimelineUpdate = update;
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
})();
