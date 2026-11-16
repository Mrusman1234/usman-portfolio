"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import BrowserMockup from "@/components/ui/BrowserMockup"
import { projectsData } from "@/data/projects"

const CATEGORIES = ["All", "AI & Web Apps", "Full-Stack", "E-Commerce", "Creative Engineering"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F7F7FA] border-y border-[#D9DCE5]">
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          index="02"
          kicker="SELECTED WORK & ARCHITECTURE"
          title="Engineered for"
          subtitle="Scale & Reliability."
          description="In-depth case studies of production systems, autonomous AI agents, multi-restaurant engines, and full-stack web applications."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#D9DCE5] pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#8B3DFF] text-white shadow-sm shadow-[#8B3DFF]/25"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-[#F7F7FA] border border-[#D9DCE5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-14 md:space-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isKeyFlagship = project.slug === "smartdesk-ai" || project.slug === "online-pizza-hub"

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 lg:p-10 ${
                    isKeyFlagship
                      ? "border-[#8B3DFF]/40 shadow-lg shadow-[#8B3DFF]/5 hover:border-[#8B3DFF] hover:shadow-xl"
                      : "border-[#D9DCE5] shadow-xs hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Project Narrative & Architecture */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full order-2 lg:order-1">
                      <div>
                        {/* Metadata bar */}
                        <div className="flex flex-wrap items-center gap-2 mb-3.5">
                          {isKeyFlagship && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-brand-primary text-white text-[11px] font-bold tracking-wide uppercase shadow-xs">
                              <Star className="w-3 h-3 fill-current" />
                              Key Flagship
                            </span>
                          )}
                          <Badge variant="accent" size="sm">
                            {project.category}
                          </Badge>
                          <span className="text-slate-300 text-xs">•</span>
                          <span className="text-xs font-semibold text-slate-500">
                            {project.year}
                          </span>
                          <span className="text-slate-300 text-xs">•</span>
                          <span className="text-xs font-semibold text-slate-600">
                            {project.role}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 group-hover:text-[#6425D0] transition-colors">
                          <Link href={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>
                        <p className="text-sm font-semibold text-slate-500 mb-4 leading-snug">
                          {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                          {project.description}
                        </p>

                        {/* Key Architectural Highlights / Metrics */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                            {project.metrics.map((metric, mIdx) => (
                              <div
                                key={mIdx}
                                className="p-3 rounded-xl bg-[#F7F7FA] border border-[#D9DCE5]"
                              >
                                <div className="text-base font-bold text-slate-900">
                                  {metric.value}
                                </div>
                                <div className="text-[11px] text-slate-500 font-medium truncate">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.tech.map((t) => (
                            <Badge key={t} variant="default" size="sm">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3 sm:gap-4">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-brand-primary hover:bg-brand-secondary transition-all shadow-sm shadow-[#8B3DFF]/25"
                        >
                          <span>Case Study &amp; Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#6425D0] transition-colors py-2 px-3 rounded-full hover:bg-[#8B3DFF]/10"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#6425D0]" />
                            <span>Live Site</span>
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2 px-3 rounded-full hover:bg-slate-100"
                          >
                            <Github className="w-4 h-4 text-slate-400" />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Browser Mockup Preview */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                      <Link href={`/projects/${project.slug}`} className="block">
                        <BrowserMockup
                          src={project.previewImage || "/project1.png"}
                          alt={project.title}
                          url={project.live || `https://${project.slug}.dev`}
                          className="transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
