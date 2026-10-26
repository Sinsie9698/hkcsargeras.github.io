# Hello Kitty Club — Sargeras US

Website for the Hello Kitty Club World of Warcraft guild, hosted on GitHub Pages.

## Pages

- `index.html` — Home
- `history.html` — Guild history and HKC @ Blizzcon
- `progression.html` — Raid progression, ranks and raid history
- `members.html` — Leadership and raiders
- `gallery.html` — Images and videos
- `policies.html` — Guidelines, Policies & Procedures
- `coming-soon.html` — Placeholder for HKC Guild Tools
- `404.html` — Page shown for broken links
- `terms.html`, `privacy.html`, `cookies.html`, `store-policy.html`, `accessibility.html`, `ai-usage.html` (AI Usage) — Legal pages

## Shared files

- `styles.css` — All site styling
- `js/layout.js` — The menu bar, quick links and footer for every page (edit the lists at the top to change links everywhere)
- `js/bg-slideshow.js` — Cycling Midnight loading-screen backgrounds
- `js/lightbox.js` — Photo viewer
- `js/page-timeline.js` — Sticky sidebar timeline (Progression, Gallery)
- `js/progression.js` — Builds the Progression page from `data/progression.js`
- `js/home.js`, `js/history.js`, `js/members.js`, `js/gallery.js` — Page-specific behaviour
- `js/recruitment.js` — Builds the home page recruitment box from `data/recruitment.js`
- `sitemap.xml`, `robots.txt` — For search engines
- `images/` — All site images

## Updating raid progression

All boss kills, pulls and ranks live in `data/progression.js`. Home page recruitment lives in `data/recruitment.js`. Edit the numbers there (instructions are at the top of the file) and the Progression page updates itself.

## Updating the site

Edit the files, then from this folder run:

```
git add -A
git commit -m "Describe the change"
git push
```

GitHub Pages republishes automatically about a minute after each push.
