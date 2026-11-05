"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Code2, Sparkles } from "lucide-react"

const skills = [
  { name: "React 19 & Next.js 16", level: 94, category: "Frontend" },
  { name: "Node.js & Express.js", level: 90, category: "Backend" },
  { name: "Prisma ORM & PostgreSQL", level: 88, category: "Database" },
  { name: "Financial Ledgers & Concurrency", level: 92, category: "Architecture" },
  { name: "AI Agent Integration & LLMs", level: 86, category: "AI & Tools" },
  { name: "Flutter & Android Development", level: 84, category: "Mobile" },
  { name: "MongoDB & Firebase Firestore", level: 86, category: "Database" },
  { name: "Zero-Trust Security & HMAC", level: 88, category: "Security" },
  { name: "Tailwind CSS v4 & Luxury UI", level: 96, category: "Frontend" },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 mb-3 text-xs md:text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
            Background &amp; Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Bio & Education Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack &amp; AI Developer</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                I am <span className="text-purple-400 font-semibold">Muhammad Usman</span>, a Full Stack Developer
                and Computer Science graduate (BSCS, 2026) based in Vehari, Punjab, Pakistan. I specialize in building
                high-performance web and mobile applications using Next.js, React, Node.js, MongoDB, Firebase, and Flutter.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Beyond traditional web stacks, I integrate AI agents with tool calling, streaming responses, and prompt engineering into real-world software. With professional experience across software house internships, e-commerce entrepreneurship, and digital marketing, I combine engineering precision with product growth.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs md:text-sm text-gray-400">
              <span className="flex items-center gap-1.5 text-purple-300">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Open to Full-Stack, Front-End &amp; Software Engineer Roles
              </span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-purple-950/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <h4 className="text-base font-semibold text-purple-300 mb-1">
                Bachelor of Science in Computer Science (BSCS)
              </h4>
              <p className="text-sm text-gray-300 mb-2">
                University of Education, Lahore — Vehari Campus
              </p>
              <p className="text-xs text-gray-400 mb-4">Aug 2022 – May 2026</p>
              <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold mb-4 border border-purple-500/30">
                CGPA: 3.21 / 4.00
              </div>
              <p className="text-xs text-gray-400">
                <span className="text-gray-300 font-medium">Core Courses:</span> Data Structures, Algorithms, Database Systems, Software Engineering, OOP, Networking
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center gap-2 text-xs text-purple-300">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Certified in Google AI &amp; IBM Flutter</span>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill.name} level={skill.level} category={skill.category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  skill,
  level,
  category,
  index,
}: {
  skill: string
  level: number
  category: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/10 hover:border-purple-500/40 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm md:text-base font-semibold text-white">{skill}</h4>
        <span className="text-xs text-purple-400 font-mono">{category}</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}
