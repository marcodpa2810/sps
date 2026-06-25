# SPS Premium Redesign Design

## Summary

Upgrade the existing SPS website into a premium industrial field-services experience while preserving the current React/Vite/Tailwind stack, routing, Spanish content, service taxonomy, real field photography, and brand identity.

The redesign should feel like an engineered petroleum operations site: technical, grounded, confident, and visually memorable. It should avoid generic SaaS patterns and keep the company's real field work as the main visual proof.

## Current Context

- Stack: React 19, Vite, Tailwind CSS 3, React Router, Motion/Framer Motion, Phosphor icons.
- Pages: Home, Nosotros, Servicios, Proyectos, Contacto.
- Existing strengths: real SPS photography, clear service groups, strong blue/red brand colors, useful project evidence, form validation basics.
- Existing weaknesses: Inter/default-feeling body typography, mixed radius rules, repeated card structures, some `transition-all`, `min-h-screen`, image CLS risk from missing dimensions, no skip link, mobile navigation can feel ordinary, and visual rhythm is not yet fully premium.

## Design Read

This is a redesign of an industrial/petroleum services website for technical buyers and operations teams. The visual language should be premium field-engineering: dark navy, steel surfaces, real equipment photography, calibrated red/blue accents, technical but not fake-dashboard-heavy.

Target dials:
- Design variance: 7. Stronger than a corporate template, not chaotic.
- Motion intensity: 5. Smooth, purposeful reveals and tactile controls.
- Visual density: 4. Enough operational detail, but spacious and inspectable.

## Domain Exploration

Domain concepts:
- Steam lines, boilers, frac tanks, wells, pits, pumps, control panels, telemetry.
- Field evidence, before/after records, mobilization, safety, uptime, response time.
- Industrial documents, inspection marks, equipment tags, route sheets, work orders.

Color world:
- SPS blue and red as brand signals.
- Engineered navy and off-black for heavy industrial authority.
- Cool steel, galvanized metal, concrete, vapor white, warning red.
- Field-photo tones: dust, tank metal, crude-dark surfaces, sky glare.

Signature:
- A "field dossier" system: sections feel like operational evidence panels, using real photos, clipped image corners, technical rhythm lines, tabular facts, and strong type rather than decorative badges.

Defaults to reject:
- Generic centered SaaS hero -> use cinematic field image with bottom/left operational command composition.
- Three equal feature cards everywhere -> use mixed editorial grids, image-led panels, and field dossier blocks.
- Inter + gray cards -> use characterful sans typography, steel/navy tokens, and fewer stronger surfaces.

## Scope

Included:
- Redesign global visual tokens and base styles.
- Improve header, mobile menu, footer, PageHero, FieldImage, and shared button/card language.
- Upgrade Home as the strongest first impression.
- Bring internal pages into the same system without changing their information architecture.
- Improve Contact form accessibility and polish.
- Add a skip link and better focus/interaction states.
- Run build/lint where available and visually verify desktop/mobile.

Not included:
- Changing route slugs or primary navigation labels.
- Rewriting the brand/logo.
- Adding backend form submission.
- Replacing all photos or inventing fake external imagery.
- Major SEO migration or new pages.

## Visual System

Typography:
- Replace Inter as body default with a more characterful sans already loadable in the project, preferably Montserrat or a better installed/web-loaded alternative.
- Keep Barlow Condensed or a similarly compressed display voice for large SPS/industrial headings.
- Use weight, color, and spacing for hierarchy. Apply tabular numbers where numbers appear.

Color:
- Keep one brand accent pair: SPS blue as primary action and SPS red as operational alert/accent.
- Use one cool steel neutral family.
- Avoid generic purple/blue AI glow and avoid sudden theme changes.

Surfaces:
- Use navy/steel layers with quiet borders, not heavy shadows.
- Cards should exist only where grouping or evidence matters.
- Prefer image-led layouts and open whitespace over nested cards.

Shape:
- Establish one radius system: small controls, medium image/cards, larger hero frames.
- Avoid mixing square CTAs with full-pill CTAs without rule.

Motion:
- Use transform/opacity only.
- Respect reduced motion.
- Replace `transition-all` with explicit properties.
- Use subtle staggered reveal and tactile active states.

## Page-Level Direction

Home:
- Make the hero the main brand moment: real field photography, compressed SPS display type, clear service promise, and two clean CTAs.
- Turn client names/trust into a restrained proof rail.
- Rework services into a more varied field-dossier grid with stronger image roles.
- Make project evidence feel like documented operational proof.
- End with a decisive CTA.

Nosotros:
- Keep company story and principles.
- Improve image/text balance and capability cards.
- Make mission/vision feel less generic and more operational.

Servicios:
- Preserve the three service groups and anchors.
- Improve service group sections with cleaner lists, better image framing, and better scan order.
- Avoid overly repetitive rounded cards for every list item where plain grouping works better.

Proyectos:
- Keep filters and before/after evidence.
- Improve filter panel, featured case, project cards, and gallery rhythm.
- Ensure stateful filter controls remain accessible buttons.

Contacto:
- Improve form layout, input tokens, validation clarity, autocomplete/type attributes, and submitted state.
- Keep the form local-only as currently implemented.

## Accessibility & Web Guidelines

Apply these checks:
- Add skip link to main content.
- Ensure icon-only buttons have labels.
- Ensure images have meaningful alt text where content-bearing and decorative alt where not.
- Add explicit image dimensions or stable aspect-ratio wrappers to reduce CLS.
- Use `min-h-[100dvh]` instead of `min-h-screen` for hero/full-height layouts.
- Avoid `outline-none` without replacement.
- Add autocomplete/type/inputmode for contact form fields.
- Keep keyboard navigation and focus rings visible.

## Verification Plan

- Run `npm run build`.
- Run `npm run lint` if practical; document any pre-existing or remaining lint limitations.
- Start the local dev server.
- Verify `/`, `/nosotros`, `/servicios`, `/proyectos`, and `/contacto` at desktop and mobile widths.
- Check for text overlap, broken images, unreadable CTAs, mobile menu behavior, form validation, and filter behavior.

## Acceptance Criteria

- The site feels visibly more premium and specific to SPS field operations.
- Existing routes and core content still work.
- The design is consistent across pages.
- Mobile layout is clean and usable.
- CTAs and navigation are accessible and readable.
- Build completes successfully.
