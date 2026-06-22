import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion'
import { FaReact, FaPython, FaJava, FaGithub, FaCloud } from 'react-icons/fa'
import portfolioData from '../data/portfolioData'
import profileImg from '../assets/images/profile.svg'

const floatingIcons = [
  { Icon: FaReact, label: 'React' },
  { Icon: FaPython, label: 'Python' },
  { Icon: FaJava, label: 'Java' },
  { Icon: FaGithub, label: 'GitHub' },
  { Icon: FaCloud, label: 'Cloud' }
]

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: portfolioData.hero.subtitles,
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    })

    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden px-6 py-16 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(138,43,226,0.16),_transparent_32%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-slate-100">
          <motion.span
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan-200"
          >
            AI Developer Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl"
          >
            Kaza Guna Sekhar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl leading-9 text-slate-300"
          >
            <span ref={typedRef} className="font-semibold text-cyan-300" />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300"
          >
            {portfolioData.hero.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="btn-neon inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:bg-cyan-400/10"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-neon inline-flex items-center justify-center rounded-2xl border border-slate-700/80 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['AI', 'Big Data', 'FullStack'].map((label) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30">
                <span className="block text-sm uppercase tracking-[0.2em] text-slate-400">{label}</span>
                <span className="mt-3 block text-xl font-semibold text-white">Specialist</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-[40px] border border-white/10 bg-black/60 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/15 via-violet-500/10 to-blue-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#08111f]/90 p-6">
              <div className="absolute inset-x-0 -top-12 flex justify-center">
                <div className="h-24 w-24 rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-300/20 to-violet-500/15 blur-xl" />
              </div>
              <img src={profileImg} alt="Kaza Guna Sekhar" className="relative mx-auto h-56 w-56 rounded-full border border-white/10 bg-[#0b1522] object-cover" />
              <div className="mt-8 space-y-2 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">AI & Data Science Student</p>
                <h2 className="text-2xl font-semibold text-white">Futuristic engineer crafting intelligent systems</h2>
              </div>
            </div>
          </motion.div>

          {floatingIcons.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, y: [0, -8, 0], x: [0, 8, 0] }}
              transition={{ delay: 0.3 + index * 0.08, duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              className={`absolute ${index === 0 ? 'left-[-18px] top-16' : ''} ${index === 1 ? 'right-[-18px] top-20' : ''} ${index === 2 ? 'left-10 bottom-0' : ''} ${index === 3 ? 'right-10 bottom-4' : ''} ${index === 4 ? 'left-1/2 top-2 -translate-x-1/2' : ''}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-cyan-300 shadow-[0_0_40px_rgba(0,179,255,0.18)]">
                <item.Icon size={22} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
