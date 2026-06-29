import React from "react"
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { JsonLd } from '@/components/json-ld'

import './globals.css'

const _bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const _playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const BASE_URL = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'WheelTec – Kiilloitus, maalaus & vannekorjaus | Lappeenranta',
    template: '%s | WheelTec',
  },
  description: 'Ammattimainen vanteiden käsittely Lappeenrannassa – tärykiilloitus, jauhemaalaus, hiekkapuhallus, kemiallinen maalinpoisto ja vanteiden oikaisu. Palvelemme koko Suomea.',
  keywords: [
    'vanteiden kiilloitus', 'tärykiilloitus', 'jauhemaalaus', 'vanteenoikaisu',
    'vanteenkorjaus', 'hiekkapuhallus', 'kemiallinen maalinpoisto', 'Lappeenranta', 'WheelTec',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WheelTec – Kiilloitus, maalaus & vannekorjaus',
    description: 'Ammattimainen vannekäsittely – tärykiilloitus, jauhemaalaus, hiekkapuhallus, kemiallinen maalinpoisto ja vanteiden oikaisu.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Premium Vanne Palvelut',
      },
    ],
    type: 'website',
    locale: 'fi_FI',
    url: BASE_URL,
    siteName: 'WheelTec',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WheelTec – Kiilloitus, maalaus & vannekorjaus',
    description: 'Ammattimainen vannekäsittely. Laatu ennen kaikkea.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi" className={`${_bebasNeue.variable} ${_jetbrainsMono.variable} ${_playfairDisplay.variable}`}>
      <body className="font-mono antialiased overflow-x-hidden">
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
