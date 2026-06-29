const BASE = 'https://www.wheeltec.fi'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "@id": `${BASE}/#organization`,
  "name": "WheelTec Oy",
  "url": BASE,
  "logo": `${BASE}/images/og-image.png`,
  "image": `${BASE}/images/og-image.png`,
  "description": "WheelTec Oy on ammattimainen vanteiden ja metalliosien käsittelyyn erikoistunut yritys Lappeenrannassa. Palveluihin kuuluvat tärykiilloitus, jauhemaalaus, hiekkapuhallus, kemiallinen maalinpoisto ja vanteiden oikaisu.",
  "telephone": "+358401819581",
  "email": "info@wheeltec.fi",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Paalukatu 4",
    "addressLocality": "Lappeenranta",
    "postalCode": "53500",
    "addressCountry": "FI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 61.0450803,
    "longitude": 28.2284779
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/wheeltec.oy/",
    "https://www.tiktok.com/@wheeltec.oy"
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "areaServed": {
    "@type": "Country",
    "name": "Finland"
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  "url": BASE,
  "name": "WheelTec",
  "description": "Ammattimainen vanteiden käsittely – tärykiilloitus, jauhemaalaus, hiekkapuhallus, kemiallinen maalinpoisto ja vanteiden oikaisu.",
  "publisher": {
    "@id": `${BASE}/#organization`
  },
  "inLanguage": "fi"
}

export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function JsonLd() {
  return (
    <>
      <JsonLdScript data={organizationSchema} />
      <JsonLdScript data={websiteSchema} />
    </>
  )
}
