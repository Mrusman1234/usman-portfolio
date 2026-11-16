import React from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F7F7FA] text-slate-900 selection:bg-[#8B3DFF]/15 selection:text-[#6425D0]">
      {/* Top Floating Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Selected Projects Showcase */}
        <ProjectsSection />

        {/* Professional Services */}
        <ServicesSection />

        {/* Technical Skills & Systems */}
        <SkillsSection />

        {/* Development Process (01 - 06) */}
        <ProcessSection />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  )
}
