import type { CollectionEntry } from 'astro:content'
import { siteConfig } from '../../config/site'
import { localeMeta, type Locale } from '../../config/i18n'
import { localizedEntryPath } from './entries'

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

export function renderRss(thoughts: Array<CollectionEntry<'thoughts'>>, origin: string, basePath = '/', locale: Locale = 'en') {
  const siteUrl = origin.replace(/\/$/, '')
  const channelUrl = `${siteUrl}${basePath}`

  const items = thoughts
    .map((entry) => {
      const url = `${siteUrl}${localizedEntryPath('thoughts', entry as any)}`
      const date = entry.data.pubDate.toUTCString()
      return [
        '<item>',
        `<title>${escapeXml(entry.data.title)}</title>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid>${escapeXml(url)}</guid>`,
        `<pubDate>${escapeXml(date)}</pubDate>`,
        `<description>${escapeXml(entry.data.description || '')}</description>`,
        '</item>',
      ].join('')
    })
    .join('')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '<channel>',
    `<title>${escapeXml(siteConfig.meta.title)}</title>`,
    `<link>${escapeXml(channelUrl)}</link>`,
    `<description>${escapeXml(siteConfig.meta.description[locale])}</description>`,
    `<language>${escapeXml(localeMeta[locale].htmlLang)}</language>`,
    items,
    '</channel>',
    '</rss>',
  ].join('')
}
