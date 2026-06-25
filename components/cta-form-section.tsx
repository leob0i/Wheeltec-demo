"use client"

import { useEffect, useRef, useState } from "react"

const GETFORM_URL = "https://getform.io/f/lnias1u484c"

interface CtaFormSectionProps {
  heading: string
  messagePlaceholder: string
  description?: string
  serviceName: string
}

export function CtaFormSection({
  heading,
  messagePlaceholder,
  description,
  serviceName,
}: CtaFormSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    setFiles(Array.from(e.target.files ?? []))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const fd = new FormData(e.currentTarget)
      const res = await fetch(GETFORM_URL, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      ref={ref}
      className="relative px-4 md:px-8 lg:px-12 py-16 md:py-32 bg-card overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-sans text-[45vw] md:text-[32vw] text-foreground/[0.02] leading-none">WT</span>
      </div>

      <div className="max-w-[800px] mx-auto relative z-10">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-sans text-[12vw] sm:text-5xl md:text-7xl tracking-tighter uppercase leading-[0.9] mb-8 md:mb-12">
            Tilaa<br className="md:hidden" /> {heading}<span className="text-accent">.</span>
          </h2>

          {description && (
            <p className="font-mono text-[11px] md:text-sm text-foreground/60 max-w-xl leading-relaxed mb-8 md:mb-12">
              {description}
            </p>
          )}

          {submitted ? (
            <div className="border border-accent/30 p-6 md:p-10 text-center">
              <span className="font-mono text-[10px] md:text-sm text-accent tracking-[0.2em] uppercase block mb-2">
                Viesti lähetetty
              </span>
              <p className="font-mono text-[9px] md:text-xs text-foreground/50">
                Otamme sinuun yhteyttä pian.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 md:gap-5"
              encType="multipart/form-data"
            >
              {/* Honeypot – boteille, ei ihmisille */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />
              <input type="hidden" name="service" value={serviceName} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">
                    Nimi
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Matti Meikäläinen"
                    className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/30 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">
                    Puhelin tai sähköposti
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder="+358 40 000 0000"
                    className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/30 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">
                  Viesti
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={messagePlaceholder}
                  className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/30 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">
                  Kuvat (vapaaehtoinen)
                </label>
                <label className="cursor-pointer border border-dashed border-foreground/20 hover:border-accent transition-colors px-3 py-5 md:py-7 flex flex-col items-center justify-center gap-2 group">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-foreground/40 group-hover:text-accent transition-colors"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 3v10M6 7l4-4 4 4M3 15h14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-mono text-[9px] md:text-[10px] text-foreground/50 group-hover:text-accent transition-colors tracking-[0.15em] text-center">
                    {files.length === 0
                      ? "LISÄÄ KUVIA"
                      : `${files.length} KUVA${files.length > 1 ? "A" : ""} VALITTU`}
                  </span>
                  <span className="font-mono text-[7px] md:text-[9px] text-foreground/30 tracking-[0.1em]">
                    JPG · PNG · WEBP — voit valita useamman kerralla
                  </span>
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    multiple
                    onChange={handleFiles}
                    className="sr-only"
                  />
                </label>

                {files.length > 0 && (
                  <ul className="flex flex-col gap-1 mt-1">
                    {files.map((f) => (
                      <li key={f.name} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent shrink-0" />
                        <span className="font-mono text-[8px] md:text-[9px] text-foreground/40 truncate">
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {error && (
                <p className="font-mono text-[9px] md:text-[10px] text-red-400 tracking-[0.1em]">
                  Lähetys epäonnistui. Tarkista yhteys ja yritä uudelleen.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center text-background font-mono text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase px-6 md:px-10 py-3.5 md:py-5 hover-glitch transition-transform hover:scale-[1.01] min-h-[48px] mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ background: "linear-gradient(90deg, #00F5C8, #00E5D4, #00D9FF, #009DFF)" }}
              >
                {loading ? "Lähetetään..." : "Lähetä tarjouspyyntö"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
