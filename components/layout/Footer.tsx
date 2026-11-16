"use client"

import React from "react"
import Image from "next/image"
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Home,
  User,
  Briefcase,
  Sparkles,
  Cpu,
  GitBranch,
} from "lucide-react"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import { developerProfile } from "@/data/profile"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-[#D9DCE5] canvas-card text-slate-600 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Status */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-2xs shrink-0 bg-[#0A0814] flex items-center justify-center">
                <Image
                  src="/brand/mu-icon.png"
                  alt="Muhammad Usman"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-900">
                MUHAMMAD <span className="text-[#8B3DFF]">USMAN</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-4 font-normal">
              Full-Stack Web Developer specializing in Next.js, React, Node.js, and TypeScript. Engineering modern, scalable, and user-centric web applications.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{developerProfile.availability.status}</span>
            </div>
          </div>

          {/* Quick Navigation with Structured Icons */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-900 font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#home" className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors">
                  <Home className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors">
                  <User className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
                  <span>Selected Work</span>
                </a>
              </li>
              <li>
                <a href="#services" className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors">
                  <Cpu className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
                  <span>Technical Stack</span>
                </a>
              </li>
              <li>
                <a href="#process" className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors">
                  <GitBranch className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
                  <span>Development Process</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-900 font-bold mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href={developerProfile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-600 stroke-[1.5]" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={developerProfile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#8B3DFF] stroke-[1.5]" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
              <li>
                <a
                  href={developerProfile.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${developerProfile.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#8B3DFF] transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-600 stroke-[1.5]" />
                  <span className="truncate max-w-[170px]">{developerProfile.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-[#D9DCE5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Muhammad Usman. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
              <span>Vehari, Punjab, Pakistan</span>
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#8B3DFF] transition-colors cursor-pointer group font-semibold"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[1.5] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
