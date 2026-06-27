"use client"

import { useEffect, useRef, useState } from "react"

const CONTACT_URL = "/api/contact"

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
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        body: fd,
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
          <h2 className="font-sans text-[12vw] sm:text-5xl md:text-7xl tracking-tighter uppercase leading-[0.9] mb-4 md:mb-6">
            Tilaa<br className="md:hidden" /> {heading}<span className="text-accent">.</span>
          </h2>

          <a
            href="https://wa.me/358401819581"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white mb-4 md:mb-6 transition-opacity hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          {description && (
            <p className="font-mono text-[11px] md:text-sm text-foreground/60 max-w-xl leading-relaxed mb-8 md:mb-12">
              {description}
            </p>
          )}

          <p className="font-mono text-[11px] md:text-sm text-foreground/60 mb-6 md:mb-8">
            Kiireellisissä asioissa voit myös soittaa meille{" "}
            <a href="tel:+358401819581" className="text-accent hover:underline">+358401819581</a>.
          </p>

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
                    Sähköposti
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="matti@esimerkki.fi"
                    className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/30 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[8px] md:text-[10px] text-foreground/80 tracking-[0.2em] uppercase">
                  Puhelinnumero (vapaaehtoinen)
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+358 40 000 0000"
                  className="bg-transparent border border-foreground/40 focus:border-accent outline-none px-3 py-2.5 md:py-3 font-mono text-[11px] md:text-sm text-foreground placeholder:text-foreground/30 transition-colors"
                />
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
