"use client"

import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, Compass, ArrowUpRight } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import { developerProfile } from "@/data/profile"

export default function AboutSection() {
  const principles = [
    {
      title: "Scalable Full-Stack Architecture",
      description:
        "Building applications from the ground up with clean separation between client layers, business logic, and transactional database models.",
    },
    {
      title: "Data Integrity & Concurrency",
      description:
        "Preventing race conditions and data corruption with atomic transactions, row-level locks, and resilient fallback reconciliation pipelines.",
    },
    {
      title: "Editorial UI & Ergonomics",
      description:
        "Crafting responsive interfaces with strict typographic hierarchy, high contrast, zero cumulative layout shift (CLS), and fluid micro-interactions.",
    },
    {
      title: "Security & Zero-Trust by Default",
      description:
        "Hardening APIs with input schema validation, rate-limiting, HMAC payload verification, and strict credential management.",
    },
  ]

  const certifications = [
    {
      title: "Google AI Essentials",
      issuer: "Google / Coursera",
      id: "V7ZUNR83TE9M",
      verifyUrl: "https://coursera.org/verify/V7ZUNR83TE9M",
    },
    {
      title: "Developing Mobile Apps with Flutter & Dart",
      issuer: "IBM / Coursera",
      id: "PCB2YL6ZQ761",
      verifyUrl: "https://coursera.org/verify/PCB2YL6ZQ761",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          index="01"
          kicker="BACKGROUND & PHILOSOPHY"
          title="Engineering Systems"
          subtitle="with Purpose and Precision."
          description="A look into my background, technical philosophy, and approach to full-stack software development."
        />

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-normal"
          >
            <p>
              I am <strong className="text-slate-900 font-semibold">{developerProfile.name}</strong>, a Full-Stack Web Developer and Computer Science graduate ({developerProfile.education.year}) based in {developerProfile.location}.
            </p>
            <p>
              My work centers on developing scalable, robust, and user-centric web applications. I bridge backend architectural rigor—relational databases, REST APIs, atomic transactions, and zero-trust security perimeters—with refined, high-performance frontend interfaces in Next.js, React, and TypeScript.
            </p>
            <p>
              Whether engineering an autonomous support agent with deterministic tool-calling guardrails (<strong className="text-slate-900 font-semibold">SmartDesk AI</strong>) or architecting a multi-restaurant live ordering and dispatch platform (<strong className="text-slate-900 font-semibold">Online Pizza Hub Vehari</strong>), I prioritize maintainability, testability, and verifiable performance over temporary shortcuts.
            </p>

            {/* Development Philosophy / Principles Grid */}
            <div className="pt-6">
              <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4">
                Core Development Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principles.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/90 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Credentials & Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-3 text-blue-600">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-bold">
                  Education &amp; Foundations
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                {developerProfile.education.degree}
              </h4>
              <p className="text-xs font-semibold text-slate-500 mb-3">
                {developerProfile.education.year} • Vehari, Punjab, Pakistan
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Core coursework and technical foundation in distributed systems, web architectures, algorithms, data structures, and database management systems.
              </p>
            </div>

            {/* Verified Certifications Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-600">
                <Award className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-bold">
                  Verified Certifications
                </span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                        {cert.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {cert.issuer} • ID: {cert.id}
                      </p>
                    </div>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-200/80 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Career Objective
                </h5>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Seeking high-impact Full-Stack or Frontend Developer positions where I can architect scalable products and solve complex user-facing challenges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
