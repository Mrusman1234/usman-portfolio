"use client"

import React from "react"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import { developerProfile } from "@/data/profile"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Status */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                MU
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-900">
                MUHAMMAD USMAN
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

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-900 font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-600 transition-colors">
                  Development Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
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
                  className="inline-flex items-center gap-2 hover:text-slate-950 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-500" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={developerProfile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
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
                  className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span className="truncate max-w-[170px]">{developerProfile.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Muhammad Usman. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Vehari, Punjab, Pakistan</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition-colors cursor-pointer group font-semibold"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
