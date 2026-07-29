import type { Locale } from './i18n'

export type ContentCollection = 'thoughts' | 'projects' | 'pages'
export type EntryCardStyle = 'article' | 'showcase' | 'compact'
export type EntryListLayout = 'stack' | 'grid'
export type EntryGridColumns = 1 | 2 | 3
export type HomeSectionConfig = {
  enabled: boolean
  limit: number
  featuredOnly?: boolean
  title: Record<Locale, string>
}

export const contentTypes = {
  projects: {
    collection: 'projects',
    path: '/projects/',
    icon: 'lucide:folder-heart',
    label: {
      en: 'Projects',
      pt: 'Projetos',
    },
    showMeta: true,
    cardStyle: 'showcase',
    listLayout: 'grid',
    gridColumns: 3,
    home: {
      enabled: true,
      limit: 3,
      featuredOnly: true,
      title: {
        en: 'Projects',
        pt: 'Projetos',
      },
    },
  },
  thoughts: {
    collection: 'thoughts',
    path: '/thoughts/',
    icon: 'lucide:pencil-sparkles',
    label: {
      en: 'Thoughts',
      pt: 'Pensamentos',
    },
    showMeta: true,
    cardStyle: 'article',
    listLayout: 'stack',
    gridColumns: 1,
    home: {
      enabled: true,
      limit: 5,
      title: {
        en: 'Thoughts',
        pt: 'Pensamentos',
      },
    },
  },
} satisfies Record<
  string,
  {
    collection: ContentCollection
    path: string
    icon: string
    label: Record<Locale, string>
    showMeta: boolean
    cardStyle: EntryCardStyle
    listLayout: EntryListLayout
    gridColumns: EntryGridColumns
    home?: HomeSectionConfig
  }
>

export type ContentTypeId = keyof typeof contentTypes
