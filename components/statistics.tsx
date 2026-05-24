"use client"

import { useRef, useEffect, useState } from "react"
import { useCounter } from "@/hooks/use-counter"
import { TreeDeciduous, Fish, Bird, Thermometer } from "lucide-react"

const stats = [
  {
    icon: TreeDeciduous,
    value: 15,
    suffix: "B+",
    label: "Trees Cut Every Year",
    sublabel: "Billion trees lost annually to deforestation",
    color: "#22C55E",
    duration: 2200,
  },
  {
    icon: Fish,
    value: 8,
    suffix: "M+",
    label: "Tons of Ocean Plastic",
    sublabel: "Million metric tons entering oceans each year",
    color: "#38BDF8",
    duration: 1800,
  },
  {
    icon: Bird,
    value: 40,
    suffix: "K+",
    label: "Endangered Species",
    sublabel: "Thousand species at risk of extinction today",
    color: "#a78bfa",
    duration: 2000,
  },
  {
    icon: Thermometer,
    value: 15,
    suffix: "°C",
    label: "Temperature Rise",
    sublabel: "Degrees above pre-industrial levels (×10)",
    color: "#f97316",
    duration: 1600,
  },
]

function StatCard({
  stat,
  shouldStart,
}: {
  stat: (typeof stats)[0]
  shouldStart: boolean
}) {
  const count = useCounter(stat.value, stat.duration, shouldStart)
  const Icon = stat.icon

  return (
    <div
      className="relative text-center group"
      style={{
        opacity: shouldStart ? 1 : 0,
        transform: shouldStart ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${stat.color}15 0%, transparent 70%)`,
        }}
      />

      <div
        className="relative rounded-2xl p-8 md:p-10"
        style={{
          background: "rgba(15,23,42,0.7)",
          border: `1px solid ${stat.color}20`,
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-6 animate-glow-pulse"
          style={{
            background: `${stat.color}15`,
            border: `1px solid ${stat.color}40`,
          }}
        >
          <Icon style={{ width: 26, height: 26, color: stat.color }} />
        </div>

        {/* Counter */}
        <div
          className="text-5xl md:text-6xl font-black mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            color: stat.color,
            textShadow: `0 0 30px ${stat.color}50, 0 0 60px ${stat.color}25`,
          }}
        >
          {count}
          <span className="text-3xl md:text-4xl">{stat.suffix}</span>
        </div>

        <h3
          className="text-lg font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {stat.label}
        </h3>
        <p className="text-xs text-white/40 leading-relaxed">{stat.sublabel}</p>
      </div>
    </div>
  )
}

export function Statistics() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #020617 0%, #040d1a 100%)",
      }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(20,83,45,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Decorative rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
        style={{ border: "1px solid rgba(34,197,94,0.4)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none opacity-5"
        style={{ border: "1px solid rgba(34,197,94,0.3)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            By The Numbers
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Scale of the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22C55E, #86efac)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Crisis
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Behind every number is a story. These figures represent the urgency of our environmental crisis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} shouldStart={triggered} />
          ))}
        </div>
      </div>
    </section>
  )
}
