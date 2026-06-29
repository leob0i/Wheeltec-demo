import React from 'react'
import type { Metadata } from 'next'
import { JsonLdScript } from '@/components/json-ld'

const BASE = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  title: 'Vanteiden tärykiilloitus – hinnat & palvelu',
  description: 'Tärykiilloitus tuo metallin alkuperäisen loiston esiin. Vannesarjan kiilloitus alkaen 600 €, yksittäiset liput alkaen 70 €. WheelTec Lappeenranta.',
  alternates: {
    canonical: `${BASE}/kiilloitus`,
  },
  openGraph: {
    title: 'Vanteiden tärykiilloitus | WheelTec',
    description: 'Tärykiilloitus tuo metallin alkuperäisen loiston esiin. Vannesarjan kiilloitus alkaen 600 €, liput alkaen 70 €.',
    url: `${BASE}/kiilloitus`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Vanteiden tärykiilloitus',
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tärykiilloitus",
  "url": `${BASE}/kiilloitus`,
  "description": "Tärykiilloitus on ammattimainen metallinkäsittelymenetelmä, jossa vanteet kiilloitetaan pyörivässä rummussa hioma-aineen avulla. Lopputuloksena peilimäinen, tasainen pinta.",
  "provider": { "@id": `${BASE}/#organization` },
  "serviceType": "Wheel Polishing",
  "areaServed": { "@type": "Country", "name": "Finland" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "offerCount": 3,
    "offers": [
      {
        "@type": "Offer",
        "name": "Tärykiilloitus, vannesarja",
        "price": "600",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "600", "priceCurrency": "EUR" }
      },
      {
        "@type": "Offer",
        "name": "Vanteen keskiöt, sarja",
        "price": "350",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "350", "priceCurrency": "EUR" }
      },
      {
        "@type": "Offer",
        "name": "Lipan kiilloitus",
        "price": "70",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "70", "priceCurrency": "EUR" }
      }
    ]
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Etusivu", "item": `${BASE}/` },
    { "@type": "ListItem", "position": 2, "name": "Tärykiilloitus", "item": `${BASE}/kiilloitus` }
  ]
}

export default function KiilloitusLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={serviceSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      {children}
    </>
  )
}
