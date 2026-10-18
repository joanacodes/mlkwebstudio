# Blog covers

Every article has a 1600×900 cover in each of its languages, with its title on it:

- `static/images/blog/<key>.jpg`: English (or the only language, for a French-only article)
- `static/images/blog/fr/<key>.jpg`: French

The key is the article's file name and `translationKey`. The site shows the cover in the page's language (`layouts/partials/blog/cover.html`, and `layouts/partials/head.html` for the social image) and falls back to `static/images/blog/<key>.jpg`.

A cover is an HTML composition rendered by Chromium: one of the studio's photos, a reeded-glass panel that refracts it, a motif drawn in the brand colours, the article's title in Instrument Sans with a short orange label above it, and the MLK / Web Studio mark.

The title comes from the article's front matter: `cover_title` if there is one (to shorten a very long H1 on the image), otherwise `title`. When a title changes, render its cover again.

To add or change a cover:

1. Add or edit the article's entry in `covers.json`: `key`, `category`, `label` (the short label above the title, 22 characters at most), `motif` (see `render.js`). Optional: `label_fr` (the French label, when it differs from the English one), `photo` (a file name from `photos/`, without `.jpg`). With the `terminal` motif, `code` sets the lines shown in the window, so the snippet matches the article: a list of `[prefix, colour, text, colour]`, colours `OR`, `STEEL`, `ICE` or `BLUE2`.
2. Run `node tools/covers/render.js <key>` (or without a key to render them all). It writes one cover for each language the article exists in.

The photo, the panel width and the motif details are chosen from the key, so a cover always renders the same way.
