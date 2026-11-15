"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, FileText } from "lucide-react"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import { developerProfile } from "@/data/profile"

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track scroll position for navbar background elevation and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = NAV_ITEMS.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none ${
          scrolled ? "py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Monogram */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-md hover:border-slate-300 hover:bg-white shadow-sm shadow-slate-900/5 transition-all"
            aria-label="Muhammad Usman - Home"
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold tracking-tight group-hover:scale-105 transition-transform">
              MU
            </div>
            <span className="text-xs font-bold tracking-tight text-slate-800 group-hover:text-slate-950 transition-colors">
              USMAN<span className="text-blue-600">.DEV</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
          </Link>

          {/* Desktop Navigation Floating Pill */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-md shadow-sm shadow-slate-900/5"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-normal transition-colors rounded-full ${
                    isActive
                      ? "text-slate-950 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-slate-100 rounded-full border border-slate-200/80"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/80 rounded-full backdrop-blur-md hover:border-slate-300 hover:text-slate-950 hover:bg-white shadow-sm shadow-slate-900/5 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm shadow-slate-900/10 active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/80 border border-slate-200 text-slate-700 hover:text-slate-950 focus:outline-none backdrop-blur-md shadow-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/95 md:hidden flex flex-col justify-between p-6 pt-24 border-b border-slate-200"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Navigation
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 + 0.08 }}
                  className={`px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                    activeSection === item.href.substring(1)
                      ? "bg-slate-100 text-slate-950 border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Work
                </span>
                <span>Vehari, Pakistan</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-1">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  Resume PDF
                </a>
                <a
                  href={developerProfile.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
