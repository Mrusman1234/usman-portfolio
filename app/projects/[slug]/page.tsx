"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Parallax } from "react-parallax"
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  Cpu,
  TrendingDown,
  Activity,
  FileCheck2,
} from "lucide-react"

type Challenge = {
  title: string
  problem: string
  solution: string
}

type Metric = {
  label: string
  value: string
  description: string
  icon: typeof ShieldCheck
}

type Project = {
  slug: string
  title: string
  subtitle?: string
  role?: string
  year: string
  description: string
  executiveSummary?: string
  tech: string[]
  github: string
  live: string
  images: string[]
  architecture: string[]
  challenges?: Challenge[]
  metrics?: Metric[]
  highlights?: { title: string; points: string[] }[]
}

const techIconMap: Record<string, string> = {
  React: "/icons/react.svg",
  "React 19": "/icons/react.svg",
  "React.js": "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  "Next.js 16": "/icons/nextjs.svg",
  MongoDB: "/icons/mongodb.svg",
  "Node.js": "/icons/nodejs.svg",
  Express: "/icons/express.svg",
  "Express.js": "/icons/express.svg",
  Tailwind: "/icons/tailwind.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  "Tailwind CSS v4": "/icons/tailwind.svg",
  SEO: "/icons/seo.svg",
}

const projects: Project[] = [
  {
    slug: "noir-gold-atelier",
    title: "NOIR & GOLD Atelier",
    subtitle: "Full-Stack Luxury E-Commerce Engine & Multi-Channel Financial Reconciliation System",
    role: "Lead Full-Stack Engineer & Senior UI/UX Architect",
    year: "2026",
    description:
      "Enterprise-grade luxury pret-a-porter e-commerce platform and administrative operations suite engineered for domestic South Asian payment rails (JazzCash, EasyPaisa, direct IBFT, COD), zero-trust security, and atomic financial reconciliation.",
    executiveSummary:
      "NOIR & GOLD Atelier pairs an editorial haute couture storefront inspired by global fashion houses with a robust back-office operations suite (Atelier Ops). Unlike generic storefronts, the engine is purpose-built to solve domestic South Asian e-commerce challenges: hybrid multi-channel payment reconciliation, transactional stock reservation during flash drops, zero-trust cryptographic order verification, and comprehensive fraud prevention.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma ORM",
      "PostgreSQL",
      "Node.js",
      "Vitest",
    ],
    github: "https://github.com/Mrusman1234/noir-gold-atelier",
    live: "https://noir-gold-atelier.vercel.app",
    images: ["/project1.png", "/project2.png", "/project3.png"],
    metrics: [
      {
        label: "Automated Test Suite",
        value: "149 / 149",
        description: "100% passing tests across unit, integration, payment concurrency & security",
        icon: FileCheck2,
      },
      {
        label: "Settlement Overhead",
        value: "-82%",
        description: "Reconciliation time slashed from ~45s down to under 8s per order",
        icon: TrendingDown,
      },
      {
        label: "Cumulative Layout Shift",
        value: "< 0.01",
        description: "Zero visual shifts across mobile (390px), tablet (768px) & desktop (1440px)",
        icon: Activity,
      },
      {
        label: "TypeScript Strictness",
        value: "0 Errors",
        description: "Zero warnings and zero 'any' casts under strict tsc compilation",
        icon: ShieldCheck,
      },
    ],
    architecture: [
      "Haute Couture Storefront with Cormorant Garamond typography, warm ivory palette (#FAF9F6), and gold accents.",
      "South Asian Payment Gateway Suite: JazzCash & EasyPaisa TID validation, direct IBFT bank transfer matching, and decoupled COD.",
      "Atelier Ops Admin Portal: Dedicated 'Awaiting Payment' quick-filter beacon, multi-field search, and 1-click modal settlement.",
      "Concurrency & Double-Settlement Locks: Atomic Prisma transactions ($transaction) preventing double ledger credits.",
      "Cumulative Refund Capacity Guard: Mathematical enforcement ensuring refunds never exceed captured totals.",
      "Zero-Trust HMAC Guest Tokens: Eliminates Broken Object Level Authorization (BOLA / IDOR) without query strings.",
      "Webhook Hardening: HMAC-SHA256 cryptographic signatures with 300s freshness window to reject replay attacks.",
      "RFC-4180 Formula Injection Sanitization: Cleansed CSV ledger exports defending against spreadsheet execution vulnerabilities.",
    ],
    highlights: [
      {
        title: "Haute Couture Editorial Storefront",
        points: [
          "Bespoke typography hierarchy with Cormorant Garamond & Plus Jakarta Sans.",
          "Dynamic responsive viewports calibrated for Desktop (1440px), Tablet (768px), and Mobile (390px).",
          "Zero layout shift (CLS < 0.01) with fluid aspect ratios and hardware-accelerated micro-interactions.",
        ],
      },
      {
        title: "Domestic Payment Suite & Settlement",
        points: [
          "JazzCash & EasyPaisa TID and phone verification with webhook signature checks.",
          "Direct IBFT bank transfers with electronic statement matching and audit logs.",
          "Decoupled Cash on Delivery fulfillment allowing shipment progression before payment collection.",
        ],
      },
      {
        title: "Atelier Ops Admin & Ledger",
        points: [
          "Pulsing 'Awaiting Payment' beacon querying pending settlements in real time.",
          "Interactive data tables with right-aligned tabular numerals (font-mono tabular-nums).",
          "1-Click modal settlement priming transaction IDs and reducing audit time by 82%.",
        ],
      },
      {
        title: "Zero-Trust Security & Cryptography",
        points: [
          "Cryptographic HMAC guest tokens passed via private HTTP headers to neutralize BOLA / IDOR.",
          "Dual sliding-window rate limiters coordinating defense across client IP and customer phone.",
          "Sanitization neutralizing CSV formula injection vectors (=, +, -, @, \\t, \\r, |).",
        ],
      },
    ],
    challenges: [
      {
        title: "Resolving the 'Delivered but Unpaid' E-Commerce Dilemma",
        problem:
          "In Pakistan, over 70% of luxury purchases utilize COD or offline bank transfers where goods are packaged and delivered weeks before courier remittance or bank reconciliation occurs. Traditional coupled platforms mark orders as completed prematurely, creating major audit discrepancies.",
        solution:
          "Decoupled the Fulfillment Engine (PENDING -> CONFIRMED -> PROCESSING -> SHIPPED -> DELIVERED) from the Financial Settlement Ledger (PENDING -> PAID -> PARTIALLY_REFUNDED -> REFUNDED). Staff confirm payment settlements independently of shipment stages, backed by an immutable OrderAuditLog.",
      },
      {
        title: "Race Conditions & Over-Refund Vulnerabilities",
        problem:
          "Simultaneous administrative actions (e.g., two staff members clicking 'Confirm Settlement' or issuing partial refunds concurrently) could lead to double crediting or refunding more than the customer paid.",
        solution:
          "Wrapped all settlement mutations inside Prisma interactive database transactions (prisma.$transaction) with strict precondition validations: Remaining Capacity = Order Total - Sum(Approved Refunds). Concurrent violations immediately rollback and raise CONCURRENT_ATTEMPT_CONFLICT.",
      },
      {
        title: "Maintaining Brand Luxury in High-Density Admin Dashboards",
        problem:
          "Admin dashboards frequently degenerate into dense, unstyled spreadsheets that cause cognitive fatigue, misentries, and operational slowdowns during peak luxury drops.",
        solution:
          "Applied Atelier luxury design tokens (#FAF9F6 canvas, #E2DED7 subtle borders, #1A1A1A high-contrast typography) with right-aligned tabular numbers to eliminate horizontal scanning fatigue, reducing order reconciliation time from ~45 seconds to under 8 seconds.",
      },
    ],
  },
  {
    slug: "smartdesk-ai",
    title: "SmartDesk AI — Customer Support Agent",
    subtitle: "Autonomous LLM Support Agent with Tool Calling & Human-Handoff",
    role: "Full-Stack & AI Agent Developer",
    year: "2026",
    description:
      "Full-stack web application featuring an embeddable AI chat agent that answers customer queries and looks up orders and products using tool calling against a Node.js/MongoDB backend.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "LLM API"],
    github: "https://github.com/Mrusman1234",
    live: "https://usman-portfolio-jet.vercel.app",
    images: ["/project1.png", "/project2.png", "/project3.png"],
    architecture: [
      "Embeddable AI chat agent component with real-time streaming responses and conversation memory.",
      "Tool-calling engine enabling LLM to autonomously inspect orders and product inventory.",
      "Node.js and MongoDB REST backend serving order records, catalog search, and chat history.",
      "Human-handoff fallback system ensuring unresolved edge queries route to human agents.",
      "Admin dashboard for reviewing chat transcripts, tool execution traces, and agent latency analytics.",
    ],
  },
  {
    slug: "online-pizza-hub-vehari",
    title: "Online Pizza Hub Vehari",
    subtitle: "Multi-Restaurant Mobile & Web Ordering Platform",
    role: "Mobile & Full-Stack Developer",
    year: "2024",
    description:
      "Multi-Restaurant pizza ordering system built with Flutter and Firebase, featuring real-time order tracking, admin dashboard, commission tracking, and dynamic restaurant management.",
    tech: ["Flutter", "Firebase", "Next.js", "Node.js"],
    github: "https://github.com/Mrusman1234/online-pizza-hub",
    live: "https://online-pizza-hub.vercel.app",
    images: ["/project1.png", "/project2.png", "/project3.png"],
    architecture: [
      "Flutter cross-platform mobile client for Android and iOS with fluid menu browsing and cart management.",
      "Firebase Firestore real-time database powering live order tracking and status transitions.",
      "Commission calculation and financial settlement tracking across multi-vendor restaurants.",
      "Web-based admin portal for restaurant onboarding, catalog approvals, and operational insights.",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Personal Developer Portfolio",
    subtitle: "Modern Next.js 16 App Router Portfolio with Dynamic Case Studies",
    role: "Frontend Engineer & UI Architect",
    year: "2025",
    description:
      "Modern developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS with dynamic routing, smooth animations, and verified certifications.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mrusman1234/usman-portfolio",
    live: "https://usman-portfolio-jet.vercel.app",
    images: ["/project2.png", "/project3.png", "/project1.png"],
    architecture: [
      "Next.js App Router providing lightning-fast server components and static route generation.",
      "Tailwind CSS v4 utility styling for glassmorphism UI and fully responsive layouts.",
      "Framer Motion entrance, hover, and timeline animations calibrated for 60fps performance.",
      "Dynamic project routing (`/projects/[slug]`) with deep-dive architecture reviews.",
    ],
  },
  {
    slug: "bm-store",
    title: "BM-STORE — E-Commerce Website",
    subtitle: "Custom Clothing Storefront & Payment Integration",
    role: "Full-Stack Web Developer",
    year: "2024",
    description:
      "Fully functional clothing e-commerce store with custom theme design, product filtering, cart system, and payment integration.",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS3"],
    github: "https://github.com/Mrusman1234",
    live: "#",
    images: ["/project3.png", "/project1.png", "/project2.png"],
    architecture: [
      "Custom responsive storefront with category filters, size/color variations, and fast search.",
      "WooCommerce checkout pipeline integrated with secure payment gateways.",
      "Inventory alerts and automated order confirmation workflows.",
      "SEO-optimized product catalog schema structured for Google Shopping visibility.",
    ],
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe Interactive Game",
    subtitle: "Vanilla JavaScript Game Engine with Score Tracking",
    role: "JavaScript Developer",
    year: "2023",
    description:
      "Interactive game featuring win detection, score tracking, responsive turn mechanics, and modern UI built with vanilla web technologies.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Mrusman1234",
    live: "#",
    images: ["/project2.png", "/project1.png", "/project3.png"],
    architecture: [
      "Modular game state engine validating winning combinations across 3x3 grids.",
      "Persistent round counter and local score state tracking.",
      "Responsive CSS3 flex/grid layout supporting fluid mobile and desktop gameplay.",
      "Pure vanilla JavaScript architecture highlighting strong core fundamentals.",
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
          <h1 className="text-3xl font-bold text-purple-400 mb-4">Project not found</h1>
          <p className="text-gray-300 mb-6">No project exists for slug: {slug ?? ""}</p>
          <Link href="/#projects" className="text-purple-400 hover:underline">
            &larr; Back to all projects
          </Link>
        </div>
      </main>
    )
  }

  const isNoirAtelier = project.slug === "noir-gold-atelier"

  return (
    <motion.div
      key={slug}
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-16"
      initial={{ opacity: 1, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 text-sm md:text-base transition"
        >
          &larr; Back to Projects
        </Link>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
            {project.year}
          </span>
          {project.role && (
            <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {project.role}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-400 to-amber-300 bg-clip-text text-transparent">
          {project.title}
        </h1>

        {project.subtitle && (
          <h2 className="text-lg md:text-2xl text-gray-300 font-medium mb-6 max-w-4xl">
            {project.subtitle}
          </h2>
        )}

        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-4xl leading-relaxed">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            View GitHub Repository
          </a>
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg shadow-purple-600/30"
            >
              Live Production Demo
            </a>
          )}
        </div>

        {/* Metrics Grid (for Noir & Gold Atelier) */}
        {project.metrics && (
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-400" /> System Verification &amp; Metrics
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {project.metrics.map((m) => {
                const Icon = m.icon
                return (
                  <div
                    key={m.label}
                    className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 font-mono uppercase">{m.label}</span>
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-extrabold text-white mb-1.5 font-mono">
                      {m.value}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{m.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Executive Summary */}
        {project.executiveSummary && (
          <div className="mb-16 p-6 md:p-8 rounded-2xl bg-purple-950/20 border border-purple-500/30 backdrop-blur-md">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-purple-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Executive Summary
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {project.executiveSummary}
            </p>
          </div>
        )}

        {/* System Architecture Blueprint */}
        {isNoirAtelier && (
          <div className="mb-16 p-6 md:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
              <Layers className="w-5 h-5 text-purple-400" /> Multi-Tier Architecture Blueprint
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              End-to-end separation of concerns: client-side luxury presentation, zero-trust middleware, transactional financial engine, and immutable audit persistence.
            </p>

            <div className="grid md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/30">
                <span className="text-purple-400 font-bold block mb-2">1. CLIENT LAYER</span>
                <p className="text-gray-300">Haute Couture Storefront (Next.js 16 / React 19) + Atelier Ops Admin Portal</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-500/30">
                <span className="text-cyan-400 font-bold block mb-2">2. SECURITY &amp; AUTH</span>
                <p className="text-gray-300">Cryptographic HMAC Tokens, RBAC (Admin/Staff/Guest), Dual IP/Phone Rate Limiter</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-900/20 border border-emerald-500/30">
                <span className="text-emerald-400 font-bold block mb-2">3. CORE ENGINE</span>
                <p className="text-gray-300">Atomic Stock Reservation, Multi-Rail Payment Ledger, Cumulative Refund Capacity Guard</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-500/30">
                <span className="text-amber-400 font-bold block mb-2">4. PERSISTENCE</span>
                <p className="text-gray-300">Prisma ORM Interactive Transactions + PostgreSQL Immutable Order Audit Log</p>
              </div>
            </div>
          </div>
        )}

        {/* Core Deliverable Highlights */}
        {project.highlights && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-purple-400" /> Core Engineering Modules
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" /> {h.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {h.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complex Engineering Challenges & Solutions */}
        {project.challenges && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-purple-400" /> Solved Engineering Challenges
            </h3>
            <div className="space-y-6">
              {project.challenges.map((c, i) => (
                <div
                  key={c.title}
                  className="p-6 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase mb-2">
                    <span>Challenge #{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{c.title}</h4>

                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                      <span className="text-red-400 font-bold block mb-1.5 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" /> Problem &amp; Vulnerability
                      </span>
                      <p className="text-gray-300 leading-relaxed">{c.problem}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                      <span className="text-emerald-400 font-bold block mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Engineered Architectural Solution
                      </span>
                      <p className="text-gray-300 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Checklist */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Technical Architecture &amp; Deliverables</h3>
        <div className="bg-zinc-900/80 p-6 md:p-8 rounded-2xl shadow-2xl max-w-4xl border border-zinc-800 mb-16">
          <ul className="space-y-4 text-gray-300 text-base md:text-lg">
            {project.architecture.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Screenshots */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-8">Project Screenshots &amp; Visual Design</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {project.images.map((img, index) => (
            <Parallax
              key={img + index}
              strength={50}
              className="rounded-xl overflow-hidden shadow-xl border border-white/10"
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

        {/* Tech Stack Icons */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Technologies &amp; Libraries Used</h3>
        <div className="flex flex-wrap gap-4 mb-16">
          {project.tech.map((tech) => (
            <div
              key={`stack-${tech}`}
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2"
            >
              {techIconMap[tech] ? (
                <Image src={techIconMap[tech]} alt={`${tech} icon`} width={24} height={24} />
              ) : (
                <span className="w-2 h-2 rounded-full bg-purple-400" />
              )}
              <span className="text-sm text-zinc-200">{tech}</span>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-sm">
          <Link href="/#projects" className="text-purple-400 hover:text-purple-300">
            &larr; Back to all projects
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-1.5"
          >
            Inspect Code on GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
