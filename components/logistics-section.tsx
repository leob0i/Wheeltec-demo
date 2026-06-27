"use client"

import { useEffect, useRef, useState } from "react"

export function LogisticsSection() {
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
        className="absolute right-0 bottom-0 font-sans text-[35vw] md:text-[22vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        TOIMITUS
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-[1px] w-8 bg-accent shrink-0" />
            <span className="font-mono text-[9px] md:text-[10px] text-accent tracking-[0.25em] uppercase">
              Toimitus
            </span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl tracking-tighter uppercase leading-none mb-3 md:mb-5">
            Osa voidaan tuoda<br />tai lähettää<span className="text-accent">.</span>
          </h3>
          <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed">
            Voit toimittaa osat suoraan Wheeltecille tai lähettää ne meille postitse tai Matkahuollon kautta. Käsittelyn jälkeen osat voidaan noutaa tai lähettää takaisin asiakkaalle.
          </p>
        </div>
      </div>
    </section>
  )
}
