"use client"

import { FloatingLeaves } from "@/components/floating-leaves"

const wildlife = [
  {
    image: "/sl.jpg",
    name: "Snow Leopard",
    type: "Mountain Predator",
    status: "Vulnerable",
    statusColor: "#d97706",
    fact: "Only 4,000–6,500 remain in the wild mountains of Central Asia.",
  },
  {
    image: "/bw.jpg",
    name: "Blue Whale",
    type: "Ocean Giant",
    status: "Endangered",
    statusColor: "#dc2626",
    fact: "The largest animal on Earth, reaching up to 30 meters in length.",
  },
  {
    image: "/ge.jpg",
    name: "Golden Eagle",
    type: "Sky Hunter",
    status: "Least Concern",
    statusColor: "#16a34a",
    fact: "Can dive at over 300 km/h, the apex predator of mountain skies.",
  },
  {
    image: "/bt.jpg",
    name: "Bengal Tiger",
    type: "Forest Apex",
    status: "Endangered",
    statusColor: "#dc2626",
    fact: "Fewer than 2,500 remain, threatened by poaching and habitat loss.",
  },
  {
    image: "/pb.jpg",
    name: "Polar Bear",
    type: "Arctic Wanderer",
    status: "Vulnerable",
    statusColor: "#d97706",
    fact: "Melting sea ice threatens their entire hunting grounds and survival.",
  },
  {
    image: "/st.jpg",
    name: "Sea Turtle",
    type: "Ocean Traveller",
    status: "Critically Endangered",
    statusColor: "#ef4444",
    fact: "Navigate thousands of miles using Earth's magnetic field as a compass.",
  },
]

export function WildlifeShowcase() {
  return (
    <section
      id="wildlife"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "#f0fdf4" }}
    >
      <FloatingLeaves
        count={8}
        direction="down"
        colors={["#22C55E", "#86efac", "#d9f99d"]}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "#dcfce7",
              border: "1px solid #bbf7d0",
              color: "#14532D",
            }}
          >
            Wildlife Gallery
          </span>
          <h2
            className="mb-4 text-4xl font-black md:text-5xl"
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
          <p
            className="mx-auto max-w-xl text-lg leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            These extraordinary beings share our planet. Every species lost is a
            story the Earth can never tell again.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wildlife.map((animal) => (
            <div
              key={animal.name}
              className="group relative cursor-default overflow-hidden rounded-2xl"
              style={{ minHeight: 300 }}
            >
              {/* Photo background */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-108"
                style={{
                  backgroundImage: `url('${animal.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "scale(1)",
                  transition: "transform 0.7s ease",
                }}
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)",
                }}
              />

              {/* Content */}
              <div
                className="relative z-10 flex h-full flex-col justify-between p-6"
                style={{ minHeight: 300 }}
              >
                {/* Top — status + type */}
                <div className="flex items-start justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      border: `1px solid ${animal.statusColor}60`,
                      color: animal.statusColor,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: animal.statusColor }}
                    />
                    {animal.status}
                  </span>

                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      color: "rgba(255,255,255,0.75)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {animal.type}
                  </span>
                </div>

                {/* Bottom — name + fact */}
                <div>
                  <h3
                    className="mb-2 text-2xl font-black text-white"
                    style={{
                      fontFamily: "var(--font-heading)",
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    {animal.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {animal.fact}
                  </p>
                </div>
              </div>

              {/* Bottom green accent on hover */}
              <div
                className="absolute right-0 bottom-0 left-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, #22C55E, #86efac, transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
