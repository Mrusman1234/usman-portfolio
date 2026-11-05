"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            My <span className="text-purple-500">Resume</span>
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Download my resume to learn more about my experience, skills, and professional background.
          </p>
          
          <motion.a
            href="/resume.pdf"
            download="Muhammad_Usman_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm md:text-base"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
