"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-purple-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-purple-400">
          Muhammad Usman
        </h1>

        <div className="flex gap-8 text-sm font-medium items-center">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
          <a href="#resume" className="hover:text-purple-400 transition">
            Resume
          </a>
          <div className="flex gap-3 ml-2">
            <a
              href="https://github.com/Mrusman1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usman-6444523b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
