import "./globals.css"
import CustomCursor from "./components/CustomCursor"
import PageTransition from "./components/PageTransition"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muhammad Usman | Full Stack Developer',
  description: 'BSCS student at University of Education Lahore Vehari Campus, specializing in React, Next.js, Node.js, and MongoDB. Full Stack Developer based in Vehari, Punjab, Pakistan.',
  keywords: ['Muhammad Usman', 'Full Stack Developer', 'React Developer', 'Next.js', 'MongoDB', 'Node.js', 'BSCS', 'Portfolio', 'Web Developer', 'Vehari', 'Digital Marketing'],
  authors: [{ name: 'Muhammad Usman' }],
  openGraph: {
    title: 'Muhammad Usman | Full Stack Developer',
    description: 'BSCS student at University of Education Lahore Vehari Campus, specializing in React, Next.js, Node.js, and MongoDB. Based in Vehari, Punjab, Pakistan.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ur_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usman | Full Stack Developer',
    description: 'BSCS student at University of Education Lahore Vehari Campus, specializing in React, Next.js, Node.js, and MongoDB.',
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
