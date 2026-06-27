---
name: Tim Lok Portfolio
description: Warm, crafted builder's portfolio with clay/sienna accent on a light supportive ground.
colors:
  sienna-clay: "oklch(0.50 0.13 36)"
  dark-rust: "oklch(0.41 0.13 36)"
  warm-stone: "oklch(0.97 0.004 50)"
  bare-white: "oklch(1 0 0)"
  deep-charcoal: "oklch(0.14 0.015 50)"
  faded-ink: "oklch(0.42 0.018 50)"
  pencil-rule: "oklch(0.875 0.012 50)"
  terracotta-tint: "#FDF1EC"
  terracotta-light: "#F7DDD1"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, Cascadia Code, Fira Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  full: "9999px"
  xl: "0.75rem"
  lg: "0.625rem"
  sm: "0.25rem"
spacing:
  section: "4rem"
  card: "1.5rem"
  gap: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.sienna-clay}"
    textColor: "{colors.bare-white}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.dark-rust}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.faded-ink}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.25rem"
  card:
    backgroundColor: "{colors.bare-white}"
    textColor: "{colors.deep-charcoal}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  card-featured:
    backgroundColor: "{colors.terracotta-tint}"
    textColor: "{colors.deep-charcoal}"
    rounded: "{rounded.xl}"
    padding: "1.75rem"
  chip-active:
    backgroundColor: "{colors.sienna-clay}"
    textColor: "{colors.bare-white}"
    rounded: "{rounded.full}"
    padding: "0.5rem 0.75rem"
  chip-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.faded-ink}"
    rounded: "{rounded.full}"
    padding: "0.5rem 0.75rem"
---

# Design System: Tim Lok Portfolio

## 1. Overview

**Creative North Star: "The Builder's Notebook"**

This is a light, warm workspace where evidence surfaces with human warmth. Think a well-used notebook on a workbench — clay and terracotta accents on a clean, off-white ground, the craft of someone who builds things for real. The atmosphere is calm authority, not hype. The background supports the work; the work carries the weight.

The clay accent is the primary signal frequency. It appears where interaction lives — CTAs, active filter states, featured card borders, stat values — and it is never decorative. A subtle terracotta atmospheric gradient at the viewport corners gives spatial warmth without competing with content. The system is light-native: not a dark-mode toggle, not "light because safe." Light because a hiring manager reading project evidence should feel they are looking at a real person's real work, not a SaaS pitch deck.

The typographic voice is Bricolage Grotesque — a humanist-influenced variable grotesque whose name literally means "assemblage, DIY work" in French. It carries warmth and mechanical precision simultaneously. System monospace handles all metadata labels: a craft signal without an extra font load.

**Key Characteristics:**
- Light-native (warm light IS the identity — not a toggle, not a default)
- Single-accent system: Sienna Clay for interaction, Terracotta Tint for featured surface
- Atmospheric depth via fixed viewport clay wash at 5–7% opacity — background warmth, not decoration
- Bricolage Grotesque for display and body; system mono for metadata only
- Flat-by-default surfaces; hover state is border color shift, never elevation
- Framer Motion entrances on load and filter — always with `prefers-reduced-motion` fallbacks

## 2. Colors: The Workbench Palette

Two surfaces and one accent. The warmth is in the clay, not the background.

### Primary
- **Sienna Clay** (`oklch(0.50 0.13 36)` / `#A0522D`): The brand accent. Primary CTAs, active filter chips, hover borders, focus rings, lightning bolt blink in hero. 5.6:1 contrast on white. Never used decoratively on static elements.
- **Dark Rust** (`oklch(0.41 0.13 36)` / `#8B3D1F`): Hover state of primary button; the exclusive color for stat values in the hero stat block. 7.5:1 contrast on white — maximum legibility for numeric data.

### Secondary
- **Terracotta Tint** (`#FDF1EC`): Featured card background. The lightest clay — warmth without cream. Used exclusively on `highlight: true` project cards.
- **Terracotta Light** (`#F7DDD1`): Featured badge background, tag borders. A visible step deeper than Terracotta Tint.

### Neutral
- **Warm Stone** (`oklch(0.97 0.004 50)`): Page background. Near-white with C=0.004 — warm-gray, not cream. The ground stays nearly achromatic; warmth is delivered by the accent.
- **Bare White** (`oklch(1 0 0)`): Card and modal surface. Pure white cards on Warm Stone create the notebook-page feeling.
- **Deep Charcoal** (`oklch(0.14 0.015 50)`): Primary text. Slightly warm near-black.
- **Faded Ink** (`oklch(0.42 0.018 50)`): Muted foreground — secondary text, label color. 5.5:1 on Warm Stone; WCAG AA compliant. Token: `--muted-foreground`.
- **Pencil Rule** (`oklch(0.875 0.012 50)`): All borders and dividers. Visible but not structural. Token: `--border`.

### Named Rules
**The Clay Lock Rule.** Sienna Clay is reserved for interactive surfaces. The one readout exception is the stat block: Dark Rust (clay-600) at full opacity for data values only. If clay appears on a static, non-interactive element, it's drift — use Terracotta Tint instead.

**The Background Restraint Rule.** Body background chroma stays ≤ 0.006. Above that it reads as cream — the 2026 AI-default trap. Warmth is delivered by the clay accent and the atmospheric gradient, never by tinting the ground.

## 3. Typography

**Display/Body Font:** Bricolage Grotesque (variable, weights 300–700), system-ui fallback  
**Label/Mono Font:** `ui-monospace, Cascadia Code, Fira Mono, monospace` — system stack, zero load cost

**Character:** Bricolage Grotesque is a variable grotesque with humanist warmth in the letterforms and mechanical precision in the structure. Its name is an intentional match for a builder's portfolio. A single family across display and body creates coherence; the 300–700 weight range provides all hierarchy contrast without a second typeface. System mono handles metadata exclusively — a craft signal in the right register.

### Hierarchy
- **Display** (700 weight, `clamp(3rem, 7vw, 4.5rem)`, leading 1.05, tracking -0.025em): Hero `h1` only. One per page. `text-wrap: balance`.
- **Headline** (500 weight, 1.25rem / 20px, leading 1.3, tracking -0.01em): Section `h2` headings. Intentionally quiet — the projects are the headline.
- **Title** (500 weight, 0.875rem / 14px, leading 1.3): Card titles, component headings.
- **Body** (400 weight, 1rem / 16px, leading 1.6): Prose text. `max-width: 65ch`. `text-wrap: pretty` on long passages.
- **Body Secondary** (400 weight, 0.875rem / 14px, leading 1.6): Card descriptions, supporting copy. Color: `faded-ink` or `text-foreground/70` minimum.
- **Label** (system mono, 0.75rem / 12px, tracking 0.08em, uppercase): Location, stat captions, filter text, tech stack categories. Never prose. Never stacked — one label per visual cluster.

### Named Rules
**The Mono Discipline Rule.** System mono is a craft signal, not a shorthand for "secondary text." It appears only on metadata. All other subdued text uses Bricolage Grotesque in a lighter weight or lower opacity (minimum `text-foreground/70` for WCAG AA compliance).

**The One H1 Rule.** One display-size heading per page. Section `h2` headings are small by design (1.25rem) — they orient, not shout.

## 4. Elevation

Flat by default with tonal lift and selective clay glow. No ambient box-shadows on cards or containers.

Depth is conveyed through three mechanisms:
1. **Tonal surface steps**: Warm Stone ground (L 0.97) → Bare White card (L 1.0) creates a subtle lift without any shadow.
2. **Atmospheric gradient**: Fixed `body::before` radial gradient — Sienna Clay at 7% opacity in the top-left corner, 5% in the bottom-right — spatial warmth without scrolling or component decoration.
3. **Clay glow on interaction**: Primary button only. `box-shadow: 0 1px 8px rgba(160,82,45,0.30)` at rest → `0 2px 14px rgba(160,82,45,0.45)` on hover. Interaction feedback only; never static.

### Shadow Vocabulary
- **Primary button glow** (`0 1px 8px rgba(160,82,45,0.30)` rest → `0 2px 14px rgba(160,82,45,0.45)` hover): The only shadow in the system. Confirms the primary action. Used exclusively on `button-primary`.

### Named Rules
**The Flat-By-Default Rule.** Cards are flat. Hover state is border color shift from Pencil Rule to `oklch(0.50 0.13 36 / 0.30)`. Elevation belongs to interactive controls, not containers. A glowing card that doesn't do anything communicates false affordance.

## 5. Components

### Buttons
Fully rounded pills. Primary carries a clay glow. Ghost is clean — hover fills with Terracotta Tint.
- **Shape:** Fully rounded (`9999px`)
- **Primary** (`bg-clay-500` / `#A0522D`, white text, `px-5 py-2.5`): Main CTA. Clay glow at rest, deeper on hover. Hover: `bg-clay-600`. Transition: 200ms.
- **Ghost** (transparent, `border: 1px solid oklch(0.50 0.13 36 / 0.25)`, `text-foreground/65`): Secondary actions. Hover: `bg-clay-50`, `border-clay-500/45`, text forward. No glow.

### Filter Chips
Category pills above the project grid. Four macro-categories.
- **Active:** `bg-clay-500`, white text, `border-clay-500`, `rounded-full`
- **Inactive:** transparent, `text-foreground/55`, `border: pencil-rule`, hover: `border-clay-500/30`, `text-foreground/80`
- **Typography:** System mono, 0.75rem — no uppercase (category names are not metadata labels)
- **Mobile:** Horizontal scroll (`overflow-x: auto, flex-nowrap`); wraps on desktop

### Cards
Flat, white containers. Featured variant surfaces on Terracotta Tint.
- **Corner Style:** Gently rounded (0.75rem / 12px)
- **Regular:** `bg-card` (white), `border: pencil-rule`, hover: `border-clay-500/30`, p-6
- **Featured:** `bg-clay-50` (#FDF1EC), `border-clay-500/35`, hover: `border-clay-500/55`, p-7, `md:col-span-2`
- **Transition:** border-color 200ms ease. No shadow, no elevation.

### Tags (inline)
Metadata chips in card footers. Display-only, never interactive.
- **Style:** `bg-clay-50`, `border: 1px solid clay-100`, rounded (4px), `px-2 py-1`, system mono 0.75rem, `faded-ink`

### Navigation
Sticky top bar. `bg-background/80 backdrop-blur-md`, `border-b border-border`, `max-w-5xl`, `h-14`.
- **Active route:** `text-foreground`, `aria-current="page"`. Anchor links (`/#section`) excluded from active detection.
- **Default/Hover:** `text-foreground/45` → `text-foreground`, 200ms
- **Mobile:** Menu/X hamburger; `bg-background/95 backdrop-blur-md` drawer

### Stat Block (Hero)
Three-stat credential grid below hero copy. Signature moment — appears once.
- **Value:** Bricolage Grotesque 500 weight, 1.5rem, `text-clay-600` (Dark Rust, 7.5:1 contrast)
- **Label:** System mono, 0.75rem, uppercase, tracking-wide, `faded-ink`
- **Layout:** `grid-cols-2 sm:grid-cols-3` — wraps gracefully on mobile

## 6. Do's and Don'ts

### Do:
- **Do** use Sienna Clay (`oklch(0.50 0.13 36)`) as the only interactive signal: primary CTAs, active states, hover borders, focus rings.
- **Do** use Dark Rust (clay-600, `#8B3D1F`) exclusively for the hero stat values. It is the data-readout color; its rarity is the point.
- **Do** use system mono exclusively for metadata (location, stat captions, filter labels, tag text, tech stack identifiers). Use Bricolage Grotesque for all other secondary text.
- **Do** keep the atmospheric `body::before` gradient fixed and unscrolled. It is background radiation, not a hero graphic.
- **Do** use design tokens (`border-border`, `bg-card`, `text-muted-foreground`) for all borders and backgrounds — never hardcode `border-white/10` or `bg-white/5`, which are invisible on the light theme.
- **Do** pair every Framer Motion animation with `prefers-reduced-motion` respect.
- **Do** use `text-wrap: balance` on `h1`–`h3` and `text-wrap: pretty` on long prose blocks.
- **Do** maintain body text at minimum `text-foreground/70` or `text-muted-foreground` opacity for WCAG AA compliance on the light background.

### Don't:
- **Don't** make this look like a dark developer SaaS portfolio: no black backgrounds, no indigo glows, no gradient hero text, no identical icon+heading+text card grids. The anti-reference is every dark portfolio that looks like the last one.
- **Don't** use `border-white/10`, `bg-white/5`, or any white opacity hack. These are invisible on the light background. Use `border-border` and `bg-muted` tokens.
- **Don't** add warm tint to the background beyond `oklch(0.97 0.004 50)`. The warm-neutral band (L 0.84–0.97, C > 0.006) reads as cream/sand/paper — the 2026 AI-default trap.
- **Don't** use gradient text (`background-clip: text`). Solid `text-clay-500` is the pattern.
- **Don't** use `border-left` or `border-right` > 1px as a colored stripe accent on cards or list items. Full borders, background tints, or nothing.
- **Don't** add eyebrow labels (`text-xs font-mono uppercase tracking-widest`) above every section heading. One location callout in the hero is the system's only standalone eyebrow. Section headings stand alone.
- **Don't** use glassmorphism except on the navigation bar (where it is functional backdrop blur).
- **Don't** replicate the stat block pattern on other sections. Three Dark Rust numbers is a signature moment; repeating it makes it a template.
- **Don't** use Space Grotesk, DM Sans, or DM Mono. These are retired. The system is Bricolage Grotesque + system mono only.
- **Don't** display performative energy, buzzwords, or over-designed showpieces. The brand is calm authority — direct sentences, the work as evidence, no shouting.
