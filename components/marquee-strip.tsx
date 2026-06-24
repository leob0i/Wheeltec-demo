export function MarqueeStrip() {
  const words = [
    "Maalaus",
    "Kiilloitus",
    "Hitsaus",
    "Vanteet",
  ]

  return (
    <div
      className="overflow-hidden py-2.5 md:py-3 relative"
      style={{ background: "linear-gradient(90deg, #00F5C8, #00E5D4, #00D9FF, #009DFF)" }}
      role="marquee"
      aria-label="WheelTec palvelut"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-sans text-lg md:text-3xl text-background mx-3 md:mx-10 tracking-wider"
          >
            {word}
            <span className="text-background/40 mx-3 md:mx-10">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
