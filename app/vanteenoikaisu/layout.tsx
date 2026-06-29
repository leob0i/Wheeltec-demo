import React from 'react'
import type { Metadata } from 'next'
import { JsonLdScript } from '@/components/json-ld'

const BASE = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  title: 'Vanteenoikaisu – hydraulinen oikaisu 50–80 €',
  description: 'Hydraulinen vanteenoikaisu palauttaa pyörän pyöreäksi – vähemmän tärinää, tasaisempi kuluminen. Oikaisu alkaen 50 €. WheelTec Lappeenranta.',
  alternates: {
    canonical: `${BASE}/vanteenoikaisu`,
  },
  openGraph: {
    title: 'Vanteenoikaisu – hydraulinen oikaisu | WheelTec',
    description: 'Hydraulinen vanteenoikaisu palauttaa pyörän pyöreäksi. Oikaisu alkaen 50 €, suoruuden tarkistus 10 €/vanne.',
    url: `${BASE}/vanteenoikaisu`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Vanteenoikaisu',
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Vanteenoikaisu",
  "url": `${BASE}/vanteenoikaisu`,
  "description": "Hydraulinen vanteenoikaisu palauttaa vääntyneen vanteen pyöreäksi nopeasti, edullisesti ja ilman maalipinnan vahingoittumista.",
  "provider": { "@id": `${BASE}/#organization` },
  "serviceType": "Wheel Straightening",
  "areaServed": { "@type": "Country", "name": "Finland" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "offerCount": 3,
    "offers": [
      {
        "@type": "Offer",
        "name": "Vanteen oikaisu (normaali heitto)",
        "price": "50",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "50",
          "maxPrice": "60",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Offer",
        "name": "Yli 1 mm heitoiset vanteet",
        "price": "80",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "80", "priceCurrency": "EUR" }
      },
      {
        "@type": "Offer",
        "name": "Suoruuden tarkistus",
        "price": "10",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "10", "priceCurrency": "EUR" }
      }
    ]
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Etusivu", "item": `${BASE}/` },
    { "@type": "ListItem", "position": 2, "name": "Vanteenoikaisu", "item": `${BASE}/vanteenoikaisu` }
  ]
}

export default function VanteenoikaisuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={serviceSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      {children}
    </>
  )
}
