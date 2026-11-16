"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import { skillGroupsData } from "@/data/skills"
import { SkillCategory } from "@/types/skill"

const CATEGORIES: ("All" | SkillCategory)[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Architecture & Additional",
]

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | SkillCategory>("All")

  const filteredGroups =
    selectedCategory === "All"
      ? skillGroupsData
      : skillGroupsData.filter((g) => g.category === selectedCategory)

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F7F7FA] border-y border-[#D9DCE5]">
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          index="04"
          kicker="TECHNICAL EXPERTISE"
          title="Technology Stack"
          subtitle="& Systems Proficiency."
          description="A transparent breakdown of my core technical proficiencies, frameworks, and architectural capabilities."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#D9DCE5] pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brand-primary text-white shadow-sm shadow-[#8B3DFF]/25"
                  : "canvas-pill canvas-pill-hover text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-12">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold text-[#6425D0] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#8B3DFF]/10 border border-[#8B3DFF]/20">
                  {group.category}
                </span>
                <span className="h-px bg-[#D9DCE5] flex-1" />
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                  {group.description}
                </span>
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl canvas-card border-[#D9DCE5]/70 hover:border-[#8B3DFF]/50 hover:shadow-md transition-all group flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#6425D0] transition-colors">
                          {skill.name}
                        </h4>
                        {skill.featured && (
                          <Badge variant="accent" size="sm">
                            Core
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {skill.context}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                      <span>Production Ready</span>
                      <span className="text-emerald-600 inline-flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
