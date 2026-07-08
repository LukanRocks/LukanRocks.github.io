# AGENTS.md

This repository is `astro-narrow`, an Astro theme migrated from `hugo-narrow`. The base migration is complete; all subsequent development should leverage Astro-native capabilities and no longer maintain backwards compatibility with Hugo Narrow.

## Project Scope

- This is a content-focused Astro theme repository, not a Hugo theme adapter.
- Hugo Narrow serves only as a visual and UX reference; implementation is governed by Astro 7, Content Collections, Astro routing, Astro components, and remark/rehype build-time transforms.
- Do not add Hugo shortcodes, Hugo front matter aliases, Hugo taxonomy compatibility, template syntax compatibility, or migration shims.
- User-configurable features should be exposed via `src/config/*` and content schemas, not by requiring users to modify internal components.

## Tech Stack

- Package manager: `pnpm`
- Node: `>=22.12.0`
- Framework: Astro 7
- Styling: Tailwind CSS 4 + `src/styles/global.css` + `src/styles/themes.css`
- Icons: `astro-icon`, prefer `lucide:*`; brand icons use `simple-icons:*`
- Markdown: `@astrojs/markdown-remark` + custom remark/rehype plugins
- Code blocks: `astro-expressive-code`
- Search: client-side `fuse.js` + `src/pages/api/search.json.ts`
- Gallery: `smart-gallery`

## Common Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

When deploying to a GitHub Pages project page, you must verify the `base`:

```sh
ASTRO_BASE=/astro-narrow/ pnpm build
```

To also verify absolute site URLs, set both:

```sh
ASTRO_SITE=https://<user>.github.io ASTRO_BASE=/astro-narrow/ pnpm build
```

## Directory Conventions

- `src/config/site.ts`: Site info, author info, navigation, comments, analytics, gallery, license, global UI toggles.
- `src/config/content.ts`: Content type definitions, including path, label, icon, card style, list layout, and homepage sections.
- `src/config/i18n.ts`: Language settings, path generation, and language-switch paths. All internal links should use the helpers defined here.
- `src/config/theme.ts`: Theme switching options.
- `src/content.config.ts`: Content Collections schema.
- `src/content/posts/<locale>`: Post content.
- `src/content/projects/<locale>`: Project content.
- `src/content/pages/<locale>`: Static page content.
- `src/pages`: Astro file-based routing, including default-language routes and `[locale]` localized routes.
- `src/components/layout`: Page skeleton components.
- `src/components/content`: Content list, metadata, taxonomy, breadcrumb, related posts, and similar content components.
- `src/components/features`: Search, comments, analytics, TOC, and other feature components.
- `src/components/ui`: General-purpose UI components.
- `src/scripts`: Browser-side enhancement scripts.
- `src/lib/content`: Content query, sorting, RSS, and other content logic.
- `src/lib/markdown`: Markdown build-time transform plugins.

## Routing and Link Rules

- The default language is `en`, with no `/en/` prefix; the example second language is `zh-cn`, with a `/zh-cn/` prefix.
- Use `getLocalePath(locale, path)` to generate internal links; do not hard-code absolute root paths.
- GitHub Pages project pages set `ASTRO_BASE`. Any `href="/..."` may bypass the base unless it is genuinely external or root-domain-scoped.
- Use `switchLocalePath` for language-switch paths; do not manually split base and locale inside components.
- Navigation items should be resolved through `src/config/navigation.ts`; extend the route registry when adding new system routes.
- Paths in sitemap/RSS/search must also account for locale and base/site differences.

## Content Model

- Content collections are limited to `posts`, `projects`, and `pages`.
- Taxonomy currently only retains `tags`; do not add Hugo-style categories/series compatibility unless explicitly designed as a new Astro-native feature.
- Front matter is governed by `src/content.config.ts`. New fields must have the schema updated first, then the component consumption logic.
- Drafts use the `draft` field; public listing should continue to filter out drafts.
- Multilingual content is handled via directory structure and `lang`/path conventions; do not introduce Hugo bundle rules.

## Markdown Features

- Prefer native Markdown semantics and remark/rehype build-time transforms.
- Tabs use `remark-directive`, implemented in `src/lib/markdown/remark-tabs.mjs`.
- Alerts, heading anchors, image groups, and Mermaid are in `src/lib/markdown/rehype-*.mjs`.
- Math formulas are handled by `remark-math` + `rehype-katex`.
- Code block capabilities are delegated to Expressive Code; do not re-parse fenced code inside components.

## UI and Style Conventions

- Maintain the theme's compact reading layout: content-first, restrained layout, moderate reading density.
- New UI should reuse existing tokens, CSS variables, and Tailwind utilities; do not introduce new heavy UI frameworks.
- Theme colors and design tokens go in `src/styles/themes.css` or the relevant config file.
- Icon buttons should prefer `astro-icon` + Lucide icons.
- Components must support light/dark themes and avoid hard-coding colors suited only to a single theme.
- Responsive layout must cover both mobile and desktop.

## Astro-Native Priorities

Prefer:

- Astro Content Collections schema and typed entries
- Astro file routing and `getStaticPaths`
- Astro components and props
- `import.meta.env.BASE_URL`
- Build-time remark/rehype plugins
- Config-driven theme capabilities

Avoid:

- Hugo template/shortcode compatibility layers
- Implicit aliases for legacy Hugo front matter
- Parsing Markdown strings at runtime to simulate Hugo behavior
- Copying Hugo directory conventions as hard requirements
- Long-lived shims for temporary migration logic

## Development Workflow

- Before making changes, read the relevant config, components, and page routes to understand existing patterns.
- Keep change scope small; avoid incidentally refactoring unrelated files.
- When adding user-visible features, consider both English and Simplified Chinese copy.
- When adding routes or internal links, verify GitHub Pages project page paths with an `ASTRO_BASE` build.
- When adding content fields, config options, or behaviors, update the README and example content accordingly, unless it is an internal-only fix.
- Do not overwrite content files the user has not asked to modify.

## Validation Checklist

Basic validation:

```sh
pnpm build
```

When changes involve links, asset paths, navigation, search, RSS, sitemap, or language switching, also verify:

```sh
ASTRO_BASE=/astro-narrow/ pnpm build
```

After building, check:

- Internal links in generated pages include the correct base.
- Default-language paths do not include `/en/`.
- `zh-cn` paths include `/zh-cn/`.
- RSS, sitemap, and search index are still generated.
- Static asset paths do not bypass `BASE_URL`.

## Maintenance Principles

- Astro-native first.
- Config over hard-coding.
- Build-time transforms over runtime patches.
- Types and schemas over implicit conventions.
- The theme's experience may inherit the spirit of Hugo Narrow, but the code does not carry Hugo compatibility baggage.
