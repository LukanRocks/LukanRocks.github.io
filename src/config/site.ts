import type { Locale } from './i18n'

export const siteConfig = {
  name: 'Lukan Vanderlinde',
  shortName: 'Lukan Vanderlinde',
  description: 'A content-focused Astro theme inspired by Hugo Narrow.',
  author: {
    name: 'Lukan Vanderlinde 🇧🇷',
    title: {
      en: 'Currently building my own things · VTEX (IPO) · TermSheet (acquired)',
      pt: 'Atualmente fazendo meus projetos · VTEX (IPO) · TermSheet (acquired)',
    },
    description: {
      en: "I've spent most of my career in product, leading teams, shaping roadmaps, and learning the hard way what makes software actually useful.",
      pt: 'Passei a maior parte da minha carreira liderando produtos, times, moldando roadmaps e aprendendo na prática o que realmente torna um software útil.',
    },
    avatar: '/profile.png',
    social: [
      { name: 'GitHub', url: 'https://github.com/LukanRocks', icon: 'simple-icons:github' },
      { name: 'Email', url: 'mailto:hello@lukan.rocks', icon: 'lucide:mail' },
    ],
  },
  contentWidth: '56rem',
  ui: {
    navbar: {
      sticky: true,
    },
    dock: {
      enabled: true,
    },
  },
  nav: ['thoughts', 'projects', 'archives', 'tags'],
  footerNav: ['archives', 'tags', 'series', 'resume'],
  comments: {
    enabled: false,
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
    },
  },
  analytics: {
    enabled: false,
    provider: 'umami',
    umami: {
      src: '',
      websiteId: '',
      domains: '',
    },
  },
  gallery: {
    enabled: true,
    defaultLayout: 'justified',
    gap: 10,
    targetRowHeight: 220,
    lastRowBehavior: 'center',
    columnWidth: 220,
    columns: 'auto',
  },
  lightbox: {
    enabled: true,
  },
  thought: {
    relatedCount: 3,
    license: {
      enabled: true,
      name: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      description: 'This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.',
    },
  },
} satisfies {
  name: string
  shortName: string
  description: string
  author: {
    name: string
    title: Record<Locale, string>
    description: Record<Locale, string>
    avatar: string
    social: Array<{ name: string; url: string; icon: string }>
  }
  contentWidth: string
  ui: {
    navbar: {
      sticky: boolean
    }
    dock: {
      enabled: boolean
    }
  }
  nav: Array<string | { label: Record<Locale, string>; href: string; icon: string }>
  footerNav: Array<string | { label: Record<Locale, string>; href: string; icon: string }>
  comments: Record<string, any>
  analytics: Record<string, any>
  gallery: Record<string, any>
  lightbox: Record<string, any>
  thought: Record<string, any>
}
