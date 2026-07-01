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

const menetelmat = [
  {
    n: "01",
    otsikko: "Kemiallinen maalinpoisto",
    teksti:
      "Kemiallisella maalinpoistolla poistetaan vanhat maalikerrokset, lakat ja pinnoitteet ilman mekaanista hiontaa. Menetelmä soveltuu erityisesti kohteisiin, joissa halutaan päästä hankaliin kohtiin tai poistaa vanhoja pinnoitteita mahdollisimman perusteellisesti. Lopputuloksena osa saadaan puhtaaksi jatkokäsittelyä varten.",
  },
  {
    n: "02",
    otsikko: "Hiekkapuhallus",
    teksti:
      "Hiekkapuhalluksella poistetaan ruoste, hapettumat, lika ja muut epäpuhtaudet metallipinnalta. Samalla pintaan saadaan tasainen tartuntapinta maalausta tai pulverimaalausta varten. Huolellisesti tehty puhallus on yksi tärkeimmistä vaiheista kestävän lopputuloksen saavuttamiseksi.",
  },
]

const beforeAfter = [
  {
    nimi: "Vanne ennen ja jälkeen",
    ennen: "/images/maalinpoisto-vanne-ennen.jpg",
    jalkeen: "/images/maalinpoisto-vanne-jalkeen.jpg",
  },
  {
    nimi: "Moottorin osa ennen ja jälkeen",
    ennen: "/images/maalinpoisto-osa-ennen.jpg",
    jalkeen: "/images/maalinpoisto-osa-jalkeen.jpg",
  },
]

export default function MaalinpoistoPage() {
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
      <MethodsSection />
      <PohjaTyotSection />
      <CtaFormSection
        heading="maalinpoisto"
        serviceName="Maalinpoisto"
        messagePlaceholder="Kerro mitä osia haluat käsitellä — kemiallinen maalinpoisto, hiekkapuhallus vai molemmat."
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
          src="/images/sandblasting.webp"
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
              className="font-sans text-[15vw] sm:text-[17vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-[-0.04em] uppercase anim-shutter-up shimmer-text"
              style={d(400)}
            >
              Maalinpoisto
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
            Kemiallinen maalinpoisto ja hiekkapuhallus — pinta puhtaaksi ja valmiiksi maalausta tai pinnoitusta varten.
          </p>

          {/* CTAs */}
          <div
            className="flex items-center justify-start gap-3 mt-5 md:mt-8 anim-cut-in"
            style={d(950)}
          >
            <a
              href="#menetelmat"
              className="group relative font-mono text-[11px] bg-foreground text-background px-5 md:px-7 py-2.5 md:py-3 tracking-[0.15em] md:tracking-[0.2em] uppercase overflow-hidden min-h-[40px] md:min-h-[44px] flex items-center"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                Miten maali poistetaan?
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
        PUHDAS
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
              Pohjatyö<br />ratkaisee<span className="text-accent">.</span>
            </h2>

            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
                Vanha maali, lakka, hapettumat ja epäpuhtaudet on poistettava kunnolla ennen laadukasta maalausta tai pinnoitusta.
              </p>
              <p className="font-mono text-[11px] md:text-sm text-foreground leading-relaxed">
                Wheeltec suorittaa kemiallisen maalinpoiston ja hiekkapuhalluksen huolellisesti, jotta pinta saadaan puhtaaksi ja valmiiksi seuraavia työvaiheita varten. Hyvin tehty pohjatyö näkyy lopputuloksessa — maali tarttuu paremmin, pinta kestää pidempään ja lopputuloksesta tulee siisti.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div
            className={`relative aspect-[4/3] overflow-hidden transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/images/jarrusatulat ennen ja jalkeen.webp"
              alt="Jarrusatulat ennen ja jälkeen maalinpoiston"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function MethodsSection() {
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
      id="menetelmat"
      ref={ref}
      className="relative px-4 md:px-8 lg:px-12 py-14 md:py-24 bg-background overflow-hidden"
    >
      <div
        className="absolute left-0 top-0 font-sans text-[40vw] md:text-[25vw] leading-none text-foreground/[0.025] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        MENETELMÄT
      </div>

      <div className="max-w-[1400px] mx-auto relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {menetelmat.map((m, i) => (
            <div
              key={m.n}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${100 + i * 150}ms` : "0ms" }}
            >
              <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <span
                  className="h-[2px] flex-1 max-w-[2.5rem]"
                  style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
                />
              </div>
              <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase leading-none mb-3 md:mb-5">
                {m.otsikko}
              </h3>
              <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
                {m.teksti}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PohjaTyotSection() {
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
      className="relative px-4 md:px-8 lg:px-12 py-14 md:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-[1px] w-8 bg-accent shrink-0" />
            <span className="font-mono text-[9px] md:text-[10px] text-accent tracking-[0.25em] uppercase">
              Pohjatyöt ratkaisevat
            </span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl tracking-tighter uppercase leading-none mb-3 md:mb-5">
            Ennen maalausta<br />emme oikaise<span className="text-accent">.</span>
          </h3>
          <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed mb-3">
            Kemiallinen maalinpoisto ja hiekkapuhallus ovat vaiheita, joilla varmistetaan että uusi pinnoite tehdään puhtaalle ja oikein valmistellulle pinnalle.
          </p>
          <p className="font-mono text-[11px] md:text-sm text-foreground leading-relaxed">
            Siksi nämä työvaiheet ovat olennainen osa Wheeltecin vanne- ja osakunnostuksia.
          </p>
        </div>
      </div>
    </section>
  )
}

function ImagePlaceholder({ label, path }: { label: string; path: string }) {
  return (
    <div className="relative aspect-[4/3] border border-dashed border-foreground/15 flex flex-col items-center justify-center gap-2 bg-foreground/[0.02] px-4 text-center">
      <span className="font-mono text-[9px] md:text-[10px] text-foreground/40 tracking-[0.2em] uppercase">
        {label}
      </span>
      <span className="font-mono text-[8px] md:text-[9px] text-foreground/25 tracking-[0.1em] break-all">
        {path}
      </span>
    </div>
  )
}

function BeforeAfterSection() {
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
      ref={ref}
      className="relative px-4 md:px-8 lg:px-12 py-14 md:py-28 bg-card overflow-hidden"
    >
      <div
        className="absolute top-6 md:top-8 left-2 md:left-12 font-sans text-[25vw] md:text-[18vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        03
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div
          className={`mb-8 md:mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
            Ennen<span className="text-accent">/</span>jälkeen
          </h2>
          <p className="font-mono text-[9px] md:text-[11px] text-foreground/40 tracking-[0.1em] uppercase mt-3 md:mt-4 max-w-md">
            Esimerkkejä toteutuneista maalinpoisto- ja hiekkapuhalluskäsittelyistä.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-16">
          {beforeAfter.map((item, i) => (
            <div
              key={item.nimi}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${150 + i * 150}ms` : "0ms" }}
            >
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="relative">
                  <ImagePlaceholder label="Ennen" path={item.ennen} />
                  <span className="absolute top-2 left-2 font-mono text-[8px] md:text-[10px] bg-background/80 text-foreground/60 tracking-[0.2em] uppercase px-2 py-1">
                    Ennen
                  </span>
                </div>
                <div className="relative">
                  <ImagePlaceholder label="Jälkeen" path={item.jalkeen} />
                  <span className="absolute top-2 left-2 font-mono text-[8px] md:text-[10px] bg-background/80 text-accent tracking-[0.2em] uppercase px-2 py-1">
                    Jälkeen
                  </span>
                </div>
              </div>
              <p className="font-mono text-[10px] md:text-xs text-foreground/50 tracking-[0.1em] uppercase mt-3">
                {item.nimi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


