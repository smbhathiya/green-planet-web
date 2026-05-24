"use client"

import { Leaf } from "lucide-react"

interface LeafItem {
  left: string
  delay: string
  duration: string
  size: number
  opacity: number
  color: string
  flipX: boolean
  rotate: number
}

function buildLeaves(count: number, colors: string[]): LeafItem[] {
  return Array.from({ length: count }, (_, i) => {
    const s = i + 1
    return {
      // spread evenly across width with slight stagger
      left: `${Math.round((i / count) * 93 + (s * 3) % 6)}%`,
      // stagger delays so they don't all appear at once
      delay: `${((s * 1743) % 160) / 10}s`,
      // varied durations for different speeds
      duration: `${12 + ((s * 2371) % 110) / 10}s`,
      size: 8 + ((s * 7) % 18),
      opacity: 0.25 + ((s * 17) % 40) / 100,
      color: colors[i % colors.length],
      // alternate mirroring for visual variety
      flipX: s % 2 === 0,
      // random starting rotation per leaf
      rotate: (s * 37) % 360,
    }
  })
}

interface FloatingLeavesProps {
  count?: number
  /** "up" = bottom→top,  "down" = top→bottom */
  direction?: "up" | "down"
  colors?: string[]
}

export function FloatingLeaves({
  count = 12,
  direction = "down",
  colors = ["#22C55E", "#16a34a", "#86efac", "#d9f99d", "#15803d"],
}: FloatingLeavesProps) {
  const leaves = buildLeaves(count, colors)
  const animName = direction === "down" ? "leaf-fall" : "leaf-float"

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: leaf.left,
            top: direction === "down" ? 0 : undefined,
            bottom: direction === "up" ? 0 : undefined,
            animation: `${animName} ${leaf.duration} ${leaf.delay} linear infinite`,
            opacity: leaf.opacity,
            transform: `${leaf.flipX ? "scaleX(-1)" : ""} rotate(${leaf.rotate}deg)`,
          }}
        >
          <Leaf
            style={{ width: leaf.size, height: leaf.size, color: leaf.color }}
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  )
}
