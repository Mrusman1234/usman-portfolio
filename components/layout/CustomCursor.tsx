"use client"

import React, { useEffect, useState, useSyncExternalStore } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

function subscribePointer(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)")
  mql.addEventListener("change", callback)
  return () => mql.removeEventListener("change", callback)
}

function getPointerSnapshot() {
  return window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches
}

function getServerSnapshot() {
  return false
}

export default function CustomCursor() {
  const isDesktopPointer = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerSnapshot
  )

  const [isHovered, setIsHovered] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 400, mass: 0.2 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    if (!isDesktopPointer) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest("a, button, [role='button'], input, textarea, select")
      setIsHovered(!!interactive)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [isDesktopPointer, cursorX, cursorY])

  if (!isDesktopPointer) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none" aria-hidden="true">
      {/* Outer Spring Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? "rgba(37, 99, 235, 0.7)" : "rgba(15, 23, 42, 0.2)",
          backgroundColor: isHovered ? "rgba(37, 99, 235, 0.05)" : "transparent",
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-slate-900/20"
      />

      {/* Center Precision Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-slate-800"
      />
    </div>
  )
}
