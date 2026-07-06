"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Footer() {

  return (
    <footer className="relative bg-card border-t border-border">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-5 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/wt.logo.webp"
              alt="WheelTec"
              width={160}
              height={48}
              className="h-20 md:h-28 w-auto object-contain mb-0 md:mb-1 -ml-1"
            />
            <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
              Laatu. Tarkkuus. Tulos.
              <br />
              Joka vanne käsitellään
              <br />
              parhaalla tavalla.
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="font-mono text-[9px] md:text-[10px] text-accent tracking-[0.25em] md:tracking-[0.3em] uppercase block mb-2.5 md:mb-4">
              Navigoi
            </span>
            <nav className="flex flex-col gap-2 md:gap-3">
              {[
                { label: "Palvelut", href: "/#palvelut" },
                { label: "Hinnasto", href: "/#hinnasto" },
                { label: "Galleria", href: "/galleria" },
                { label: "Yhteystiedot", href: "/#yhteystiedot" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="font-mono text-[10px] md:text-xs text-muted-foreground hover:text-accent transition-colors tracking-[0.08em] md:tracking-[0.1em] py-0.5 min-h-[32px] flex items-center">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact + Hours: mobiililla samassa gridisolussa, desktopilla erillisinä */}
          <div className="flex flex-col gap-4 md:contents">
            {/* Contact */}
            <div>
              <span className="font-mono text-[9px] md:text-[10px] text-accent tracking-[0.25em] md:tracking-[0.3em] uppercase block mb-2.5 md:mb-4">
                Yhteystiedot
              </span>
              <div className="flex flex-col gap-1.5 md:gap-3 font-mono text-[10px] md:text-xs text-muted-foreground">
                <span>Paalukatu 4</span>
                <span>53500 Lappeenranta</span>
                <span>Finland</span>
                <a href="mailto:info@wheeltec.fi" className="hover:text-accent transition-colors mt-1 break-all">
                  info@wheeltec.fi
                </a>
                <span>Y-tunnus: 3424747-4</span>
              </div>
            </div>

            {/* Hours */}
            <div>
              <span className="font-mono text-[9px] md:text-[10px] text-accent tracking-[0.25em] md:tracking-[0.3em] uppercase block mb-2.5 md:mb-4">
                Aukioloajat
              </span>
              <div className="flex flex-col gap-1.5 md:gap-3 font-mono text-[10px] md:text-xs text-muted-foreground">
                <div className="flex justify-between gap-4 max-w-[180px]">
                  <span>MA–PE</span>
                  <span>08:00 – 17:00</span>
                </div>
                <div className="flex justify-between gap-4 max-w-[180px]">
                  <span>LA</span>
                  <span className="text-accent">SULJETTU</span>
                </div>
                <div className="flex justify-between gap-4 max-w-[180px]">
                  <span>SU</span>
                  <span className="text-accent">SULJETTU</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-5 md:mt-16 pt-4 md:pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 items-center gap-2 md:gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-mono text-[8px] md:text-[10px] text-muted-foreground text-center sm:text-left">
              &copy; 2026 WHEELTEC. KAIKKI OIKEUDET PIDÄTETÄÄN.
            </span>
            <a
              href="/kayttoehdot"
              className="font-mono text-[8px] md:text-[10px] text-muted-foreground hover:text-accent transition-colors text-center sm:text-left"
            >
              Tietosuoja- ja käyttöehdot
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {[
              { name: "Instagram", href: "https://www.instagram.com/wheeltec.oy/" },
              { name: "TikTok", href: "https://www.tiktok.com/@wheeltec.oy" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[8px] md:text-[10px] text-muted-foreground hover:text-accent transition-colors tracking-[0.1em] md:tracking-[0.15em] uppercase py-1 min-h-[32px] flex items-center"
              >
                {social.name}
              </a>
            ))}
          </div>
          <a
            href="https://www.leodigital.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[8px] md:text-[10px] text-muted-foreground hover:text-accent transition-colors text-center sm:text-right"
          >
            Kotisivut teki Leo Digital
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-5 h-5 md:w-8 md:h-8"
        style={{ background: "linear-gradient(135deg, #00F5C8, #009DFF)" }}
        aria-hidden="true"
      />
    </footer>
  )
}
