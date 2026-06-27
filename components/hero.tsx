"use client"

import React from "react"
import { useEffect, useState, useRef } from "react"
import { Nav } from "./nav"

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

  useEffect(() => {
    const t = requestAnimationFrame(() => setGo(true))
    return () => cancelAnimationFrame(t)
  }, [])

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

      <Nav />

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
              className="font-sans leading-[0.85] tracking-[-0.04em] uppercase anim-shutter-up text-[26vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw]"
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
            Tärykiillotus, jauhemaalaus, vanteenoikaisu ja -korjaus — kaikki vanteen huolto yhdestä paikasta Lappeenrannassa. Teemme myös muut maalaus- ja pintakäsittelytyöt
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 mt-3 md:mt-6 anim-cut-in" style={d(900)}>
            <a
              href="tel:+358401819581"
              className="group relative font-mono text-[11px] sm:text-[9px] md:text-[11px] bg-foreground text-background px-3 sm:px-5 md:px-6 py-2 md:py-3 tracking-[0.12em] md:tracking-[0.2em] uppercase overflow-hidden min-h-[36px] md:min-h-[44px] flex items-center"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">Soita</span>
              <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }} />
            </a>
            <a
              href="/galleria"
              className="group relative font-mono text-[11px] sm:text-[9px] md:text-[11px] text-background px-3 sm:px-5 md:px-6 py-2 md:py-3 tracking-[0.12em] md:tracking-[0.2em] uppercase overflow-hidden min-h-[36px] md:min-h-[44px] flex items-center"
              style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
            >
              <span className="relative z-10">Katso töitämme</span>
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
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
