"use client"

import { Sprout, PackageOpen, Droplets, Recycle, Sun, Shield } from "lucide-react"
import { FloatingLeaves } from "@/components/floating-leaves"

const steps = [
  {
    number: "01",
    icon: Sprout,
    title: "Plant Trees",
    description:
      "Every tree planted absorbs CO₂, provides oxygen, and creates habitat for wildlife. Even one tree makes a difference.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    number: "02",
    icon: PackageOpen,
    title: "Reduce Plastic",
    description:
      "Choose reusable bags, bottles, and containers. Refuse single-use plastic wherever possible to protect our oceans.",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Save Water",
    description:
      "Fix leaks, take shorter showers, and harvest rainwater. Every drop saved helps sustain life in water-scarce regions.",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    number: "04",
    icon: Recycle,
    title: "Recycle Materials",
    description:
      "Sort and recycle paper, glass, metals, and electronics. Recycling cuts emissions, reduces landfills, and conserves resources.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    number: "05",
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Switch to solar, wind, or hydroelectric energy. Clean energy is now affordable and is the fastest path to a low-carbon future.",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    number: "06",
    icon: Shield,
    title: "Protect Wildlife",
    description:
      "Support conservation organizations, avoid products made from endangered species, and protect natural habitats near you.",
    color: "#e11d48",
    bg: "#fff1f2",
    border: "#fecdd3",
  },
]

export function HowToProtect() {
  return (
    <section
      id="protect"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "#f0fdf4" }}
    >
      <FloatingLeaves
        count={18}
        direction="up"
        colors={["#22C55E", "#15803d", "#86efac", "#d9f99d"]}
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
            Take Action
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
          >
            How To{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14532D, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Protect Nature
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "#6b7280" }}>
            You don&apos;t need to be a scientist or a politician to change the world. These six actions, done consistently, create real impact.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl p-7 card-hover"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${step.border}`,
                  boxShadow: "0 2px 12px rgba(20,83,45,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = step.bg
                  el.style.boxShadow = `0 12px 40px ${step.color}18`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = "#ffffff"
                  el.style.boxShadow = "0 2px 12px rgba(20,83,45,0.06)"
                }}
              >
                {/* Step number background */}
                <div
                  className="absolute top-5 right-5 text-6xl font-black opacity-[0.06] select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.1]"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: step.color,
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>

                {/* Icon + number row */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${step.color}12`,
                      border: `1px solid ${step.border}`,
                    }}
                  >
                    <Icon style={{ width: 22, height: 22, color: step.color }} />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: `${step.color}99` }}
                  >
                    Step {step.number}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
