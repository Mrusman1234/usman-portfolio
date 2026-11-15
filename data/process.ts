import { ProcessStep } from "@/types/process"

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Understand business requirements and user needs",
    description:
      "Every successful build begins with deep discovery. I analyze core objectives, target user behavior, competitive benchmarks, and functional constraints before writing a single line of code.",
    activities: [
      "Stakeholder interviews & requirement scoping",
      "User persona & journey mapping",
      "Technical feasibility & dependency assessment",
      "Performance & SEO target definition",
    ],
    deliverable: "Technical Scope & Architectural Requirement Document",
  },
  {
    step: "02",
    title: "Plan",
    tagline: "Define architecture, database models, and technical strategy",
    description:
      "Turning requirements into clear technical blueprints. I design relational or document schemas, define API contracts, select optimal stack components, and map state flow across the system.",
    activities: [
      "Database entity-relationship modeling (Prisma/SQL/MongoDB)",
      "RESTful API contract & endpoint specifications",
      "Component hierarchy & state management strategy",
      "Security & authentication perimeter design",
    ],
    deliverable: "System Architecture & Data Schema Specification",
  },
  {
    step: "03",
    title: "Design",
    tagline: "Develop user flows, UI systems, and responsive layouts",
    description:
      "Bridging UX wireframes into an editorial, high-performance UI design system. Establishing consistent typography scales, color tokens, responsive breakpoints, and tactile micro-interactions.",
    activities: [
      "Design token & typography system definition",
      "Mobile-first responsive layout wireframes",
      "Interactive component states & hover treatments",
      "Accessibility (WCAG 2.2 AA) contrast checks",
    ],
    deliverable: "Design System & High-Fidelity Responsive Prototypes",
  },
  {
    step: "04",
    title: "Develop",
    tagline: "Build frontend, backend, and integrations",
    description:
      "Engineering clean, production-grade code. Building Server Components, responsive Client Components, secure REST APIs, and database mutations with strict TypeScript type safety.",
    activities: [
      "Next.js App Router implementation with Server Components",
      "REST API routes & webhook handlers with input validation",
      "Database migrations & ORM query optimization",
      "Fluid micro-interactions & responsive styling with Tailwind",
    ],
    deliverable: "Fully Functional, Type-Safe Full-Stack Codebase",
  },
  {
    step: "05",
    title: "Test",
    tagline: "Validate functionality, performance, security, and accessibility",
    description:
      "Rigorous quality assurance across all layers. Testing cross-browser rendering, edge cases, responsive touch targets, Core Web Vitals, API error boundaries, and input sanitization.",
    activities: [
      "TypeScript compile-time verification & ESLint static analysis",
      "Lighthouse performance, SEO, & accessibility audits",
      "Cross-device & cross-browser responsive testing",
      "Rate limiting, security header, & vulnerability checks",
    ],
    deliverable: "Comprehensive QA & Performance Audit Report",
  },
  {
    step: "06",
    title: "Deliver",
    tagline: "Prepare documentation and deployment",
    description:
      "Seamless production release with zero downtime. Configuring automated CI/CD pipelines, SSL certificates, dynamic XML sitemaps, structured JSON-LD data, and maintainable documentation.",
    activities: [
      "Production deployment to Vercel/cloud infrastructure",
      "Dynamic XML sitemap, robots.txt, & Schema.org verification",
      "Environment variable configuration & DNS setup",
      "Architecture & codebase handover documentation",
    ],
    deliverable: "Live Production Platform & Complete Handover Documentation",
  },
]
