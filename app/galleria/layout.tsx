import React from 'react'
import type { Metadata } from 'next'
import { JsonLdScript } from '@/components/json-ld'

const BASE = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  title: 'Kuvia töistämme – kiilloitus ja maalaus',
  description: 'Katso WheelTecin töitä – kiillotettuja, maalattuja ja kunnostettuja vanteita. Premium-tulos joka kappaleessa. Seuraa: @wheeltec.oy.',
  alternates: {
    canonical: `${BASE}/galleria`,
  },
  openGraph: {
    title: 'Galleria – WheelTecin töitä kuvina',
    description: 'Katso kiillotettuja, maalattuja ja kunnostettuja vanteita. Premium-tulos joka kappaleessa. Instagram & TikTok: @wheeltec.oy.',
    url: `${BASE}/galleria`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Galleria',
      },
    ],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Etusivu", "item": `${BASE}/` },
    { "@type": "ListItem", "position": 2, "name": "Galleria", "item": `${BASE}/galleria` }
  ]
}

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "WheelTec – Töitämme kuvina",
  "description": "Kuvia WheelTecin toteuttamista vanteiden kiillotus-, maalaus- ja kunnostustöistä.",
  "url": `${BASE}/galleria`,
  "author": { "@id": `${BASE}/#organization` }
}

export default function GalleriaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={breadcrumbSchema} />
      <JsonLdScript data={imageGallerySchema} />
      {children}
    </>
  )
}
