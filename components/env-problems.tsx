"use client"

import { TreeDeciduous, Trash2, Flame, Bird, Wind, Droplet } from "lucide-react"

const problems = [
  {
    icon: TreeDeciduous,
    title: "Deforestation",
    description:
      "15 billion trees are cut down each year. Forests that took centuries to grow vanish in minutes, destroying habitats and releasing stored carbon.",
    color: "#22C55E",
    gradient: "from-green-900/40 to-green-950/20",
  },
  {
    icon: Trash2,
    title: "Plastic Pollution",
    description:
      "Over 8 million tons of plastic enter our oceans annually. Microplastics now contaminate water, soil, and even the food on our plates.",
    color: "#38BDF8",
    gradient: "from-sky-900/40 to-sky-950/20",
  },
  {
    icon: Flame,
    title: "Climate Change",
    description:
      "Global temperatures have risen 1.1°C above pre-industrial levels. Extreme weather events, droughts, and rising seas threaten communities worldwide.",
    color: "#f97316",
    gradient: "from-orange-900/40 to-orange-950/20",
  },
  {
    icon: Bird,
    title: "Wildlife Extinction",
    description:
      "We are losing species 1,000 times faster than the natural rate. The sixth mass extinction is underway, driven entirely by human activity.",
    color: "#a78bfa",
    gradient: "from-violet-900/40 to-violet-950/20",
  },
  {
    icon: Wind,
    title: "Air Pollution",
    description:
      "7 million people die annually from air pollution. Toxic particles from vehicles, factories, and burning fuel blanket cities across the globe.",
    color: "#94a3b8",
    gradient: "from-slate-800/40 to-slate-900/20",
  },
  {
    icon: Droplet,
    title: "Water Scarcity",
    description:
      "2.2 billion people lack safe drinking water. Groundwater depletion, pollution, and climate shifts are shrinking the freshwater we depend on.",
    color: "#22d3ee",
    gradient: "from-cyan-900/40 to-cyan-950/20",
  },
]

export function EnvProblems() {
  return (
    <section
      id="problems"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #020617 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.25)",
              color: "#fb923c",
            }}
          >
            Urgent Threats
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Threats to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f97316, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Planet
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
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
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = `${problem.color}35`
                  el.style.background = "rgba(15,23,42,0.85)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "rgba(255,255,255,0.06)"
                  el.style.background = "rgba(15,23,42,0.6)"
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${problem.color}25 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${problem.color}18`,
                      border: `1px solid ${problem.color}30`,
                    }}
                  >
                    <Icon style={{ width: 26, height: 26, color: problem.color }} />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {problem.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{problem.description}</p>
                </div>

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-r-full transition-all duration-300 opacity-0 group-hover:opacity-100"
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
