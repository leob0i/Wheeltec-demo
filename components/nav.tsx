"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

function d(ms: number): React.CSSProperties {
  return { animationDelay: `${ms}ms` }
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [palvelutOpen, setPalvelutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 md:py-6 anim-cut-in transition-all duration-300 ${
          scrolled ? "bg-background/70 backdrop-blur-md" : ""
        }`}
        style={d(100)}
      >
        <div className="flex items-center anim-snap-in" style={d(150)}>
          <a href="/">
            <Image
              src="/images/wt.logo.png"
              alt="WheelTec logo"
              width={160}
              height={48}
              className="h-14 md:h-20 w-auto object-contain -my-3 md:-my-5"
              priority
            />
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {/* Palvelut dropdown */}
          <div
            className="relative anim-cut-in"
            style={d(200)}
            onMouseEnter={() => setPalvelutOpen(true)}
            onMouseLeave={() => setPalvelutOpen(false)}
          >
            <button className="group relative font-mono text-[11px] tracking-[0.25em] text-foreground/50 hover:text-foreground transition-colors uppercase flex items-center gap-1.5">
              Palvelut
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                className={`transition-transform duration-200 ${palvelutOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M1 2l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
            <div
              className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                palvelutOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
              }`}
            >
              <div className="bg-background/95 backdrop-blur-sm border border-foreground/10 py-2 min-w-[160px]">
                {[
                  { label: "Kiilloitus", href: "/kiilloitus" },
                  { label: "Maalaus", href: "/maalaus" },
                  { label: "Oikaisu", href: "/vanteenoikaisu" },
                  { label: "Maalinpoisto", href: "/maalinpoisto" },
                  { label: "Korjaus", href: "/vanteenkorjaus" },
                ].map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="block px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-foreground/50 hover:text-accent hover:bg-foreground/5 transition-colors uppercase"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Muut linkit */}
          {["Hinnasto", "Galleria", "Yhteystiedot"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative font-mono text-[11px] tracking-[0.25em] text-foreground/50 hover:text-foreground transition-colors uppercase anim-cut-in"
              style={d(260 + i * 60)}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <div className="w-[1px] h-3 bg-foreground/20" aria-hidden="true" />

          <a href="https://www.instagram.com/wheeltec.oy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/40 hover:text-foreground transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@wheeltec.oy" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-foreground/40 hover:text-foreground transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <span className="font-mono text-[9px] text-foreground/30 hidden md:block tracking-[0.15em] anim-cut-in" style={d(300)}>
            EST. 2024
          </span>
          <a
            href="#yhteystiedot"
            className="relative font-mono text-[11px] md:text-[11px] text-background px-3 md:px-5 py-2 md:py-2.5 tracking-[0.15em] uppercase overflow-hidden group anim-snap-in min-h-[36px] md:min-h-[40px] flex items-center"
            style={{ ...d(350), background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
          >
            <span className="relative z-10">Ota Yhteyttä</span>
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 min-h-[36px] min-w-[36px] items-center justify-center anim-cut-in"
            style={d(350)}
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            aria-expanded={menuOpen}
          >
            <span className={`w-5 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-3 right-4 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Sulje valikko"
        >
          <span className="w-5 h-[1.5px] bg-foreground block rotate-45 absolute" />
          <span className="w-5 h-[1.5px] bg-foreground block -rotate-45 absolute" />
        </button>
        {[
          { label: "Kiilloitus",   href: "/kiilloitus" },
          { label: "Maalaus",      href: "/maalaus" },
          { label: "Oikaisu",      href: "/vanteenoikaisu" },
          { label: "Maalinpoisto", href: "/maalinpoisto" },
          { label: "Korjaus",      href: "/vanteenkorjaus" },
          { label: "Hinnasto",     href: "#hinnasto" },
          { label: "Galleria",     href: "#galleria" },
          { label: "Yhteystiedot", href: "#yhteystiedot" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-sans text-4xl tracking-tighter text-foreground uppercase hover:text-accent transition-colors min-h-[48px] flex items-center"
          >
            {item.label}
          </a>
        ))}
        <div className="flex items-center gap-6 mt-2">
          <a href="https://www.instagram.com/wheeltec.oy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={() => setMenuOpen(false)} className="text-foreground/50 hover:text-accent transition-colors p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@wheeltec.oy" target="_blank" rel="noopener noreferrer" aria-label="TikTok" onClick={() => setMenuOpen(false)} className="text-foreground/50 hover:text-accent transition-colors p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
