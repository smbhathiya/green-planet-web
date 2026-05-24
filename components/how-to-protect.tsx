"use client"

import { Sprout, PackageOpen, Droplets, Recycle, Sun, Shield } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Sprout,
    title: "Plant Trees",
    description:
      "Every tree planted absorbs CO₂, provides oxygen, and creates habitat for wildlife. Even one tree makes a difference.",
    color: "#22C55E",
  },
  {
    number: "02",
    icon: PackageOpen,
    title: "Reduce Plastic",
    description:
      "Choose reusable bags, bottles, and containers. Refuse single-use plastic wherever possible to protect our oceans.",
    color: "#38BDF8",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Save Water",
    description:
      "Fix leaks, take shorter showers, and harvest rainwater. Every drop saved helps sustain life in water-scarce regions.",
    color: "#22d3ee",
  },
  {
    number: "04",
    icon: Recycle,
    title: "Recycle Materials",
    description:
      "Sort and recycle paper, glass, metals, and electronics. Recycling cuts emissions, reduces landfills, and conserves resources.",
    color: "#a78bfa",
  },
  {
    number: "05",
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Switch to solar, wind, or hydroelectric energy. Clean energy is now affordable and is the fastest path to a low-carbon future.",
    color: "#fbbf24",
  },
  {
    number: "06",
    icon: Shield,
    title: "Protect Wildlife",
    description:
      "Support conservation organizations, avoid products made from endangered species, and protect natural habitats near you.",
    color: "#f472b6",
  },
]

export function HowToProtect() {
  return (
    <section
      id="protect"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #020617 100%)" }}
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
            Take Action
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How To{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22C55E, #86efac)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Protect Nature
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
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
                  background: "rgba(15,23,42,0.65)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = `${step.color}30`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "rgba(255,255,255,0.06)"
                }}
              >
                {/* Step number background */}
                <div
                  className="absolute top-5 right-5 text-6xl font-black opacity-5 select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-10"
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
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    <Icon style={{ width: 22, height: 22, color: step.color }} />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: `${step.color}80` }}
                  >
                    Step {step.number}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
