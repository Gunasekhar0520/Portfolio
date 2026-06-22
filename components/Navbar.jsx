import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollSpy from '../hooks/useScrollSpy'
import sectionIds from '../utils/sectionIds'

const navLabels = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  internship: 'Internship',
  projects: 'Projects',
  certifications: 'Certifications',
  contact: 'Contact'
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-600 text-sm font-semibold tracking-widest text-slate-950 shadow-[0_0_40px_rgba(0,179,255,0.22)]">
            GK
          </div>
          <div className="hidden md:block text-sm uppercase tracking-[0.24em] text-slate-400">Kaza Guna Sekhar</div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {sectionIds.map((id) => (
            <ScrollLink
              key={id}
              to={id}
              spy
              smooth
              offset={-90}
              duration={650}
              className={`cursor-pointer text-sm font-medium uppercase tracking-[0.18em] transition ${
                activeSection === id ? 'text-cyan-300' : 'text-slate-300/90 hover:text-cyan-300'
              }`}
            >
              {navLabels[id]}
            </ScrollLink>
          ))}
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/5 bg-[#07090f]/95 px-6 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {sectionIds.map((id) => (
                <ScrollLink
                  key={id}
                  to={id}
                  spy
                  smooth
                  offset={-90}
                  duration={650}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  {navLabels[id]}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
