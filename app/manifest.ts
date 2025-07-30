import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ABC Digital Marketing Agency',
    short_name: 'ABC Digital',
    description: 'Transform your business with ABC\'s cutting-edge digital marketing solutions. We specialize in SEO optimization, PPC advertising, social media marketing, content strategy, web design, and marketing automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'marketing', 'productivity'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait',
    scope: '/',
    prefer_related_applications: false,
  }
} 