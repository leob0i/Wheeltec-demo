"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CtaFormSection } from "@/components/cta-form-section"

function d(ms: number): React.CSSProperties {
  return { animationDelay: `${ms}ms` }
}

const kohteet = [
  "Jarrusatulat",
  "Moottoritilan osat",
  "Ripustuksen komponentit",
  "Pakoputkiston osat",
  "Muut metallikomponentit",
]

const suojat = [
  {
    id: "01",
    nimi: "Korroosio ja ruoste",
  },
  {
    id: "02",
    nimi: "Kuluminen ja naarmut",
  },
  {
    id: "03",
    nimi: "Kemikaalit, öljyt ja polttoaine",
  },
  {
    id: "04",
    nimi: "UV-säteily",
  },
  {
    id: "05",
    nimi: "Korkeat lämpötilat",
  },
]

export default function CerakotePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-background" />

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[60]" aria-hidden="true" />
      <Nav />
      <HeroSection />
      <WhatIsSection />
      <ProtectionSection />
      <CtaFormSection
        heading="cerakote"
        serviceName="Cerakote-pinnoitus"
        messagePlaceholder="Kerro mitkä osat haluat pinnoittaa, toivottu väri/sävy ja käyttötarkoitus — sovitaan tarvittaessa arvio paikan päällä."
      />
      <Footer />
    </main>
  )
}

function HeroSection() {
  const [go, setGo] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setGo(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  if (!go) return <div className="h-[90svh] md:h-screen bg-background" />

  return (
    <section className="relative h-[90svh] md:h-screen flex flex-col overflow-hidden bg-background select-none">
      {/* Background image */}
      <div className="absolute inset-0 anim-cut-in" style={d(100)} aria-hidden="true">
        <Image
          src="/images/kerakotella.maalatut.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/15 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent hidden md:block" />
      </div>

      {/* Accent shard */}
      <div
        className="absolute top-[8%] md:top-[15%] left-0 w-[3px] h-[12vh] md:h-[40vh] anim-grow-down z-10"
        style={{ ...d(400), background: "linear-gradient(180deg, #00F5C8, #00D9FF, #009DFF)" }}
      />

      {/* Grid lines desktop */}
      {[14, 28, 42].map((pos, i) => (
        <div
          key={pos}
          className="absolute top-0 h-full w-[1px] bg-foreground/[0.05] anim-grow-down hidden lg:block"
          style={{ left: `${pos}%`, ...d(250 + i * 100) }}
          aria-hidden="true"
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto w-full text-left">
          {/* Headline */}
          <div className="overflow-hidden mb-3 md:mb-4">
            <h1
              className="font-sans text-[17vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] leading-none tracking-[-0.04em] uppercase anim-shutter-up shimmer-text"
              style={d(400)}
            >
              Cerakote
            </h1>
          </div>

          {/* Tagline */}
          <div
            className="flex items-center justify-start gap-3 mb-3 md:mb-5 anim-wipe-right"
            style={d(550)}
          >
            <div className="h-[1.5px] w-6 md:w-16 bg-accent" />
            <span className="font-mono text-[10px] md:text-xs text-accent tracking-[0.2em] md:tracking-[0.4em] uppercase">
              Koko Suomi / Lappeenranta
            </span>
          </div>

          {/* Copy */}
          <p
            className="font-mono text-xs md:text-[13px] text-foreground/60 max-w-[260px] sm:max-w-xs md:max-w-md leading-relaxed anim-cut-in"
            style={d(800)}
          >
            Toisin kuin perinteinen maali tai pulverimaalaus, Cerakote muodostaa erittäin ohuen mutta poikkeuksellisen kestävän suojakerroksen.
          </p>

          {/* CTAs */}
          <div
            className="flex items-center justify-start gap-3 mt-5 md:mt-8 anim-cut-in"
            style={d(950)}
          >
            <a
              href="#suoja"
              className="group relative font-mono text-[11px] bg-foreground text-background px-5 md:px-7 py-2.5 md:py-3 tracking-[0.15em] md:tracking-[0.2em] uppercase overflow-hidden min-h-[40px] md:min-h-[44px] flex items-center"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                Katso edut
              </span>
              <span
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
              />
            </a>
            <Link
              href="/#yhteystiedot"
              className="font-mono text-[11px] text-foreground/50 hover:text-foreground transition-colors uppercase tracking-[0.15em] min-h-[40px] flex items-center border border-foreground/10 hover:border-foreground/30 px-5 py-2.5"
            >
              Kysy tarjous
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatIsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative px-4 md:px-8 lg:px-12 py-14 md:py-28 bg-background overflow-hidden"
    >
      <div
        className="absolute right-0 bottom-0 font-sans text-[35vw] md:text-[22vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        KERAAMI
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <h2
              className={`font-sans text-[13vw] sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none mb-5 md:mb-8 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Cerakote<br />pinnoitus<span className="text-accent">.</span>
            </h2>

            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
                Wheeltec tarjoaa laadukkaat Cerakote-pinnoitukset erilaisille metalliosille, kuten jarrusatuloille, moottoritilan osille, ripustuksen komponenteille, pakoputkiston osille sekä muille autojen ja moottoripyörien metallikomponenteille.
              </p>
              <p className="font-mono text-[11px] md:text-sm text-foreground leading-relaxed">
                Cerakote on erittäin kestävä keraamipohjainen pinnoite, joka suojaa pintaa korroosiolta, kulumiselta, kemikaaleilta ja UV-säteilyltä — tietyt tuotteet myös korkeilta lämpötiloilta.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-2 mt-6 md:mt-8 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {kohteet.map((k) => (
                <span
                  key={k}
                  className="font-mono text-[9px] md:text-[10px] text-foreground/50 tracking-[0.1em] uppercase border border-foreground/10 px-3 py-1.5"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div
            className={`relative aspect-[4/3] overflow-hidden transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/images/pakosarjat_yhdistetty.webp"
              alt="Pinnoitetut moottorin metalliosat"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProtectionSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="suoja"
      ref={ref}
      className="relative px-4 md:px-8 lg:px-12 pt-0 pb-14 md:pb-28 bg-card overflow-hidden"
    >
      <div
        className="absolute top-6 md:top-8 right-2 md:right-12 font-sans text-[25vw] md:text-[18vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div
          className={`pt-10 md:pt-14 mb-5 md:mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
            Suojaa pintaa<span className="text-accent">.</span>
          </h2>
          <p className="font-mono text-[9px] md:text-[11px] text-foreground/40 tracking-[0.1em] uppercase mt-3 md:mt-4">
            Erittäin kestävä keraamipohjainen pinnoite.
          </p>
        </div>

        <div
          className={`h-[1px] bg-foreground/10 transition-all duration-1000 origin-left ${
            visible ? "scale-x-100" : "scale-x-0"
          }`}
        />

        {/* Rows */}
        <div className="border-b border-border">
          {suojat.map((s, i) => (
            <div
              key={s.id}
              className={`py-2.5 md:py-3.5 border-t border-foreground/5 group hover:bg-foreground/[0.02] transition-all px-0 md:px-4 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDuration: "600ms",
                transitionDelay: visible ? `${200 + i * 120}ms` : "0ms",
              }}
            >
              <div className="grid grid-cols-[1.5rem_1fr] gap-x-3 md:gap-x-5 gap-y-0.5 items-start">
                <span className="font-mono text-[8px] text-foreground/25 tracking-[0.2em] pt-0.5">
                  {s.id}
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-0.5 h-3 md:h-3.5 shrink-0 transition-colors bg-foreground/15 group-hover:bg-accent" />
                    <h3 className="font-sans text-sm sm:text-base md:text-lg tracking-tight uppercase group-hover:text-accent transition-colors leading-none">
                      {s.nimi}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
