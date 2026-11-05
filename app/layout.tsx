import "./globals.css"
import CustomCursor from "./components/CustomCursor"
import PageTransition from "./components/PageTransition"
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Muhammad Usman | Full Stack Developer & AI Agent Integrator',
  description: 'Full Stack Developer and Computer Science graduate (BSCS, 2026) building web and mobile applications with React, Next.js, Node.js, Flutter, and AI Agents. Based in Vehari, Punjab, Pakistan.',
  keywords: ['Muhammad Usman', 'Full Stack Developer', 'AI Agents', 'Next.js', 'React Developer', 'Flutter Developer', 'Node.js', 'MongoDB', 'BSCS', 'Portfolio', 'Android Developer'],
  authors: [{ name: 'Muhammad Usman' }],
  openGraph: {
    title: 'Muhammad Usman | Full Stack Developer & AI Agent Integrator',
    description: 'Full Stack Developer and Computer Science graduate (BSCS, 2026) building web and mobile applications with React, Next.js, Node.js, Flutter, and AI Agents.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ur_PK',
    url: 'https://usman-portfolio-jet.vercel.app',
    siteName: 'Muhammad Usman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usman | Full Stack Developer & AI Agent Integrator',
    description: 'Full Stack Developer and Computer Science graduate (BSCS, 2026) building web and mobile applications with Next.js, Flutter, and AI Agents.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
