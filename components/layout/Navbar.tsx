"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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

  // Track scroll position for navbar elevation and active section
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
          scrolled ? "py-2.5" : "py-3.5 sm:py-4"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between pointer-events-auto gap-2">
          {/* Brand Logo Lockup on far left */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-full canvas-pill canvas-pill-hover shadow-sm transition-all shrink-0"
            aria-label="Muhammad Usman - Home"
          >
            {/* Logo Monogram */}
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-lg overflow-hidden shrink-0 shadow-2xs bg-[#0A0814] flex items-center justify-center">
              <Image
                src="/brand/mu-icon.png"
                alt="Muhammad Usman Logo"
                width={36}
                height={36}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            {/* Logo Typography */}
            <div className="flex items-center gap-1.5 pr-1">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900">
                Muhammad <span className="text-gradient-purple">Usman</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
            </div>
          </Link>

          {/* Desktop Navigation Floating Pill */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 px-3 py-1.5 rounded-full canvas-pill shadow-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-normal transition-colors rounded-full ${
                    isActive
                      ? "text-[#6425D0]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#8B3DFF]/10 rounded-full border border-[#8B3DFF]/25"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 canvas-pill canvas-pill-hover rounded-full transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#8B3DFF]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-white bg-brand-primary hover:bg-brand-secondary rounded-full transition-all shadow-sm shadow-[#8B3DFF]/25 active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full canvas-pill canvas-pill-hover text-slate-700 hover:text-slate-950 focus:outline-none shadow-sm shrink-0"
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
            className="fixed inset-0 z-40 bg-white/85 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 pt-24 border-b border-[#D9DCE5]/80"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
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
                      ? "bg-[#8B3DFF]/10 text-[#6425D0] border border-[#8B3DFF]/25"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#D9DCE5] flex flex-col gap-3">
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
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-[#D9DCE5] hover:bg-slate-50 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#8B3DFF]" />
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
