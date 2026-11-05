"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Bot, Rocket, ShoppingBag, Globe } from "lucide-react"

const timeline = [
  {
    year: "2026",
    role: "Lead Full-Stack Engineer — NOIR & GOLD Atelier & AI Systems",
    company: "Luxury E-Commerce & SmartDesk AI",
    icon: Bot,
    color: "from-purple-500 to-pink-500",
    badge: "Current Flagship",
    description:
      "Architected NOIR & GOLD Atelier luxury e-commerce engine with multi-channel payment reconciliation (JazzCash, EasyPaisa, IBFT, COD), double-entry ledger, and 149-test suite. Engineered SmartDesk AI autonomous customer support agent.",
    highlights: ["Next.js 16 & React 19", "Prisma ORM & PostgreSQL", "Multi-Rail Payment Ledger", "Zero-Trust HMAC Security"],
  },
  {
    year: "2025",
    role: "Android & Web Developer — Internship",
    company: "Digital Boosters IT Center",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    badge: "Professional Experience",
    description:
      "Built and deployed web and Android applications for enterprise clients using Next.js, Node.js, and Flutter. Architected RESTful APIs and optimized client-side performance.",
    highlights: ["Client App Deployments", "REST API Architecture", "Flutter Mobile Integration"],
  },
  {
    year: "2024",
    role: "Production Systems & Google AI",
    company: "Online Pizza Hub & Coursera",
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    badge: "Project & Certification",
    description:
      "Engineered Online Pizza Hub Vehari, a multi-restaurant pizza ordering system with real-time order tracking and admin dashboards. Completed Google AI Essentials certification.",
    highlights: ["Multi-Restaurant System", "Real-Time Tracking", "Google AI Essentials Certified"],
  },
  {
    year: "2022 – 2023",
    role: "Founder & E-Commerce Manager",
    company: "TikTok Shop E-Commerce (UK Market)",
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-500",
    badge: "Entrepreneurship",
    description:
      "Launched and independently scaled an e-commerce brand targeting the UK market. Managed supply chain, product sourcing, viral video campaigns, customer support, and sales analytics.",
    highlights: ["UK E-Commerce Operations", "Performance Analytics", "Product Sourcing"],
  },
  {
    year: "2022 – 2023",
    role: "Affiliate Marketing Specialist",
    company: "Dubai Marketplace",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    badge: "Digital Growth",
    description:
      "Planned and executed digital affiliate marketing campaigns with SEO-optimized listings. Managed WordPress websites and designed promotional creative assets to maximize conversion rates.",
    highlights: ["SEO Listing Optimization", "WordPress CMS Management", "Conversion Rate Growth"],
  },
  {
    year: "2022 – 2026",
    role: "Bachelor of Science in Computer Science (BSCS)",
    company: "University of Education, Lahore — Vehari Campus",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-500",
    badge: "Education (CGPA: 3.21 / 4.00)",
    description:
      "Completed rigorous computer science degree covering Data Structures, Algorithms, Database Systems, Software Engineering, OOP, and Computer Networking.",
    highlights: ["CGPA: 3.21 / 4.00", "Data Structures & Algorithms", "Full Stack Software Engineering"],
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-gray-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 mb-3 text-xs md:text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
            Career &amp; Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            A track record combining academic rigor, software engineering internships, AI development, and digital entrepreneurship.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-purple-800/60 ml-4 md:ml-32 space-y-10 md:space-y-12">
          {timeline.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.role + item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-6 md:pl-10"
              >
                {/* Timeline node icon */}
                <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ring-4 ring-gray-950`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left Year Badge (Desktop) */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                  <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-950/60 px-2 py-1 rounded border border-purple-800/40">
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 hover:border-purple-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="md:hidden text-xs font-mono font-semibold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                      {item.year}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white">{item.role}</h3>
                  <h4 className="text-sm font-medium text-purple-400 mb-3">{item.company}</h4>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
