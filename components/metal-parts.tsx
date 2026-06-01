"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function MetalParts() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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
    <section ref={ref} className="relative px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className={visible ? "anim-cut-in" : "opacity-0"}>
            <h2 className="font-sans text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-foreground leading-none uppercase mb-4 md:mb-6">
              Ei pelkästään<br />
              <span className="text-accent">vanteille</span>.
            </h2>
            <p className="font-mono text-[9px] md:text-sm text-foreground/60 max-w-md leading-relaxed">
              Tärykiillotus, jauhemaalaus ja muut pintakäsittelyt soveltuvat myös monille auton, moottoripyörän ja teollisuuden metalliosille.
            </p>
          </div>

          {/* Right: Image */}
          <div
            className={`relative ${visible ? "anim-wipe-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/moottorinosat.jpeg"
                alt="Metalliosat pintakäsittelyssä"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-3 h-3 md:w-6 md:h-6 border-t-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-6 md:h-6 border-b-2 border-r-2 border-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
