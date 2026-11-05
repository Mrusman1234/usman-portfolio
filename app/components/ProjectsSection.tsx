"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Github, Sparkles } from "lucide-react"

export const projects = [
  {
    title: "NOIR & GOLD Atelier",
    slug: "noir-gold-atelier",
    badge: "Luxury E-Com & Ledger • 2026",
    description:
      "Enterprise luxury couture e-commerce engine & administrative operations suite featuring multi-channel domestic payment reconciliation (JazzCash, EasyPaisa, IBFT, COD), double-entry ledger, and zero-trust cryptographic security.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/Mrusman1234/noir-gold-atelier",
    live: "https://noir-gold-atelier.vercel.app",
    featured: true,
  },
  {
    title: "SmartDesk AI — Customer Support Agent",
    slug: "smartdesk-ai",
    badge: "AI Agent • 2026",
    description:
      "Full-stack web app with an embeddable AI chat agent that answers customer queries and looks up orders and products using tool calling against a Node.js/MongoDB backend.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "LLM API"],
    github: "https://github.com/Mrusman1234",
    live: "https://usman-portfolio-jet.vercel.app",
    featured: true,
  },
  {
    title: "Online Pizza Hub Vehari",
    slug: "online-pizza-hub-vehari",
    badge: "Mobile & Web • 2024",
    description:
      "Multi-Restaurant pizza ordering system built with Flutter & Firebase, featuring real-time order tracking, admin dashboard, and commission analytics.",
    tech: ["Flutter", "Firebase", "Next.js", "Node.js"],
    github: "https://github.com/Mrusman1234/online-pizza-hub",
    live: "https://online-pizza-hub.vercel.app",
    featured: true,
  },
  {
    title: "Personal Developer Portfolio",
    slug: "portfolio-website",
    badge: "Web App • 2025",
    description:
      "Modern developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS with dynamic routing, smooth animations, and real-world showcases.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mrusman1234/usman-portfolio",
    live: "https://usman-portfolio-jet.vercel.app",
    featured: false,
  },
  {
    title: "BM-STORE — E-Commerce Website",
    slug: "bm-store",
    badge: "E-Commerce • 2024",
    description:
      "Full-featured e-commerce clothing store with custom theme design, product filtering, shopping cart, and payment checkout integration.",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS3"],
    github: "https://github.com/Mrusman1234",
    live: "#",
    featured: false,
  },
  {
    title: "Tic Tac Toe Interactive Game",
    slug: "tic-tac-toe",
    badge: "Interactive UI • 2023",
    description:
      "Interactive game featuring win detection, score tracking, responsive turn mechanics, and modern UI built with vanilla web technologies.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Mrusman1234",
    live: "#",
    featured: false,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 mb-3 text-xs md:text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
            Work &amp; Creations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            From luxury e-commerce engines &amp; financial settlement ledgers to autonomous AI agents and cross-platform mobile apps.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {project.badge}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2.5 text-white group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-purple-600/10 text-purple-300 px-2.5 py-0.5 rounded-md border border-purple-500/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold transition"
                >
                  View Details &rarr;
                </Link>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="text-gray-400 hover:text-purple-400 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
