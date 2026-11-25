import { SkillGroup } from "@/types/skill"

export const skillGroupsData: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Modern, reactive, and accessible user interfaces built with typed component architecture.",
    skills: [
      {
        name: "React.js",
        context: "Component lifecycle, custom hooks, Server & Client Components, React 19 concurrent features.",
        featured: true,
      },
      {
        name: "Next.js",
        context: "App Router, Server Actions, Route Handlers, ISR, dynamic routing, and Turbopack.",
        featured: true,
      },
      {
        name: "TypeScript",
        context: "Strict typing, generics, schema validation, compile-time safety across frontend and API layers.",
        featured: true,
      },
      {
        name: "JavaScript (ES6+)",
        context: "Asynchronous patterns, closures, event loop, functional programming, DOM APIs.",
        featured: false,
      },
      {
        name: "Tailwind CSS",
        context: "Utility-first design systems, modern Tailwind v4, custom tokens, fluid typography, dark mode.",
        featured: true,
      },
      {
        name: "HTML5 & Semantic Web",
        context: "Accessible document outline, ARIA attributes, semantic structure, SEO fundamentals.",
        featured: false,
      },
    ],
  },
  {
    category: "Backend",
    description: "Robust server-side runtimes, scalable REST APIs, and secure application boundaries.",
    skills: [
      {
        name: "Node.js",
        context: "Event-driven asynchronous backend runtime, streams, child processes, microservices.",
        featured: true,
      },
      {
        name: "Express.js",
        context: "REST API routing, middleware architecture, error handling, rate limiting, and CORS.",
        featured: true,
      },
      {
        name: "REST API Development",
        context: "Clean resource modeling, idempotent HTTP methods, versioning, status codes, JSON contracts.",
        featured: true,
      },
      {
        name: "Serverless & Deployments",
        context: "Production cloud deployments on Vercel and Netlify, edge runtimes, Next.js route handlers, webhooks, and AI-assisted development workflows.",
        featured: false,
      },
    ],
  },
  {
    category: "Database",
    description: "Relational and document storage, data integrity, transactional consistency, and ORMs.",
    skills: [
      {
        name: "MongoDB",
        context: "Document databases, aggregation pipelines, schema validation, indexing, and Mongoose.",
        featured: true,
      },
      {
        name: "SQL & PostgreSQL",
        context: "Relational schema design, normalization, ACID transactions, foreign keys, row-level locks.",
        featured: true,
      },
      {
        name: "Prisma ORM",
        context: "Declarative modeling, automated migrations, type-safe query generation, relation filters.",
        featured: true,
      },
      {
        name: "Database Design",
        context: "Entity-relationship modeling, indexing strategies, referential integrity, query optimization.",
        featured: false,
      },
    ],
  },
  {
    category: "Architecture & Additional",
    description: "Cross-disciplinary capabilities in search visibility, web security, performance, and growth.",
    skills: [
      {
        name: "Technical SEO",
        context: "Schema.org structured data, crawlability, canonicals, dynamic sitemaps, OpenGraph metadata.",
        featured: true,
      },
      {
        name: "On-Page SEO",
        context: "Content hierarchy, meta tags, semantic markup, keyword integration, internal linking.",
        featured: false,
      },
      {
        name: "Performance Optimization",
        context: "Core Web Vitals (LCP, CLS, INP), asset optimization, code splitting, image pipelines.",
        featured: true,
      },
      {
        name: "Application Security",
        context: "HMAC signatures, input sanitization, rate limiting, zero-trust patterns, JWT security.",
        featured: true,
      },
      {
        name: "UI/UX Implementation",
        context: "Figma translation, micro-interactions, design system tokens, responsive ergonomics.",
        featured: true,
      },
      {
        name: "Digital Marketing",
        context: "Conversion funnel optimization, campaign analytics, e-commerce growth strategies.",
        featured: false,
      },
    ],
  },
]
