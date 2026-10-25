// Members page: leadership carousel, sidebar timeline and role counts.
document.querySelectorAll('.leader-carousel').forEach(c => {
    const imgs = c.dataset.images.split(',');
    const main = c.querySelector('.lc-img');
    const count = c.querySelector('.lc-count');
    const thumbs = [...c.querySelectorAll('.lc-thumb')];
    const caps = (c.dataset.captions || '').split('|').map(x => x.split('::'));
    const cap = c.querySelector('.lc-caption');
    let i = 0;
    const show = n => {
        i = (n + imgs.length) % imgs.length;
        main.src = imgs[i];
        count.textContent = (i + 1) + ' / ' + imgs.length;
        if (cap && caps[i]) { cap.querySelector('b').textContent = caps[i][0]; cap.querySelector('span').textContent = caps[i][1]; main.alt = caps[i][0] + ', ' + caps[i][1]; }
        thumbs.forEach((t, k) => t.classList.toggle('active', k === i));
    };
    c.querySelector('.lc-prev').addEventListener('click', () => show(i - 1));
    c.querySelector('.lc-next').addEventListener('click', () => show(i + 1));
    thumbs.forEach((t, k) => t.addEventListener('click', () => show(k)));
    c._show = show;
    c._index = () => i;
});

(function () {
    const secs = ['members-top', 'leadership', 'membership'].map(id => document.getElementById(id));
    const roles = ['role-tanks', 'role-healers', 'role-dps'].map(id => document.getElementById(id));
    const eras = [...document.querySelectorAll('.members-timeline .tl-era')];
    const fill = document.querySelector('.members-timeline .timeline-fill');
    const body = document.querySelector('.story-body');
    const car = document.querySelector('.leader-carousel');
    document.querySelectorAll('.members-timeline [data-leader]').forEach(a => a.addEventListener('click', () => {
        if (car && car._show) car._show(+a.dataset.leader);
        setTimeout(update, 0);
    }));
    if (car) car.addEventListener('click', () => setTimeout(update, 0));
    let ticking = false;
    function update() {
        ticking = false;
        const line = window.innerHeight * 0.35;
        let cur = 0;
        secs.forEach((el, k) => { if (el && el.getBoundingClientRect().top <= line) cur = k; });
        eras.forEach((li, k) => {
            li.classList.toggle('current', k === cur);
            li.classList.toggle('past', k < cur);
        });
        document.querySelectorAll('.members-timeline .tl-subs a.active').forEach(a => a.classList.remove('active'));
        if (cur === 1 && car && car._index) {
            const a = document.querySelector('.members-timeline [data-leader="' + car._index() + '"]');
            if (a) a.classList.add('active');
        }
        if (cur === 2) {
            let r = 0;
            roles.forEach((el, k) => { if (el && el.getBoundingClientRect().top <= line) r = k; });
            const a = document.querySelector('.members-timeline [data-target="' + roles[r].id + '"]');
            if (a) a.classList.add('active');
        }
        const b = body.getBoundingClientRect();
        fill.style.height = (Math.min(1, Math.max(0, (line - b.top) / b.height)) * 100) + '%';
    }
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
})();

// Role counts: count the raider cards under each role heading.
document.querySelectorAll('.role-heading').forEach(h => {
    let n = 0, el = h.nextElementSibling;
    while (el && !el.classList.contains('role-heading')) { if (el.classList.contains('raider-card')) n++; el = el.nextElementSibling; }
    h.insertAdjacentHTML('beforeend', ' <span class="role-count">' + n + '</span>');
    const link = document.querySelector('.members-timeline [data-target="' + h.id + '"]');
    if (link) link.insertAdjacentHTML('beforeend', ' <span class="role-count-sm">(' + n + ')</span>');
});
