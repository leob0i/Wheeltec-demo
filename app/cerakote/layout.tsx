import React from 'react'
import type { Metadata } from 'next'
import { JsonLdScript } from '@/components/json-ld'

const BASE = 'https://www.wheeltec.fi'

export const metadata: Metadata = {
  title: 'Cerakote®-pinnoitus vanteille ja metalliosille',
  description: 'Kestävä keraamipohjainen Cerakote®-pinnoitus vanteille, jarrusatuloille ja muille metalliosille. Suojaa korroosiolta ja kulumiselta. WheelTec Lappeenranta.',
  alternates: {
    canonical: `${BASE}/cerakote`,
  },
  openGraph: {
    title: 'Cerakote®-pinnoitus | WheelTec',
    description: 'Kestävä keraamipohjainen Cerakote®-pinnoitus vanteille, jarrusatuloille, moottorin osille ja pakoputkistolle.',
    url: `${BASE}/cerakote`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WheelTec – Cerakote®-pinnoitus',
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cerakote®-pinnoitus",
  "url": `${BASE}/cerakote`,
  "description": "Cerakote on erittäin kestävä keraamipohjainen pinnoite, joka suojaa metalliosia korroosiolta, kulumiselta, kemikaaleilta, UV-säteilyltä ja korkeilta lämpötiloilta.",
  "provider": { "@id": `${BASE}/#organization` },
  "serviceType": "Ceramic Coating",
  "areaServed": { "@type": "Country", "name": "Finland" }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Etusivu", "item": `${BASE}/` },
    { "@type": "ListItem", "position": 2, "name": "Cerakote", "item": `${BASE}/cerakote` }
  ]
}

export default function CerakoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={serviceSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      {children}
    </>
  )
}
