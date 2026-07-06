"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

function d(ms: number): React.CSSProperties {
  return { animationDelay: `${ms}ms` }
}

const grid1 = [
  { src: "/gallery/maalattu.kultainen.vanne.webp",        alt: "Maalattu kultainen vanne" },
  { src: "/gallery/maalattu.kultainen.vanne.edesta.webp", alt: "Kultainen vanne edestä" },
  { src: "/gallery/glitteri.sininen.vanne.webp",          alt: "Glitteri sininen vanne" },
  { src: "/gallery/venttiilikoppa.glitteri.webp",         alt: "Venttiilikoppa glitteri" },
]

const quoteImage = "/gallery/porshe.webp"

const grid2 = [
  { src: "/gallery/maalattu.kultainen.vanne.lahi.webp",              alt: "Kultainen vanne lähikuva" },
  { src: "/gallery/pinkkimaalattu.keskio.webp",                      alt: "Pinkki maalattu keskiö" },
  { src: "/gallery/khromi.vanne.webp",                               alt: "Kromi vanne" },
  { src: "/gallery/porsche.maalattujarrusatula.2.webp",              alt: "Porsche maalattu jarrusatula" },
]

const wideImage = { src: "/gallery/tarralipassa.kultachromi.vanne.webp", alt: "Kulta-chromi vanne" }

const grid3 = [
  { src: "/gallery/moottorinosat.webp",                      alt: "Moottorin osat pintakäsittelyssä" },
  { src: "/gallery/lippa.webp",                              alt: "Lippa" },
  { src: "/gallery/chrominen. pieni.vanne.webp",             alt: "Chrominen pieni vanne" },
  { src: "/gallery/valkoisetkeskiot.vanne.webp",             alt: "Valkoiset keskiöt vanne" },
]

function GalleryGrid({ images }: { images: typeof grid1 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-square overflow-hidden group">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/5 transition-colors duration-500" />
        </div>
      ))}
    </div>
  )
}

export default function GalleriaPage() {
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const video = videoRef.current
    const hero = heroRef.current
    if (!video || !hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          video.src = "/images/galleria.hero.video.mp4"
          video.load()
          video.play().catch(() => {})
          observer.disconnect()
        }
      },
      { threshold: 0.01 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [mounted])

  if (!mounted) return <div className="min-h-screen bg-background" />

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[60]" aria-hidden="true" />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[100svh] flex flex-col overflow-hidden bg-background select-none">
        <video
          ref={videoRef}
          poster="/images/galleria.hero.poster.webp"
          muted
          autoPlay
          loop
          playsInline
          preload="none"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden={true}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 anim-cut-in" style={d(100)} aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent hidden md:block" />
        </div>

        <div
          className="absolute top-[8%] md:top-[15%] left-0 w-[3px] h-[12vh] md:h-[40vh] anim-grow-down z-10"
          style={{ ...d(400), background: "linear-gradient(180deg, #00F5C8, #00D9FF, #009DFF)" }}
        />

        {[14, 28, 42].map((pos, i) => (
          <div
            key={pos}
            className="absolute top-0 h-full w-[1px] bg-foreground/[0.05] anim-grow-down hidden lg:block"
            style={{ left: `${pos}%`, ...d(250 + i * 100) }}
            aria-hidden="true"
          />
        ))}

        <div
          className="absolute inset-0 flex items-center justify-center font-sans text-[35vw] leading-none text-foreground/[0.025] tracking-tighter select-none pointer-events-none"
          aria-hidden="true"
        >
          GAL
        </div>

        <Nav />

        <div className="relative z-10 flex-1 flex flex-col justify-end px-4 md:px-8 lg:px-12 pb-16 md:pb-12">
          <div className="max-w-[1400px] mx-auto w-full">

            <div className="overflow-hidden mb-3 md:mb-4">
              <h1
                className="font-sans leading-[0.85] tracking-[-0.04em] uppercase anim-shutter-up text-[21vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw]"
                style={{
                  ...d(400),
                  background: "linear-gradient(90deg, #00F5C8 0%, #00D9FF 50%, #0033FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Galleria
              </h1>
            </div>

            <div className="overflow-hidden mb-5 md:mb-7">
              <h2
                className="text-base md:text-xl lg:text-2xl leading-none uppercase text-foreground/90 anim-shutter-up"
                style={{ ...d(550), letterSpacing: "0.1em", fontFamily: "'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif" }}
              >
                Wheel Tec
              </h2>
            </div>

            <p
              className="font-mono text-[11px] md:text-[13px] text-foreground/55 max-w-[90vw] md:max-w-2xl leading-relaxed anim-cut-in"
              style={d(750)}
            >
              Me ei vaan tehdä – me viimeistellään. Joka vanne, maalipinta ja hitsaussauma käy läpi
              saman tarkkuuden ja laadun. Olemme ylpeitä jäljestämme – katso itse töitämme ja anna
              laadun puhua puolestaan. Käy katsomassa tekemisiämme someista!
            </p>

            {/* CTA buttons + some-ikonit samalla rivillä */}
            <div className="flex flex-wrap items-center gap-3 mt-6 md:mt-8 anim-cut-in" style={d(820)}>
              <a
                href="/#yhteystiedot"
                className="group relative inline-flex font-mono text-[11px] text-background px-6 py-3 tracking-[0.2em] uppercase overflow-hidden min-h-[44px] items-center"
                style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
              >
                <span className="relative z-10">Ota yhteyttä</span>
                <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </a>
              <a
                href="/"
                className="inline-flex font-mono text-[11px] text-foreground/60 px-6 py-3 tracking-[0.2em] uppercase min-h-[44px] items-center border border-foreground/20 hover:border-foreground hover:text-foreground transition-all duration-300"
              >
                Etusivulle
              </a>
              <a
                href="https://www.instagram.com/wheeltec.oy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-[44px] min-h-[44px] border border-foreground/20 hover:border-accent text-foreground/50 hover:text-accent transition-all duration-300"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@wheeltec.oy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex items-center justify-center w-[44px] min-h-[44px] border border-foreground/20 hover:border-accent text-foreground/50 hover:text-accent transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* ── GRID 1 – 4 kuvaa ── */}
      <section aria-label="Galleria, osa 1">
        <GalleryGrid images={grid1} />
      </section>

      {/* ── QUOTE SECTION – koko ruutu, vasen asettelu ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <Image
          src={quoteImage}
          alt="Porsche – maalattu jarrusatula"
          fill
          sizes="100vw"
          className="object-cover object-[50%_75%]"
          priority
        />
        <div className="absolute inset-0 bg-background/[0.60]" />
        {/* Vasen reunan accent */}
        <div
          className="absolute left-0 top-0 h-full w-[3px]"
          style={{ background: "linear-gradient(180deg, transparent, #00F5C8 30%, #009DFF 70%, transparent)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 md:px-8 lg:px-12 pb-16 md:pb-20 max-w-[1400px] w-full mx-auto">

          <p className="font-sans text-[6vw] sm:text-[4.5vw] md:text-[3.2vw] lg:text-[2.6vw] leading-[1.2] tracking-[-0.02em] text-foreground max-w-4xl">
            <span
              style={{
                background: "linear-gradient(90deg, #00F5C8, #009DFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wheeltec on Lappeenrannasta käsin toimiva vannepaja, jolle ulkonäkö ja jälki ratkaisevat.
            </span>{" "}
            Tärykiillotus, jauhemaalaus, hiekkapuhallus, kemiallinen maalinpoisto, vanteen oikaisu ja korjaus
            – kaikki tehdään meillä itse, tarkalla kädellä ja parhailla materiaaleilla. Emme tee pelkkiä
            vanteita, vaan myös moottorin osia ja muita metallikohteita. Tuo osasi sisään tai lähetä postissa
            – me hoidamme loput laadulla, johon voi luottaa.
          </p>

          <div
            className="mt-8 h-[1px] w-20"
            style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
          />

          {/* WhatsApp nappi */}
          <div className="mt-6">
            <a
              href="https://wa.me/358401819581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ background: "#25D366" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* ── GRID 2 – 4 kuvaa ── */}
      <section aria-label="Galleria, osa 2">
        <div
          className="h-[1px] w-full"
          style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
        />
        <GalleryGrid images={grid2} />
      </section>

      {/* ── WIDE IMAGE ── */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <Image
          src={wideImage.src}
          alt={wideImage.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/20" />
        <div
          className="absolute bottom-0 left-0 h-[2px] w-full"
          style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
          aria-hidden="true"
        />
      </section>

      {/* ── GRID 3 – 4 kuvaa ── */}
      <section aria-label="Galleria, osa 3">
        <GalleryGrid images={grid3} />
      </section>

<div
        className="h-[1px] w-full"
        style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
        aria-hidden="true"
      />

      <Footer />
    </main>
  )
}
