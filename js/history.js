// History page: sticky era timeline.
(function () {
    const subs = [...document.querySelectorAll('.era-subheading[id]')];
    const links = new Map([...document.querySelectorAll('.tl-subs a')].map(a => [a.dataset.target, a]));
    const fill = document.querySelector('.timeline-fill');
    const body = document.querySelector('.story-body');
    let ticking = false;
    function update() {
        ticking = false;
        const line = window.innerHeight * 0.35;
        let current = subs[0];
        for (const h of subs) { if (h.getBoundingClientRect().top <= line) current = h; else break; }
        const started = subs[0].getBoundingClientRect().top <= line;
        document.querySelectorAll('.tl-subs a.active').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.tl-era').forEach(li => li.classList.remove('current', 'past'));
        if (started) {
            const a = links.get(current.id);
            a.classList.add('active');
            const era = a.closest('.tl-era');
            era.classList.add('current');
            let p = era.previousElementSibling;
            while (p) { p.classList.add('past'); p = p.previousElementSibling; }
        }
        const r = body.getBoundingClientRect();
        const pct = Math.min(1, Math.max(0, (line - r.top) / r.height));
        fill.style.height = (pct * 100) + '%';
    }
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
})();
