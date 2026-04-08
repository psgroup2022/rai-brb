# Design System: RAI 2025 Previdencia BRB
**Project ID:** local/rai_brb

## 1. Visual Theme & Atmosphere
The interface balances institutional trust with modern editorial energy. The baseline mood is clear, high-contrast, and data-forward: deep navy foundations, clean white surfaces, and cyan highlights for momentum and action. Components avoid ornamental excess and prioritize clarity, hierarchy, and legibility.

The visual tone can be described as:
- Institutional and credible
- Analytical and infographic-friendly
- Modern, with controlled glass and blur layers
- Strong hierarchy with spacious reading rhythm

## 2. Color Palette & Roles
- Deep Institutional Navy (#0a1f3c): Primary structural base for hero overlays, inverse surfaces, and high-authority sections.
- Strategic Dark Blue (#004282): Secondary brand depth for layered gradients and dark interactive contexts.
- Primary BRB Blue (#0074c8): Main action and emphasis color for controls and active UI moments.
- Accent Cyan (#00aeef): Highlight color for key values, hover states, and attention hotspots.
- Soft Surface Blue (#f5f9ff): Light background for cards and calm content zones.
- Muted Surface Mist (#eef6fb): Secondary surface used for soft tonal transitions.
- Neutral White (#ffffff): Primary content canvas and contrast counterweight.
- Standard Border Gray (#e6e6e6): Default outline for cards, controls, and separators.
- Strong Border Gray (#cbd5e1): Higher-contrast border variant for interactive boundaries.
- Body Text Muted (#475569): Default long-form reading color on light backgrounds.
- Secondary Text Subtle (#64748b): Supporting metadata and low-emphasis annotations.

## 3. Typography Rules
Primary families observed in the implementation and token sources:
- UI Sans Core: Manrope / Sora usage in key sections
- Display support: Poppins
- Institutional optional pair for authored pieces: DM Serif Display + DM Sans

Hierarchy behavior:
- H1: high-impact display scale (hero-grade, uppercase or assertive sentence case)
- H2/H3: strong sectional hierarchy with tight line-height
- Body text: 16px baseline with relaxed line-height for readability in dense institutional copy
- Numeric highlights: heavy weight, large scale, short line-height for infographic emphasis

Practical rules:
- Keep heading contrast near maximum on dark sections
- Use accent cyan only for semantic highlights, not full text blocks
- Preserve line length control for long editorial paragraphs

## 4. Component Stylings
* **Buttons:** Rounded to pill/soft geometry; primary actions use BRB blue or cyan-accent variants; hover motion is short and functional.
* **Cards/Containers:** Rounded medium-large corners (about 14-18px), subtle to medium elevation, often with translucent overlays in dark sections.
* **Inputs/Forms:** Clean bordered controls with neutral outlines and strong focus clarity; compact variants for header utilities.
* **Navigation/Header:** Glass-like overlay on hero contexts, with sticky-state transition to brighter, high-legibility background treatment.
* **Metric/KPI Cards:** Large animated numeric values, short explanatory label, and compact detail line; value-first hierarchy.

## 5. Layout Principles
- Use predictable spacing scale (4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 80).
- Prioritize readability before density, especially in long presentation text.
- Keep strong section separation between narrative blocks and data blocks.
- In responsive collapse, stack complexity rather than shrinking type too early.
- Use deep-brand backgrounds for high-importance folds and light surfaces for explanatory content.

## Operational Notes
- New UI work should consume semantic tokens first, not raw hex values.
- Accent cyan should communicate action, growth, or highlighted outcomes.
- For BRB institutional sections, preserve the contrast triad: Deep Navy + White + Accent Cyan.
