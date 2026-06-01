import { Hero } from "@/components/hero"
import { HeroImages } from "@/components/hero-images"
import { MarqueeStrip } from "@/components/marquee-strip"
import { MetalParts } from "@/components/metal-parts"
import { SplitFeature } from "@/components/split-feature"
import { ScheduleBlock } from "@/components/schedule-block"
import { CtaBlock } from "@/components/cta-block"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative">
      {/* Noise overlay for industrial texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <Hero />
      <HeroImages />
      <MarqueeStrip />
      <MetalParts />
      <SplitFeature />
      <ScheduleBlock />
      <CtaBlock />
      <Footer />
    </main>
  )
}
