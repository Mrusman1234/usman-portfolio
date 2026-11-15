"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Sparkles, Shield, Cpu, Bot, Utensils } from "lucide-react"
import MagneticButton from "@/components/ui/MagneticButton"
import Badge from "@/components/ui/Badge"
import { developerProfile } from "@/data/profile"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50"
    >
      {/* Background Architectural Grid & Subtle Radial Accents */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                {developerProfile.hero.kicker}
              </span>
              <span className="text-slate-300 text-xs">/</span>
              <span className="text-xs font-semibold text-blue-600">
                FULL-STACK DEVELOPER
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6"
            >
              Building Digital{" "}
              <span className="text-slate-900">
                Experiences
              </span>{" "}
              That Make an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                Impact.
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {developerProfile.hero.description}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton
                href="#projects"
                variant="primary"
                className="px-7 py-3.5 text-sm sm:text-base font-semibold group shadow-md shadow-slate-900/10"
              >
                <span>{developerProfile.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                variant="secondary"
                className="px-6 py-3.5 text-sm sm:text-base font-medium group"
              >
                <span>{developerProfile.hero.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </MagneticButton>
            </motion.div>

            {/* Core Tech Stack Micro Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-2 sm:gap-2.5"
            >
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                Core Stack:
              </span>
              {["Next.js", "React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "Tailwind"].map(
                (tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                )
              )}
            </motion.div>
          </div>

          {/* Right Column: Premium Architectural Showcase Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Elevated Showcase Card */}
            <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-slate-900/5 overflow-hidden">
              {/* Subtle gradient wash in corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50 via-indigo-50/30 to-transparent pointer-events-none rounded-bl-full" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-blue-500/20">
                    MU
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Muhammad Usman</h3>
                    <p className="text-xs text-slate-500">BSCS (2022 – 2026) • Vehari, PK</p>
                  </div>
                </div>
                <Badge variant="success" size="sm">
                  Active
                </Badge>
              </div>

              {/* Flagship Projects Spotlight */}
              <div className="space-y-3.5 relative z-10">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Featured Production Systems
                </p>

                {/* System 1: SmartDesk AI Agent */}
                <Link
                  href="/projects/smartdesk-ai"
                  className="group block p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        SmartDesk AI Support Agent
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-9">
                    Autonomous LLM customer support agent with deterministic tool-calling, 75%+ autonomous resolution, and real-time database queries.
                  </p>
                  <div className="flex items-center gap-2 pl-9 mt-2 text-[11px] font-semibold text-blue-700">
                    <span>Next.js</span>
                    <span>•</span>
                    <span>LLM Tool Calling</span>
                    <span>•</span>
                    <span>Node.js / MongoDB</span>
                  </div>
                </Link>

                {/* System 2: Online Pizza Hub Vehari */}
                <Link
                  href="/projects/online-pizza-hub"
                  className="group block p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Online Pizza Hub Vehari
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-9">
                    Multi-restaurant food ordering platform with live kitchen tracking, automated driver dispatching, and comprehensive merchant admin portals.
                  </p>
                  <div className="flex items-center gap-2 pl-9 mt-2 text-[11px] font-semibold text-emerald-700">
                    <span>Full-Stack</span>
                    <span>•</span>
                    <span>WebSockets</span>
                    <span>•</span>
                    <span>Live Dispatch</span>
                  </div>
                </Link>
              </div>

              {/* Architectural Strengths Micro-Grid */}
              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 relative z-10">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-semibold mb-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Security</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">Zero-Trust &amp; HMAC</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-semibold mb-1">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    <span>Architecture</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">App Router &amp; RSC</div>
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white border border-slate-200/90 rounded-2xl p-3 shadow-lg shadow-slate-900/10 hidden sm:flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500 leading-tight">Key Specialization</p>
                <p className="text-xs font-bold text-slate-900">AI Agents &amp; Scalable Systems</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
