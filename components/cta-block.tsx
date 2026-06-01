"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function CtaBlock() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : null)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="yhteystiedot" ref={ref} className="relative px-4 md:px-8 py-8 md:py-32 overflow-hidden">
      <Image
        src="/images/kultanen.vanne.webp"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <span className="font-sans text-[40vw] md:text-[35vw] text-foreground/[0.02] leading-none">WT</span>
      </div>

      <div className="max-w-[800px] mx-auto relative z-10">
        <div className={visible ? "brutal-reveal" : "opacity-0"}>
          <h2 className="font-sans text-[10vw] sm:text-5xl md:text-[8vw] lg:text-[6vw] tracking-tighter text-foreground leading-[0.85] uppercase mb-6 md:mb-12">
            Ota yhteyttä
          </h2>

          {submitted ? (
            <div className="border border-accent/30 p-6 md:p-10 text-center">
              <span className="font-mono text-[10px] md:text-sm text-accent tracking-[0.2em] uppercase block mb-2">Viesti lähetetty</span>
              <p className="font-mono text-[9px] md:text-xs text-foreground/50">Otamme sinuun yhteyttä pian.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">Nimi</label>
                  <input
                    type="text"
                    required
                    placeholder="Matti Meikäläinen"
                    className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/60 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">Puhelin tai Sähköposti</label>
                  <input
                    type="text"
                    required
                    placeholder="+358 40 000 0000"
                    className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/60 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">Viesti</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Kerro toiveistasi – esim. vannemalli, väri tai muu käsittely..."
                  className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/60 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">
                  Liite (kuva tai PDF)
                </label>
                <label className="cursor-pointer border border-dashed border-foreground/20 hover:border-accent transition-colors px-3 py-4 md:py-6 flex flex-col items-center justify-center gap-1.5 group">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground/70 group-hover:text-accent transition-colors" aria-hidden="true">
                    <path d="M10 3v10M6 7l4-4 4 4M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-[9px] md:text-[10px] text-foreground/80 group-hover:text-accent transition-colors tracking-[0.15em] text-center break-all px-2">
                    {fileName ?? "LISÄÄ TIEDOSTO"}
                  </span>
                  <span className="font-mono text-[7px] md:text-[9px] text-foreground/60 tracking-[0.1em]">JPG · PNG · WEBP · PDF</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center text-background font-mono text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase px-6 md:px-10 py-3.5 md:py-5 hover-glitch transition-transform hover:scale-[1.02] min-h-[48px] mt-1"
                style={{ background: "linear-gradient(90deg, #00F5C8, #00E5D4, #00D9FF, #009DFF)" }}
              >
                Lähetä Viesti
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
