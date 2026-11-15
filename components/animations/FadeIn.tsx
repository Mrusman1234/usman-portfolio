"use client"

import React from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  className?: string
  once?: boolean
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 24,
  className = "",
  once = true,
}: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 }
      case "down":
        return { y: -distance, x: 0 }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      case "none":
      default:
        return { x: 0, y: 0 }
    }
  }

  const initial = { opacity: 0, ...getInitialPosition() }
  const animate = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
