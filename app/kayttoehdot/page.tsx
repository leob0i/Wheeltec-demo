import React from "react"
import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const BASE_URL = "https://www.wheeltec.fi"

export const metadata: Metadata = {
  title: "Tietosuoja- ja käyttöehdot",
  description: "WheelTecin tietosuojaseloste sekä hinnoittelun ja tarjousten käyttöehdot.",
  alternates: {
    canonical: `${BASE_URL}/kayttoehdot`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-xl md:text-2xl tracking-tighter uppercase leading-none mb-3 md:mb-4 flex items-baseline gap-3">
      <span className="text-accent font-mono text-[11px] md:text-xs tracking-normal">{number}</span>
      {children}
    </h2>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed mb-4">
      {children}
    </p>
  )
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-4 flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="font-mono text-[11px] md:text-sm text-foreground/60 leading-relaxed flex gap-2.5"
        >
          <span className="text-accent shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function KayttoehdotPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[60]" aria-hidden="true" />

      <Nav />

      <div className="max-w-[800px] mx-auto px-4 md:px-8 pt-28 md:pt-40 pb-16 md:pb-28">
        <div className="mb-8 md:mb-14">
          <h1 className="font-sans text-3xl md:text-5xl tracking-tighter uppercase leading-none mb-3">
            Tietosuojaseloste<span className="text-accent">.</span>
          </h1>
          <p className="font-mono text-[10px] md:text-[11px] text-foreground/40 tracking-[0.15em] uppercase">
            Päivitetty: 6.7.2026
          </p>
        </div>

        <SectionHeading number="01">Rekisterinpitäjä</SectionHeading>
        <P>
          WheelTec Oy
          <br />
          Y-tunnus: 3424747-4
          <br />
          Paalukatu 4, 53500 Lappeenranta
          <br />
          info@wheeltec.fi
        </P>

        <SectionHeading number="02">Mitä tietoja keräämme</SectionHeading>
        <P>Keräämme vain tiedot, jotka annat meille yhteydenottolomakkeen kautta:</P>
        <List
          items={[
            "Nimi",
            "Sähköpostiosoite",
            "Puhelinnumero (vapaaehtoinen)",
            "Viestin sisältö",
            "Mahdollinen liitetiedosto (kuva tai PDF)",
          ]}
        />
        <P>Sivusto ei kerää muita henkilötietoja eikä käytä seurantaevästeitä.</P>

        <SectionHeading number="03">Mihin tietoja käytetään</SectionHeading>
        <P>Tietoja käytetään ainoastaan:</P>
        <List
          items={[
            "Yhteydenottoosi vastaamiseen",
            "Tarjouksen tai kustannusarvion laatimiseen",
            "Tilaukseesi liittyvään yhteydenpitoon (esim. työn valmistuminen, toimitus)",
          ]}
        />
        <P>
          Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä antamiesi yhteystietojen
          kautta.
        </P>
        <P>
          Käsittelyn oikeusperuste on sopimusta edeltävien toimenpiteiden toteuttaminen
          (tarjouspyyntöön vastaaminen) sekä rekisterinpitäjän oikeutettu etu (asiakasviestintä).
        </P>

        <SectionHeading number="04">Tietojen luovuttaminen</SectionHeading>
        <P>
          Tietoja ei luovuteta kolmansille osapuolille eikä käytetä markkinointiin ilman
          erillistä suostumustasi.
        </P>
        <P>
          Tietoja käsittelevät ainoastaan sivuston tekniset palveluntarjoajat (verkkosivujen
          ylläpito ja sähköpostin välitys), jotka toimivat tietojen käsittelijöinä puolestamme.
        </P>

        <SectionHeading number="05">Tietojen säilytys</SectionHeading>
        <P>
          Yhteydenottolomakkeen kautta lähetetyt tiedot säilytetään niin kauan kuin asian
          käsittely edellyttää. Asiakassuhteeseen johtaneet tiedot säilytetään kirjanpitolain
          edellyttämän ajan.
        </P>

        <SectionHeading number="06">Oikeutesi</SectionHeading>
        <P>Sinulla on oikeus:</P>
        <List
          items={[
            "Tarkastaa, mitä tietoja sinusta on tallennettu",
            "Pyytää tietojen oikaisua tai poistamista",
            "Vastustaa tietojen käsittelyä",
            "Tehdä valitus valvontaviranomaiselle (Tietosuojavaltuutetun toimisto, tietosuoja.fi)",
          ]}
        />
        <P>Pyynnöt osoitteeseen info@wheeltec.fi.</P>

        <div
          className="my-10 md:my-14 h-[1px] w-full"
          style={{ background: "linear-gradient(90deg, #00F5C8, #009DFF)" }}
          aria-hidden="true"
        />

        <h2 className="font-sans text-2xl md:text-3xl tracking-tighter uppercase leading-none mb-4 md:mb-5">
          Hinnat ja tarjoukset<span className="text-accent">.</span>
        </h2>
        <List
          items={[
            "Sivustolla ilmoitetut hinnat ovat suuntaa-antavia alkaen-hintoja, eivätkä ne muodosta sitovaa tarjousta.",
            "Hinnat on ilmoitettu ilman arvonlisäveroa (ALV 0 %).",
            "Lopullinen hinta vahvistetaan aina asiakaskohtaisessa tarjouksessa tai kustannusarviossa, kun osien kunto ja työn laajuus on arvioitu.",
            "Pidätämme oikeuden hintojen muutoksiin.",
          ]}
        />
      </div>

      <Footer />
    </main>
  )
}
