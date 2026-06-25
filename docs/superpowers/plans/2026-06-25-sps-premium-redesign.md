# SPS Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the SPS website into a premium industrial field-services experience while preserving existing routes, content, real photography, and React/Vite/Tailwind architecture.

**Architecture:** Keep the current page/component structure and improve the design system from the bottom up. First update global tokens and shared primitives, then upgrade page sections, then verify behavior and responsive rendering in browser.

**Tech Stack:** React 19, Vite, Tailwind CSS 3, React Router, Motion/Framer Motion, Phosphor icons.

## Global Constraints

- Preserve the current React/Vite/Tailwind stack, routing, Spanish content, service taxonomy, real field photography, and brand identity.
- Do not change route slugs or primary navigation labels.
- Do not rewrite the brand/logo.
- Do not add backend form submission.
- Do not replace all photos or invent fake external imagery.
- Use SPS blue as primary action and SPS red as operational alert/accent.
- Use one cool steel neutral family.
- Avoid generic purple/blue AI glow and sudden theme changes.
- Use transform/opacity only for motion and respect reduced motion.
- Replace `transition-all` with explicit properties.
- Add skip link to main content.
- Use `min-h-[100dvh]` instead of `min-h-screen` for hero/full-height layouts.
- Keep keyboard navigation and focus rings visible.

---

## File Structure

- Modify `index.html`: update font loading and metadata only if needed.
- Modify `tailwind.config.js`: update font stack, transition/easing/radius/shadow tokens.
- Modify `src/index.css`: global base styles, buttons, focus/skip link, utility classes, image/frame primitives.
- Modify `src/components/Layout.jsx`: add skip link and main landmark id.
- Modify `src/components/Header.jsx`: premium floating/field nav, accessible mobile menu, explicit transitions.
- Modify `src/components/Footer.jsx`: align footer with the field-dossier visual system.
- Modify `src/components/PageHero.jsx`: shared internal page hero redesign.
- Modify `src/components/FieldImage.jsx`: stable image rendering, alt defaults, aspect support.
- Modify `src/pages/Home.jsx`: highest-impact redesign using current content and images.
- Modify `src/pages/Nosotros.jsx`: align company story, principles, capability grid, mission/vision.
- Modify `src/pages/Servicios.jsx`: improve service group scan order, anchors, image/list rhythm.
- Modify `src/pages/Proyectos.jsx`: improve filtering panel, evidence cards, gallery rhythm.
- Modify `src/pages/Contacto.jsx`: improve form accessibility, input tokens, validation states.

---

### Task 1: Global Design System Foundation

**Files:**
- Modify: `index.html`
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Modify: `src/components/Layout.jsx`

**Interfaces:**
- Produces: reusable CSS classes `.skip-link`, `.btn`, `.btn-primary`, `.btn-red`, `.btn-secondary`, `.surface-panel`, `.media-frame`, `.section-shell`, `.field-line`, `.mono-label`, `.h-display`, `.h-section`.
- Consumes: existing Tailwind tokens `brand`, `ink`, `steel`.

- [ ] **Step 1: Update font loading**

In `index.html`, replace the Google Fonts URL so the project no longer loads Inter as the body default and includes Barlow Condensed plus Montserrat:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: Update Tailwind font and motion tokens**

In `tailwind.config.js`, set:

```js
fontFamily: {
  display: ['"Barlow Condensed"', 'Montserrat', 'system-ui', 'sans-serif'],
  body: ['Montserrat', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
},
transitionTimingFunction: {
  field: 'cubic-bezier(0.16, 1, 0.3, 1)',
},
borderRadius: {
  none: '0',
  sm: '0.375rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  full: '9999px',
},
```

Keep the existing color tokens, shadows, keyframes, and animations unless a class needs an explicit addition.

- [ ] **Step 3: Refine global CSS**

In `src/index.css`:

```css
body {
  @apply font-body text-steel-600 antialiased bg-steel-50;
  margin: 0;
  overflow-x: hidden;
  font-feature-settings: 'cv05', 'ss01';
}

.skip-link {
  @apply fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink-950 shadow-lift transition-transform duration-200 ease-field focus:translate-y-0;
}

.btn {
  @apply inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition-[transform,box-shadow,background-color,border-color,color,gap] duration-300 ease-field active:scale-[0.97] select-none;
}

.btn-primary {
  @apply btn bg-brand-blue text-white shadow-lift-blue hover:-translate-y-0.5 hover:bg-brand-blueLight;
}

.btn-red {
  @apply btn bg-brand-red text-white shadow-[0_18px_50px_-18px_rgba(197,25,45,0.48)] hover:-translate-y-0.5 hover:bg-brand-redLight;
}

.btn-secondary {
  @apply btn border border-steel-300 bg-white text-ink-900 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue;
}

.surface-panel {
  @apply border border-steel-200 bg-white shadow-[0_24px_70px_-48px_rgba(11,20,38,.45)];
}

.section-shell {
  @apply mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8;
}

.media-frame {
  @apply overflow-hidden rounded-2xl bg-ink-950 ring-1 ring-black/10;
}

.field-line {
  @apply relative before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-brand-red before:via-brand-blue before:to-transparent;
}
```

Also replace any custom CSS `transition: ... ease ...` where practical with the field cubic-bezier, and keep `prefers-reduced-motion`.

- [ ] **Step 4: Add skip link and main id**

In `src/components/Layout.jsx`, render:

```jsx
<a href="#main-content" className="skip-link">
  Saltar al contenido
</a>
```

Set:

```jsx
<main id="main-content" className="flex-1">
```

- [ ] **Step 5: Run build**

Run:

```bash
npm run build
```

Expected: Vite build succeeds.

---

### Task 2: Shared Navigation, Hero, Image, and Footer Components

**Files:**
- Modify: `src/components/Header.jsx`
- Modify: `src/components/PageHero.jsx`
- Modify: `src/components/FieldImage.jsx`
- Modify: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: CSS classes from Task 1.
- Produces: consistent header, page hero, footer, and stable image primitive for all pages.

- [ ] **Step 1: Upgrade `FieldImage` with stable sizing props**

Modify `FieldImage` to accept `alt`, `width`, `height`, `sizes`, `decoding`, and `fetchPriority`:

```jsx
export default function FieldImage({
  src,
  mobileSrc,
  alt = '',
  className = '',
  pictureClassName = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  width,
  height,
  sizes,
}) {
  return (
    <picture className={pictureClassName}>
      {mobileSrc && <source media="(max-width: 640px)" srcSet={mobileSrc} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={`${className} max-sm:object-cover`}
        loading={loading}
      />
    </picture>
  )
}
```

- [ ] **Step 2: Redesign shared `PageHero`**

Keep props unchanged. Use `min-h-[72dvh]`, stronger image overlay, `section-shell`, and a bottom-left field-dossier composition. Ensure the H1 remains readable on mobile with `clamp()`.

- [ ] **Step 3: Redesign `Header`**

Keep the same `navLinks`. Change the header to a detached floating shell:

- fixed top with transparent wrapper
- inner nav as rounded full/2xl white panel with quiet border
- logo left, nav center/right, CTA right
- mobile button remains a real `<button>`
- mobile menu uses explicit opacity/transform transitions
- no `transition-all`
- close menu when a nav link is clicked

- [ ] **Step 4: Redesign `Footer`**

Keep all links and contact data. Improve with:

- navy field-dossier background
- logo + concise copy
- service links and page links in grouped columns
- contact block with clear phone links
- visible top accent line using existing brand colors

- [ ] **Step 5: Run build**

Run:

```bash
npm run build
```

Expected: Vite build succeeds.

---

### Task 3: Home Page Premium Redesign

**Files:**
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `FieldImage`, `clients`, `featuredServices`, `media`, `projectCases`, `serviceGroups`, CSS classes from Task 1.
- Produces: redesigned `/` route.

- [ ] **Step 1: Redesign hero**

Preserve the current hero image and CTA targets:

```jsx
const heroImage = '/assets/sps-field/hero-home-field.jpg'
```

Use:

- `min-h-[100dvh]`, not `min-h-screen`
- real photo full-bleed inside a controlled frame
- large `SPS` display type
- concise supporting text
- primary CTA to `/servicios`
- secondary CTA to `/proyectos`

- [ ] **Step 2: Upgrade trust rail**

Keep `clients`. Render a restrained proof rail under hero using a border-y layout and compact mono labels.

- [ ] **Step 3: Upgrade company intro**

Replace the centered rounded card with an editorial two-column or asymmetrical block:

- left: short text and headline
- right: image crop or operational statement panel
- keep existing copy meaning

- [ ] **Step 4: Upgrade services section**

Use a varied grid:

- one large image-led service proof panel
- three service cards with icons/photos
- one CTA link to `/servicios`
- preserve current service copy

- [ ] **Step 5: Upgrade service groups**

Use three image-led panels for `serviceGroups`. Avoid identical flat cards by varying image crop and content placement.

- [ ] **Step 6: Upgrade project evidence**

Use `mainCases` in a field-dossier section. Show each case with image, category, title, and location. Keep link to `/proyectos`.

- [ ] **Step 7: Upgrade final CTA**

Use decisive copy and a single clear CTA to `/contacto`.

- [ ] **Step 8: Run build**

Run:

```bash
npm run build
```

Expected: Vite build succeeds.

---

### Task 4: Internal Content Pages

**Files:**
- Modify: `src/pages/Nosotros.jsx`
- Modify: `src/pages/Servicios.jsx`
- Modify: `src/pages/Proyectos.jsx`

**Interfaces:**
- Consumes: shared `PageHero`, `FieldImage`, `Reveal`, `Stagger`, data from `spsContent.js`.
- Produces: consistent internal routes `/nosotros`, `/servicios`, `/proyectos`.

- [ ] **Step 1: Upgrade Nosotros**

Keep sections and copy. Improve:

- image/text balance in the first content block
- principles as operational rows or panels with stronger hierarchy
- capability icons as cleaner industrial tiles
- mission/vision with consistent radius and border rules
- CTA using `.btn-primary`

- [ ] **Step 2: Upgrade Servicios**

Keep service anchors `#vapor`, `#manejo`, `#automatizacion`.

Improve:

- anchor pills in hero with `.btn-ghost-light` or equivalent accessible styling
- service group layout with stronger image framing
- service list scan order using check rows or grouped columns
- featured services cards with consistent media frames
- final CTA with `.btn-primary`

- [ ] **Step 3: Upgrade Proyectos**

Keep filter state and categories. Improve:

- sticky filter panel visual hierarchy
- selected/unselected button states
- featured before/after case layout
- secondary project card rhythm
- gallery image sizing and captions

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: Vite build succeeds.

---

### Task 5: Contact Page Accessibility and Polish

**Files:**
- Modify: `src/pages/Contacto.jsx`

**Interfaces:**
- Consumes: shared input class approach from `src/index.css` or local class strings.
- Produces: accessible contact form with visible validation and submitted state.

- [ ] **Step 1: Add input attributes**

Use:

```jsx
<Field label="Nombre" name="name" autoComplete="name" ... />
<Field label="Empresa" name="company" autoComplete="organization" ... />
<Field label="Telefono" name="phone" type="tel" inputMode="tel" autoComplete="tel" ... />
<Field label="Correo" name="email" type="email" inputMode="email" autoComplete="email" ... />
```

Update `Field` signature to accept and pass through `autoComplete` and `inputMode`.

- [ ] **Step 2: Link validation text to inputs**

For each field with an error, set `aria-invalid`, `aria-describedby`, and an error id:

```jsx
const errorId = error ? `${name}-error` : undefined
<input aria-invalid={error ? 'true' : undefined} aria-describedby={errorId} ... />
{error && <ErrorText id={errorId}>{error}</ErrorText>}
```

Update `ErrorText` to accept `id`.

- [ ] **Step 3: Improve visual layout**

Keep current form state logic. Upgrade:

- contact cards with consistent surface panels
- form panel with field-dossier styling
- inputs with strong contrast and focus ring
- submitted state with direct copy and phone follow-up

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: Vite build succeeds.

---

### Task 6: Final Audit, Browser Verification, and Cleanup

**Files:**
- Review all modified files.
- Modify only files with issues found during verification.

**Interfaces:**
- Consumes: completed Tasks 1-5.
- Produces: verified redesign.

- [ ] **Step 1: Run lint**

Run:

```bash
npm run lint
```

Expected: pass or document exact existing warnings/errors if the project has pre-existing lint limitations.

- [ ] **Step 2: Run production build**

Run:

```bash
npm run build
```

Expected: Vite build succeeds.

- [ ] **Step 3: Start dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite prints a localhost URL.

- [ ] **Step 4: Verify pages in browser**

Open:

```text
/
/nosotros
/servicios
/proyectos
/contacto
```

Check:

- desktop width around 1440px
- mobile width around 390px
- no text overlap
- no broken images
- CTA contrast is readable
- mobile menu opens/closes
- project filters update visible cards
- contact validation shows errors
- submitted contact state renders
- skip link appears on keyboard focus

- [ ] **Step 5: Final code scan**

Run:

```bash
rg "transition-all|min-h-screen|outline-none|Inter|TODO|TBD" src index.html tailwind.config.js
```

Expected:

- no `transition-all`
- no `min-h-screen`
- no `outline-none` without replacement
- no Inter as loaded/body font
- no TODO/TBD placeholders

- [ ] **Step 6: Commit implementation**

Run:

```bash
git status --short
git add index.html tailwind.config.js src docs/superpowers/plans/2026-06-25-sps-premium-redesign.md
git commit -m "style: upgrade sps website design system"
```

Expected: commit succeeds after verification.

---

## Self-Review

Spec coverage:
- Global visual tokens: Task 1.
- Shared components: Task 2.
- Home redesign: Task 3.
- Internal page consistency: Task 4.
- Contact accessibility and polish: Task 5.
- Build/lint/browser verification: Task 6.

Placeholder scan:
- No TODO, TBD, placeholder, or unspecified implementation steps remain.

Type and interface consistency:
- `FieldImage` prop additions are backward compatible.
- `PageHero` props remain unchanged.
- `Field` in `Contacto.jsx` gains passthrough props without changing calling semantics.
- Existing data imports and route targets remain unchanged.
