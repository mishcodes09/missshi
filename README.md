# mishsspace — Hero Page

A Next.js (App Router) + plain CSS starter replicating your portfolio hero section: navbar + hero with circular photo, heading, subtitle, and three pill buttons (Resume / Projects / Contact).

## Getting started in VS Code

1. Unzip this folder and open it in VS Code.
2. Open a terminal in VS Code (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

## Replace the placeholder photo

`public/profile.jpg` is a plain gray placeholder. Drop your own photo in at
`public/profile.jpg` (same filename) to swap it in — the circle crop and
grayscale filter are already applied via CSS in `app/globals.css`
(`.hero__image`), so any photo you add will automatically match the look.

## Project structure

```
mishsspace-hero/
├── app/
│   ├── layout.js      # root layout + metadata
│   ├── page.js         # Navbar + Hero components
│   └── globals.css     # all styling (plain CSS, no framework)
├── public/
│   └── profile.jpg     # placeholder — replace with your photo
├── next.config.js
└── package.json
```

## Notes

- Nav links (`Resume`, `Projects`, `Skills`, `About`, `Contact`) currently point to `#anchors` on the same page — wire them up to real routes/sections as you build those out.
- Colors used: orange `#f5a623`, red `#f24b3f`, cyan `#7fe0e6`, near-black text `#14161c` — tweak these in `globals.css` to match your brand exactly.
- Fully responsive down to mobile widths.
