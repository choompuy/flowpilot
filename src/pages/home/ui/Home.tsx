import { useState, useEffect } from 'react'
import { Header } from '@/shared/ui/header'
import { Hero } from '@/shared/ui/hero'
import { Trusted } from '@/shared/ui/trusted'
import { Features } from '@/shared/ui/features'
import { Showcase } from '@/shared/ui/showcase'
import { Statistics } from '@/shared/ui/statistics'
import { Pricing } from '@/shared/ui/pricing'
import { Testimonials } from '@/shared/ui/testimonials'
import { Cta } from '@/shared/ui/cta'
import { Footer } from '@/shared/ui/footer'
import './Home.css'

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check localStorage first, then prefers-color-scheme
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setIsDarkMode(initialTheme === 'dark')
    document.documentElement.setAttribute('data-theme', initialTheme)

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="min-h-screen">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero />
      <Trusted />
      <Features />
      <Showcase />
      <Statistics />
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home
