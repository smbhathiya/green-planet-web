"use client"

import { TreeDeciduous, Trash2, Flame, Bird, Wind, Droplet } from "lucide-react"

const problems = [
  {
    icon: TreeDeciduous,
    title: "Deforestation",
    description:
      "15 billion trees are cut down each year. Forests that took centuries to grow vanish in minutes, destroying habitats and releasing stored carbon.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: Trash2,
    title: "Plastic Pollution",
    description:
      "Over 8 million tons of plastic enter our oceans annually. Microplastics now contaminate water, soil, and even the food on our plates.",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    icon: Flame,
    title: "Climate Change",
    description:
      "Global temperatures have risen 1.1°C above pre-industrial levels. Extreme weather events, droughts, and rising seas threaten communities worldwide.",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    icon: Bird,
    title: "Wildlife Extinction",
    description:
      "We are losing species 1,000 times faster than the natural rate. The sixth mass extinction is underway, driven entirely by human activity.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    icon: Wind,
    title: "Air Pollution",
    description:
      "7 million people die annually from air pollution. Toxic particles from vehicles, factories, and burning fuel blanket cities across the globe.",
    color: "#64748b",
    bg: "#f8fafc",
    border: "#e2e8f0",
  },
  {
    icon: Droplet,
    title: "Water Scarcity",
    description:
      "2.2 billion people lack safe drinking water. Groundwater depletion, pollution, and climate shifts are shrinking the freshwater we depend on.",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
]

export function EnvProblems() {
  return (
    <section
      id="problems"
      className="py-24 md:py-36"
      style={{ background: "#f0fdf4" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "#fee2e2",
              border: "1px solid #fecaca",
              color: "#b91c1c",
            }}
          >
            Urgent Threats
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
          >
            Threats to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #dc2626, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Planet
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "#6b7280" }}>
            Earth is under pressure from all directions. Understanding these threats is the first step to fighting them.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.title}
                className="group relative rounded-2xl p-7 overflow-hidden card-hover cursor-default"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${problem.border}`,
                  boxShadow: "0 2px 12px rgba(20,83,45,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = problem.bg
                  el.style.boxShadow = `0 12px 40px ${problem.color}20`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = "#ffffff"
                  el.style.boxShadow = "0 2px 12px rgba(20,83,45,0.06)"
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${problem.color}12`,
                    border: `1px solid ${problem.border}`,
                  }}
                >
                  <Icon style={{ width: 26, height: 26, color: problem.color }} />
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
                >
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {problem.description}
                </p>

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: problem.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
