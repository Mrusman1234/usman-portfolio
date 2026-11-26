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
          title="Featured Projects"
          subtitle="& Custom Web Applications."
          description="In-depth case studies of production systems, AI SaaS CRM workspaces, multi-restaurant food ordering platforms, and full-stack e-commerce web applications."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#D9DCE5] pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-primary text-white shadow-sm shadow-[#8B3DFF]/25"
                  : "canvas-pill canvas-pill-hover text-slate-600 hover:text-slate-900"
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
              const isKeyFlagship = project.slug === "noir-gold-atelier" || project.slug === "online-pizza-hub"
              const liveTarget = project.liveUrl || project.live
              const isInternalDemo = liveTarget?.startsWith("/")
              const repoDisplayUrl = project.githubUrl || project.github
              const mockupBarUrl = liveTarget
                ? isInternalDemo
                  ? `https://usman-devs.com${liveTarget}`
                  : liveTarget
                : repoDisplayUrl
                  ? repoDisplayUrl.replace("https://", "")
                  : project.slug
              const mockupAspectClass =
                project.previewAspectRatio === "video" ? "aspect-video" : "aspect-[16/10]"
              const mockupObjectClass =
                project.previewObjectPosition === "center"
                  ? "object-cover object-center"
                  : "object-cover object-top"

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group rounded-3xl transition-all duration-300 p-6 sm:p-8 lg:p-10 ${
                    isKeyFlagship
                      ? "canvas-card-elevated border-[#8B3DFF]/50 shadow-xl shadow-[#8B3DFF]/10 hover:border-[#8B3DFF] hover:shadow-2xl hover:shadow-[#8B3DFF]/15 ring-1 ring-[#8B3DFF]/20"
                      : "canvas-card border-[#D9DCE5]/80 shadow-md hover:border-slate-300 hover:shadow-lg"
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
                              <Star className="w-3 h-3 fill-current" aria-hidden="true" />
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
                          <Link
                            href={`/projects/${project.slug}`}
                          >
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
                                className="p-3 rounded-xl bg-white/70 border border-white/60 shadow-2xs backdrop-blur-xs"
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
                          aria-label={`Read technical case study for ${project.title}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-brand-primary hover:bg-brand-secondary transition-all shadow-sm shadow-[#8B3DFF]/25 cursor-pointer shrink-0"
                        >
                          <span>Case Study &amp; Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
                        </Link>

                        {liveTarget &&
                          (isInternalDemo ? (
                            <Link
                              href={liveTarget}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open interactive live demo for ${project.title}`}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#6425D0] transition-colors py-2 px-3.5 rounded-full canvas-pill canvas-pill-hover hover:border-[#8B3DFF]/40 cursor-pointer shrink-0"
                            >
                              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#6425D0] stroke-[1.5]" aria-hidden="true" />
                              <span>Live Preview</span>
                            </Link>
                          ) : (
                            <a
                              href={liveTarget}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open live deployment preview for ${project.title}`}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#6425D0] transition-colors py-2 px-3.5 rounded-full canvas-pill canvas-pill-hover hover:border-[#8B3DFF]/40 cursor-pointer shrink-0"
                            >
                              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#6425D0] stroke-[1.5]" aria-hidden="true" />
                              <span>Live Preview</span>
                            </a>
                          ))}

                        {(project.githubUrl || project.github) && (
                          <a
                            href={project.githubUrl || project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open GitHub source repository for ${project.title}`}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors py-2 px-3.5 rounded-full canvas-pill canvas-pill-hover hover:border-slate-400 cursor-pointer shrink-0"
                          >
                            <Github className="w-4 h-4 text-slate-500 stroke-[1.5]" aria-hidden="true" />
                            <span>GitHub Repository</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Browser Mockup Preview */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                      {liveTarget ? (
                        isInternalDemo ? (
                          <Link
                            href={liveTarget}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B3DFF]/30 rounded-2xl"
                            aria-label={`Open interactive live demo for ${project.title}`}
                          >
                            <BrowserMockup
                              src={project.previewImage || "/portfolio-preview.png"}
                              alt={`${project.title} — ${project.subtitle} full-stack web application preview by Usman Dev`}
                              url={mockupBarUrl}
                              aspectClassName={mockupAspectClass}
                              objectClassName={mockupObjectClass}
                              className="transition-transform duration-300 group-hover:scale-[1.01]"
                            />
                          </Link>
                        ) : (
                          <a
                            href={liveTarget}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B3DFF]/30 rounded-2xl"
                            aria-label={`Visit live preview for ${project.title}`}
                          >
                            <BrowserMockup
                              src={project.previewImage || "/portfolio-preview.png"}
                              alt={`${project.title} — ${project.subtitle} full-stack web application preview by Usman Dev`}
                              url={mockupBarUrl}
                              aspectClassName={mockupAspectClass}
                              objectClassName={mockupObjectClass}
                              className="transition-transform duration-300 group-hover:scale-[1.01]"
                            />
                          </a>
                        )
                      ) : (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B3DFF]/30 rounded-2xl"
                          aria-label={`View technical case study for ${project.title}`}
                        >
                          <BrowserMockup
                            src={project.previewImage || "/portfolio-preview.png"}
                            alt={`${project.title} — ${project.subtitle} full-stack web application preview by Usman Dev`}
                            url={mockupBarUrl}
                            aspectClassName={mockupAspectClass}
                            objectClassName={mockupObjectClass}
                            className="transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                        </Link>
                      )}
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
