import { locales, type Locale } from '../../config/i18n'
import { getLocalizedEntries } from '../../lib/content/entries'
import { renderRss } from '../../lib/content/rss'

export function getStaticPaths() {
  return locales.filter((locale) => locale !== 'en').map((locale) => ({ params: { locale } }))
}

export async function GET({ params, site, url }: { params: { locale: Locale }; site?: URL; url: URL }) {
  const thoughts = await getLocalizedEntries('thoughts', params.locale)
  const origin = site?.origin || url.origin

  return new Response(renderRss(thoughts, origin, `/${params.locale}/`), {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
    },
  })
}
