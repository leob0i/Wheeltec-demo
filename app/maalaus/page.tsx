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

const palvelut = [
  {
    id: "01",
    nimi: "Vanteiden maalaus",
    hinta: "alk. 450 €",
    kuvaus: "Ilman lakkausta. Lakkaus +150 €.",
  },
  {
    id: "02",
    nimi: "Auton jarrusatulat",
    hinta: "alk. 50 €",
    kuvaus: "Per kpl.",
  },
  {
    id: "03",
    nimi: "Moottoripyörän vanteet",
    hinta: "alk. 280 €",
    kuvaus: "",
  },
  {
    id: "04",
    nimi: "4-syl venttiilikopa",
    hinta: "alk. 100 €",
    kuvaus: "",
  },
  {
    id: "05",
    nimi: "6-syl venttiilikopa",
    hinta: "alk. 130 €",
    kuvaus: "",
  },
  {
    id: "06",
    nimi: "Moottoripyörän runko",
    hinta: "alk. 350 €",
    kuvaus: "Sisältää puhalluksen.",
  },
]

const prosessi = [
  {
    n: "01",
    otsikko: "Arvio",
    teksti: "Lähetä kuva tai tuo vanne. Katsotaan kunto, väritoive ja valitaan sopiva menetelmä.",
  },
  {
    n: "02",
    otsikko: "Esikäsittely",
    teksti:
      "Pinta puhdistetaan vanhan maalin jäänteistä hiekkapuhalluksella tai kemiallisella maalinpoistolla — riippuen materiaalista ja tilanteesta. Tämä vaihe on kriittinen: maalipinta pysyy vain puhtaassa pinnassa.",
  },
  {
    n: "03",
    otsikko: "Pohjamaali",
    teksti:
      "Puhdistetulle pinnalle levitetään pohjamaali tai primerkerros joka parantaa pintamaalin tarttuvuutta ja suojaa metallia korroosiolta.",
  },
  {
    n: "04",
    otsikko: "Maalaus",
    teksti:
      "Jauhemaalaus levitetään sähköstaattisesti ja kovetetaan uunissa. Märkämaalauksessa väri levitetään tasaisesti ja kuivatetaan huolellisesti.",
  },
  {
    n: "05",
    otsikko: "Viimeistely",
    teksti:
      "Pinta tarkistetaan käsin. Mahdollinen lakkakerros levitetään kiillon tai suojan vuoksi. Valmis luovutettavaksi.",
  },
]

export default function MaalausPage() {
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
      <PrepSection />
      <ServicesSection />
      <CtaFormSection
        heading="maalaus"
        serviceName="Maalaus"
        messagePlaceholder="Kerro väritoive, vanteiden malli ja mitä osia haluat maalata — tarvittaessa sovitaan arvio paikan päällä."
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

  if (!go) return <div className="h-screen bg-background" />

  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-background select-none">
      {/* Background video */}
      <div className="absolute inset-0 anim-cut-in" style={d(100)} aria-hidden="true">
        <video
          src="/images/maalaus.web.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
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
              className="font-sans text-[30vw] sm:text-[17vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-[-0.04em] uppercase anim-shutter-up shimmer-text"
              style={d(400)}
            >
              Maalaus
            </h1>
          </div>

          {/* Tagline */}
          <div
            className="flex items-center justify-start gap-3 mb-3 md:mb-5 anim-wipe-right"
            style={d(550)}
          >
            <div className="h-[1.5px] w-6 md:w-16 bg-accent" />
            <span className="font-mono text-[13px] md:text-xs text-accent tracking-[0.2em] md:tracking-[0.4em] uppercase">
              Koko Suomi / Lappeenranta
            </span>
          </div>

          {/* Copy */}
          <p
            className="font-mono text-sm md:text-[13px] text-foreground/60 max-w-xs md:max-w-md leading-relaxed anim-cut-in"
            style={d(800)}
          >
            Jauhemaalaus vanteille ja muille metalliosille — kestävä pinta, tarkka sävy, ammattimainen tulos.
          </p>

          {/* CTAs */}
          <div
            className="flex items-center justify-start gap-3 mt-5 md:mt-8 anim-cut-in"
            style={d(950)}
          >
            <a
              href="#palvelut"
              className="group relative font-mono text-[11px] bg-foreground text-background px-5 md:px-7 py-2.5 md:py-3 tracking-[0.15em] md:tracking-[0.2em] uppercase overflow-hidden min-h-[40px] md:min-h-[44px] flex items-center"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                Katso hinnat
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
        VÄRI
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
              Vanteiden<br />maalaus<span className="text-accent">.</span>
            </h2>

            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
                Jauhemaalaus on ammattimaisin tapa maalata metallivanteet. Jauheväri levitetään sähköstaattisesti ja kovetetaan uunissa noin 180–200 asteessa — tuloksena pinta, joka on moninkertaisesti kestävämpi kuin märkämaali tai tarrapinnoite.
              </p>
              <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
                Jauhemaalattu vanne kestää iskuja, hiekkaa, tienpintaa ja UV-valoa ilman, että väri haalistuisi tai hilseilee. Värivalikoima on laaja — mattamustat, metallihopedet, satiinipinnat ja erikoisefektit kaikki onnistuvat.
              </p>
              <p className="font-mono text-[11px] md:text-sm text-foreground leading-relaxed">
                Wheeltecillä maalaamme sekä kokonaisia vannesarjoja että yksittäisiä vanteita. Kysy myös erikoisväreistä tai räätälöidyistä efekteistä — toteutamme asiakkaan vision alusta loppuun.
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
              src="/images/maalaus.jpeg"
              alt="Maalattu vanne"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
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
      id="palvelut"
      ref={ref}
      className="relative px-4 md:px-8 lg:px-12 pt-0 pb-14 md:pb-28 bg-card overflow-hidden"
    >
      <div
        className="absolute top-6 md:top-8 right-2 md:right-12 font-sans text-[25vw] md:text-[18vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        03
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div
          className={`pt-10 md:pt-14 mb-5 md:mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
            Hinnat<span className="text-accent">.</span>
          </h2>
          <p className="font-mono text-[9px] md:text-[11px] text-foreground/40 tracking-[0.1em] uppercase mt-3 md:mt-4">
            Hinnat ovat perusväreillä — kysy tarjous erikoisväristä!
          </p>
        </div>

        <div
          className={`h-[1px] bg-foreground/10 transition-all duration-1000 origin-left ${
            visible ? "scale-x-100" : "scale-x-0"
          }`}
        />

        {/* Service rows */}
        <div className="border-b border-border">
          {palvelut.map((p, i) => (
            <div
              key={p.id}
              className={`py-6 md:py-10 border-t border-foreground/5 group hover:bg-foreground/[0.02] transition-all px-0 md:px-4 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDuration: "600ms",
                transitionDelay: visible ? `${200 + i * 120}ms` : "0ms",
              }}
            >
              <div className="grid grid-cols-[2rem_1fr] md:grid-cols-[2rem_1fr_auto] gap-x-4 md:gap-x-8 gap-y-2 items-start">
                <span className="font-mono text-[9px] text-foreground/25 tracking-[0.2em] pt-1 md:pt-2">
                  {p.id}
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-2">
                    <span className="w-0.5 md:w-1 h-5 md:h-8 shrink-0 transition-colors bg-foreground/15 group-hover:bg-accent" />
                    <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase group-hover:text-accent transition-colors leading-none">
                      {p.nimi}
                    </h3>
                  </div>
                  {p.kuvaus && (
                    <p className="font-mono text-[9px] md:text-[11px] text-foreground/40 leading-relaxed pl-2.5 md:pl-5">
                      {p.kuvaus}
                    </p>
                  )}
                </div>

                <div className="col-span-2 md:col-span-1 flex md:justify-end pl-8 md:pl-0 md:pt-1">
                  <span className="font-sans text-xl md:text-2xl lg:text-3xl tracking-tighter text-accent">
                    {p.hinta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex items-center justify-between pt-2 md:pt-4 transition-all duration-700 ${
            visible ? "opacity-100 delay-700" : "opacity-0"
          }`}
        >
          <span className="font-mono text-[6px] md:text-[10px] text-foreground/25 tracking-[0.1em] md:tracking-[0.2em]">
            HINNAT ALV 0%
          </span>
          <span className="font-mono text-[6px] md:text-[10px] text-foreground/25 tracking-[0.1em] md:tracking-[0.2em] hidden md:block">
            Tarkka hinta arvion mukaan.
          </span>
        </div>
      </div>
    </section>
  )
}

function PrepSection() {
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
      <div
        className="absolute left-0 top-0 font-sans text-[40vw] md:text-[25vw] leading-none text-foreground/[0.025] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        PINTA
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-sans text-[11vw] sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none mb-6 md:mb-8">
            Maalaamme muutkin kuin vanteet<span className="text-accent">.</span>
          </h2>
          <p className="font-mono text-[11px] md:text-sm text-foreground leading-relaxed mb-4">
            Maalaamme myös muut osat kuin vanteet — esimerkiksi venttiilikopat, jarrusatulat ja muut metalliset pienet osat käsitellään ja maalataan samalla huolella.
          </p>
          <div
            className={`flex items-center gap-3 my-6 md:my-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="h-[1px] w-8 bg-accent shrink-0" />
            <span className="font-mono text-[9px] md:text-[10px] text-accent tracking-[0.25em] uppercase">
              Ennen maalausta
            </span>
          </div>
          <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
            Kaikki osat puhdistetaan vanhan maalin jäänteistä joko <span className="text-foreground">hiekkapuhalluksella</span> tai <span className="text-foreground">kemiallisella maalinpoistolla</span> — menetelmä valitaan materiaalin ja tilanteen mukaan. Tämä on se vaihe, jota ei oikaista.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/gallery/porsche.maalattujarrusatula.2.png"
                alt="Maalattu jarrusatula"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/gallery/venttiilikoppa.glitteri.png"
                alt="Glitterimaalattu venttiilikoppa"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6 md:mt-8">
            <Link
              href="/galleria"
              className="inline-flex items-center font-mono text-[11px] text-foreground/50 hover:text-foreground transition-colors uppercase tracking-[0.15em] min-h-[40px] border border-foreground/10 hover:border-foreground/30 px-5 py-2.5"
            >
              Katso töitämme
            </Link>
            <Link
              href="/maalinpoisto"
              className="inline-flex items-center font-mono text-[11px] text-foreground/50 hover:text-foreground transition-colors uppercase tracking-[0.15em] min-h-[40px] border border-foreground/10 hover:border-foreground/30 px-5 py-2.5"
            >
              Lue lisää esikäsittelystä
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



