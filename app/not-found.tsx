import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sivua ei löydy – 404',
  description: 'Etsimääsi sivua ei löydy. Palaa WheelTecin etusivulle.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      <p className="font-mono text-[10px] text-foreground/40 tracking-[0.3em] uppercase mb-4">
        404
      </p>
      <h1 className="font-sans text-4xl md:text-6xl tracking-tighter uppercase mb-4">
        Sivua ei löydy
      </h1>
      <p className="font-mono text-sm text-foreground/60 mb-8 text-center">
        Etsimääsi sivua ei ole olemassa.
      </p>
      <Link
        href="/"
        className="font-mono text-[11px] text-foreground/50 hover:text-foreground transition-colors uppercase tracking-[0.15em] min-h-[40px] flex items-center border border-foreground/10 hover:border-foreground/30 px-5 py-2.5"
      >
        Etusivulle
      </Link>
    </main>
  )
}
