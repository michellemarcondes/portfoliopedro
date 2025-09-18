import { useEffect } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ExperienceSection from './components/sections/ExperienceSection'
import CertificatesSection from './components/sections/CertificatesSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

// Importando AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    // Inicializando AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div data-aos="fade-up">
          <AboutSection />
        </div>
        <div data-aos="fade-up">
          <ExperienceSection />
        </div>
        <div data-aos="fade-up">
          <CertificatesSection />
        </div>
        <div data-aos="fade-up">
          <ProjectsSection />
        </div>
        <div data-aos="fade-up">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
