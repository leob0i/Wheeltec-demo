"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

const images = [
  {
    src: "/images/kiilloitus.jpeg",
    alt: "Kiiltävä tärykiillotettu vanne lähikuvassa",
    label: "KIILLOTUS",
    aspect: "aspect-[3/4]",
    href: "/kiilloitus",
  },
  {
    src: "/images/maalaus.webp",
    alt: "Jauhemaalattu vanne ennen ja jälkeen käsittelyn",
    label: "MAALAUS",
    aspect: "aspect-[4/5]",
    href: "/maalaus",
  },
  {
    src: "/images/kiero.vanne.webp",
    alt: "Hiekkapuhallettu vanne valmiina käsittelyyn",
    label: "OIKAISU",
    aspect: "aspect-[3/4]",
    href: "/vanteenoikaisu",
  },
  {
    src: "/images/hitsattuvanne.webp",
    alt: "Vanteen korjaus ja hitsaus",
    label: "VANTEEN KORJAUS",
    aspect: "aspect-[3/4]",
    href: "/vanteenkorjaus",
  },
  {
    src: "/images/cerakote.webp",
    alt: "Cerakote-pinnoitettu jarrusatula",
    label: "CERAKOTE",
    aspect: "aspect-[3/4]",
    href: "/cerakote",
  },
  {
    src: "/images/sandblasting.webp",
    alt: "Oikaistu ja kiillotettu vanne valmiina toimitukseen",
    label: "LIAN POISTO",
    aspect: "aspect-[4/5]",
    href: "/maalinpoisto",
  },
]

const VISIBLE_COUNT = 4

export function HeroImages() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const visibleImages = images.slice(0, VISIBLE_COUNT)
  const hiddenImages = images.slice(VISIBLE_COUNT)

  return (
    <section id="palvelut" ref={sectionRef} className="relative bg-background overflow-hidden">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-accent transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: isVisible ? "100%" : "0%" }}
      />

      {/* Section label */}
      <div className="px-4 md:px-8 lg:px-12 pt-6 md:pt-16 pb-3 md:pb-8 max-w-[1400px] mx-auto w-full">
        <div
          className="flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
          }}
        >
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-5 md:w-8 h-[2px] bg-accent" />
            <span className="font-mono text-[8px] md:text-[10px] text-accent tracking-[0.2em] md:tracking-[0.4em] uppercase">
              Palvelut
            </span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">

        {/* ── DESKTOP: grid-cols-3, kaikki kortit aina näkyvissä ── */}
        <div className="hidden md:grid grid-cols-3 gap-3 md:gap-5">
          {images.map((img, i) => {
            const offsets = [0, 48, 16, 32, 64, 24]

            const cardInner = (
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) skewY(0deg)" : "translateY(60px) skewY(2deg)",
                  transition: `opacity 800ms ease ${i * 150}ms, transform 800ms cubic-bezier(0.16,1,0.3,1) ${i * 150}ms`,
                }}
              >
                <DesktopCard img={img} />
              </div>
            )

            return img.href ? (
              <a
                key={img.label}
                href={img.href}
                className="group block"
                style={{ marginTop: offsets[i] }}
              >
                {cardInner}
              </a>
            ) : (
              <div key={img.label} className="group" style={{ marginTop: offsets[i] }}>
                {cardInner}
              </div>
            )
          })}
        </div>

        {/* ── MOBILE: 4 cards always, 5th collapsible ── */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-1.5">
            {visibleImages.map((img, i) =>
              img.href ? (
                <a key={img.label} href={img.href} className="group block">
                  <MobileCard img={img} i={i} isVisible={isVisible} />
                </a>
              ) : (
                <div key={img.label} className="group">
                  <MobileCard img={img} i={i} isVisible={isVisible} />
                </div>
              )
            )}
          </div>

          {/* Collapsible 5th card */}
          <div
            style={{
              maxHeight: showAll ? "700px" : "0",
              opacity: showAll ? 1 : 0,
              overflow: "hidden",
              transition:
                "max-height 450ms cubic-bezier(0.16,1,0.3,1), opacity 380ms ease",
            }}
          >
            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              {hiddenImages.map((img) =>
                img.href ? (
                  <a key={img.label} href={img.href} className="group block">
                    <MobileCard img={img} i={0} isVisible={showAll} />
                  </a>
                ) : (
                  <div key={img.label} className="group">
                    <MobileCard img={img} i={0} isVisible={showAll} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── "Katso kaikki palvelut" button — vain mobiilissa ── */}
      <div className="md:hidden px-4 pt-6 pb-8 max-w-[1400px] mx-auto w-full flex justify-center">
        <button
          onClick={() => setShowAll((v) => !v)}
          className="group flex items-center justify-center gap-3 w-full md:w-auto font-mono text-[11px] md:text-[11px] tracking-[0.22em] uppercase px-8 md:px-12 py-4 md:py-3.5 border border-foreground/20 hover:border-accent text-foreground/45 hover:text-accent transition-all duration-300 min-h-[52px] md:min-h-[46px] active:scale-[0.98]"
          aria-expanded={showAll}
        >
          <span>{showAll ? "Näytä vähemmän" : "Katso kaikki palvelut"}</span>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            className={`text-current transition-transform duration-350 ${showAll ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path
              d="M1 1l4.5 4.5L10 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>


    </section>
  )
}

function DesktopCard({ img }: { img: (typeof images)[0] }) {
  return (
    <div className={`relative overflow-hidden ${img.aspect}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      {/* Dark gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

      {/* Subtle overall tint on non-hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

      {/* Accent bar bottom (hover) */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" />

      {/* Corner accents (hover) */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/0 group-hover:border-accent transition-colors duration-300" />

      {/* Label flush at card bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[1]">
        <div className="bg-background/80 backdrop-blur-[4px] px-4 py-3 md:px-5 md:py-4 flex items-end justify-between gap-2">
          <span className="font-sans text-foreground text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none font-light block">
            {img.label}
            {img.labelLine2 && (
              <>
                <br />
                {img.labelLine2}
              </>
            )}
          </span>
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 pb-1">
            <div className="h-[1px] w-4 bg-accent" />
            <svg
              width="9"
              height="9"
              viewBox="0 0 12 12"
              fill="none"
              className="text-accent"
              aria-hidden="true"
            >
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileCard({
  img,
  i,
  isVisible,
}: {
  img: (typeof images)[0]
  i: number
  isVisible: boolean
}) {
  return (
    <div
      className="transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${i * 80}ms`,
      }}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image src={img.src} alt={img.alt} fill className="object-cover" />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />

        {/* Label flush at card bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-[1]">
          <div className="bg-background/80 backdrop-blur-[4px] px-3 py-2.5 flex items-end justify-between gap-2">
            <span className="font-sans text-foreground text-2xl tracking-tighter leading-none font-light block">
              {img.label}
              {img.labelLine2 && (
                <>
                  <br />
                  {img.labelLine2}
                </>
              )}
            </span>
            <div className="flex items-center gap-1 shrink-0 pb-0.5">
              <div className="h-[1px] w-3 bg-accent" />
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none" className="text-accent" aria-hidden="true">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
