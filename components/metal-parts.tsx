"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function MetalParts() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className={visible ? "anim-cut-in" : "opacity-0"}>
            <h2 className="font-sans text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-foreground leading-none uppercase mb-4 md:mb-6">
              Ei pelkästään<br />
              <span className="text-accent">vanteille</span>.
            </h2>
            <p className="font-mono text-[9px] md:text-sm text-foreground/60 max-w-md leading-relaxed mb-2 md:mb-3">
              Tärykiillotus, jauhemaalaus ja muut pintakäsittelyt soveltuvat myös monille auton, moottoripyörän ja teollisuuden metalliosille.
            </p>
            <p className="font-mono text-[9px] md:text-sm text-foreground/60 max-w-md leading-relaxed mb-3 md:mb-5">
              Käytössämme on markkinoiden parhaat materiaalit ja meillä myös ulkonäkö ratkaisee.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="/galleria"
                className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-foreground/60 hover:text-foreground border border-foreground/20 hover:border-foreground px-4 py-2 tracking-[0.15em] uppercase transition-colors"
              >
                Katso töitämme
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://wa.me/358401819581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white transition-opacity hover:opacity-90 px-4 py-2 min-h-[36px]"
                style={{ background: "#25D366" }}
                aria-label="WhatsApp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/wheeltec.oy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/60 hover:text-foreground transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@wheeltec.oy" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-foreground/60 hover:text-foreground transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`relative ${visible ? "anim-wipe-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/moottorinosat.jpeg"
                alt="Metalliosat pintakäsittelyssä"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-3 h-3 md:w-6 md:h-6 border-t-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-6 md:h-6 border-b-2 border-r-2 border-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
