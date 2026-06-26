"use client"

import React, { useEffect, useState } from "react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

function d(ms: number): React.CSSProperties {
  return { animationDelay: `${ms}ms` }
}

export default function GalleriaPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-background" />

  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen flex flex-col">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[60]" aria-hidden="true" />
      <Nav />

      <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 pt-32 pb-24 relative overflow-hidden">
        {/* Accent shard */}
        <div
          className="absolute top-[15%] left-0 w-[3px] h-[30vh] anim-grow-down z-10"
          style={{ ...d(400), background: "linear-gradient(180deg, #00F5C8, #00D9FF, #009DFF)" }}
        />

        {/* Background watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center font-sans text-[40vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
          aria-hidden="true"
        >
          GAL
        </div>

        {/* Grid lines desktop */}
        {[14, 28, 42].map((pos, i) => (
          <div
            key={pos}
            className="absolute top-0 h-full w-[1px] bg-foreground/[0.05] anim-grow-down hidden lg:block"
            style={{ left: `${pos}%`, ...d(250 + i * 100) }}
            aria-hidden="true"
          />
        ))}

        <div className="relative z-10 text-center max-w-xl mx-auto">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6 anim-wipe-right" style={d(300)}>
            <div className="h-[1.5px] w-8 bg-accent" />
            <span className="font-mono text-[10px] text-accent tracking-[0.35em] uppercase">
              Galleria
            </span>
            <div className="h-[1.5px] w-8 bg-accent" />
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-5">
            <h1
              className="font-sans text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[9vw] leading-none tracking-[-0.04em] uppercase anim-shutter-up"
              style={d(400)}
            >
              Tulossa<br />pian
            </h1>
          </div>

          {/* Divider */}
          <div
            className="h-[1px] w-24 mx-auto mb-6 anim-width-expand"
            style={{ ...d(600), background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
          />

          {/* Subtext */}
          <p
            className="font-mono text-[11px] md:text-sm text-foreground/50 leading-relaxed anim-cut-in"
            style={d(700)}
          >
            Rakennamme galleriaa parhaillaan. Pian näet täällä työmme tulokset.
          </p>

          {/* CTA */}
          <div className="mt-8 anim-cut-in" style={d(900)}>
            <a
              href="/#yhteystiedot"
              className="group relative inline-flex font-mono text-[11px] text-background px-6 py-3 tracking-[0.2em] uppercase overflow-hidden min-h-[44px] items-center"
              style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
            >
              <span className="relative z-10">Ota yhteyttä</span>
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
