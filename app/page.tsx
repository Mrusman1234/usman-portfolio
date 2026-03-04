import Hero from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import AboutSection from "./components/AboutSection"
import StatsSection from "./components/StatsSection"
import TimelineSection from "./components/TimelineSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <StatsSection />
      </div>
      <div id="timeline">
        <TimelineSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}