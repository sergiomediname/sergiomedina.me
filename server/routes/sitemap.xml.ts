import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://sergiomedina.netlify.app'
  })

  sitemap.write({
    url: '/',
    changefreq: 'monthly'
  })

  sitemap.end()
  return streamToPromise(sitemap)
})
