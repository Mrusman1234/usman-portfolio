"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed mb-10"
        >
          I am Muhammad Usman, a Full Stack Developer and BSCS student at University of Education Lahore Vehari Campus, 
          based in Vehari, Punjab, Pakistan. I specialize in building modern web applications using 
          Next.js, React, Node.js, and MongoDB. With expertise in SEO and Digital Marketing, 
          I create responsive, user-friendly websites that drive results.
        </motion.p>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard skill="React" level={90} />
          <SkillCard skill="Next.js" level={85} />
          <SkillCard skill="Node.js" level={80} />
          <SkillCard skill="MongoDB" level={75} />
          <SkillCard skill="SEO" level={95} />
          <SkillCard skill="Digital Marketing" level={90} />
        </div>
      </div>
    </section>
  )
}

// Skill Card Component
function SkillCard({ skill, level }: { skill: string; level: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-5 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2">{skill}</h3>
      <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2 }}
          className="h-full bg-purple-600 rounded-full"
        />
      </div>
    </motion.div>
  )
}