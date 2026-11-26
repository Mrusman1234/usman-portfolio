import { Service } from "@/types/service"

export const servicesData: Service[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Custom SaaS & CRM Development",
    shortDescription:
      "End-to-end custom web applications and SaaS platforms engineered from database schema design to responsive client interfaces.",
    fullDescription:
      "I architect and construct complete, production-ready web applications using modern React, Next.js, and Node.js ecosystems. Every system is built with maintainable architecture, strict type safety, secure API boundaries, and scalable data models.",
    deliverables: [
      "End-to-end application architecture",
      "Type-safe TypeScript codebase",
      "RESTful API design & integration",
      "Production deployment & CI/CD setup",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "Prisma"],
    iconName: "Layers",
  },
  {
    id: "frontend",
    number: "02",
    title: "Next.js & React Frontend Development",
    shortDescription:
      "High-performance, accessible, and pixel-precise user interfaces built with React, Next.js, and Tailwind CSS.",
    fullDescription:
      "Transforming complex Figma and editorial designs into fluid, responsive frontend applications. Focusing on semantic HTML, WCAG 2.2 accessibility, zero layout shift, and intuitive micro-interactions.",
    deliverables: [
      "Custom responsive UI components",
      "Fluid typography & layout systems",
      "Client-side state management",
      "Lighthouse 95+ performance scores",
    ],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    iconName: "Code2",
  },
  {
    id: "backend-api",
    number: "03",
    title: "Node.js Backend & REST API Development",
    shortDescription:
      "Secure, resilient, and well-documented server architectures and RESTful endpoints.",
    fullDescription:
      "Designing and implementing scalable backend services with Express.js and Node.js. Delivering clean REST APIs with structured controllers, input validation schemas, rate limiting, and zero-trust authentication mechanisms.",
    deliverables: [
      "Secure RESTful endpoint development",
      "Input validation & error handling",
      "JWT & session authentication",
      "Third-party webhook integrations",
    ],
    technologies: ["Node.js", "Express.js", "REST APIs", "TypeScript", "Prisma ORM"],
    iconName: "Server",
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-Commerce Web Solutions",
    shortDescription:
      "Conversion-focused online storefronts with reliable checkout funnels and payment reconciliation.",
    fullDescription:
      "Building tailored e-commerce platforms with multi-channel payment reconciliation (direct card, wallet, and bank transfer flows), transactional inventory reservations, real-time order processing, and administrative back-office suites.",
    deliverables: [
      "Multi-channel payment rail integration",
      "Atomic inventory reservation systems",
      "Custom administrative back-office",
      "Order status & tracking telemetry",
    ],
    technologies: ["Next.js", "Prisma ORM", "SQL", "Node.js", "Tailwind CSS"],
    iconName: "ShoppingBag",
  },
  {
    id: "database",
    number: "05",
    title: "Database Architecture",
    shortDescription:
      "Robust relational and document database modeling optimized for data integrity and speed.",
    fullDescription:
      "Designing structured database schemas with PostgreSQL, SQL, and MongoDB. Implementing Prisma ORM migrations, query optimizations, strategic indexing, and transactional isolation levels to prevent race conditions.",
    deliverables: [
      "Relational & document schema design",
      "Index optimization & query tuning",
      "Prisma ORM migrations & seeding",
      "Data validation & integrity constraints",
    ],
    technologies: ["MongoDB", "SQL", "Prisma ORM", "PostgreSQL"],
    iconName: "Database",
  },
  {
    id: "seo",
    number: "06",
    title: "Technical SEO",
    shortDescription:
      "Search visibility engineering, structured JSON-LD data, and search engine crawlability.",
    fullDescription:
      "Implementing comprehensive technical SEO architecture from day one. Structuring semantic HTML, dynamic XML sitemaps, automated Open Graph social cards, canonical tags, and Schema.org rich snippets to maximize search discoverability.",
    deliverables: [
      "Schema.org JSON-LD structured data",
      "Dynamic XML sitemap & robots.txt",
      "Canonical URL & OpenGraph configuration",
      "Crawl efficiency & indexing strategy",
    ],
    technologies: ["Technical SEO", "Schema.org", "OpenGraph", "Next.js Metadata"],
    iconName: "Search",
  },
  {
    id: "optimization",
    number: "07",
    title: "Website Optimization",
    shortDescription:
      "Core Web Vitals auditing, asset delivery optimization, and performance engineering.",
    fullDescription:
      "Auditing and enhancing existing websites to achieve lightning-fast load times. Minimizing bundle sizes, eliminating Cumulative Layout Shift (CLS), optimizing Largest Contentful Paint (LCP), and configuring modern image pipelines.",
    deliverables: [
      "Core Web Vitals audit & remediation",
      "JavaScript bundle splitting & tree-shaking",
      "Image pipeline optimization (AVIF/WebP)",
      "Caching headers & CDN delivery",
    ],
    technologies: ["Performance Optimization", "Core Web Vitals", "Lighthouse", "Web Vitals"],
    iconName: "Zap",
  },
  {
    id: "responsive-ui",
    number: "08",
    title: "Responsive UI Development",
    shortDescription:
      "Mobile-first, cross-browser fluid layouts crafted for every screen from phones to ultrawide monitors.",
    fullDescription:
      "Designing intentional layouts that adapt smoothly across all breakpoints. Rather than simply shrinking desktop layouts, every mobile view is crafted for thumb ergonomics, legible typography, and touch-friendly interaction targets.",
    deliverables: [
      "Custom mobile navigation patterns",
      "Fluid clamp() typography & spacing",
      "Touch-optimized interactive targets",
      "Cross-browser testing (Chrome, Safari, Firefox)",
    ],
    technologies: ["Tailwind CSS", "Responsive Web Design", "HTML5", "CSS3"],
    iconName: "Smartphone",
  },
]
