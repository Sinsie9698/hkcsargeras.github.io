// Immersive background: cycles Midnight loading screens with slow crossfades,
// a gentle Ken Burns drift, light parallax and drifting arcane motes.
(function () {
    const IMAGES = ['altar-of-fangs.webp','arcantina.webp','blinding-vale.webp','den-of-nalorakk.webp','dreamrift.webp','harandar.webp','magisters-terrace-midnight.webp','maisara-caverns.webp','march-on-queldanas.webp','murder-row.webp','naigtal.webp','newquelthalas.webp','nexus-point-xenas.webp','quelthalas.webp','sporefall.webp','tidebound-grotto.webp','venomous-abyss.webp','voidscar-arena.webp','voidspire.webp','voidstorm.webp','windrunner-spire.webp'].map(f => 'images/backgrounds/' + f);
    const HOLD = 14000;          // time each scene stays up (ms)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const stage = document.createElement('div');
    stage.className = 'bg-stage';
    stage.setAttribute('aria-hidden', 'true');
    stage.innerHTML = '<div class="bg-parallax"><div class="bg-layer"></div><div class="bg-layer"></div></div>' +
        '<div class="bg-shade"></div><canvas class="bg-motes"></canvas>';
    document.body.prepend(stage);
    document.documentElement.classList.add('has-bg-stage');

    const layers = [...stage.querySelectorAll('.bg-layer')];
    const store = {
        get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
        set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { } }
    };

    // Shuffle once per visit so every page continues the same sequence.
    let order = null;
    try { order = JSON.parse(store.get('hkcBgOrder')); } catch (e) { }
    if (!Array.isArray(order) || order.length !== IMAGES.length) {
        order = IMAGES.map((_, i) => i);
        for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
        store.set('hkcBgOrder', JSON.stringify(order));
    }
    let pos = (parseInt(store.get('hkcBgPos'), 10) || 0) % order.length;
    let front = 0;
    let kb = 0;

    function src(p) { return IMAGES[order[p % order.length]]; }
    function preload(url) { return new Promise(res => { const im = new Image(); im.onload = im.onerror = () => res(); im.src = url; }); }

    function paint(layer, url) {
        layer.style.backgroundImage = 'url("' + url + '")';
        layer.classList.remove('kb-0', 'kb-1', 'kb-2', 'kb-3');
        void layer.offsetWidth;               // restart the drift animation
        if (!reduce) layer.classList.add('kb-' + (kb++ % 4));
    }

    paint(layers[0], src(pos));
    layers[0].classList.add('on', 'instant');
    requestAnimationFrame(() => layers[0].classList.remove('instant'));

    if (IMAGES.length > 1) {
        let timer;
        const next = async () => {
            const p = pos + 1;
            await preload(src(p));
            const back = 1 - front;
            paint(layers[back], src(p));
            layers[back].classList.add('on');
            layers[front].classList.remove('on');
            front = back; pos = p % order.length;
            store.set('hkcBgPos', String(pos));
            timer = setTimeout(next, HOLD);
        };
        timer = setTimeout(next, HOLD);
        preload(src(pos + 1));
        document.addEventListener('visibilitychange', () => {
            clearTimeout(timer);
            if (!document.hidden) timer = setTimeout(next, HOLD);
        });

        // Light parallax: follows the pointer on desktop, the scroll everywhere.
        if (!reduce) setupParallax();
    }

    function setupParallax() {
        const par = stage.querySelector('.bg-parallax');
        let mx = 0, my = 0, tx = 0, ty = 0, raf = 0;
        const fine = window.matchMedia('(pointer: fine)').matches;
        if (fine) window.addEventListener('pointermove', e => {
            mx = (e.clientX / window.innerWidth - 0.5) * -18;
            my = (e.clientY / window.innerHeight - 0.5) * -12;
            if (!raf) raf = requestAnimationFrame(move);
        }, { passive: true });
        window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(move); }, { passive: true });
        function move() {
            raf = 0;
            tx += (mx - tx) * 0.12; ty += (my - ty) * 0.12;
            const sy = Math.min(window.scrollY * 0.03, 40);
            par.style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + (ty - sy).toFixed(1) + 'px,0)';
            if (Math.abs(mx - tx) > 0.2 || Math.abs(my - ty) > 0.2) raf = requestAnimationFrame(move);
        }
    }

    // Drifting arcane motes.
    const canvas = stage.querySelector('.bg-motes');
    if (reduce || !canvas.getContext) { canvas.remove(); return; }
    const ctx = canvas.getContext('2d');
    const COLORS = ['212,175,55', '186,140,255', '120,170,255'];
    let W = 0, H = 0, dpr = 1, motes = [];
    function size() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W * dpr; canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.round(Math.min(46, W * H / 32000));
        while (motes.length < count) motes.push(mote(true));
        motes.length = count;
    }
    function mote(anywhere) {
        return {
            x: Math.random() * W, y: anywhere ? Math.random() * H : H + 10,
            r: 0.6 + Math.random() * 1.8, vy: 0.12 + Math.random() * 0.35,
            sway: Math.random() * Math.PI * 2, swaySpeed: 0.004 + Math.random() * 0.01,
            a: 0.25 + Math.random() * 0.5, c: COLORS[Math.floor(Math.random() * COLORS.length)]
        };
    }
    let last = 0;
    function frame(t) {
        if (!document.hidden) {
            if (t - last > 30) {
                last = t;
                ctx.clearRect(0, 0, W, H);
                for (const m of motes) {
                    m.y -= m.vy; m.sway += m.swaySpeed;
                    const x = m.x + Math.sin(m.sway) * 14;
                    if (m.y < -10) Object.assign(m, mote(false));
                    const fade = Math.min(1, m.y / (H * 0.25));
                    const g = ctx.createRadialGradient(x, m.y, 0, x, m.y, m.r * 5);
                    g.addColorStop(0, 'rgba(' + m.c + ',' + (m.a * fade) + ')');
                    g.addColorStop(1, 'rgba(' + m.c + ',0)');
                    ctx.fillStyle = g;
                    ctx.beginPath(); ctx.arc(x, m.y, m.r * 5, 0, Math.PI * 2); ctx.fill();
                }
            }
        }
        requestAnimationFrame(frame);
    }
    size();
    window.addEventListener('resize', size);
    requestAnimationFrame(frame);
})();
