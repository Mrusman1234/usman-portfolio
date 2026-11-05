"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, CheckCircle, ShieldCheck } from "lucide-react"

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    platform: "Coursera",
    issueDate: "July 2024",
    credentialId: "V7ZUNR83TE9M",
    verifyUrl: "https://coursera.org/verify/V7ZUNR83TE9M",
    description:
      "Mastered generative AI fundamentals, prompt engineering, AI productivity workflows, and responsible AI implementation authorized directly by Google.",
    skills: ["Generative AI", "Prompt Engineering", "AI Productivity", "Google AI Tools"],
    color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30",
    badgeColor: "bg-blue-500/10 text-cyan-400 border-cyan-400/20",
  },
  {
    title: "Flutter & Dart: Developing iOS, Android, and Mobile Apps",
    issuer: "IBM",
    platform: "Coursera",
    issueDate: "June 2026",
    credentialId: "PCB2YL6ZQ761",
    verifyUrl: "https://coursera.org/verify/PCB2YL6ZQ761",
    description:
      "Cross-platform mobile application development with Flutter & Dart, building responsive UIs, native device integration, and state management for iOS and Android.",
    skills: ["Flutter", "Dart", "Android Development", "iOS Development", "Mobile Architecture"],
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-400/20",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Google",
    platform: "Professional Track",
    issueDate: "2024",
    description:
      "Comprehensive full-stack engineering covering React, Next.js, Node.js, Express, MongoDB, REST API development, authentication, and deployment.",
    skills: ["Next.js", "Node.js", "MongoDB", "Express.js", "REST APIs", "Full Stack"],
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
  },
  {
    title: "CSS, JavaScript & Python Complete Course",
    issuer: "Professional Certification",
    platform: "Comprehensive Coursework",
    issueDate: "2023",
    description:
      "Deep dive into client-side web development, JavaScript ES6+, asynchronous programming, CSS3 layout engines, and Python scripting.",
    skills: ["JavaScript ES6+", "Python", "CSS3", "DOM Manipulation"],
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-400/20",
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 mb-3 text-xs md:text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
            Verified Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Certifications &amp;{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Industry-recognized credentials authorized by Google and IBM, verifying competence in AI fundamentals, cross-platform mobile development, and full-stack engineering.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br ${cert.color} backdrop-blur-md border hover:border-purple-400/50 transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-purple-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${cert.badgeColor}`}>
                        {cert.issuer} • {cert.platform}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">Issued: {cert.issueDate}</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.verifyUrl ? (
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    ID: {cert.credentialId}
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm text-purple-400 hover:text-purple-300 font-semibold transition"
                  >
                    Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                  Verified Coursework
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
