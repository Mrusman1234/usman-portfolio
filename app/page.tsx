import Hero from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import AboutSection from "./components/AboutSection"
import CertificationsSection from "./components/CertificationsSection"
import StatsSection from "./components/StatsSection"
import TimelineSection from "./components/TimelineSection"
import ContactSection from "./components/ContactSection"
import ResumeSection from "./components/ResumeSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <CertificationsSection />
      <StatsSection />
      <TimelineSection />
      <ContactSection />
      <ResumeSection />
    </main>
  )
}
