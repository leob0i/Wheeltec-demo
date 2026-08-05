"use client";

import { useState, useEffect, useRef } from "react";

const categories = ["MAALAUS", "KIILLOTUS", "OIKAISU"];

const categoryNotes: Record<string, string> = {
  MAALAUS: "HINNAT OVAT PERUSVÄREILLÄ — KYSY TARJOUS ERIKOISVÄREISTÄ!",
};

const hinnasto: Record<
  string,
  Array<{
    price: string;
    name: string;
    paketti: string;
    kesto: string;
    paikat: number;
  }>
> = {
  MAALAUS: [
    { price: "ALK450€", name: "VANTEIDEN MAALAUS", paketti: "ILMAN LAKKAUSTA", kesto: "LAKKAUS +150€", paikat: 5 },
    { price: "ALK50€", name: "AUTON JARRUSATULAT", paketti: "PER KPL", kesto: "", paikat: 5 },
    { price: "ALK280€", name: "MOOTTORIPYÖRÄN VANTEET", paketti: "", kesto: "", paikat: 5 },
    { price: "ALK100€", name: "4SYL VENTTIILIKOPPA", paketti: "", kesto: "", paikat: 5 },
    { price: "ALK130€", name: "6SYL VENTTIILIKOPPA", paketti: "", kesto: "", paikat: 5 },
    { price: "ALK350€", name: "MOOTTORIPYÖRÄN RUNKO", paketti: "SIS PUHALLUKSEN", kesto: "", paikat: 5 },
  ],
  KIILLOTUS: [
    { price: "ALK600€", name: "TÄRYKIILLOTUS VANNESARJA", paketti: "", kesto: "", paikat: 5 },
    { price: "ALK350€", name: "VANTEIDEN KESKIÖT", paketti: "", kesto: "", paikat: 5 },
    { price: "ALK70€", name: "VANTEIDEN LIPPOJEN KIILLOTUS", paketti: "PER LIPPA", kesto: "KÄSIKONEELLA", paikat: 5 },
  ],
  OIKAISU: [
    { price: "Alk 80€", name: "VANTEEN OIKAISU", paketti: "ALLE 1MM HEITTO", kesto: "ISOMMAT ALK80€", paikat: 5 },
    { price: "15€", name: "VANTEIDEN SUORUUDEN TARKISTUS", paketti: "PER VANNE", kesto: "10€ KOKO SARJA", paikat: 5 },
  ],
};


export function ScheduleBlock() {
  const [activeCategory, setActiveCategory] = useState("MAALAUS");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const currentList = hinnasto[activeCategory] || [];
  const totalServices = currentList.length;
  const minPrice = currentList.reduce((min, s) => {
    const match = s.price.match(/\d+/);
    const val = match ? parseInt(match[0]) : 9999;
    return val < min ? val : min;
  }, 9999);

  return (
    <section
      ref={sectionRef}
      id="hinnasto"
      className="relative px-4 md:px-8 lg:px-12 py-5 md:py-20 bg-card overflow-hidden"
    >
      <div
        className="absolute top-6 md:top-8 right-2 md:right-12 font-sans text-[25vw] md:text-[18vw] leading-none text-foreground/[0.02] tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
      >
        {String(totalServices).padStart(2, "0")}
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div
          className={`mb-3 md:mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4">
            <div>
              <h2 className="font-sans text-[11vw] sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none uppercase whitespace-nowrap">
                Hinnasto<span className="text-accent">.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1 md:gap-2">
              <p className="font-mono text-[9px] md:text-xs text-foreground/50 max-w-xs leading-relaxed text-left md:text-right">
                Hinnat ovat suuntaa-antavia. Lopullinen hinta sovitaan arvion perusteella.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`h-[1px] bg-foreground/10 transition-all duration-1000 origin-left ${visible ? "scale-x-100" : "scale-x-0"}`}
        />

        <div
          className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex border-b border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 py-2 md:py-4 font-mono text-[8px] md:text-xs tracking-[0.08em] md:tracking-[0.2em] text-center transition-all relative min-h-[40px] ${
                  activeCategory === cat
                    ? "text-accent"
                    : "text-foreground/30 hover:text-foreground/70 active:text-foreground"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
                )}
              </button>
            ))}
          </div>
        </div>

        {categoryNotes[activeCategory] && (
          <div className="py-2 border-b border-foreground/5">
            <span className="font-mono text-[8px] md:text-[10px] text-accent/70 tracking-[0.12em]">
              * {categoryNotes[activeCategory]}
            </span>
          </div>
        )}

        <div className="border-b border-border">
          {currentList.map((slot, i) => (
            <div
              key={`${activeCategory}-${slot.name}-${slot.paketti}-${i}`}
              className={`flex flex-wrap items-center justify-between gap-y-1 py-2.5 md:py-5 border-t border-foreground/5 group hover:bg-foreground/[0.02] transition-all px-0 md:px-4 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{
                transitionDuration: "500ms",
                transitionDelay: visible ? `${300 + i * 80}ms` : "0ms",
              }}
            >
              <div className="flex items-center gap-2 md:gap-8 min-w-0">
                <span className="font-mono text-[9px] md:text-base text-foreground/50 w-12 md:w-20 tabular-nums shrink-0">
                  {slot.price}
                </span>
                <div className="flex items-center gap-1 md:gap-3">
                  <span
                    className={`w-0.5 md:w-1 h-4 md:h-8 transition-colors ${slot.paikat === 0 ? "bg-accent/50" : "bg-foreground/15"} group-hover:bg-accent`}
                  />
                  <span className="font-sans text-base sm:text-lg md:text-3xl lg:text-4xl text-foreground tracking-tighter uppercase group-hover:text-accent transition-colors truncate">
                    {slot.name}
                  </span>
                </div>
              </div>

              {(slot.paketti || slot.kesto) && (
                <div className="flex items-center gap-2 md:gap-8 shrink-0 w-full md:w-auto pl-8 md:pl-0">
                  {slot.paketti && (
                    <span className="font-mono text-[7px] md:text-[9px] text-foreground/30 tracking-[0.1em]">
                      {slot.paketti}
                    </span>
                  )}
                  {slot.kesto && (
                    <span className="font-mono text-[7px] md:text-[9px] text-foreground/30 tracking-[0.1em]">
                      {slot.kesto}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`flex items-center justify-between pt-1.5 md:pt-4 transition-all duration-700 ${visible ? "opacity-100 delay-700" : "opacity-0"}`}
        >
          <span className="font-mono text-[6px] md:text-[10px] text-foreground/25 tracking-[0.08em] md:tracking-[0.2em]">
            HINNAT ALV 0%
          </span>
          <span className="font-mono text-[6px] md:text-[10px] text-foreground/25 tracking-[0.08em] md:tracking-[0.2em] hidden md:block">
            TARKKA HINTA ARVION MUKAAN
          </span>
        </div>
      </div>
    </section>
  );
}
