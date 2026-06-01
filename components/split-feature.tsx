"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "15+", label: "Vuoden Kokemus", suffix: "" },
  { value: "5000", label: "Vannetta Käsitelty", suffix: "+" },
  { value: "98", label: "Tyytyväisyys", suffix: "%" },
  { value: "5", label: "Erikoispalvelua", suffix: "" },
]

export function SplitFeature() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Manifesto */}
        <div className="relative bg-secondary flex flex-col justify-center px-4 md:px-12 lg:px-16 py-5 md:py-24">
          <div className="absolute top-0 right-0 w-16 md:w-20 h-full diagonal-stripes opacity-20 hidden md:block" aria-hidden="true" />

          <div className={visible ? "brutal-reveal" : "opacity-0"}>
            <h2 className="font-sans text-[9vw] sm:text-4xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-[0.85] uppercase whitespace-nowrap mb-2 md:mb-8">
              Laatu Yli <span className="text-accent">Kaiken</span>.
            </h2>
            <div className="w-8 md:w-16 h-[2px] bg-accent mb-2 md:mb-8" />
            <p className="font-mono text-[9px] md:text-sm text-muted-foreground leading-relaxed max-w-md">
              Jokainen vanne on meille projekti, ei vain työ. Pintakäsittelystä oikaisuun – teemme sen oikein tai emme lainkaan. Käytämme vain ammattitason materiaaleja ja menetelmiä.
            </p>
          </div>
        </div>

        {/* Right: Stats grid */}
        <div className="relative bg-card">
          <div className="grid grid-cols-2 h-full">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-center items-center p-3 md:p-10 lg:p-12 border-border ${
                  i < 2 ? "border-b" : ""
                } ${i % 2 === 0 ? "border-r" : ""}`}
              >
                <div
                  className={visible ? "brutal-reveal" : "opacity-0"}
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <span className="font-sans text-[10vw] md:text-6xl lg:text-8xl text-foreground leading-none">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </span>
                  <span className="font-mono text-[7px] md:text-[10px] text-muted-foreground block mt-1 md:mt-3 tracking-[0.08em] md:tracking-[0.2em] uppercase text-center">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute bottom-0 right-0 w-6 h-6 md:w-16 md:h-16"
            style={{ background: "linear-gradient(135deg, #00D9FF, #009DFF)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
