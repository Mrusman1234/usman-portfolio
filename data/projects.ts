import { Project } from "@/types/project"

export const projectsData: Project[] = [
  {
    slug: "smartdesk-ai",
    title: "SmartDesk AI Support Agent",
    subtitle: "Autonomous E-Commerce Customer Support & Order Intelligence Agent",
    category: "AI & Web Apps",
    role: "Full-Stack Engineer & AI Integrator",
    year: "2026",
    featured: true,
    description:
      "Full-stack web application featuring an embeddable conversational AI agent that resolves customer inquiries, queries orders, and checks product availability using LLM tool calling against a Node.js/MongoDB backend.",
    executiveSummary:
      "Engineered an autonomous support agent that bridges generative language models with backend transactional APIs. SmartDesk AI uses structured function calling to query real databases, verify order statuses, handle return requests, and escalate complex tickets to human staff.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Mrusman1234",
    live: "https://usman-portfolio-jet.vercel.app",
    previewImage: "/project3.png",
    images: ["/project3.png"],
    architecture: [
      "Client: Embeddable React widget with markdown streaming and quick actions",
      "Agent Orchestration: LLM tool-calling layer parsing natural language intent into typed API requests",
      "API & Tool Execution: Secure Node.js backend executing parameterized read/write database queries",
      "Storage: MongoDB tracking conversation histories, session contexts, and ticket states",
    ],
    challenges: [
      {
        title: "Preventing Hallucinations on Customer Data",
        problem:
          "Language models can generate plausible-sounding but incorrect order numbers and status information.",
        solution:
          "Enforced strict deterministic tool calling where the LLM is only permitted to communicate verified JSON payloads returned directly from backend database queries.",
      },
      {
        title: "Secure Session & PII Verification",
        problem:
          "Protecting customer order details while maintaining a natural conversational flow.",
        solution:
          "Implemented signed temporary session tokens requiring email or phone verification before the agent accesses sensitive customer records.",
      },
    ],
    metrics: [
      {
        label: "Autonomous Resolution",
        value: "75%+",
        description: "Routine shipping, inventory, and policy queries answered without human intervention.",
      },
      {
        label: "Streaming Latency",
        value: "< 400ms",
        description: "Time to first token using server-sent event streaming.",
      },
    ],
    highlights: [
      {
        title: "Intelligent Tool Calling",
        points: [
          "Live stock and pricing lookups directly from MongoDB.",
          "Real-time courier tracking number verification.",
          "Automated draft generation for customer return requests.",
        ],
      },
      {
        title: "Developer Integration",
        points: [
          "One-line script tag embed for external websites.",
          "Customizable branding, color schemes, and system instructions.",
          "Live analytics dashboard showing query topics and escalation rates.",
        ],
      },
    ],
    keyDecisions: [
      "Used Server-Sent Events (SSE) for streaming text responses to create an immediate, human-like typing feel.",
      "Separated tool definitions into strongly typed Zod schemas to guarantee parameter safety.",
    ],
    lessonsLearned: [
      "Prompt engineering is most effective when paired with tight system guardrails and deterministic API validators.",
    ],
  },
  {
    slug: "online-pizza-hub",
    title: "Online Pizza Hub Vehari",
    subtitle: "Multi-Restaurant Food Ordering, Live Dispatch & Management Platform",
    category: "Full-Stack",
    role: "Full-Stack Web & Mobile Engineer",
    year: "2024",
    featured: true,
    description:
      "Multi-restaurant food ordering and management platform featuring real-time order tracking, merchant administrative dashboards, automated dispatching, and commission analytics.",
    executiveSummary:
      "Designed and developed a comprehensive digital ordering platform bridging local pizzerias with hungry customers. The system provides a real-time kitchen display, automated delivery driver assignments, and a streamlined mobile-first customer checkout experience.",
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Mrusman1234/online-pizza-hub",
    live: "https://online-pizza-hub.vercel.app",
    previewImage: "/project2.png",
    images: ["/project2.png"],
    architecture: [
      "Frontend: Next.js with responsive Tailwind CSS mobile ordering interface",
      "Backend API: Node.js and Express.js REST API handling orders, menus, and auth",
      "Real-Time Engine: WebSockets for live status updates from oven to doorstep",
      "Database: MongoDB with optimized geospatial and order status indexes",
    ],
    challenges: [
      {
        title: "Real-Time Multi-Party Synchronization",
        problem:
          "Keeping customer tracking screens, kitchen displays, and driver phones synchronized in real time without high server overhead.",
        solution:
          "Implemented lightweight socket channels and optimistic local UI updates, reducing server roundtrips and ensuring instant feedback.",
      },
      {
        title: "Complex Custom Pizza Customization",
        problem:
          "Managing dynamic toppings, sizes, crusts, and price calculations created UI clutter and state management friction.",
        solution:
          "Built a modular configuration engine with pure reducer state, validating price constraints both on the client and strictly in the backend API.",
      },
    ],
    metrics: [
      {
        label: "Order Flow Speed",
        value: "Under 45s",
        description: "Average customer journey from menu browse to order submission.",
      },
      {
        label: "Live Tracking Latency",
        value: "< 250ms",
        description: "Status propagation delay between restaurant kitchen and customer app.",
      },
    ],
    highlights: [
      {
        title: "Interactive Ordering Interface",
        points: [
          "Instant menu filtering by category, dietary preference, and price.",
          "Visual pizza builder with dynamic pricing update.",
          "One-click reordering from customer history.",
        ],
      },
      {
        title: "Restaurant Admin Portal",
        points: [
          "Live order queue with audio alerts for incoming orders.",
          "Sales analytics, peak hour heatmaps, and menu item performance.",
          "Driver dispatch management with status tracking.",
        ],
      },
    ],
    keyDecisions: [
      "Selected MongoDB for its document-oriented structure, allowing flexible menu item schemas with varying topping arrays.",
      "Structured REST API with clean controller-service-repository pattern to allow straightforward client scaling.",
    ],
    lessonsLearned: [
      "Mobile network variability requires robust offline retry mechanisms for customer order submissions.",
      "Clear visual indicators for order status significantly reduce customer support inquiries.",
    ],
  },
  {
    slug: "noir-gold-atelier",
    title: "NOIR & GOLD Atelier",
    subtitle: "Full-Stack Luxury Couture Commerce Platform & Financial Reconciliation Engine",
    category: "E-Commerce",
    role: "Lead Full-Stack Engineer & UI/UX Architect",
    year: "2026",
    featured: true,
    description:
      "Enterprise luxury couture e-commerce engine and administrative operations suite engineered for domestic South Asian payment rails (JazzCash, EasyPaisa, direct IBFT, COD), double-entry ledger, and zero-trust cryptographic security.",
    executiveSummary:
      "NOIR & GOLD Atelier pairs an editorial haute couture storefront with an enterprise operations suite (Atelier Ops). Built to solve real domestic payment challenges: hybrid multi-channel payment reconciliation, transactional stock reservation during flash drops, zero-trust cryptographic order verification, and automated audit logging.",
    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "SQL", "Tailwind CSS"],
    github: "https://github.com/Mrusman1234/noir-gold-atelier",
    live: "https://noir-gold-atelier.vercel.app",
    previewImage: "/project1.png",
    images: ["/project1.png", "/project4.png"],
    architecture: [
      "Client Layer: Next.js App Router with Server Components and optimistic UI mutations",
      "API Layer: Type-safe REST endpoints with HMAC webhook verification",
      "Data Layer: Prisma ORM with relational SQL schema and transactional isolation",
      "Financial Engine: Double-entry audit ledger for payment reconciliations",
    ],
    challenges: [
      {
        title: "Flash Drop Stock Concurrency",
        problem:
          "During high-volume couture product releases, simultaneous checkouts caused race conditions and inventory overselling.",
        solution:
          "Architected atomic database transactions using Prisma with row-level locks and time-to-live (TTL) inventory reservations that auto-release on payment timeout.",
      },
      {
        title: "Multi-Rail Payment Reconciliation",
        problem:
          "Disparate payment flows across mobile wallets (JazzCash, EasyPaisa), manual IBFT slip uploads, and COD created financial audit discrepancies.",
        solution:
          "Engineered a unified double-entry ledger system where every financial state change is cryptographically tracked with immutable audit trails.",
      },
    ],
    metrics: [
      {
        label: "Automated Test Suite",
        value: "149 Tests",
        description: "Comprehensive end-to-end and unit coverage across critical payment pipelines.",
      },
      {
        label: "Inventory Accuracy",
        value: "100%",
        description: "Zero overselling during simulated high-concurrency peak drop traffic.",
      },
      {
        label: "Reconciliation Time",
        value: "< 3 Sec",
        description: "Near-instantaneous receipt parsing and transaction matching.",
      },
    ],
    highlights: [
      {
        title: "Enterprise Back-Office (Atelier Ops)",
        points: [
          "Role-based access control with granular administrative permissions.",
          "Real-time order triage, packing slip generation, and courier integration.",
          "Visual telemetry dashboard showing live transaction health and reconciliation queue.",
        ],
      },
      {
        title: "Editorial Haute Couture UI",
        points: [
          "Minimalist luxury aesthetic designed with strict typographic hierarchy.",
          "Micro-interactions with zero layout shift (CLS 0.00).",
          "Seamless checkout flow with smart address autocomplete.",
        ],
      },
    ],
    keyDecisions: [
      "Chose Prisma ORM over raw queries to guarantee compile-time type safety across database mutations.",
      "Implemented server-side order calculations to eliminate any client-side price tampering vulnerabilities.",
      "Used Next.js Server Components for lightning-fast initial page loads while isolating dynamic checkout logic in targeted client boundaries.",
    ],
    lessonsLearned: [
      "Handling real-world local payment integrations requires resilient fallback mechanisms for network drops and webhook retries.",
      "Financial ledger schemas must be immutable from day one rather than retrofitted later.",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Muhammad Usman — Creative Developer Portfolio",
    subtitle: "High-Performance Editorial Portfolio & Personal Digital Identity",
    category: "Creative Engineering",
    role: "Designer & Frontend Architect",
    year: "2026",
    featured: false,
    description:
      "Editorial developer portfolio engineered with Next.js 16 App Router, TypeScript, and Tailwind CSS v4. Designed with clean SaaS aesthetics, tactile micro-interactions, and zero layout shift.",
    executiveSummary:
      "Built to demonstrate the synergy of modern frontend architecture, accessibility (WCAG 2.2 AA), technical SEO, and fluid motion design. The website serves as both an interactive resume and an architectural showcase.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mrusman1234/usman-portfolio",
    live: "https://usman-portfolio-jet.vercel.app",
    previewImage: "/project4.png",
    images: ["/project4.png"],
    architecture: [
      "Architecture: Next.js App Router with Server Components for static performance",
      "Motion: Framer Motion spring physics with prefers-reduced-motion fallbacks",
      "Styling: Tailwind CSS v4 with custom design tokens and fluid typography",
      "SEO: Automated JSON-LD structured data, Open Graph cards, dynamic sitemap",
    ],
    challenges: [
      {
        title: "High Performance with Rich Motion",
        problem:
          "Combining interactive cursor effects, magnetic buttons, and page transitions without degrading Core Web Vitals.",
        solution:
          "Isolated animations to GPU-composited properties (transform, opacity) and dynamically mounted desktop-only interactions after hydration.",
      },
    ],
    metrics: [
      {
        label: "Lighthouse Performance",
        value: "98+",
        description: "Optimized asset delivery, zero cumulative layout shift (CLS 0.00).",
      },
      {
        label: "Accessibility Score",
        value: "100",
        description: "Strict semantic hierarchy, keyboard navigability, and high contrast ratio.",
      },
    ],
    highlights: [
      {
        title: "Crafted Micro-Interactions",
        points: [
          "Magnetic CTA buttons responding to cursor proximity.",
          "Dynamic scroll-aware navigation with active section indicator.",
          "Smooth interactive 6-stage development process explorer.",
        ],
      },
    ],
    keyDecisions: [
      "Built with strict TypeScript to eliminate runtime bugs across all data layers.",
      "Used native Next.js Image optimization for responsive formats (AVIF/WebP).",
    ],
    lessonsLearned: [
      "Restraint is the hallmark of great motion design — animations should guide user attention, never distract from content.",
    ],
  },
]
