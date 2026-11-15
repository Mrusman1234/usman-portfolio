import "./globals.css"
import type { Metadata, Viewport } from "next"
import CustomCursor from "@/components/layout/CustomCursor"
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton"
import { developerProfile } from "@/data/profile"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  metadataBase: new URL(developerProfile.links.portfolio),
  title: {
    default: "Muhammad Usman — Full-Stack Web Developer",
    template: "%s | Muhammad Usman",
  },
  description:
    "Muhammad Usman is a Full-Stack Web Developer specializing in Next.js, React, Node.js, TypeScript, and modern scalable web applications. Based in Pakistan, working globally.",
  keywords: [
    "Muhammad Usman",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Engineer",
    "TypeScript",
    "Prisma ORM",
    "Web Application Architecture",
    "Technical SEO Specialist",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Usman", url: developerProfile.links.portfolio }],
  creator: "Muhammad Usman",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Usman — Full-Stack Web Developer",
    description:
      "Building modern, scalable, secure, and user-focused web applications with Next.js, React, TypeScript, and Node.js.",
    url: developerProfile.links.portfolio,
    siteName: "Muhammad Usman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/project1.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Usman — Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Usman — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer focused on building modern, scalable, and user-centered web applications.",
    images: ["/project1.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: developerProfile.name,
    jobTitle: developerProfile.title,
    url: developerProfile.links.portfolio,
    sameAs: [
      developerProfile.links.github,
      developerProfile.links.linkedin,
    ],
    knowsAbout: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Prisma ORM",
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
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-600/10 selection:text-blue-900 min-h-screen">
        <CustomCursor />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
