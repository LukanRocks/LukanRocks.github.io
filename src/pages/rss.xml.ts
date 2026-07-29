import { getLocalizedEntries } from '../lib/content/entries'
import { renderRss } from '../lib/content/rss'

export async function GET({ site, url }: { site?: URL; url: URL }) {
  const thoughts = await getLocalizedEntries('thoughts', 'en')
  const origin = site?.origin || url.origin

  return new Response(renderRss(thoughts, origin, '/', 'en'), {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
    },
  })
}
