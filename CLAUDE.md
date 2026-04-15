# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

RAI 2025 — Relatório Anual de Informações da Previdência BRB. A React + Vite SPA presenting annual performance data, institutional content, and pension plan details for BRB's retirement fund.

## Commands

```bash
npm run dev       # start local dev server
npm run build     # production build
npm run preview   # serve production build locally
npm run lint      # ESLint validation
```

No test suite is configured.

## Architecture

### Stack
- React 19 + Vite 6
- React Router v7 (all routes in `src/route/route.jsx`)
- Bootstrap 5 + React Bootstrap for layout
- GSAP for animations, Swiper for carousels, Chart.js + react-chartjs-2 for data visualization
- Framer Motion for transitions

### Key directories

| Path | Purpose |
|------|---------|
| `src/route/route.jsx` | Central route table — all pages registered here |
| `src/pages/` | One folder per section: `home/`, `planos/`, `destaques/`, `rentabilidade/`, `governanca/`, `mensagem/`, `perfil/` |
| `src/layout/` | Shared headers (`header.jsx`, `header2.jsx`) and footers |
| `src/constant/alldata.jsx` | All static content and navigation menus (`menudata2` is the active BRB nav) |
| `src/constant/theme.jsx` | Centralized image/asset imports exposed as `IMAGES` and `SVGICONS` |
| `src/assets/css/` | CSS files — `style.css` (template base), `design-system-colors.css` (BRB tokens) |
| `docs/design-system/` | Design system reference and token documentation |

### Active home
`"/"` renders `Index2` (`src/pages/home/index-2.jsx`). The `index.jsx` and `index-3.jsx` files are template leftovers.

### Adding a new page
1. Create the component under the appropriate `src/pages/<section>/` folder.
2. Import it and add a route object to the `rootdata` array in `src/route/route.jsx`.
3. Add the nav link to `menudata2` in `src/constant/alldata.jsx` if it should appear in the BRB navigation.

### Asset management
All image imports are centralized in `src/constant/theme.jsx`. Import assets via the `IMAGES` object from there rather than importing directly in page components.

## Design System

Reference: `DESIGN.md` and `docs/design-system/ADINA_DESIGN_SYSTEM.md`.

**Core palette:**
- Deep Navy `#0a1f3c` — primary structural base for hero sections
- Institutional Blue `#004282` — secondary brand depth
- BRB Blue `#0074c8` — primary action color
- Accent Cyan `#00aeef` — highlights, key values, hover states
- Surface `#ffffff` / Soft Surface `#f5f9ff`

**Typography:** Manrope (UI default), Poppins (display), DM Serif Display + DM Sans (institutional editorial pieces).

**Rules:**
- Use CSS custom properties / semantic tokens from `design-system-colors.css` — not raw hex values in components.
- Accent cyan communicates action or highlighted outcomes only — not for full text blocks.
- Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 80px.
- Card corners: ~14–18px border-radius. Prefer translucent overlays in dark hero sections.
- The contrast triad for BRB institutional sections: Deep Navy + White + Accent Cyan.

## Notes

- `src/componenet/` (typo preserved from original template) contains the `Scroll` utility component used in the router.
- Template-era pages (`/about`, `/portfolio`, `/services`, `/blog`, etc.) remain in the codebase but are not part of the BRB RAI content.
- `vercel.json` is present — the app deploys to Vercel.
