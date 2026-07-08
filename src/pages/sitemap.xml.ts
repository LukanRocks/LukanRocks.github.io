import { getCollection } from 'astro:content'
import { locales } from '../config/i18n'
import { getLocalePath } from '../config/i18n'
import { contentTypes } from '../config/content'
import { localizedEntryPath, uniqueTerms } from '../lib/content/entries'

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function GET({ site, url }: { site?: URL; url: URL }) {
  const origin = (site?.origin || url.origin).replace(/\/$/, '')
  const thoughts = await getCollection('thoughts', ({ data }) => !data.draft)
  const projects = await getCollection('projects', ({ data }) => !data.draft)
  const pages = await getCollection('pages', ({ data }) => !data.draft)

  const staticPaths = locales.flatMap((locale) => [
    getLocalePath(locale, '/'),
    getLocalePath(locale, contentTypes.thoughts.path),
    getLocalePath(locale, contentTypes.projects.path),
    getLocalePath(locale, '/archives/'),
    getLocalePath(locale, '/tags/'),
    getLocalePath(locale, '/rss.xml'),
  ])

  const thoughtPaths = thoughts.map((entry) => localizedEntryPath('thoughts', entry as any))
  const projectPaths = projects.map((entry) => localizedEntryPath('projects', entry as any))
  const pagePaths = pages.map((entry) => localizedEntryPath('pages', entry as any))
  const taxonomyPaths = locales.flatMap((locale) => {
    const localizedThoughts = thoughts.filter((entry) =>
      localizedEntryPath('thoughts', entry as any).startsWith(locale === 'en' ? contentTypes.thoughts.path : `/${locale}${contentTypes.thoughts.path}`),
    ) as any
    const prefix = locale === 'en' ? '' : `/${locale}`
    return uniqueTerms(localizedThoughts, 'tags').map((term) => `${prefix}/tags/${term.slug}/`)
  })

  const urls = [...new Set([...staticPaths, ...thoughtPaths, ...projectPaths, ...pagePaths, ...taxonomyPaths])]
    .map((path) => `<url><loc>${escapeXml(`${origin}${path}`)}</loc></url>`)
    .join('')

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
    },
  })
}
