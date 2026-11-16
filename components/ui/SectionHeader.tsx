"use client"

import React from "react"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  index?: string
  kicker: string
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionHeader({
  index,
  kicker,
  title,
  subtitle,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 mb-3.5 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B3DFF]/10 border border-[#8B3DFF]/25 text-[#6425D0] text-xs font-bold tracking-wide uppercase shadow-2xs">
          {index && <span className="text-[#8B3DFF]">{index} •</span>}
          <span>{kicker}</span>
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
        {title}{" "}
        {subtitle && (
          <span className="text-slate-500 font-normal">{subtitle}</span>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      )}
    </motion.div>
  )
}
