"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2022",
    title: "Started BSCS",
    description: "Began my Computer Science journey at University of Education Lahore Vehari Campus."
  },
  {
    year: "2023",
    title: "Frontend Development",
    description: "Mastered React, JavaScript, and modern UI design."
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description: "Worked with Node.js, MongoDB, and built dynamic applications."
  },
  {
    year: "2025",
    title: "SEO & Digital Marketing",
    description: "Expanded expertise into SEO optimization and online growth strategies."
  }
]

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
          My Journey
        </h2>

        <div className="border-l-2 border-purple-600 pl-6 md:pl-8 space-y-8 md:space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-purple-400">
                {item.year} — {item.title}
              </h3>
              <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
