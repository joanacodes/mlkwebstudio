# Blog covers

Every article has a 1600×900 cover in `static/images/blog/<key>.jpg` (the key is the article's file name and `translationKey`). The same cover serves both languages, so its label stays language-neutral (product names, acronyms, "A vs B").

A cover is an HTML composition rendered by Chromium: one of the studio's photos, a reeded-glass panel that refracts it, a motif drawn in the brand colours, the label in Instrument Sans, and the MLK / Web Studio mark.

To add or change a cover:

1. Add or edit the article's entry in `covers.json`: `key`, `category`, `label` (22 characters at most), `motif` (see `render.js`). Optional: `photo` (a file name from `photos/`, without `.jpg`). With the `terminal` motif, `code` sets the lines shown in the window, so the snippet matches the article: a list of `[prefix, colour, text, colour]`, colours `OR`, `STEEL`, `ICE` or `BLUE2`.
2. Run `node tools/covers/render.js <key>` (or without a key to render them all).

The photo, the panel width and the motif details are chosen from the key, so a cover always renders the same way.
