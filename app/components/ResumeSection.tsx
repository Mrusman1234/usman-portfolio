"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function ResumeSection() {
  const handleDownload = () => {
    // Replace with actual resume file path
    // You can add a resume.pdf to the public folder
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Muhammad_Usman_Resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Resume</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and professional background.
          </p>
          
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
