"use client"

import React, { useState } from "react"
import {
  Mail,
  Send,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
} from "lucide-react"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import { developerProfile } from "@/data/profile"
import { servicesData } from "@/data/services"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    honeypot: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Message sent successfully!",
        })
        setFormData({ name: "", email: "", service: "", message: "", honeypot: "" })
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to deliver message. Please contact via WhatsApp.",
        })
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error occurred. Please contact directly via WhatsApp or Email.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F7F7FA] border-t border-[#D9DCE5]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          index="06"
          kicker="INITIATE COLLABORATION"
          title="Have an idea?"
          subtitle="Let's build something meaningful."
          description="Available for select full-stack development contracts, engineering roles, and enterprise web solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Channels & Status */}
          <div className="lg:col-span-5 space-y-5">
            {/* Availability Pill */}
            <div className="p-6 rounded-3xl bg-white border border-[#D9DCE5] shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                  Availability Status
                </span>
              </div>
              <p className="text-base font-bold text-slate-900 mb-1">
                {developerProfile.availability.status}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Currently accepting inquiries for frontend architecture, full-stack systems, e-commerce engines, and ongoing technical advisory.
              </p>
            </div>

            {/* Direct Connect Grid */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={developerProfile.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white border border-[#D9DCE5] hover:border-emerald-300 hover:shadow-md flex items-center justify-between transition-all shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        WhatsApp Instant Chat
                      </span>
                      <Badge variant="success" size="sm">
                        Fastest
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {developerProfile.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${developerProfile.email}`}
                className="group p-4 rounded-2xl bg-white border border-[#D9DCE5] hover:border-[#8B3DFF]/50 hover:shadow-md flex items-center justify-between transition-all shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/20 flex items-center justify-center text-[#8B3DFF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#6425D0] transition-colors">
                      Direct Email
                    </span>
                    <p className="text-xs text-slate-500 font-medium">
                      {developerProfile.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#8B3DFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* LinkedIn & GitHub Two-Column */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={developerProfile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#D9DCE5] hover:border-slate-300 hover:shadow-xs transition-all flex items-center gap-2.5 text-slate-700 hover:text-slate-950 shadow-2xs"
                >
                  <Github className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-bold">GitHub</span>
                </a>
                <a
                  href={developerProfile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#D9DCE5] hover:border-[#8B3DFF]/50 hover:shadow-xs transition-all flex items-center gap-2.5 text-slate-700 hover:text-[#6425D0] shadow-2xs"
                >
                  <Linkedin className="w-4 h-4 text-[#8B3DFF]" />
                  <span className="text-xs font-bold">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-xs text-slate-500 px-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Based in Vehari, Punjab, Pakistan (Working globally via Remote)</span>
            </div>
          </div>

          {/* Right Column: Server-Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D9DCE5] shadow-xl shadow-slate-900/5">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">Send a Direct Message</h3>
                <span className="text-xs font-semibold text-slate-500">
                  Response within 24h
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7FA] border border-[#D9DCE5] focus:bg-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7FA] border border-[#D9DCE5] focus:bg-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all"
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider"
                  >
                    Project Type or Service
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7FA] border border-[#D9DCE5] focus:bg-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 focus:outline-none text-sm text-slate-900 transition-all"
                  >
                    <option value="" className="text-slate-500">
                      Select project scope (Optional)
                    </option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title} className="text-slate-900">
                        {s.title}
                      </option>
                    ))}
                    <option value="General Engineering Role" className="text-slate-900">
                      Full-Time / Contract Engineering Role
                    </option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider"
                  >
                    Message &amp; Project Context *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell me about your application goals, timeline, and architectural requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7FA] border border-[#D9DCE5] focus:bg-white focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all resize-none"
                  />
                </div>

                {/* Status Alert */}
                {status.type && (
                  <div
                    className={`p-4 rounded-xl text-xs font-medium flex items-center gap-2.5 ${
                      status.type === "success"
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Button with Electric Purple and Deep Purple Hover */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-brand-secondary transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer shadow-sm shadow-[#8B3DFF]/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Validating &amp; Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
