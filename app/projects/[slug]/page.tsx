"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Parallax } from "react-parallax"

type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  images: string[]
  architecture: string[]
}

const techIconMap: Record<string, string> = {
  React: "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  MongoDB: "/icons/mongodb.svg",
  "Node.js": "/icons/nodejs.svg",
  Express: "/icons/express.svg",
  Tailwind: "/icons/tailwind.svg",
  SEO: "/icons/seo.svg",
}

const projects: Project[] = [
  {
    slug: "online-pizza-hub-vehari",
    title: "Online Pizza Hub Vehari",
    description:
      "Multi-Restaurant pizza ordering system with admin dashboard, commission tracking and dynamic restaurant management.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Mrusman1234/online-pizza-hub",
    live: "https://online-pizza-hub.vercel.app",
    images: ["/project1.png", "/project2.png", "/project3.png"],
    architecture: [
      "Next.js frontend with responsive menu, cart, and checkout flows.",
      "Node/Express API for restaurants, orders, and commission logic.",
      "MongoDB collections for users, menus, orders, and transaction records.",
      "Admin dashboard for restaurant approvals and performance analytics.",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio",
    description:
      "Modern developer portfolio with glass morphism UI, smooth animations, and professional design.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    github: "https://github.com/Mrusman1234/usman-portfolio",
    live: "https://musman.dev",
    images: ["/project2.png", "/project3.png", "/project1.png"],
    architecture: [
      "Next.js 16 App Router for modern React architecture.",
      "Tailwind CSS for responsive and custom styling.",
      "Framer Motion for smooth entrance and hover animations.",
      "Glass morphism cards with backdrop blur effects.",
    ],
  },
  {
    slug: "bm-store",
    title: "E-commerce Clothing Store",
    description:
      "Full-featured e-commerce store with product filtering, cart system, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Mrusman1234",
    live: "https://example.com",
    images: ["/project3.png", "/project1.png", "/project2.png"],
    architecture: [
      "Client storefront with category filters, product detail, and cart state.",
      "Secure checkout flow with payment gateway handoff and status tracking.",
      "Inventory and order management endpoints served by backend services.",
      "Persistent storage for products, users, and purchase history in MongoDB.",
    ],
  },
]

export default function ProjectDetail() {
  const params = useParams<{ slug: string }>()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-red-400 mb-4">Project not found</h1>
          <p className="text-gray-300 mb-6">No project exists for slug: {slug ?? ""}</p>
          <Link href="/" className="text-purple-400 hover:underline">
            Back to home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <motion.div
      key={slug}
      className="min-h-screen bg-black text-white px-6 md:px-20 py-16"
      initial={{ opacity: 1, x: 90 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">{project.title}</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-16">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            View GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Live Demo
          </a>
        </div>

        <h2 className="text-3xl font-semibold mb-8">Project Screenshots</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {project.images.map((img, index) => (
            <Parallax
              key={img}
              strength={50}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={900}
                  height={600}
                  className="w-full h-auto hover:scale-105 transition duration-300"
                />
              </motion.div>
            </Parallax>
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-8">Project Architecture</h2>
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-4xl border border-zinc-800">
          <ul className="space-y-4 text-gray-300 text-lg">
            {project.architecture.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-red-500 mt-1">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-16 mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {project.tech.map((tech) => (
            <div
              key={`stack-${tech}`}
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2"
            >
              <Image src={techIconMap[tech]} alt={`${tech} icon`} width={28} height={28} />
              <span className="text-sm text-zinc-200">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
