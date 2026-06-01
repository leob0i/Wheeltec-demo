"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const programs = [
  {
    id: "01",
    title: "TÄRYKIILLOTUS",
    subtitle: "Ceramic Polish",
    description: "Ammattitasoinen tärykiillotus poistaa naarmut ja palauttaa vanteen alkuperäisen kiillon.",
    time: "2–4 h",
    level: "KAIKKI VANTEET",
  },
  {
    id: "02",
    title: "JAUHEMAALAUS",
    subtitle: "Powder Coating",
    description: "Kestävä ja tasainen jauhemaalaus kaikissa väreissä. Suojaa korroosioilta vuosiksi.",
    time: "1–2 pv",
    level: "METALLIVANTEET",
  },
  {
    id: "03",
    title: "KEMIALLINEN MAALINPOISTO",
    subtitle: "Chemical Strip",
    description: "Turvallinen kemiallinen menetelmä vanhan maalin täydelliseen poistoon ilman vauriota.",
    time: "4–8 h",
    level: "METALLIVANTEET",
  },
  {
    id: "04",
    title: "HIEKKAPUHALLUS",
    subtitle: "Sandblasting",
    description: "Tehokas hiekkapuhallus puhdistaa vanteen pintaan asti ja valmistelee tulevan käsittelyn.",
    time: "1–3 h",
    level: "KAIKKI VANTEET",
  },
  {
    id: "05",
    title: "VANTEIDEN OIKAISU",
    subtitle: "Rim Straightening",
    description: "Täsmällinen oikaisu palauttaa vaurioituneen vanteen alkuperäiseen muotoonsa.",
    time: "1–2 h",
    level: "METALLIVANTEET",
  },
]

export function ProgramGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="palvelut"
      ref={sectionRef}
      className="relative px-4 md:px-8 lg:px-12 py-5 md:py-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0 mb-3 md:mb-8">
          {/* Left: Title + description */}
          <div className="flex flex-col justify-between">
            <div>
              <span
                className={`font-mono text-[8px] md:text-[10px] text-accent tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-1 md:mb-3 ${visible ? "anim-cut-in" : "opacity-0"}`}
                style={{ animationDelay: "0.1s" }}
              >
                [Palvelut]
              </span>
              <h2 className="font-sans tracking-tighter text-foreground leading-none uppercase overflow-hidden">
                <span className={`block text-[13vw] sm:text-[10vw] md:text-8xl lg:text-9xl whitespace-nowrap ${visible ? "anim-shutter-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
                  Palvelumme<span className="text-accent">.</span>
                </span>
              </h2>
            </div>

            <div className={`mt-2 lg:mt-0 lg:pb-2 ${visible ? "anim-cut-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
              <p className="font-mono text-[9px] md:text-xs text-foreground/50 max-w-[260px] md:max-w-xs leading-relaxed mb-2 md:mb-5">
                Viisi erikoispalvelua. Yksi standardi: laatu. Jokainen vanne käsitellään huolella.
              </p>
              <div className="flex items-center gap-3 md:gap-6">
                {[
                  { v: "05", l: "Palvelua" },
                  { v: "15+", l: "Vuotta" },
                  { v: "5k+", l: "Vannetta" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-1">
                    <span className="font-sans text-base md:text-2xl text-accent leading-none">{s.v}</span>
                    <span className="font-mono text-[6px] md:text-[9px] text-foreground/35 tracking-[0.1em] uppercase">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className={`relative lg:pl-8 ${visible ? "anim-wipe-right" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/moottorinosat.jpeg"
                alt="Ammattilaisen käsittelyssä oleva vanne"
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute top-0 left-0 w-3 h-3 md:w-6 md:h-6 border-t-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-6 md:h-6 border-b-2 border-r-2 border-accent" />
              <div className="absolute bottom-2 left-2 bg-background/90 px-1.5 py-0.5 md:px-2 md:py-1">
                <span className="font-mono text-[6px] md:text-[9px] text-foreground/60 tracking-[0.12em] md:tracking-[0.2em] uppercase">
                  Oma Tila
                </span>
              </div>
            </div>
            <div className={`h-[2px] mt-1 md:mt-2 ${visible ? "line-expand" : "w-0"}`} style={{ animationDelay: "0.8s", background: "linear-gradient(90deg, #00F5C8, #009DFF)" }} />
          </div>
        </div>

        {/* Service rows */}
        <div className="border-t border-border">
          {programs.map((program, idx) => (
            <div
              key={program.id}
              className={`border-b border-border group cursor-pointer relative ${visible ? "anim-counter-pop" : "opacity-0"}`}
              style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] transition-transform duration-300 origin-top ${hoveredId === program.id ? "scale-y-100" : "scale-y-0"}`}
                style={{ background: "linear-gradient(180deg, #00F5C8, #009DFF)" }}
              />

              <div className="flex items-center justify-between py-3 md:py-6 pl-0 md:pl-4">
                {/* Left: ID + Title */}
                <div className="flex items-baseline gap-2 md:gap-8 min-w-0">
                  <span className="font-mono text-[8px] md:text-xs text-foreground/30 tabular-nums">{program.id}</span>
                  <div>
                    <h3 className={`font-sans text-xl md:text-6xl lg:text-7xl tracking-tighter leading-none uppercase transition-colors duration-300 ${hoveredId === program.id ? "text-accent" : "text-foreground"}`}>
                      {program.title}
                    </h3>
                    <span className="font-mono text-[7px] md:text-[10px] text-foreground/50 tracking-[0.08em] md:tracking-[0.2em] uppercase block">
                      {program.subtitle}
                    </span>
                  </div>
                </div>

                {/* Description - desktop only */}
                <p className={`font-mono text-xs max-w-xs leading-relaxed text-foreground/60 transition-all duration-300 hidden lg:block ${hoveredId === program.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>
                  {program.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-2 md:gap-6 shrink-0">
                  <div className="hidden sm:block">
                    <span className="font-mono text-[6px] md:text-[10px] text-foreground/35 block tracking-[0.08em] md:tracking-[0.2em] uppercase mb-0.5">Aika</span>
                    <span className="font-mono text-[8px] md:text-xs text-foreground/75">{program.time}</span>
                  </div>
                  <div className="w-[1px] h-4 md:h-8 bg-border hidden sm:block" />
                  <div>
                    <span className="font-mono text-[6px] md:text-[10px] text-foreground/35 block tracking-[0.08em] md:tracking-[0.2em] uppercase mb-0.5">Sopii</span>
                    <span className={`font-mono text-[8px] md:text-xs ${program.level === "METALLIVANTEET" ? "text-accent" : "text-foreground/75"}`}>
                      {program.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
