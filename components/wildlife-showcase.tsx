"use client"

const wildlife = [
  {
    name: "Snow Leopard",
    type: "Mountain Predator",
    status: "Vulnerable",
    statusColor: "#fbbf24",
    gradient: "linear-gradient(135deg, #1e3a2f 0%, #14532D 50%, #0a2018 100%)",
    accentColor: "#22C55E",
    emoji: "🐆",
    fact: "Only 4,000–6,500 remain in the wild mountains of Central Asia.",
  },
  {
    name: "Blue Whale",
    type: "Ocean Giant",
    status: "Endangered",
    statusColor: "#f97316",
    gradient: "linear-gradient(135deg, #0c2340 0%, #0F172A 50%, #071628 100%)",
    accentColor: "#38BDF8",
    emoji: "🐋",
    fact: "The largest animal on Earth, reaching up to 30 meters in length.",
  },
  {
    name: "Golden Eagle",
    type: "Sky Hunter",
    status: "Least Concern",
    statusColor: "#22C55E",
    gradient: "linear-gradient(135deg, #2d1f00 0%, #451a00 50%, #1a0e00 100%)",
    accentColor: "#fbbf24",
    emoji: "🦅",
    fact: "Can dive at over 300 km/h, the apex predator of mountain skies.",
  },
  {
    name: "Bengal Tiger",
    type: "Forest Apex",
    status: "Endangered",
    statusColor: "#f97316",
    gradient: "linear-gradient(135deg, #2d1600 0%, #3d1f00 50%, #1a0c00 100%)",
    accentColor: "#f97316",
    emoji: "🐅",
    fact: "Fewer than 2,500 remain, threatened by poaching and habitat loss.",
  },
  {
    name: "Polar Bear",
    type: "Arctic Wanderer",
    status: "Vulnerable",
    statusColor: "#fbbf24",
    gradient: "linear-gradient(135deg, #0f1f2d 0%, #162436 50%, #09141e 100%)",
    accentColor: "#e0f2fe",
    emoji: "🐻‍❄️",
    fact: "Melting sea ice threatens their entire hunting grounds and survival.",
  },
  {
    name: "Sea Turtle",
    type: "Ocean Traveller",
    status: "Critically Endangered",
    statusColor: "#ef4444",
    gradient: "linear-gradient(135deg, #002d2d 0%, #003d3d 50%, #001c1c 100%)",
    accentColor: "#2dd4bf",
    emoji: "🐢",
    fact: "Navigate thousands of miles using Earth's magnetic field as a compass.",
  },
]

export function WildlifeShowcase() {
  return (
    <section
      id="wildlife"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a1628 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.25)",
              color: "#c4b5fd",
            }}
          >
            Wildlife Gallery
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Earth&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Magnificent
            </span>{" "}
            Creatures
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            These extraordinary beings share our planet. Every species lost is a story the Earth can never tell again.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wildlife.map((animal) => (
            <div
              key={animal.name}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ minHeight: 280 }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                style={{ background: animal.gradient }}
              />

              {/* Texture overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                }}
              />

              {/* Large emoji background */}
              <div
                className="absolute bottom-0 right-4 text-9xl opacity-15 select-none pointer-events-none transition-all duration-500 group-hover:opacity-25 group-hover:scale-110 group-hover:-rotate-6"
                style={{ lineHeight: 1 }}
              >
                {animal.emoji}
              </div>

              {/* Content */}
              <div className="relative z-10 p-7 flex flex-col h-full" style={{ minHeight: 280 }}>
                {/* Status badge */}
                <div className="flex items-start justify-between mb-auto">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${animal.statusColor}20`,
                      border: `1px solid ${animal.statusColor}40`,
                      color: animal.statusColor,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: animal.statusColor }}
                    />
                    {animal.status}
                  </span>

                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.3)",
                      color: `${animal.accentColor}`,
                      border: `1px solid ${animal.accentColor}20`,
                    }}
                  >
                    {animal.type}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="mt-16">
                  <h3
                    className="text-2xl font-black text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {animal.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{animal.fact}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${animal.accentColor}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
