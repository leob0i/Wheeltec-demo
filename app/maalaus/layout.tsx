import React from 'react'
import type { Metadata } from 'next'
import { JsonLdScript } from '@/components/json-ld'

const BASE = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  title: 'Vanteiden jauhemaalaus – kaikki värit ja pinnat',
  description: 'Jauhemaalaus vanteille, jarrusatuloille ja metallinosille. Kestävä pinta, tarkka sävy, alkaen 450 €. WheelTec Lappeenranta.',
  alternates: {
    canonical: `${BASE}/maalaus`,
  },
  openGraph: {
    title: 'Vanteiden jauhemaalaus | WheelTec',
    description: 'Jauhemaalaus vanteille, jarrusatuloille ja metallinosille. Kestävä pinta, tarkka sävy, alkaen 450 €.',
    url: `${BASE}/maalaus`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Vanteiden jauhemaalaus',
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Jauhemaalaus",
  "url": `${BASE}/maalaus`,
  "description": "Jauhemaalaus on ammattimaisin tapa maalata metallivanteet. Jauheväri levitetään sähköstaattisesti ja kovetetaan uunissa – tuloksena moninkertaisesti kestävämpi pinta kuin märkämaali.",
  "provider": { "@id": `${BASE}/#organization` },
  "serviceType": "Powder Coating",
  "areaServed": { "@type": "Country", "name": "Finland" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "offerCount": 6,
    "offers": [
      {
        "@type": "Offer",
        "name": "Vanteiden maalaus",
        "price": "450",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "450", "priceCurrency": "EUR" }
      },
      {
        "@type": "Offer",
        "name": "Auton jarrusatulat",
        "price": "50",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "50", "priceCurrency": "EUR" }
      },
      {
        "@type": "Offer",
        "name": "Moottoripyörän vanteet",
        "price": "280",
        "priceCurrency": "EUR",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "280", "priceCurrency": "EUR" }
      }
    ]
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Etusivu", "item": `${BASE}/` },
    { "@type": "ListItem", "position": 2, "name": "Jauhemaalaus", "item": `${BASE}/maalaus` }
  ]
}

export default function MaalausLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={serviceSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      {children}
    </>
  )
}
