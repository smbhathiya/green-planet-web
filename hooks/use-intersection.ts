"use client"

import { useState, useEffect, useRef } from "react"

export function useIntersection(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return { ref, isIntersecting }
}
