"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Sparkles, Shield, Cpu, Bot, Utensils } from "lucide-react"
import MagneticButton from "@/components/ui/MagneticButton"
import Badge from "@/components/ui/Badge"
import { developerProfile } from "@/data/profile"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F7F7FA]"
    >
      {/* Background Architectural Grid & Subtle Radial Accents */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#8B3DFF]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#6425D0]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D9DCE5] shadow-xs mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                {developerProfile.hero.kicker}
              </span>
              <span className="text-slate-300 text-xs">/</span>
              <span className="text-xs font-bold text-gradient-purple">
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
              Usman Dev —{" "}
              <span className="text-gradient-headline">
                Full Stack
              </span>{" "}
              Web Development Services.
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
                className="px-7 py-3.5 text-sm sm:text-base font-semibold group shadow-md shadow-[#8B3DFF]/20"
              >
                <span>{developerProfile.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                variant="secondary"
                className="px-6 py-3.5 text-sm sm:text-base font-medium group"
              >
                <span>{developerProfile.hero.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-500 group-hover:text-[#6425D0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
              </MagneticButton>
            </motion.div>

            {/* Core Tech Stack Micro Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-6 border-t border-[#D9DCE5] flex flex-wrap items-center gap-2 sm:gap-2.5"
            >
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
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
            <div className="relative rounded-3xl canvas-card-elevated border-[#D9DCE5]/80 p-6 sm:p-7 shadow-xl overflow-hidden">
              {/* Subtle gradient wash in corner with brand colors */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#8B3DFF]/10 via-[#6425D0]/5 to-transparent pointer-events-none rounded-bl-full" />

              {/* Card Header with Brand Logo */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100/80 mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-2xl overflow-hidden shadow-xs ring-1 ring-slate-900/10 shrink-0 bg-[#0A0814] flex items-center justify-center">
                    <Image
                      src="/brand/mu-icon.png"
                      alt="Usman Dev (MU) — Muhammad Usman Full-Stack Web Developer Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Muhammad Usman</p>
                    <p className="text-xs text-slate-500 font-medium">BSCS ({developerProfile.education.year}) • Vehari, PK</p>
                  </div>
                </div>
                <Badge variant="success" size="sm">
                  Active
                </Badge>
              </div>

              {/* Flagship Projects Spotlight (Strict Preservation) */}
              <div className="space-y-3.5 relative z-10">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Featured Production Systems
                </p>

                {/* System 1: NexusFlow AI CRM */}
                <Link
                  href="/projects/nexusflow-ai-crm"
                  className="group block p-3.5 rounded-2xl bg-white/75 border border-[#8B3DFF]/30 hover:border-[#8B3DFF] hover:bg-white transition-all shadow-xs"
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#8B3DFF]/10 text-[#6425D0] flex items-center justify-center">
                        <Bot className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-[#6425D0] transition-colors">
                        NexusFlow AI CRM
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#8B3DFF] stroke-[1.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-9 font-normal">
                    AI-assisted B2B pipeline, accounts, contracts, and invoicing workspace featuring 1-Click Demo Admin Login and a Gemini AI Sales Copilot.
                  </p>
                  <div className="flex items-center gap-2 pl-9 mt-2 text-[11px] font-semibold text-[#6425D0]">
                    <span>Next.js</span>
                    <span>•</span>
                    <span>Gemini AI</span>
                    <span>•</span>
                    <span>Prisma / MongoDB</span>
                  </div>
                </Link>

                {/* System 2: Online Pizza Hub Vehari */}
                <Link
                  href="/projects/online-pizza-hub"
                  className="group block p-3.5 rounded-2xl bg-white/75 border border-emerald-200/80 hover:border-emerald-400 hover:bg-white transition-all shadow-xs"
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Utensils className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Online Pizza Hub Vehari
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 stroke-[1.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-9 font-normal">
                    Multi-restaurant food ordering mobile platform with real-time Firestore order tracking, rider dispatch, and merchant admin portals.
                  </p>
                  <div className="flex items-center gap-2 pl-9 mt-2 text-[11px] font-semibold text-emerald-700">
                    <span>Flutter</span>
                    <span>•</span>
                    <span>Firebase</span>
                    <span>•</span>
                    <span>Cloud Functions</span>
                  </div>
                </Link>
              </div>

              {/* Architectural Strengths Micro-Grid */}
              <div className="mt-4 pt-4 border-t border-slate-100/80 grid grid-cols-2 gap-3 relative z-10">
                <div className="p-3 rounded-xl bg-white/70 border border-white/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-semibold mb-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 stroke-[1.5]" aria-hidden="true" />
                    <span>Security</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">Zero-Trust &amp; HMAC</div>
                </div>

                <div className="p-3 rounded-xl bg-white/70 border border-white/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-semibold mb-1">
                    <Cpu className="w-3.5 h-3.5 text-[#8B3DFF] stroke-[1.5]" aria-hidden="true" />
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
              className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white border border-[#D9DCE5] rounded-2xl p-3 shadow-lg shadow-slate-900/10 hidden sm:flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/20 flex items-center justify-center text-[#8B3DFF]">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
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
