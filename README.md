# hcpunify.org-webpage

hcpunify — minimal responsive site

This repository contains a small, minimal, responsive website with a fixed header. The site is English-only for now.

Files added/changed:
- `index.html` — landing page with fixed header, clickable logo and clean content area
- `docs.html` — documentation page (English)
- `styles.css` — minimal modern responsive styles
- `script.js` — small helper script (sets footer year)

How to view locally:
- Open `index.html` in your browser (double-click the file), or serve the folder with a static server (recommended for some browsers):

# Example using Python 3 (PowerShell)
# cd to the repo folder then run:
# python -m http.server 8000
# Open http://localhost:8000 in your browser

Notes:
- The site is currently English-only.
- The design is intentionally minimal; feel free to change variables in `styles.css` to adjust colors, spacing and typography.

Next steps you might want:
- Add metadata (meta description, Open Graph tags).
- Use a static site generator if you plan many pages.
- Add CI to publish to GitHub Pages automatically.