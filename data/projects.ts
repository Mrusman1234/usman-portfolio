import { Project } from "@/types/project"

export const projectsData: Project[] = [
  {
    slug: "noir-gold-atelier",
    title: "NOIR & GOLD Atelier",
    subtitle: "Full-Stack Luxury Couture Commerce Platform & Financial Reconciliation Engine",
    category: "E-Commerce",
    role: "Lead Full-Stack Engineer & UI/UX Architect",
    year: "2026",
    featured: true,
    description:
      "Full-stack fashion e-commerce platform and administrative operations suite built with Next.js App Router, Express, Prisma ORM, and SQLite/PostgreSQL, featuring domestic payment rails (JazzCash, EasyPaisa, IBFT, COD), double-entry audit ledgers, and HMAC security.",
    executiveSummary:
      "NOIR & GOLD Atelier pairs an editorial haute couture storefront with an enterprise administrative suite. Engineered to handle domestic South Asian payment workflows including JazzCash, EasyPaisa, direct bank transfer (IBFT), and Cash on Delivery alongside atomic inventory reservations, HMAC webhook verification, and audit logging.",
    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Mrusman1234/noir-and-gold",
    github: "https://github.com/Mrusman1234/noir-and-gold",
    previewImage: "/noir-gold-preview.png",
    images: ["/noir-gold-preview.png"],
    architecture: [
      "Client Layer: Next.js App Router storefront with Server Components and responsive garment catalog",
      "Dedicated Backend: Express REST API service managing categories, products, orders, and authentication",
      "Data Layer: Prisma ORM with 14 synchronized relational models, transactional inventory locks, and audit logs",
      "Payment & Financial Engine: Support for COD, JazzCash, EasyPaisa, Direct Bank Transfer, HMAC webhooks, and CSV ledger exports",
    ],
    challenges: [
      {
        title: "Stock Concurrency During High-Demand Orders",
        problem:
          "Simultaneous checkout attempts for limited garment variants can cause race conditions and inventory overselling.",
        solution:
          "Implemented atomic database transactions with optimistic locking and inventory reservations inside Prisma order workflows.",
      },
      {
        title: "Multi-Rail Payment Reconciliation & Refund Safety",
        problem:
          "Combining Cash on Delivery with mobile wallets (JazzCash, EasyPaisa) and direct bank transfers creates audit and refund integrity risks.",
        solution:
          "Engineered replay-protected HMAC-SHA256 webhook verification, idempotent payment tracking, and cumulative capacity checks on refunds.",
      },
    ],
    highlights: [
      {
        title: "Admin Command Center",
        points: [
          "Role-based access control separating ADMIN and STAFF permissions with rate-limited authentication.",
          "Garment & variant CRUD with dynamic SKU generation and asset pipeline support.",
          "Real-time revenue tracking, order state transitions, and streaming RFC-4180 financial CSV exports.",
        ],
      },
      {
        title: "Editorial Haute Couture Storefront",
        points: [
          "Filterable Pakistani luxury garment collections with color/size variant selection.",
          "Multi-zone regional shipping calculations and persistent cart state.",
          "Guest order tracking secured with cryptographic HMAC verification tokens.",
        ],
      },
    ],
    keyDecisions: [
      "Selected Prisma ORM with transactional isolation to guarantee type safety and stock consistency across checkout mutations.",
      "Separated storefront Next.js App Router services from the dedicated Express backend API for modular scaling.",
      "Verified all order totals and refund bounds strictly on the server to prevent client-side price tampering.",
    ],
    lessonsLearned: [
      "Integrating local payment rails requires idempotent retry handling and explicit audit logs from day one.",
      "Financial ledger schemas and capacity constraints should be enforced cleanly at the service and database transaction level.",
    ],
  },
  {
    slug: "online-pizza-hub",
    title: "Online Pizza Hub Vehari",
    subtitle: "Multi-Restaurant Food Ordering, Rider Dispatch & Management Platform",
    category: "Full-Stack",
    role: "Full-Stack Mobile & Backend Developer",
    year: "2024",
    featured: true,
    description:
      "Multi-restaurant food ordering and management platform built with Flutter, Dart, and Firebase, featuring real-time Firestore order tracking, dedicated customer/restaurant/rider workflows, commission analytics, and Firebase Cloud Functions.",
    executiveSummary:
      "Designed and built a multi-restaurant food ordering and delivery ecosystem using Flutter and Firebase. The platform connects customers, restaurant administrators, and delivery riders with live Cloud Firestore status synchronization, bilingual English/Urdu localization, role-based dashboards, and automated backend Cloud Functions.",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth", "Cloud Functions", "Provider", "Google Maps"],
    liveUrl: "/demo/online-pizza-hub",
    live: "/demo/online-pizza-hub",
    githubUrl: "https://github.com/Mrusman1234/pizza-app-flutter",
    github: "https://github.com/Mrusman1234/pizza-app-flutter",
    previewImage: "/online-pizza-hub-preview.jpg",
    previewAspectRatio: "video",
    previewObjectPosition: "center",
    images: ["/online-pizza-hub-preview.jpg"],
    architecture: [
      "Mobile Client: Cross-platform Flutter application with Provider state management and English/Urdu (EN/UR) localization",
      "Real-Time Data: Cloud Firestore streams synchronizing menus, live order stages, notifications, and wallet balances",
      "Authentication & Security: Firebase Auth, Google Sign-In, OTP verification, App Check, and Firestore security rules",
      "Serverless Backend: Firebase Cloud Functions handling JazzCash/Stripe payment callbacks and scheduled stale-order cleanup",
    ],
    challenges: [
      {
        title: "Multi-Role Synchronization Across Customers, Restaurants & Riders",
        problem:
          "Keeping customer order tracking, restaurant kitchen queues, and rider dispatch views synchronized in real time across mobile connections.",
        solution:
          "Built reactive Cloud Firestore listeners paired with Firebase Cloud Messaging (FCM) push notifications and local notifications.",
      },
      {
        title: "Commission Tracking & Payment Callback Security",
        problem:
          "Calculating platform commissions and validating mobile payment redirects safely without trusting client-side logic.",
        solution:
          "Offloaded payment verification webhooks, order confirmation state transitions, and commission calculations to Firebase Cloud Functions.",
      },
    ],
    highlights: [
      {
        title: "Customer Ordering Experience",
        points: [
          "Live restaurant browsing, hot deals, vouchers, custom pizza options, and debounced search.",
          "Real-time delivery tracking with Google Maps and Geolocator location helpers.",
          "Multi-language support with English and Urdu translations.",
        ],
      },
      {
        title: "Restaurant, Rider & Admin Portals",
        points: [
          "Dedicated restaurant admin dashboards for menus, orders, audit logs, and sales reports.",
          "Rider dispatch portal for active deliveries and order status updates.",
          "Super-admin commission management, wallet tracking, and performance analytics charts.",
        ],
      },
    ],
    keyDecisions: [
      "Used Firebase Cloud Firestore and Cloud Functions to synchronize mobile clients in real time without managing separate socket servers.",
      "Organized business state cleanly with modular Provider stores across orders, restaurants, riders, wallets, and commissions.",
    ],
    lessonsLearned: [
      "Separating sensitive payment callbacks into serverless Cloud Functions prevents client-side tampering on mobile platforms.",
      "Designing connectivity-aware UI wrappers improves reliability on variable mobile data networks.",
    ],
  },
  {
    slug: "nexusflow-ai-crm",
    title: "NexusFlow AI CRM",
    subtitle: "Enterprise Revenue Intelligence & B2B SaaS Platform",
    category: "AI & Web Apps",
    role: "Full-Stack SaaS & AI Engineer",
    year: "2026",
    featured: true,
    description:
      "AI-assisted B2B pipeline, accounts, contracts, invoicing, and revenue forecasting workspace featuring 1-Click Demo Admin Login, Gmail SMTP OTP authentication, and an integrated Gemini AI Sales Copilot.",
    executiveSummary:
      "Engineered a full-stack enterprise B2B SaaS CRM and revenue intelligence cockpit powered by Next.js, TypeScript, Prisma, and MongoDB. NexusFlow combines pipeline analytics, contract and invoice lifecycle tracking, passwordless Gmail SMTP OTP verification with instant 1-Click Demo Admin access, and an embedded Gemini AI Sales Copilot for deal insights and forecasting.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB", "Gemini AI", "Nodemailer"],
    liveUrl: "https://nexusflow-ai-crm.vercel.app",
    githubUrl: "https://github.com/Mrusman1234/nexusflow-ai-crm",
    github: "https://github.com/Mrusman1234/nexusflow-ai-crm",
    live: "https://nexusflow-ai-crm.vercel.app",
    previewImage: "/nexusflow-crm.png",
    images: ["/nexusflow-crm.png"],
    architecture: [
      "Frontend: Next.js App Router with dark/light executive cockpit, interactive revenue charts, and modular CRM views",
      "AI Copilot: Embedded Gemini AI Sales Copilot analyzing pipeline velocity, account health, and deal risks",
      "Authentication: Dual-path auth supporting passwordless Gmail SMTP OTP via Nodemailer and 1-Click Demo Admin Login",
      "Data Layer: Prisma ORM with MongoDB managing B2B leads, enterprise accounts, deals, contracts, and invoices",
    ],
    challenges: [
      {
        title: "Frictionless Portfolio Demo Access Without Compromising Auth Security",
        problem:
          "Enterprise SaaS applications typically hide their core dashboard behind strict onboarding walls, preventing reviewers from exploring real functionality immediately.",
        solution:
          "Built a dual authentication gateway pairing production-grade Gmail SMTP OTP verification (Nodemailer) with a secure 1-Click Demo Admin Login pre-seeded with realistic B2B pipeline, accounts, contracts, and invoice data.",
      },
      {
        title: "Context-Aware Revenue Forecasting with Gemini AI",
        problem:
          "Generic AI chat widgets lack visibility into live CRM pipeline stages, weighted deal values, and overdue invoice metrics.",
        solution:
          "Engineered a structured context injection layer feeding real-time Prisma/MongoDB revenue snapshots directly into the Gemini AI Sales Copilot for actionable deal recommendations.",
      },
    ],
    highlights: [
      {
        title: "Executive Revenue Cockpit",
        points: [
          "Real-time KPI cards tracking total revenue, expected pipeline value, leads, and enterprise accounts.",
          "Closed-won bookings vs. active enterprise pipeline trajectory visualizations.",
          "Unified modules for Sales, Campaigns, Projects, E-mails, Reports, Documents, and Invoices.",
        ],
      },
      {
        title: "Integrated Gemini AI Sales Copilot",
        points: [
          "Always-accessible floating AI Sales Copilot inside the CRM workspace.",
          "Intelligent deal risk scoring, follow-up drafting, and pipeline health summaries.",
          "Seamless dark and light theme support tailored for executive readability.",
        ],
      },
    ],
    keyDecisions: [
      "Paired Prisma ORM with MongoDB to maintain strict TypeScript schema safety while supporting flexible enterprise CRM metadata.",
      "Implemented Nodemailer Gmail SMTP OTP delivery for reliable passwordless authentication without third-party auth vendor lock-in.",
    ],
    lessonsLearned: [
      "Providing an instant 1-Click Demo Admin experience dramatically increases engagement for complex B2B SaaS showcases.",
    ],
  },
  {
    slug: "acme-store",
    title: "Acme Store",
    subtitle: "Modern Headless E-Commerce Storefront for Everyday Creators",
    category: "E-Commerce",
    role: "Full-Stack E-Commerce Developer",
    year: "2026",
    featured: true,
    description:
      "Modern, responsive e-commerce storefront engineered with Next.js App Router and Tailwind CSS. Features dynamic multi-category filtering, live product search, promotional discount calculation, and seamless shopping cart checkout flows.",
    executiveSummary:
      "Designed and deployed a responsive digital storefront (Acme Store) tailored for creator essentials, streetwear apparel, and ergonomic workstation gear. Built with Next.js Server Components, clean catalog routing, promotional discounting, and persistent cart interactions.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Server Components", "Vercel"],
    liveUrl: "https://acmestore-theta.vercel.app",
    githubUrl: "https://github.com/Mrusman1234/acme_store",
    github: "https://github.com/Mrusman1234/acme_store",
    live: "https://acmestore-theta.vercel.app",
    previewImage: "/acme-store.png",
    images: ["/acme-store.png"],
    architecture: [
      "Frontend: Next.js App Router with Server Components for responsive storefront rendering",
      "Catalog Engine: Dynamic category routing (/search/apparel, /search/accessories) with live product search",
      "Cart & Checkout: Persistent client state synchronization with smooth cart drawer updates",
      "Performance: Edge-cached assets and automatic responsive image optimization on Vercel",
    ],
    challenges: [
      {
        title: "Responsive Catalog Search & Multi-Category Filtering",
        problem:
          "Keeping product search and category navigation clean, URL-shareable, and smooth on both desktop and mobile viewports.",
        solution:
          "Implemented URL-synchronized search parameters paired with React Suspense boundaries for clean catalog filtering without jarring page reloads.",
      },
      {
        title: "Cart Persistence & Mobile Checkout Ergonomics",
        problem:
          "Ensuring shopping cart states persist reliably across browser reloads while keeping drawer animations responsive on mobile devices.",
        solution:
          "Engineered persistent local storage synchronization coupled with smooth slide-over cart drawer transitions.",
      },
    ],
    highlights: [
      {
        title: "Modern Storefront UX",
        points: [
          "Interactive live product search with keyword suggestions.",
          "Dynamic promotional discount support with coupon codes (SAVE10).",
          "Help & FAQ center alongside dedicated order tracking views.",
        ],
      },
      {
        title: "Performance & Responsive Engineering",
        points: [
          "Mobile-first responsive drawer navigation and touch-optimized gallery.",
          "Geist typography system paired with clean, minimalist aesthetic tokens.",
          "Live production deployment hosted on Vercel.",
        ],
      },
    ],
    keyDecisions: [
      "Utilized Next.js Server Components to keep client-side JavaScript bundles lean.",
      "Used clean URL search parameters to make filtered product views easily shareable and SEO-friendly.",
    ],
    lessonsLearned: [
      "Frictionless cart drawers and immediate visual feedback significantly elevate the customer checkout experience.",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Muhammad Usman — Creative Developer Portfolio",
    subtitle: "Editorial Developer Portfolio & Personal Digital Identity",
    category: "Creative Engineering",
    role: "Designer & Frontend Architect",
    year: "2026",
    featured: false,
    description:
      "Editorial developer portfolio engineered with Next.js 16 App Router, TypeScript, and Tailwind CSS v4. Designed with clean aesthetics, tactile micro-interactions, and semantic technical SEO.",
    executiveSummary:
      "Built to showcase full-stack systems cleanly through modern frontend architecture, semantic HTML, technical SEO (JSON-LD, XML sitemap, Open Graph metadata), Gmail SMTP inquiry delivery, and purposeful Framer Motion transitions.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://usman-devs.com",
    githubUrl: "https://github.com/Mrusman1234/usman-portfolio",
    github: "https://github.com/Mrusman1234/usman-portfolio",
    live: "https://usman-devs.com",
    previewImage: "/portfolio-preview.png",
    images: ["/portfolio-preview.png"],
    architecture: [
      "Architecture: Next.js App Router with Server Components and statically generated case study pages",
      "Motion: Framer Motion animations respecting prefers-reduced-motion user preferences",
      "Styling: Tailwind CSS v4 with custom design tokens and fluid responsive typography",
      "SEO & Integrations: Automated JSON-LD structured data, Open Graph cards, dynamic sitemap, and Nodemailer contact API",
    ],
    challenges: [
      {
        title: "Smooth Motion Without Hurting Layout Stability",
        problem:
          "Combining interactive pointer effects, magnetic buttons, and scroll transitions without introducing layout jumps or hydration issues.",
        solution:
          "Scoped animations to GPU-composited transform/opacity properties and safely mounted pointer-only effects after hydration.",
      },
    ],
    highlights: [
      {
        title: "Crafted Micro-Interactions",
        points: [
          "Magnetic CTA buttons responding smoothly to pointer movement.",
          "Scroll-aware floating navigation with active section indicator.",
          "Interactive 6-stage development process explorer and filterable project catalog.",
        ],
      },
    ],
    keyDecisions: [
      "Built with strict TypeScript to maintain compile-time safety across all data modules and UI components.",
      "Used Next.js Image optimization and clean semantic markup across landing and case-study routes.",
    ],
    lessonsLearned: [
      "Restraint is essential in motion design — subtle animations guide attention without distracting from project substance.",
    ],
  },
]
