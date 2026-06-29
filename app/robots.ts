import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'CCBot',
          'Googlebot',
          'Bingbot',
          'DuckDuckBot',
          'Slurp',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Diffbot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.wheeltec.fi/sitemap.xml',
  }
}
