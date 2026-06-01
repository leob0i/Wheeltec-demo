"use client"

import { useEffect, useRef, useState } from "react"

export function CtaBlock() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="yhteystiedot" ref={ref} className="relative px-4 md:px-8 py-8 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <span className="font-sans text-[40vw] md:text-[35vw] text-foreground/[0.02] leading-none">WT</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 text-center">
        <div className={visible ? "brutal-reveal" : "opacity-0"}>
          <span className="font-mono text-[9px] md:text-[10px] text-accent tracking-[0.25em] md:tracking-[0.3em] uppercase block mb-4 md:mb-8">
            [Ota Yhteyttä]
          </span>
          <h2 className="font-sans text-[10vw] sm:text-5xl md:text-[10vw] lg:text-[8vw] tracking-tighter text-foreground leading-[0.85] uppercase mb-3 md:mb-12">
            Pyydä
            <br />
            <span className="text-accent">Ilmainen</span> Arvio.
          </h2>
          <p className="font-mono text-[9px] md:text-sm text-muted-foreground max-w-sm md:max-w-lg mx-auto leading-relaxed mb-4 md:mb-12">
            Tuo vanteesi. Kerro toiveesi.
            <br />
            Me teemme loput.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 md:gap-4">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center text-background font-mono text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase px-6 md:px-10 py-3.5 md:py-5 hover-glitch transition-transform hover:scale-[1.02] min-h-[48px]"
              style={{ background: "linear-gradient(90deg, #00F5C8, #00E5D4, #00D9FF, #009DFF)" }}
            >
              Pyydä Tarjous
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-foreground text-foreground font-mono text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase px-6 md:px-10 py-3.5 md:py-5 hover:bg-foreground hover:text-background transition-colors min-h-[48px]"
            >
              Soita Meille
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
