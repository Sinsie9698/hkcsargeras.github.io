// Photo lightbox: opens linked images in a centered window over a dimmed page.
(function () {
    const IMG_RE = /\.(jpe?g|png|gif|webp)$/i;
    let group = [];
    let index = 0;

    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML =
        '<figure class="lb-figure"><div class="lb-frame"><img class="lb-img" alt="">' +
        '<button class="lb-close" aria-label="Close">&times;</button></div>' +
        '<figcaption class="lb-caption"></figcaption></figure>';
    document.body.appendChild(box);

    const img = box.querySelector('.lb-img');
    const caption = box.querySelector('.lb-caption');

    function show(i) {
        index = (i + group.length) % group.length;
        const item = group[index];
        img.classList.remove('loaded');
        img.onload = () => img.classList.add('loaded');
        img.src = item.src;
        img.alt = item.alt;
        caption.textContent = item.alt && !IMG_RE.test(item.alt) ? item.alt : '';
    }

    function open(items, i) {
        group = items;
        show(i);
        box.classList.add('open');
        document.body.classList.add('lb-lock');
    }

    function close() {
        box.classList.remove('open');
        document.body.classList.remove('lb-lock');
        img.src = '';
    }

    function collect(container, selector, toItem) {
        return [...container.querySelectorAll(selector)].map(toItem);
    }

    document.addEventListener('click', (e) => {
        // Linked photos (galleries, story rows, intro)
        const a = e.target.closest('a[href]');
        if (a && IMG_RE.test(a.getAttribute('href')) && !box.contains(a)) {
            e.preventDefault();
            open([{ src: a.getAttribute('href'), alt: (a.querySelector('img') || {}).alt || '' }], 0);
            return;
        }
        // Members page: big image in a thumbnail gallery
        const main = e.target.closest('.thumb-main');
        if (main) {
            open([{ src: main.getAttribute('src'), alt: main.alt }], 0);
        }
    });

    box.addEventListener('click', (e) => {
        if (e.target === box || e.target.classList.contains('lb-close')) close();
    });

    document.addEventListener('keydown', (e) => {
        if (!box.classList.contains('open')) return;
        if (e.key === 'Escape') close();
    });
})();
