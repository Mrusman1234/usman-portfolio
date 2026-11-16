"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ArrowRight, FileCheck } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import { processStepsData } from "@/data/process"
import { ProcessStep } from "@/types/process"

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const currentStep = processStepsData[activeStepIndex]

  return (
    <section id="process" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          index="05"
          kicker="WORKFLOW & METHODOLOGY"
          title="Structured Process"
          subtitle="From Concept to Deployment."
          description="A transparent, six-phase engineering workflow ensuring predictable timelines, type safety, and production quality."
        />

        {/* Process Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {processStepsData.map((step: ProcessStep, idx: number) => {
              const isSelected = activeStepIndex === idx

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "canvas-card-elevated border-[#8B3DFF]/50 shadow-md shadow-[#8B3DFF]/5 text-slate-900 ring-1 ring-[#8B3DFF]/25"
                      : "canvas-card border-[#D9DCE5]/70 hover:border-slate-300 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                        isSelected
                          ? "bg-[#8B3DFF] text-white"
                          : "bg-slate-200/70 text-slate-600"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h4
                        className={`text-sm sm:text-base font-bold ${
                          isSelected ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 truncate max-w-[200px] sm:max-w-xs font-medium">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 stroke-[1.5] transition-transform ${
                      isSelected ? "text-[#8B3DFF] translate-x-1" : "text-slate-400"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Step Deep-Dive Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 rounded-3xl canvas-card-elevated border-[#D9DCE5]/80 shadow-xl"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent" size="md">
                      PHASE {currentStep.step}
                    </Badge>
                    <span className="text-slate-300 text-xs">/</span>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      DEVELOPMENT WORKFLOW
                    </span>
                  </div>
                  <span className="text-xs text-[#8B3DFF] font-bold">
                    STEP {activeStepIndex + 1} OF 6
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {currentStep.step} — {currentStep.title}
                </h3>
                <p className="text-sm font-semibold text-[#8B3DFF] mb-4">
                  {currentStep.tagline}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {currentStep.description}
                </p>

                {/* Key Activities */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                    Key Activities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStep.activities.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3.5 rounded-2xl bg-white/70 border border-white/60 shadow-2xs flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[1.5] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium leading-snug">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#8B3DFF]/10 to-[#6425D0]/5 border border-[#8B3DFF]/25 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#8B3DFF]/10 text-[#8B3DFF] flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Phase Deliverable:
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      {currentStep.deliverable}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
