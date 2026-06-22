import portfolioData from '../data/portfolioData'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05060a]/90 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-slate-300 md:flex-row">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Stay connected</p>
          <p className="text-sm text-slate-400">© 2026 Kaza Guna Sekhar | AI Developer Portfolio</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={portfolioData.meta.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-cyan-300">
            <FaLinkedin size={18} />
          </a>
          <a href={portfolioData.meta.github} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-cyan-300">
            <FaGithub size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-cyan-300">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
