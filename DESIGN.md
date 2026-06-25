---
name: Tim Lok Portfolio
description: Dark-native technical portfolio for a builder who ships AI-powered products fast.
colors:
  void: "oklch(0.11 0.03 262)"
  surface: "oklch(0.15 0.022 262)"
  surface-raised: "oklch(0.18 0.020 262)"
  border-dim: "oklch(0.24 0.018 262)"
  indigo: "oklch(0.62 0.19 271)"
  indigo-deep: "oklch(0.45 0.18 271)"
  indigo-dim: "oklch(0.18 0.035 271)"
  amber-readout: "#e4a95c"
  ink: "oklch(0.93 0.008 260)"
  ink-secondary: "oklch(0.52 0.014 260)"
  atmosphere-top: "oklch(0.40 0.18 271 / 0.35)"
  atmosphere-bottom: "oklch(0.35 0.15 290 / 0.18)"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-secondary:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
  print-body:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "10.5pt"
    lineHeight: 1.5
  print-mono:
    fontFamily: "Courier New, Courier, monospace"
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
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.25rem"
  button-primary-hover:
    backgroundColor: "oklch(0.70 0.19 271)"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1.25rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  card-featured:
    backgroundColor: "{colors.indigo-dim}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  chip-active:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.625rem 0.75rem"
  chip-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.full}"
    padding: "0.625rem 0.75rem"
---

# Design System: Tim Lok Portfolio

## 1. Overview

**Creative North Star: "The Signal Room"**

This is a dark ambient environment where information surfaces with purpose. Think precision instruments in low light — amber readouts, indigo channel locks, near-silence punctuated by the things that matter. The atmospheric gradients are fixed to the viewport like background radiation; they don't move, don't scroll, don't demand attention. They exist to give the darkness depth.

The indigo is the primary signal frequency. It's committed — it carries the identity across CTAs, active states, and key accents — but it is never decorative. It appears where interaction lives: buttons that glow on hover, active filter states, the selection highlight on card borders. The amber exists for exactly one purpose: numeric stats. Two colors, two jobs, zero crossover.

The typographic voice is DM Sans for reading, Space Grotesk for impact, DM Mono for metadata. Mono labels are used sparingly for category markers and stat captions — the tell that someone who codes built this. The language throughout is direct, no hedging, no hype: "These are the things I've shipped."

**Key Characteristics:**
- Dark-native (not dark-mode toggle — dark is the default and the identity)
- Two-accent system: indigo for interaction, amber for data readouts only
- Atmospheric depth via fixed viewport gradient, not component-level decoration
- Monospaced metadata as a craft signal, not a trend
- Framer Motion entrances: fade-up on load, scale+opacity on card filter — always paired with `prefers-reduced-motion` fallbacks
- Information density is medium: generous padding inside cards, tight gaps between elements

## 2. Colors: The Signal Palette

Two accent frequencies on a near-black void. Every color has exactly one job.

### Primary
- **Signal Indigo** (`oklch(0.62 0.19 271)`): The brand color. Used on primary CTA buttons, active filter chips, featured card tints, hover states, focus rings, and selection. The glow shadows (`0 0 18px rgba(99,102,241,0.45)`) are the interaction feedback — reserved for buttons and hover targets. Never used decoratively.
- **Deep Indigo** (`oklch(0.45 0.18 271)`): Pressed/active state of primary. Not used independently.
- **Dim Indigo** (`oklch(0.18 0.035 271)`): The featured card background tint. Visible only when the card carries `highlight: true`.

### Secondary
- **Amber Readout** (`#e4a95c`): Used on exactly one thing — the stat numbers in the Hero section. Not a link color, not a label color, not a hover color. Its rarity is the point. If it appears anywhere else, it loses its meaning.

### Neutral
- **Void** (`oklch(0.11 0.03 262)`): Page background. Slightly blue-tinted, not warm, not cool. The baseline.
- **Card Surface** (`oklch(0.15 0.022 262)`): Base layer for cards and containers.
- **Elevated Surface** (`oklch(0.18 0.020 262)`): Muted, popover, and raised panel backgrounds.
- **Dim Border** (`oklch(0.24 0.018 262)`): Subtle separator between surfaces. Never used to define shape — only to hint at it.
- **Ink** (`oklch(0.93 0.008 260)`): Primary text. Slightly blue-shifted white — not a harsh `#fff`.
- **Ink Secondary** (`oklch(0.52 0.014 260)`): Body copy, card descriptions, secondary labels.

### Named Rules
**The Amber Lock Rule.** Amber (`#e4a95c`) is reserved for the Hero stats only. If you're about to use it for a new label, badge, or callout, use indigo or a neutral instead. The amber earns its warmth by appearing exactly once.

**The One Glow Rule.** Glow shadows (`box-shadow: 0 0 X rgba(99,102,241,Y)`) appear only on interactive elements at rest or hover. Never on static decorative elements.

## 3. Typography

**Display Font:** Space Grotesk (weights 400, 500) with system-ui fallback
**Body Font:** DM Sans (weights 300, 400, 500) with system-ui fallback
**Label/Mono Font:** DM Mono (weights 400, 500) with monospace fallback

**Character:** Space Grotesk carries confidence — slightly technical, slightly editorial, nothing generic. DM Sans is the quiet workhorse for reading. DM Mono signals the builder: these are the labels that someone who reads stack traces would write.

### Hierarchy
- **Display** (500 weight, `clamp(2.25rem, 6vw, 3.75rem)`, leading 1.05, tracking -0.02em): Hero `h1` only. One per page. Use `text-wrap: balance` to prevent single-word orphans.
- **Headline** (500 weight, 1.25rem / 20px, leading 1.3, tracking -0.01em): Section headings (`h2`). Low-key — not a showpiece, a way-finder.
- **Title** (500 weight, 0.875rem / 14px): Card titles and component headings. Small but weighted.
- **Body** (400 weight, 1rem / 16px, leading 1.6): About section prose. Cap at 65ch for comfortable reading. Color at `ink-secondary` opacity for secondary content.
- **Body Secondary** (400 weight, 0.875rem / 14px, leading 1.6): Card descriptions, supporting text. `ink-secondary` color by default.
- **Label** (DM Mono, 400 weight, 0.75rem / 12px, tracking 0.08em, uppercase): Location callouts, stat captions, filter count. Never used for prose. Never used more than once per visual cluster.

### Named Rules
**The Mono Discipline Rule.** DM Mono is a craft signal, not a shorthand for "secondary text." It appears only on metadata (location, tag counts, stat labels, filter chip text). Use DM Sans for all other secondary or subdued text.

**The One H1 Rule.** One display-size heading per page. Section headings (`h2`) are intentionally small (1.25rem) to keep the page from shouting.

## 4. Elevation

This system is flat by default with a tonal depth hierarchy and selective glow. No ambient box-shadows on cards or containers — surfaces are distinguished by background lightness steps (`void → surface → surface-raised`), not shadow.

Depth is conveyed through three mechanisms:
1. **Tonal layering**: background steps from `oklch(0.11)` → `oklch(0.15)` → `oklch(0.18)` create implicit hierarchy.
2. **Atmospheric gradient**: a fixed `body::before` radial gradient (indigo 0.40L at top-left, violet at bottom-right) gives the page spatial depth without any component-level decoration.
3. **Glow on interaction**: buttons and interactive elements carry `box-shadow` glows that intensify on hover — the glow is feedback, not decoration.

### Shadow Vocabulary
- **Primary button glow** (`0 0 18px rgba(99,102,241,0.45)` at rest → `0 0 28px rgba(99,102,241,0.7)` on hover): Communicates that this is the primary action. Used only on `button-primary`.
- **Ghost button glow** (`0 0 10px rgba(129,140,248,0.12)` at rest → `0 0 18px rgba(129,140,248,0.3)` on hover): Subtle interaction feedback on secondary actions.

### Named Rules
**The Flat-By-Default Rule.** Cards are flat. They gain no shadow on hover. Their hover state is a border color shift (`border-indigo-500/30`) — not elevation. Elevation belongs to interactive controls, not containers.

## 5. Components

### Buttons
Fully rounded pills. Primary buttons carry an indigo glow that intensifies on hover. Secondary buttons are ghost — transparent with a dim indigo border that brightens on interaction.
- **Shape:** Fully rounded (`border-radius: 9999px`)
- **Primary** (`bg-indigo-500`, white text, `px-5 py-2.5`): The main CTA. Carries ambient glow at rest, stronger glow on hover. Transition: 200ms `shadow`.
- **Ghost** (`bg-transparent`, `border: 1px solid oklch(0.62 0.19 271 / 0.20)`, `text: ink-secondary`): All secondary actions. On hover: `bg-white/5`, brighter border, brighter text, glow shadow. Transition: 200ms `all`.

### Filter Chips
Tag-shaped pills for the project filter bar. The active chip uses the full indigo primary. Inactive chips are ghost with mono text.
- **Active:** `bg-indigo-500`, white text, `border-indigo-500`, rounded-full
- **Inactive:** transparent, `text: ink-secondary`, `border: border-dim`, hover lifts border and text brightness
- **Typography:** DM Mono, 12px, no uppercase (labels only — don't add tracking here)
- **Layout:** horizontal scroll on mobile (`overflow-x: auto`, `flex-nowrap`), wraps on desktop

### Cards
Flat, rounded containers for project entries. No shadow. Hover state is border color only.
- **Corner Style:** Gently rounded (`border-radius: 0.75rem` / 12px)
- **Background:** Card Surface (`oklch(0.15 0.022 262)`)
- **Border:** Dim Border (`oklch(0.24 0.018 262)`) at rest → `oklch(0.62 0.19 271 / 0.30)` on hover
- **Featured variant:** background shifts to Dim Indigo (`oklch(0.18 0.035 271)`) and the full indigo border — no side stripe
- **Internal Padding:** `1.5rem` (24px) on all sides
- **Transition:** border-color 200ms ease

### Tags (inline)
Tiny rounded labels inside card footers. Not interactive for sorting — they activate the filter when clicked.
- **Style:** `bg-white/[0.04]`, `border: border-dim`, rounded (`4px`), `px-2 py-1`
- **Text:** DM Mono, 12px, `ink-secondary` opacity
- **Hover:** text shifts to indigo, border brightens to `indigo-500/30`

### Navigation
(See `/app/components/nav.tsx` for current implementation)
- Sticky top bar, max-w-5xl centered
- Anchor links with active state detection
- Mobile: collapses to hamburger or stacked menu

### Stat Block (Hero)
The four-stat grid below the hero copy. This is a deliberate pattern — not a template to clone.
- **Value:** Space Grotesk, 500 weight, 1.5rem (24px), Amber Readout color
- **Label:** DM Mono, 12px, uppercase, tracking-wide, `ink` at /40 opacity
- **Layout:** 2 columns mobile → 4 columns desktop, separated by a top border
- **Rule:** This block exists once. The amber readout color appears here only.

## 6. Do's and Don'ts

### Do:
- **Do** use indigo (`oklch(0.62 0.19 271)`) as the primary interactive signal — on buttons, active states, hover borders, and focus rings.
- **Do** use DM Mono exclusively for metadata: location, counts, stat captions, filter labels. Switch to DM Sans for any other secondary or subdued text.
- **Do** keep the atmospheric gradient on `body::before` fixed and unscrolled. It is background radiation, not a hero graphic.
- **Do** use tonal surface steps to create depth: void → surface → surface-raised. This is the elevation system; shadows are for interaction feedback only.
- **Do** pair every framer-motion animation with `@media (prefers-reduced-motion: reduce)` — either via Framer's `useReducedMotion` or a CSS fallback.
- **Do** use `text-wrap: balance` on display headings to prevent orphaned words at any viewport width.
- **Do** reserve the amber readout (`#e4a95c`) for the Hero stat values and nothing else.

### Don't:
- **Don't** use gradient text (`background-clip: text; -webkit-background-clip: text; color: transparent`). The hero currently has this on "— fast." — it is flagged for removal. Use solid indigo or ink instead. Gradient text is never intentional; it is always decoration.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, list items, or sidebar labels. The About section's `border-l-2 border-indigo-500/50` on background/links/location labels and the featured card's `border-l-[3px] border-l-indigo-500` are both flagged patterns. Featured cards use a full indigo border, not a stripe. Sidebar labels get no border at all — use spacing or a different visual treatment.
- **Don't** use glassmorphism (`backdrop-filter: blur(...)` with semi-transparent backgrounds) unless it is purposeful and rare. It is not part of this system.
- **Don't** replicate the Hero stat block pattern elsewhere. Four amber numbers in a row is a deliberate signature moment — repeating it anywhere else (another section, a case study, a CV page) makes it a template, not a signature.
- **Don't** use eyebrow labels (`text-xs font-mono uppercase tracking-widest`) above every section heading. The hero has one location callout; that is the only standalone eyebrow on the page. Section headers stand alone.
- **Don't** make this look like a generic dark SaaS portfolio: no saturated gradient hero backgrounds, no floating glass cards, no identical icon+heading+text card grids. The anti-reference is every dark developer portfolio that looks like the last one.
- **Don't** apply glow shadows to static or decorative elements. Glows are interaction feedback (buttons at rest and hover). A glowing card that doesn't do anything communicates false affordance.
- **Don't** add amber as a hover or interactive color. It exists for data readouts. Using it as a link hover color or badge color destroys the Amber Lock Rule.
