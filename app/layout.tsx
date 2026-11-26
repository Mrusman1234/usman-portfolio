import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import CustomCursor from "@/components/layout/CustomCursor"
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton"
import AmbientBackground from "@/components/ui/AmbientBackground"
import { developerProfile } from "@/data/profile"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8B3DFF",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://usman-devs.com"),
  title: {
    default: "Usman Dev | Muhammad Usman — Full Stack Web Developer & Next.js Services",
    template: "%s | Usman Dev",
  },
  description:
    "Usman Dev (Muhammad Usman) delivers Full Stack Developer Services in React, Next.js, Node.js & TypeScript for scalable SaaS and custom web app solutions.",
  keywords: [
    "Usman Dev",
    "Usman Devs",
    "Muhammad Usman",
    "Muhammad Usman Full Stack Developer",
    "Full Stack Developer Services",
    "Full Stack Web Development Services",
    "Next.js & React Developer",
    "Custom Web Application Development",
    "Custom SaaS & CRM Development",
    "E-Commerce Web Solutions",
    "Node.js Engineer",
    "TypeScript",
    "Prisma ORM",
    "Technical SEO Specialist",
  ],
  authors: [{ name: "Muhammad Usman (Usman Dev)", url: "https://usman-devs.com" }],
  creator: "Muhammad Usman (Usman Dev)",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/mu-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/brand/mu-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Usman Dev | Muhammad Usman — Full Stack Web Developer & Next.js Services",
    description:
      "Usman Dev (Muhammad Usman) delivers Full Stack Developer Services in React, Next.js, Node.js & TypeScript for scalable SaaS and custom web app solutions.",
    url: "https://usman-devs.com",
    siteName: "Usman Dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1280,
        height: 800,
        alt: "Usman Dev — Muhammad Usman Full Stack Web Developer & Next.js Services Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Dev | Muhammad Usman — Full Stack Web Developer & Next.js Services",
    description:
      "Usman Dev (Muhammad Usman) delivers Full Stack Developer Services in React, Next.js, Node.js & TypeScript for scalable SaaS and custom web app solutions.",
    images: [
      {
        url: "/portfolio-preview.png",
        alt: "Usman Dev — Muhammad Usman Full Stack Web Developer & Next.js Services Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://usman-devs.com/#person",
        name: developerProfile.name,
        alternateName: ["Usman Dev", "Usman Devs"],
        jobTitle: "Full Stack Web Developer",
        url: "https://usman-devs.com",
        email: developerProfile.email,
        image: "https://usman-devs.com/portfolio-preview.png",
        affiliation: {
          "@type": "Organization",
          name: "Digital Boosters IT Center",
        },
        sameAs: [
          developerProfile.links.github,
          developerProfile.links.linkedin,
        ],
        knowsAbout: [
          "React.js",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Full Stack Web Development",
          "SaaS Development",
          "Custom Web Application Development",
          "E-Commerce Web Solutions",
          "JavaScript",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Prisma ORM",
          "Flutter",
          "Tailwind CSS",
          "REST API Architecture",
          "Technical SEO",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: developerProfile.education.institution,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vehari",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        description: developerProfile.positioning,
      },
      {
        "@type": "WebSite",
        "@id": "https://usman-devs.com/#website",
        name: "Usman Dev",
        alternateName: "Muhammad Usman Portfolio",
        url: "https://usman-devs.com",
        description:
          "Usman Dev (Muhammad Usman) delivers Full Stack Developer Services in React, Next.js, Node.js & TypeScript.",
        publisher: {
          "@id": "https://usman-devs.com/#person",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://usman-devs.com/#service",
        name: "Usman Dev — Full Stack Web Development Services",
        url: "https://usman-devs.com",
        email: developerProfile.email,
        image: "https://usman-devs.com/portfolio-preview.png",
        description:
          "Custom SaaS, CRM, e-commerce, and Next.js full-stack web application development services by Usman Dev (Muhammad Usman).",
        provider: {
          "@id": "https://usman-devs.com/#person",
        },
        serviceType: [
          "Full Stack Web Development Services",
          "Next.js & React Frontend Development",
          "Custom SaaS & CRM Development",
          "E-Commerce Web Solutions",
          "Technical SEO & Core Web Vitals Optimization",
        ],
        areaServed: "Worldwide",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vehari",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
      },
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="bg-[#F7F7FA] text-slate-900 font-sans antialiased selection:bg-[#8B3DFF]/15 selection:text-[#6425D0] min-h-screen relative"
        suppressHydrationWarning
      >
        <AmbientBackground />
        <CustomCursor />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
