import React from 'react'
import type { Metadata } from 'next'
import { JsonLdScript } from '@/components/json-ld'

const BASE = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  title: 'Kemiallinen maalinpoisto & hiekkapuhallus',
  description: 'Kemiallinen maalinpoisto ja hiekkapuhallus metalliosille – pinta valmiiksi maalausta varten. Huolellinen pohjatyö on WheelTecin tapa. Lappeenranta.',
  alternates: {
    canonical: `${BASE}/maalinpoisto`,
  },
  openGraph: {
    title: 'Kemiallinen maalinpoisto & hiekkapuhallus | WheelTec',
    description: 'Kemiallinen maalinpoisto ja hiekkapuhallus metalliosille – pinta valmiiksi maalausta varten.',
    url: `${BASE}/maalinpoisto`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Maalinpoisto ja hiekkapuhallus',
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kemiallinen maalinpoisto ja hiekkapuhallus",
  "url": `${BASE}/maalinpoisto`,
  "description": "Kemiallisella maalinpoistolla poistetaan vanhat maalikerrokset, lakat ja pinnoitteet. Hiekkapuhalluksella poistetaan ruoste ja hapettumat – pinta valmiiksi maalausta varten.",
  "provider": { "@id": `${BASE}/#organization` },
  "serviceType": "Paint Stripping / Sandblasting",
  "areaServed": { "@type": "Country", "name": "Finland" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Maalinpoisto ja hiekkapuhallus",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kemiallinen maalinpoisto"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hiekkapuhallus"
        }
      }
    ]
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Etusivu", "item": `${BASE}/` },
    { "@type": "ListItem", "position": 2, "name": "Maalinpoisto", "item": `${BASE}/maalinpoisto` }
  ]
}

export default function MaalinpoistoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={serviceSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      {children}
    </>
  )
}
