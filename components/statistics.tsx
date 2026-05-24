"use client"

import { useRef, useEffect, useState } from "react"
import { useCounter } from "@/hooks/use-counter"
import { TreeDeciduous, Fish, Bird, Thermometer } from "lucide-react"
import { FloatingLeaves } from "@/components/floating-leaves"

const stats = [
  {
    icon: TreeDeciduous,
    value: 15,
    suffix: "B+",
    label: "Trees Cut Every Year",
    sublabel: "Billion trees lost annually to deforestation",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    duration: 2200,
  },
  {
    icon: Fish,
    value: 8,
    suffix: "M+",
    label: "Tons of Ocean Plastic",
    sublabel: "Million metric tons entering oceans each year",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
    duration: 1800,
  },
  {
    icon: Bird,
    value: 40,
    suffix: "K+",
    label: "Endangered Species",
    sublabel: "Thousand species at risk of extinction today",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    duration: 2000,
  },
  {
    icon: Thermometer,
    value: 11,
    suffix: "°C",
    label: "Temperature Rise",
    sublabel: "Tenths of a degree above pre-industrial levels",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
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
      className="relative text-center group rounded-2xl p-8 md:p-10 card-hover"
      style={{
        background: "#ffffff",
        border: `1px solid ${stat.border}`,
        boxShadow: "0 2px 16px rgba(20,83,45,0.06)",
        opacity: shouldStart ? 1 : 0,
        transform: shouldStart ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = stat.bg
        el.style.boxShadow = `0 12px 40px ${stat.color}20`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = "#ffffff"
        el.style.boxShadow = "0 2px 16px rgba(20,83,45,0.06)"
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-6"
        style={{
          background: `${stat.color}15`,
          border: `1px solid ${stat.border}`,
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
        }}
      >
        {count}
        <span className="text-3xl md:text-4xl">{stat.suffix}</span>
      </div>

      <h3
        className="text-lg font-bold mb-2"
        style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
      >
        {stat.label}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
        {stat.sublabel}
      </p>
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
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <FloatingLeaves
        count={14}
        direction="down"
        colors={["#22C55E", "#86efac", "#d9f99d", "#bbf7d0"]}
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
            By The Numbers
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
          >
            The Scale of the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14532D, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Crisis
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#6b7280" }}>
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
