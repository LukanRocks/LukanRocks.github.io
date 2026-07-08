# AGENTS.md

This repository is the personal website and blog of Lukan Vanderlinde, served at https://lukan.rocks. It is built on the `astro-narrow` theme (an Astro-native migration of `hugo-narrow`), customized for this site. Development should use Astro-native capabilities; do not add Hugo compatibility layers.

## Project Scope

- A content-focused personal site: implementation is governed by Astro 7, Content Collections, Astro routing, Astro components, and remark/rehype build-time transforms.
- Do not add Hugo shortcodes, Hugo front matter aliases, Hugo taxonomy compatibility, template syntax compatibility, or migration shims.
- Configurable behavior lives in `src/config/*` and content schemas, not inside components.

## Tech Stack

- Package manager: `pnpm` (version pinned via `packageManager` in `package.json` — required by CI)
- Node: `>=22.12.0`
- Framework: Astro 7
- Styling: Tailwind CSS 4 + `src/styles/global.css` + `src/styles/themes.css` (single minimal palette: `:root` light, `.dark` dark — there is no theme switcher)
- Icons: `astro-icon`, prefer `lucide:*`; brand icons use `simple-icons:*`
- Markdown: `@astrojs/markdown-remark` + custom remark/rehype plugins
- Code blocks: `astro-expressive-code` (`ec.config.mjs`)
- Search: client-side `fuse.js` + `src/pages/api/search.json.ts`
- Gallery: `smart-gallery`

## Common Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Deployment

- GitHub Pages **user site** deployed by `.github/workflows/deploy.yml` on every push to `main`.
- The canonical URL is hardcoded as `site: 'https://lukan.rocks'` in `astro.config.mjs`; there is no `base` path. Do not reintroduce `ASTRO_SITE`/`ASTRO_BASE` env vars.
- DNS is managed on Vercel DNS; Pages is configured with GitHub Actions as the source and HTTPS enforced.

## Directory Conventions

- `src/config/site.ts`: Site info, author info, navigation, comments, analytics, gallery, license, global UI toggles.
- `src/config/content.ts`: Content type definitions — path, label, icon, card style, list layout, homepage sections. Public URLs for a content type are driven by `path` here (e.g. the `thoughts` collection publishes under `/thoughts/`).
- `src/config/i18n.ts`: Language settings and path helpers. All internal links should use the helpers defined here.
- `src/content.config.ts`: Content Collections schema.
- `src/content/thoughts/<locale>`: Blog content ("Thoughts" / "Pensamentos").
- `src/content/projects/<locale>`: Project content.
- `src/content/pages/<locale>`: Static page content (about, timeline, resume).
- `src/content/series/<locale>`: Series descriptions.
- `src/pages`: Astro file-based routing, including default-language routes and `[locale]` localized routes.
- `src/components/layout`: Page skeleton components.
- `src/components/content`: Content list, metadata, taxonomy, breadcrumb, related-thoughts, and similar content components.
- `src/components/features`: Search, comments, analytics, TOC, and other feature components.
- `src/components/ui`: General-purpose UI components.
- `src/scripts`: Browser-side enhancement scripts.
- `src/lib/content`: Content query, sorting, RSS, and other content logic.
- `src/lib/markdown`: Markdown build-time transform plugins.

## Routing and Link Rules

- The default language is `en`, with no `/en/` prefix; the second language is `pt` (Brazilian Portuguese), with a `/pt/` prefix.
- Every English content file should have a `pt/` sibling with the same filename; the language switcher pairs them by path.
- Use `getLocalePath(locale, path)` to generate internal links; do not hard-code absolute root paths.
- Use `switchLocalePath` for language-switch paths.
- Navigation items should be resolved through `src/config/navigation.ts`; extend the route registry when adding new system routes.
- Entry URLs come from `localizedEntryPath` in `src/lib/content/entries.ts`, which reads the `path` from `contentTypes` — renaming a section's URL is a config change plus a route-directory rename.

## Content Model

- Content collections: `thoughts`, `projects`, `pages`, and `series`.
- The blog collection is named `thoughts` everywhere (collection, folders, routes, components, UI strings) — nothing should refer to "post".
- Taxonomy retains `tags` only.
- Front matter is governed by `src/content.config.ts`. New fields must have the schema updated first, then the component consumption logic.
- Drafts use the `draft` field; public listing should continue to filter out drafts.
- Multilingual content is handled via directory structure and `lang`/path conventions.

## Markdown Features

- Prefer native Markdown semantics and remark/rehype build-time transforms.
- Tabs use `remark-directive`, implemented in `src/lib/markdown/remark-tabs.mjs`.
- Alerts, heading anchors, image groups, and Mermaid are in `src/lib/markdown/rehype-*.mjs`.
- Math formulas are handled by `remark-math` + `rehype-katex`.
- Code block capabilities are delegated to Expressive Code; do not re-parse fenced code inside components.

## UI and Style Conventions

- Maintain the compact reading layout: content-first, restrained layout, moderate reading density.
- New UI should reuse existing tokens, CSS variables, and Tailwind utilities; do not introduce new heavy UI frameworks.
- Colors and design tokens go in `src/styles/themes.css`.
- Components must support light/dark mode (the `.dark` class) and avoid hard-coding colors.
- Responsive layout must cover both mobile and desktop.
- User-visible copy must be added to both `en` and `pt` in `src/i18n/ui.ts`.

## Validation Checklist

```sh
pnpm build
```

After building, check:

- Default-language paths do not include `/en/`; `pt` paths include `/pt/`.
- RSS, sitemap, and search index are still generated with `https://lukan.rocks` URLs.
- Blog URLs live under `/thoughts/`.

## Maintenance Principles

- Astro-native first.
- Config over hard-coding.
- Build-time transforms over runtime patches.
- Types and schemas over implicit conventions.
- Do not overwrite content files the user has not asked to modify.
