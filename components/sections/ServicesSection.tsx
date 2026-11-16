"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Layers,
  Code2,
  Server,
  ShoppingBag,
  Database,
  Search,
  Zap,
  Smartphone,
  Check,
  ChevronDown,
} from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import { servicesData } from "@/data/services"
import { Service } from "@/types/service"

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Code2,
  Server,
  ShoppingBag,
  Database,
  Search,
  Zap,
  Smartphone,
}

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>("full-stack")

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          index="03"
          kicker="CAPABILITIES & SERVICES"
          title="Full-Lifecycle"
          subtitle="Engineering Services."
          description="Specialized technical services covering frontend architecture, robust backend APIs, secure databases, and search optimization."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service: Service, idx: number) => {
            const Icon = ICON_MAP[service.iconName] || Layers
            const isExpanded = expandedId === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`rounded-3xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between ${
                  isExpanded
                    ? "canvas-card-elevated border-[#8B3DFF]/50 shadow-xl shadow-[#8B3DFF]/10 ring-1 ring-[#8B3DFF]/25"
                    : "canvas-card border-[#D9DCE5]/80 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-lg bg-[#8B3DFF]/10 text-[#6425D0] text-xs font-bold flex items-center justify-center border border-[#8B3DFF]/20">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/20 flex items-center justify-center text-[#8B3DFF]">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.map((t) => (
                      <Badge key={t} variant="default" size="sm">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Expandable Deliverables Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 border-t border-slate-200/80"
                      >
                        <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                          {service.fullDescription}
                        </p>
                        <h4 className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">
                          Core Deliverables:
                        </h4>
                        <ul className="space-y-2 mb-2">
                          {service.deliverables.map((del, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                            >
                              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[1.5] shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Toggle CTA */}
                <div className="pt-4 mt-2 border-t border-slate-200/70 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Show Less" : "View Scope & Deliverables"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 stroke-[1.5] transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#8B3DFF]" : ""
                      }`}
                    />
                  </button>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-[#8B3DFF] hover:text-[#6425D0] transition-colors"
                  >
                    Inquire →
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
