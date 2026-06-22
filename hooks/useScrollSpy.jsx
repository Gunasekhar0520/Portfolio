import { useEffect, useState } from 'react'
import sectionIds from '../utils/sectionIds'

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-25% 0px -50% 0px'
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeSection
}
