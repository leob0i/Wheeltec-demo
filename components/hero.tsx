"use client"

import React from "react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

function Counter({
  target,
  suffix = "",
  go = false,
}: {
  target: number
  suffix?: string
  go?: boolean
}) {
  const [val, setVal] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!go) return
    const dur = 900
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setVal(Math.floor(ease * target))
      if (t < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [go, target])

  return (
    <span>
      {val}
      {suffix}
    </span>
  )
}

function d(ms: number): React.CSSProperties {
  return { animationDelay: `${ms}ms` }
}

export function Hero() {
  const [go, setGo] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [palvelutOpen, setPalvelutOpen] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setGo(true))
    return () => cancelAnimationFrame(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  if (!go) return <section className="min-h-screen bg-background" />

  return (
    <section className="relative h-[100svh] flex flex-col overflow-hidden bg-background select-none">
      {/* ── Background video ── */}
      <div className="absolute inset-0 anim-cut-in" style={d(100)} aria-hidden="true">
        <video
          src="/images/herowt.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent md:hidden" />
        <div className="absolute inset-0 bg-background/10 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/30 to-background/5 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/25 to-transparent hidden md:block" />
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

      {/* ── NAV ── */}
      <nav className="relative z-20 flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 md:py-6 anim-cut-in" style={d(100)}>
        <div className="flex items-center anim-snap-in" style={d(150)}>
          <Image
            src="/images/wt.logo.png"
            alt="WheelTec logo"
            width={160}
            height={48}
            className="h-14 md:h-20 w-auto object-contain -my-3 md:-my-5"
            priority
          />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {/* Palvelut dropdown */}
          <div
            className="relative anim-cut-in"
            style={d(200)}
            onMouseEnter={() => setPalvelutOpen(true)}
            onMouseLeave={() => setPalvelutOpen(false)}
          >
            <button className="group relative font-mono text-[11px] tracking-[0.25em] text-foreground/50 hover:text-foreground transition-colors uppercase flex items-center gap-1.5">
              Palvelut
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className={`transition-transform duration-200 ${palvelutOpen ? "rotate-180" : ""}`} aria-hidden="true">
                <path d="M1 2l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
            <div className={`absolute top-full left-0 pt-3 transition-all duration-200 ${palvelutOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}>
              <div className="bg-background/95 backdrop-blur-sm border border-foreground/10 py-2 min-w-[160px]">
                {["Kiilloitus", "Maalaus", "Oikaisu", "Maalinpoisto"].map((sub) => (
                  <a
                    key={sub}
                    href="#palvelut"
                    className="block px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-foreground/50 hover:text-accent hover:bg-foreground/5 transition-colors uppercase"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Muut linkit */}
          {["Hinnasto", "Galleria", "Yhteystiedot"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative font-mono text-[11px] tracking-[0.25em] text-foreground/50 hover:text-foreground transition-colors uppercase anim-cut-in"
              style={d(260 + i * 60)}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <span className="font-mono text-[9px] text-foreground/30 hidden md:block tracking-[0.15em] anim-cut-in" style={d(300)}>
            EST. 2024
          </span>
          <a
            href="#yhteystiedot"
            className="relative font-mono text-[11px] md:text-[11px] text-background px-3 md:px-5 py-2 md:py-2.5 tracking-[0.15em] uppercase overflow-hidden group anim-snap-in min-h-[36px] md:min-h-[40px] flex items-center"
            style={{ ...d(350), background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
          >
            <span className="relative z-10">Ota Yhteyttä</span>
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 min-h-[36px] min-w-[36px] items-center justify-center anim-cut-in"
            style={d(350)}
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            aria-expanded={menuOpen}
          >
            <span className={`w-5 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-3 right-4 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Sulje valikko"
        >
          <span className="w-5 h-[1.5px] bg-foreground block rotate-45 absolute" />
          <span className="w-5 h-[1.5px] bg-foreground block -rotate-45 absolute" />
        </button>
        {[
          { label: "Kiilloitus",    href: "#palvelut" },
          { label: "Maalaus",       href: "#palvelut" },
          { label: "Oikaisu",       href: "#palvelut" },
          { label: "Maalinpoisto",  href: "#palvelut" },
          { label: "Hinnasto",      href: "#hinnasto" },
          { label: "Galleria",      href: "#galleria" },
          { label: "Yhteystiedot",  href: "#yhteystiedot" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-sans text-4xl tracking-tighter text-foreground uppercase hover:text-accent transition-colors min-h-[48px] flex items-center"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 md:px-8 lg:px-12 pb-20 md:pb-8">
        <div className="max-w-[1400px] mx-auto w-full text-center md:text-left">
          {/* Tagline */}
          <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 mb-2 md:mb-5 anim-wipe-right" style={d(300)}>
            <div className="h-[1.5px] w-5 md:w-16 bg-accent" />
            <span className="font-mono text-[11px] md:text-xs text-accent tracking-[0.15em] md:tracking-[0.4em] uppercase">
              Kun ulkonäkö ratkaisee
            </span>
            <div className="h-[1.5px] w-5 bg-accent md:hidden" />
          </div>

          {/* Headline */}
          <div className="relative mb-2 md:mb-0 overflow-hidden">
            <h1
              className="font-sans leading-[0.85] tracking-[-0.04em] uppercase anim-shutter-up text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw]"
              style={{
                ...d(400),
                background: "linear-gradient(90deg, #00F5C8 0%, #00D9FF 50%, #0033FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wheeltec
            </h1>
          </div>

          {/* Copy */}
          <p className="font-mono text-xs sm:text-[10px] md:text-[13px] text-foreground/60 max-w-[240px] sm:max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed anim-cut-in" style={d(800)}>
            Tärykiillotus, jauhemaalaus, hiekkapuhallus ja oikaisu – kaikki mitä vanteesi tarvitsee. Myös muut maalaustyöt.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 mt-3 md:mt-6 anim-cut-in" style={d(900)}>
            <a
              href="#palvelut"
              className="group relative font-mono text-[11px] sm:text-[9px] md:text-[11px] bg-foreground text-background px-3 sm:px-5 md:px-6 py-2 md:py-3 tracking-[0.12em] md:tracking-[0.2em] uppercase overflow-hidden min-h-[36px] md:min-h-[44px] flex items-center"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">Katso Palvelut</span>
              <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }} />
            </a>
            <a
              href="#hinnasto"
              className="font-mono text-[11px] sm:text-[9px] md:text-[11px] text-foreground/60 px-3 sm:px-5 md:px-6 py-2 md:py-3 tracking-[0.12em] md:tracking-[0.2em] uppercase border border-foreground/20 hover:border-foreground hover:text-foreground transition-all min-h-[36px] md:min-h-[44px] flex items-center"
            >
              Hinnasto
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar desktop only */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 pb-4 md:pb-6 hidden md:block">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full anim-cut-in" style={d(1000)}>
          <div className="flex items-center gap-6">
            {["MA–PE 08–17", "LA 09–14", "SULJETTU SU"].map((info, i) => (
              <span key={info} className="font-mono text-[9px] text-foreground/40 tracking-[0.2em] uppercase">
                {i > 0 && <span className="text-accent mr-6">/</span>}
                {info}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[1px] w-full anim-width-expand"
        style={{ ...d(600), background: "linear-gradient(90deg, #00F5C8, #00D9FF, #009DFF)" }}
      />
    </section>
  )
}
