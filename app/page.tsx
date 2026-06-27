import { Hero } from "@/components/hero"
import { HeroImages } from "@/components/hero-images"
import { MarqueeStrip } from "@/components/marquee-strip"
import { MetalParts } from "@/components/metal-parts"
import { ScheduleBlock } from "@/components/schedule-block"
import { CtaBlock } from "@/components/cta-block"
import { LogisticsSection } from "@/components/logistics-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative">
      {/* Noise overlay for industrial texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <Hero />
      <MarqueeStrip />
      <HeroImages />
      <MetalParts />
      <ScheduleBlock />
      <LogisticsSection />
      <CtaBlock />
      <Footer />
    </main>
  )
}
