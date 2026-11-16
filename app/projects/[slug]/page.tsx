import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Sparkles,
  AlertCircle,
} from "lucide-react"
import BrowserMockup from "@/components/ui/BrowserMockup"
import Badge from "@/components/ui/Badge"
import { projectsData } from "@/data/projects"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} — Technical Case Study | Muhammad Usman`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Architectural Case Study`,
      description: project.description,
      type: "article",
    },
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#F7F7FA] text-slate-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#6425D0] transition-colors px-3.5 py-1.5 rounded-full bg-white border border-[#D9DCE5] shadow-2xs hover:bg-slate-50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3.5">
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
            <span className="text-slate-300 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-500">{project.year}</span>
            <span className="text-slate-300 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-600">{project.role}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
            {project.subtitle}
          </p>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-[#D9DCE5]">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-brand-primary hover:bg-brand-secondary shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-[#D9DCE5] hover:bg-slate-50 transition-all shadow-2xs"
              >
                <Github className="w-4 h-4 text-slate-500" />
                <span>Inspect Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Preview Frame */}
        <div className="mb-16">
          <BrowserMockup
            src={project.previewImage || "/project1.png"}
            alt={project.title}
            url={project.live || `https://${project.slug}.dev`}
          />
        </div>

        {/* Executive Summary & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B3DFF]/10 text-[#6425D0] text-xs font-semibold uppercase tracking-wider border border-[#8B3DFF]/20">
              01 • EXECUTIVE SUMMARY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              System Context &amp; Purpose
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.executiveSummary || project.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider border border-[#D9DCE5] mb-2">
              VERIFIED METRICS
            </span>
            {project.metrics?.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl canvas-card border-[#D9DCE5]/70 shadow-sm"
              >
                <div className="text-xl font-bold text-slate-900 mb-0.5">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mb-1">{m.label}</div>
                <div className="text-xs text-slate-600 leading-snug">{m.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl canvas-card-elevated border-[#D9DCE5]/80 shadow-md">
          <div className="flex items-center gap-2 mb-4 text-[#8B3DFF]">
            <Cpu className="w-5 h-5 stroke-[1.5]" />
            <h2 className="text-xs uppercase tracking-wider font-bold">
              02 • TECHNICAL ARCHITECTURE &amp; DATA FLOW
            </h2>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            System Design &amp; Layer Architecture
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            {project.architecture.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#8B3DFF]/10 text-[#6425D0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-2 text-[#8B3DFF]">
              <Sparkles className="w-4 h-4 stroke-[1.5]" />
              <h2 className="text-xs uppercase tracking-wider font-bold">
                03 • ENGINEERING CHALLENGES
              </h2>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Critical Obstacles &amp; Architectural Solutions
            </h3>
            <div className="space-y-4">
              {project.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl canvas-card-elevated border-[#D9DCE5]/80 shadow-md"
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                    {c.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                      <div className="flex items-center gap-1.5 text-amber-800 font-bold mb-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-600 stroke-[1.5]" />
                        <span>The Problem / Vulnerability</span>
                      </div>
                      <p className="text-amber-900/80 leading-relaxed">{c.problem}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                      <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[1.5]" />
                        <span>Engineered Solution</span>
                      </div>
                      <p className="text-emerald-900/80 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Decisions & Lessons Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-3xl canvas-card border-[#D9DCE5]/70 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4">
              Key Engineering Decisions
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {project.keyDecisions.map((decision, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B3DFF] mt-2 shrink-0" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl canvas-card border-[#D9DCE5]/70 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4">
              Lessons Learned
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {project.lessonsLearned.map((lesson, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="mb-16">
          <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
            Technology Stack &amp; Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="default" size="md">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer Navigation CTA */}
        <div className="pt-8 border-t border-[#D9DCE5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-xs font-semibold text-[#8B3DFF] hover:text-[#6425D0] transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-brand-primary hover:bg-brand-secondary shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <span>Discuss a Similar System</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
