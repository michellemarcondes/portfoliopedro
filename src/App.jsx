import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ExperienceSection from './components/sections/ExperienceSection'
import CertificatesSection from './components/sections/CertificatesSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
