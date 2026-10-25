// Gallery: Images / Videos tabs.
(function () {
    const tabs = [...document.querySelectorAll('.gallery-tabs [data-tab]')];
    function open(name, push) {
        tabs.forEach(t => {
            const on = t.dataset.tab === name;
            t.classList.toggle('active', on);
            t.setAttribute('aria-selected', on);
            document.getElementById('panel-' + t.dataset.tab).hidden = !on;
        });
        if (name === 'videos') document.querySelectorAll('#panel-videos iframe[data-src]').forEach(f => { f.src = f.dataset.src; f.removeAttribute('data-src'); });
        if (push) history.replaceState(null, '', name === 'videos' ? '#videos' : location.pathname);
        document.querySelectorAll('.page-timeline .tl-era[data-tab]').forEach(li => { li.hidden = li.dataset.tab !== name; });
        if (window.hkcTimelineUpdate) window.hkcTimelineUpdate();
    }
    window.hkcGalleryOpen = open;
    tabs.forEach(t => t.addEventListener('click', () => open(t.dataset.tab, true)));
    open(location.hash === '#videos' ? 'videos' : 'images');
})();
