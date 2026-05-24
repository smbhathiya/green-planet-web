"use client"

import { Wind, Droplets, Leaf, Thermometer, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Wind,
    title: "Clean Air",
    description:
      "Forests and plants produce the oxygen we breathe every second of every day. Without them, life ceases to exist.",
    color: "#38BDF8",
  },
  {
    icon: Droplets,
    title: "Clean Water",
    description:
      "Natural ecosystems filter and purify water. Healthy watersheds sustain billions of people and countless species.",
    color: "#22C55E",
  },
  {
    icon: Leaf,
    title: "Biodiversity",
    description:
      "Millions of species form the web of life. Every extinction weakens the entire ecosystem we all depend on.",
    color: "#86efac",
  },
  {
    icon: Thermometer,
    title: "Climate Balance",
    description:
      "Forests and oceans absorb CO₂ and regulate global temperatures, keeping our climate stable and habitable.",
    color: "#fbbf24",
  },
  {
    icon: HeartHandshake,
    title: "Human Survival",
    description:
      "Medicines, food, materials, and mental wellbeing all trace back to healthy, thriving natural environments.",
    color: "#f472b6",
  },
]

export function WhyNature() {
  return (
    <section
      id="why-nature"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a1628 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#86efac",
            }}
          >
            The Foundation of Life
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22C55E, #86efac)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nature Matters
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            Every breath, every drop of water, every meal connects us to nature. Here&apos;s why protecting it is protecting ourselves.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="group relative rounded-2xl p-6 card-hover"
                style={{
                  background: "rgba(15,23,42,0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = `${reason.color}30`
                  el.style.background = `rgba(15,23,42,0.9)`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "rgba(255,255,255,0.06)"
                  el.style.background = "rgba(15,23,42,0.7)"
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${reason.color}15`,
                    border: `1px solid ${reason.color}30`,
                  }}
                >
                  <Icon style={{ width: 22, height: 22, color: reason.color }} />
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{reason.description}</p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${reason.color}80, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
