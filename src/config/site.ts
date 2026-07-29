import type { Locale } from './i18n'

export const siteConfig = {
  meta: {
    title: 'Lukan Vanderlinde',
    description: {
      en: 'Lukan is a product leader living in Curitiba - Brazil, currently trying his own projects.',
      pt: 'Lukan é um líder de produto que vive em Curitiba - Brasil, atualmente tocando seus próprios projetos.',
    },
  },
  author: {
    name: 'Lukan',
    title: {
      en: 'Currently building my own things · TermSheet (acquired) · VTEX (IPO)',
      pt: 'Atualmente fazendo meus projetos · TermSheet (acquired) · VTEX (IPO)',
    },
    description: {
      en: "I've spent most of my career in product, leading teams, shaping roadmaps, and learning the hard way what makes software actually useful.",
      pt: 'Passei a maior parte da minha carreira liderando produtos, times, moldando roadmaps e aprendendo na prática o que realmente torna um software útil.',
    },
    avatar: '/profile.png',
    social: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lukanvanderlinde/', icon: 'simple-icons:linkedin' },
      { name: 'GitHub', url: 'https://github.com/LukanRocks', icon: 'simple-icons:github' },
    ],
  },
  ui: {
    contentWidth: '56rem',
    navbar: {
      sticky: true,
      items: ['about', 'projects', 'thoughts', 'stack'],
    },
    footer: {
      items: ['archives', 'tags', 'series'],
    },
    dock: {
      enabled: true,
    },
  },
  gallery: {
    defaultLayout: 'justified',
    gap: 10,
    targetRowHeight: 220,
    lastRowBehavior: 'center',
    columnWidth: 220,
    columns: 'auto',
  },
  thought: {
    relatedCount: 3,
    license: {
      enabled: true,
      name: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      description: {
        en: 'This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.',
        pt: 'Este trabalho está licenciado sob uma licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional.',
      },
    },
  },
} satisfies {
  meta: {
    title: string
    description: Record<Locale, string>
  }
  author: {
    name: string
    title: Record<Locale, string>
    description: Record<Locale, string>
    avatar: string
    social: Array<{ name: string; url: string; icon: string }>
  }
  ui: {
    contentWidth: string
    navbar: {
      sticky: boolean
      items: Array<string | { label: Record<Locale, string>; href: string; icon: string }>
    }
    footer: {
      items: Array<string | { label: Record<Locale, string>; href: string; icon: string }>
    }
    dock: {
      enabled: boolean
    }
  }
  gallery: Record<string, any>
  thought: Record<string, any>
}
