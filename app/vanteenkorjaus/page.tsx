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

export default function VanteenKorjausPage() {
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
      <CtaFormSection
        heading="korjaus"
        serviceName="Vanteenkorjaus"
        description="Vannekorjauksessa tärkeintä on turvallisuus. Siksi jokainen työ arvioidaan tapauskohtaisesti – kaikkia vanteita ei ole järkevää tai turvallista korjata."
        messagePlaceholder="Kerro vanteen koko, malli ja missä kohtaa halkeama on — sovitaan tarkka hinta arvion perusteella."
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
          src="/images/hitsattuvanne.webp"
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
        <div className="max-w-[1400px] mx-auto w-full text-center md:text-left">
          {/* Headline */}
          <div className="overflow-hidden mb-3 md:mb-4">
            <h1
              className="font-sans text-[18vw] sm:text-[17vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-[-0.04em] uppercase anim-shutter-up shimmer-text"
              style={d(400)}
            >
              Vanteen korjaus
            </h1>
          </div>

          {/* Tagline */}
          <div
            className="flex items-center justify-center md:justify-start gap-3 mb-3 md:mb-5 anim-wipe-right"
            style={d(550)}
          >
            <div className="h-[1.5px] w-6 md:w-16 bg-accent" />
            <span className="font-mono text-[10px] md:text-xs text-accent tracking-[0.2em] md:tracking-[0.4em] uppercase">
              Koko Suomi / Lappeenranta
            </span>
            <div className="h-[1.5px] w-6 bg-accent md:hidden" />
          </div>

          {/* Copy */}
          <p
            className="font-mono text-xs md:text-[13px] text-foreground/60 max-w-[260px] sm:max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed anim-cut-in"
            style={d(800)}
          >
            Korjaamme vanteiden halkeamat ja naarmut turvallisesti ja kestävästi.
          </p>

          {/* CTAs */}
          <div
            className="flex items-center justify-center md:justify-start gap-3 mt-5 md:mt-8 anim-cut-in"
            style={d(950)}
          >
            <a
              href="#korjaus"
              className="group relative font-mono text-[11px] bg-foreground text-background px-5 md:px-7 py-2.5 md:py-3 tracking-[0.15em] md:tracking-[0.2em] uppercase overflow-hidden min-h-[40px] md:min-h-[44px] flex items-center"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                Lue lisää
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
      id="korjaus"
      ref={ref}
      className="relative px-4 md:px-8 lg:px-12 py-14 md:py-28 bg-background overflow-hidden"
    >
      <div
        className="absolute right-0 bottom-0 font-sans text-[35vw] md:text-[22vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        TIG
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
              Laatu ja turvallisuus<br />aina edellä<span className="text-accent">.</span>
            </h2>

            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
                Vanteiden pienet halkeamat voidaan usein korjata turvallisesti ja kestävästi, kun työ tehdään oikein ja oikeilla menetelmillä.
              </p>
              <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
                Me korjaamme vanteiden halkeamat huolellisesti TIG-hitsausta tai muuta soveltuvaa menetelmää käyttäen vanteen materiaalista riippuen. Jokainen korjaus tehdään niin, että lopputulos on mahdollisimman kestävä ja turvallinen ajokäyttöön.
              </p>
              <p className="font-mono text-[11px] md:text-sm text-foreground leading-relaxed">
                Halkeaman korjauksen jälkeen vanne tarkastetaan huolellisesti ja tarvittaessa oikaistaan ja tasapainotetaan, jotta se vastaa alkuperäistä ajettavuutta mahdollisimman hyvin.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div
            className={`hidden lg:block relative aspect-[4/3] overflow-hidden transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/images/rikkoutunutvanne.ennen.jalkeen.webp"
              alt="Vanteen halkeaman korjaus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

