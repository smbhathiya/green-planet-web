"use client"

import { Wind, Droplets, Leaf, Thermometer, HeartHandshake } from "lucide-react"
import { FloatingLeaves } from "@/components/floating-leaves"

const reasons = [
  {
    icon: Wind,
    title: "Clean Air",
    description:
      "Forests and plants produce the oxygen we breathe every second of every day. Without them, life ceases to exist.",
    color: "#22C55E",
    bg: "#f0fdf4",
  },
  {
    icon: Droplets,
    title: "Clean Water",
    description:
      "Natural ecosystems filter and purify water. Healthy watersheds sustain billions of people and countless species.",
    color: "#16a34a",
    bg: "#dcfce7",
  },
  {
    icon: Leaf,
    title: "Biodiversity",
    description:
      "Millions of species form the web of life. Every extinction weakens the entire ecosystem we all depend on.",
    color: "#15803d",
    bg: "#f0fdf4",
  },
  {
    icon: Thermometer,
    title: "Climate Balance",
    description:
      "Forests and oceans absorb CO₂ and regulate global temperatures, keeping our climate stable and habitable.",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: HeartHandshake,
    title: "Human Survival",
    description:
      "Medicines, food, materials, and mental wellbeing all trace back to healthy, thriving natural environments.",
    color: "#e11d48",
    bg: "#fff1f2",
  },
]

export function WhyNature() {
  return (
    <section
      id="why-nature"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <FloatingLeaves
        count={18}
        direction="down"
        colors={["#22C55E", "#86efac", "#16a34a", "#d9f99d", "#bbf7d0"]}
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
            The Foundation of Life
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
          >
            Why{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14532D, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nature Matters
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "#6b7280" }}>
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
                className="group relative rounded-2xl p-6 card-hover cursor-default"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${reason.color}22`,
                  boxShadow: "0 2px 12px rgba(20,83,45,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = reason.bg
                  el.style.borderColor = `${reason.color}55`
                  el.style.boxShadow = `0 8px 32px ${reason.color}20`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = "#ffffff"
                  el.style.borderColor = `${reason.color}22`
                  el.style.boxShadow = "0 2px 12px rgba(20,83,45,0.06)"
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
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {reason.description}
                </p>

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
