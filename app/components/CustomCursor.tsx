"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="fixed pointer-events-none w-6 h-6 bg-purple-600 rounded-full mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150"
    ></div>
  )
}