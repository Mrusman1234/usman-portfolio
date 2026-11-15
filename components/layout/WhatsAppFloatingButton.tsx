"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import { developerProfile } from "@/data/profile"

export default function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-medium py-2 px-3.5 rounded-full border border-slate-200/90 shadow-xl shadow-slate-900/10 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat on WhatsApp ({developerProfile.phone})</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={developerProfile.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${developerProfile.name} on WhatsApp`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 border border-emerald-500/30 transition-all cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping -z-10 opacity-75" />
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
      </motion.a>
    </aside>
  )
}
