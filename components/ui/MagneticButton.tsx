"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  strength?: number
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  strength = 0.25,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * strength, y: middleY * strength })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles =
    "inline-flex items-center justify-center font-semibold text-sm md:text-base rounded-full transition-all duration-200 select-none cursor-pointer"

  const variantStyles = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-secondary shadow-sm shadow-[#8B3DFF]/25 active:scale-[0.98]",
    secondary:
      "bg-white text-slate-800 border border-[#D9DCE5] hover:border-[#8B3DFF]/40 hover:bg-[#F7F7FA] shadow-2xs active:scale-[0.98]",
    outline:
      "bg-transparent text-slate-700 border border-[#D9DCE5] hover:border-[#8B3DFF] hover:text-[#6425D0] active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-[#8B3DFF]/5 active:scale-[0.98]",
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) {
    const resolvedRel = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)
    return (
      <a
        href={href}
        target={target}
        rel={resolvedRel}
        onClick={onClick}
        className="inline-block"
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}
