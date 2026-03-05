"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches)
    }
    checkTouch()

    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const mouseLeave = () => {
      setIsVisible(false)
    }

    // Only add mouse listeners on non-touch devices
    if (!window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener("mousemove", mouseMove)
      document.addEventListener("mouseleave", mouseLeave)
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseleave", mouseLeave)
    }
  }, [isVisible])

  // Don't render on touch devices
  if (isTouchDevice) {
    return null
  }

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className={`fixed pointer-events-none w-6 h-6 bg-purple-600 rounded-full mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  )
}
