import React from "react"
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, JetBrains_Mono } from 'next/font/google'

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

export const metadata: Metadata = {
  title: 'WHEELTEC // Vanne & Kiillotus',
  description: 'Laatu. Tarkkuus. Tulos. Tärykiillotus, jauhemaalaus, hiekkapuhallus, kemiallinen maalinpoisto ja vanteiden oikaisu.',
  openGraph: {
    title: 'WHEELTEC // Vanne & Kiillotus',
    description: 'Ammattimainen vannekäsittely – tärykiillotus, jauhemaalaus, hiekkapuhallus, kemiallinen maalinpoisto ja vanteiden oikaisu.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Premium Vanne Palvelut',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHEELTEC // Vanne & Kiillotus',
    description: 'Ammattimainen vannekäsittely. Laatu ennen kaikkea.',
    images: ['/images/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_bebasNeue.variable} ${_jetbrainsMono.variable}`}>
      <body className="font-mono antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
