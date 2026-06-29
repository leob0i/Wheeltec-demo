import React from 'react'
import type { Metadata } from 'next'
import { JsonLdScript } from '@/components/json-ld'

const BASE = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  title: 'Vanteenkorjaus – halkeamien TIG-hitsaus',
  description: 'Korjaamme vanteiden halkeamat TIG-hitsauksella turvallisesti ja kestävästi. Tarkastus, oikaisu ja tasapaino tarvittaessa. WheelTec Lappeenranta.',
  alternates: {
    canonical: `${BASE}/vanteenkorjaus`,
  },
  openGraph: {
    title: 'Vanteenkorjaus – TIG-hitsaus | WheelTec',
    description: 'Korjaamme vanteiden halkeamat TIG-hitsauksella turvallisesti ja kestävästi. Tarkastus, oikaisu ja tasapaino tarvittaessa.',
    url: `${BASE}/vanteenkorjaus`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Vanteenkorjaus TIG-hitsauksella',
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Vanteenkorjaus",
  "url": `${BASE}/vanteenkorjaus`,
  "description": "Vanteiden halkeamien korjaus TIG-hitsauksella turvallisesti ja kestävästi. Jokainen korjaus tehdään niin, että lopputulos on mahdollisimman kestävä ja turvallinen ajokäyttöön.",
  "provider": { "@id": `${BASE}/#organization` },
  "serviceType": "Wheel Repair",
  "areaServed": { "@type": "Country", "name": "Finland" }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Etusivu", "item": `${BASE}/` },
    { "@type": "ListItem", "position": 2, "name": "Vanteenkorjaus", "item": `${BASE}/vanteenkorjaus` }
  ]
}

export default function VanteenkorjausLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={serviceSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      {children}
    </>
  )
}
