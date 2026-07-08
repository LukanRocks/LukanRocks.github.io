# lukan.rocks

Personal website and blog of Lukan Vanderlinde, live at **[lukan.rocks](https://lukan.rocks)**.

Built with [Astro](https://astro.build) on the [Astro Narrow](https://github.com/tom2almighty/astro-narrow) theme, customized with a single minimal light/dark palette and bilingual content in English (default) and Portuguese (`/pt/`).

## Stack

- **Framework**: Astro static site — content collections, remark/rehype Markdown transforms (alerts, tabs, math, Mermaid, galleries), Expressive Code blocks, Tailwind CSS 4.
- **Package manager**: pnpm (version pinned via `packageManager` in `package.json`).
- **Content**: Markdown in `src/content/` — `posts`, `projects`, `pages` (about/timeline/resume), and `series`. Each English entry has a `pt/` sibling with the same filename for the language switcher to pair them.

## Hosting & Domain

- **Hosting**: GitHub Pages, deployed by GitHub Actions (`.github/workflows/deploy.yml`). Every push to `main` builds with `withastro/action` and publishes automatically. Pages is configured with **GitHub Actions as the source** and HTTPS enforced.
- **Domain**: `lukan.rocks` is the canonical URL (set in `astro.config.mjs`). `lukanrocks.github.io` and `www.lukan.rocks` 301-redirect to it.
- **DNS**: managed on **Vercel DNS** — records are edited in the Vercel dashboard, not at GitHub or a registrar.

## Development

```sh
pnpm install
pnpm dev      # local server at localhost:4321
pnpm build    # static build into dist/
```

## Main Config Files

- `src/config/site.ts`: site metadata, author profile, navigation, comments, analytics, gallery, post license.
- `src/config/content.ts`: content type labels, paths, card style, list layout, home sections.
- `src/config/i18n.ts`: locales (`en`, `pt`) and localized paths.
- `src/content.config.ts`: content collection schemas (the reference for available frontmatter).
- `src/styles/themes.css`: the color palette — `:root` for light mode, `.dark` for dark mode.
- `ec.config.mjs`: code block rendering (Expressive Code).

## Writing

Add a Markdown file under `src/content/posts/en/` with at least `title` and `pubDate` frontmatter; it appears automatically in the post list, homepage, archives, RSS, and search. Add the Portuguese version under `src/content/posts/pt/` with the same filename.
