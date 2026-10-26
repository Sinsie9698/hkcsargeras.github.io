// Shared site header and footer.
// Edit the lists below to change the menu, quick links, social links or legal links on every page.
(function () {
    // Anonymous, cookie-free visit counting (dashboard: https://hkcsargeras.goatcounter.com)
    const gc = document.createElement('script');
    gc.async = true;
    gc.src = 'https://gc.zgo.at/count.js';
    gc.setAttribute('data-goatcounter', 'https://hkcsargeras.goatcounter.com/count');
    document.head.appendChild(gc);

    const NAV = [
        ['index.html', 'Home'],
        ['history.html', 'History'],
        ['progression.html', 'Progression'],
        ['members.html', 'Members'],
        ['gallery.html', 'Gallery'],
        ['policies.html', 'Policies'],
        ['coming-soon.html', 'Guild Tools']
    ];
    const STORE = 'https://arma.gg/collections/hello-kitty-club';
    const APPLY = 'https://docs.google.com/forms/d/e/1FAIpQLSeGvWhN58axBGpihLhEaJ8JaHqRQLBWti2DVzmFm7hB1NTozg/viewform';
    const QUICK = [
        ['https://www.warcraftlogs.com/guild/id/71495', 'images/ranks/warcraftlogs.png', 'Warcraft Logs'],
        ['https://raider.io/guilds/us/sargeras/Hello%20Kitty%20Club', 'images/ranks/raiderio.png', 'Raider IO'],
        ['https://guildsofwow.com/hellokittyclub', 'images/ranks/guildsofwow.png', 'Guilds of WoW'],
        ['https://www.wowprogress.com/guild/us/sargeras/Hello+Kitty+Club', 'images/ranks/wowprogress.png', 'WoW Progress']
    ];
    const SOCIAL = [
        ['https://twitter.com/HKCSargeras', 'x', 'Twitter/X'],
        ['https://bsky.app/profile/hkcsargeras.bsky.social', 'bluesky', 'BlueSky'],
        ['https://www.instagram.com/hkcsargeras/', 'instagram', 'Instagram'],
        ['https://www.threads.net/@hkcsargeras', 'threads', 'Threads'],
        ['https://www.twitch.tv/hkcsargeras', 'twitch', 'Twitch'],
        ['https://www.youtube.com/@hellokittyclub', 'youtube', 'YouTube']
    ];
    const LEGAL = [
        ['terms.html', 'Terms &amp; Conditions'],
        ['privacy.html', 'Privacy Policy'],
        ['cookies.html', 'Cookie Policy'],
        ['store-policy.html', 'Store Policy'],
        ['accessibility.html', 'Accessibility'],
        ['ai-usage.html', 'AI Usage']
    ];
    const CREDITS = 'Art designed by <a href="https://lilena.carrd.co/" target="_blank">LilenaTalem</a> & <a href="https://vgen.co/boredoreo" target="_blank">Salmon</a>.';
    const COPYRIGHT = '2006-2026 by HKC Sargeras. All rights reserved.';

    const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    function header() {
        return '<nav class="navbar"><div class="nav-container">' +
            '<div class="brand"><a href="index.html" class="logo-section" title="Home">' +
            '<img src="images/XalatathKitty.jpg" alt="HKC Logo" class="nav-logo">' +
            '<div class="logo-text"><div class="guild-name">Hello Kitty Club <span class="guild-region">US</span></div></div></a>' +
            '<nav class="quick-links" aria-label="Rankings and tools">' +
            QUICK.map(q => '<a href="' + q[0] + '" target="_blank" rel="noopener" aria-label="' + q[2] + '" data-tip="' + q[2] + '"><img src="' + q[1] + '" alt=""></a>').join('') +
            '</nav></div>' +
            '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span></button>' +
            '<ul class="nav-menu" id="site-menu">' +
            NAV.map(n => '<li><a href="' + n[0] + '"' + (n[0] === page ? ' class="active"' : '') + '>' + n[1] + '</a></li>').join('') +
            '<li><a href="' + STORE + '" target="_blank" class="nav-store"><img src="images/StoreLogo.jpg" alt="Store">Store</a></li>' +
            '<li><a href="' + APPLY + '" target="_blank" class="nav-apply">Apply Now</a></li>' +
            '</ul></div></nav>';
    }

    function footer(variant) {
        const legal = '<nav class="footer-legal" aria-label="Policies">' + LEGAL.map(l => '<a href="' + l[0] + '">' + l[1] + '</a>').join(' · ') + '</nav>';
        if (variant === 'home') {
            return '<footer class="footer"><div class="container"><div class="footer-bottom"><div class="social-icons">' +
                SOCIAL.map(s => '<a href="' + s[0] + '" target="_blank" class="social-icon" title="' + s[2] + '"><img src="images/social/' + s[1] + '.svg" alt="' + s[2] + '"></a>').join('') +
                '</div><p>&copy; ' + COPYRIGHT + '</p><p>' + CREDITS + '</p></div></div>' + legal + '</footer>';
        }
        return '<footer class="footer"><div class="social-icons">' +
            SOCIAL.map(s => '<a href="' + s[0] + '" target="_blank" title="' + s[2] + '"><img src="images/social/' + s[1] + '.svg" alt="' + s[2] + '" class="social-icon"></a>').join('') +
            '</div><div class="footer-bottom">© ' + COPYRIGHT + '<br>' + CREDITS + '</div>' + legal + '</footer>';
    }

    // The header placeholder sits just above this script, so it is filled before the page draws.
    const h = document.getElementById('site-header');
    if (h) h.outerHTML = header();

    function fillFooter() {
        const f = document.getElementById('site-footer');
        if (f) f.outerHTML = footer(f.dataset.variant);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fillFooter); else fillFooter();

    // Phone/tablet menu: the button opens and closes the main menu.
    const nav = document.querySelector('.navbar');
    const btn = document.querySelector('.nav-toggle');
    if (!nav || !btn) return;
    function set(open) {
        nav.classList.toggle('nav-open', open);
        btn.setAttribute('aria-expanded', open);
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('nav-lock', open);
    }
    btn.addEventListener('click', () => set(!nav.classList.contains('nav-open')));
    nav.querySelectorAll('.nav-menu a').forEach(a => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
    window.matchMedia('(min-width: 1181px)').addEventListener('change', e => { if (e.matches) set(false); });
})();
