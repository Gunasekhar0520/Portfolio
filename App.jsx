import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ParticleBackground from './components/ParticleBackground'
import CursorGlow from './components/CursorGlow'
import FloatingBlobs from './components/FloatingBlobs'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#05060a] text-slate-100">
      {isLoading && <Loader />}
      <ParticleBackground />
      <FloatingBlobs />
      <CursorGlow />
      <Navbar />
      <main className="relative pt-24">
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  )
}
