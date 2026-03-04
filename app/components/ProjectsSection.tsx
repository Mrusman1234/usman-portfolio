"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    title: "Online Pizza Hub Vehari",
    slug: "online-pizza-hub-vehari",
    description:
      "Multi-Restaurant pizza ordering system with admin dashboard, commission tracking and dynamic restaurant management.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Mrusman1234/online-pizza-hub",
  },
  {
    title: "Personal Portfolio",
    slug: "portfolio-website",
    description:
      "Modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/Mrusman1234/usman-portfolio",
  },
  {
    title: "E-commerce Clothing Store",
    slug: "bm-store",
    description:
      "Full-featured e-commerce store with product filtering, cart system, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Mrusman1234",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition-transform duration-300 border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">{project.title}</h3>

              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block text-sm text-purple-500 hover:underline"
                  >
                    View Details &rarr;
                  </Link>
                </motion.div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-gray-400 hover:text-white transition"
                >
                  GitHub &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
