"use client"

import { FloatingLeaves } from "@/components/floating-leaves"

const wildlife = [
  {
    name: "Snow Leopard",
    type: "Mountain Predator",
    status: "Vulnerable",
    statusColor: "#d97706",
    gradient: "linear-gradient(135deg, #d1fae5 0%, #6ee7b7 50%, #34d399 100%)",
    textColor: "#064e3b",
    emoji: "🐆",
    fact: "Only 4,000–6,500 remain in the wild mountains of Central Asia.",
  },
  {
    name: "Blue Whale",
    type: "Ocean Giant",
    status: "Endangered",
    statusColor: "#dc2626",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #93c5fd 50%, #60a5fa 100%)",
    textColor: "#1e3a8a",
    emoji: "🐋",
    fact: "The largest animal on Earth, reaching up to 30 meters in length.",
  },
  {
    name: "Golden Eagle",
    type: "Sky Hunter",
    status: "Least Concern",
    statusColor: "#16a34a",
    gradient: "linear-gradient(135deg, #fef9c3 0%, #fde68a 50%, #fbbf24 100%)",
    textColor: "#713f12",
    emoji: "🦅",
    fact: "Can dive at over 300 km/h, the apex predator of mountain skies.",
  },
  {
    name: "Bengal Tiger",
    type: "Forest Apex",
    status: "Endangered",
    statusColor: "#dc2626",
    gradient: "linear-gradient(135deg, #ffedd5 0%, #fed7aa 50%, #fb923c 100%)",
    textColor: "#7c2d12",
    emoji: "🐅",
    fact: "Fewer than 2,500 remain, threatened by poaching and habitat loss.",
  },
  {
    name: "Polar Bear",
    type: "Arctic Wanderer",
    status: "Vulnerable",
    statusColor: "#d97706",
    gradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)",
    textColor: "#0c4a6e",
    emoji: "🐻‍❄️",
    fact: "Melting sea ice threatens their entire hunting grounds and survival.",
  },
  {
    name: "Sea Turtle",
    type: "Ocean Traveller",
    status: "Critically Endangered",
    statusColor: "#dc2626",
    gradient: "linear-gradient(135deg, #ccfbf1 0%, #99f6e4 50%, #2dd4bf 100%)",
    textColor: "#134e4a",
    emoji: "🐢",
    fact: "Navigate thousands of miles using Earth's magnetic field as a compass.",
  },
]

export function WildlifeShowcase() {
  return (
    <section
      id="wildlife"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "#f0fdf4" }}
    >
      <FloatingLeaves
        count={8}
        direction="down"
        colors={["#22C55E", "#86efac", "#d9f99d"]}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "#dcfce7",
              border: "1px solid #bbf7d0",
              color: "#14532D",
            }}
          >
            Wildlife Gallery
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
          >
            Earth&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14532D, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Magnificent
            </span>{" "}
            Creatures
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "#6b7280" }}>
            These extraordinary beings share our planet. Every species lost is a story the Earth can never tell again.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wildlife.map((animal) => (
            <div
              key={animal.name}
              className="group relative rounded-2xl overflow-hidden cursor-default card-hover"
              style={{ minHeight: 280 }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                style={{ background: animal.gradient }}
              />

              {/* Large emoji background */}
              <div
                className="absolute bottom-0 right-4 text-9xl opacity-20 select-none pointer-events-none transition-all duration-500 group-hover:opacity-35 group-hover:scale-110 group-hover:-rotate-6"
                style={{ lineHeight: 1 }}
              >
                {animal.emoji}
              </div>

              {/* Content */}
              <div className="relative z-10 p-7 flex flex-col h-full" style={{ minHeight: 280 }}>
                {/* Status + type row */}
                <div className="flex items-start justify-between mb-auto">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: `1px solid ${animal.statusColor}30`,
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
                      background: "rgba(255,255,255,0.6)",
                      color: animal.textColor,
                    }}
                  >
                    {animal.type}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="mt-16">
                  <h3
                    className="text-2xl font-black mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: animal.textColor }}
                  >
                    {animal.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${animal.textColor}99` }}>
                    {animal.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
