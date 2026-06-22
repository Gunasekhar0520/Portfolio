import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData'
import { FaGraduationCap, FaUniversity, FaAward, FaBrain } from 'react-icons/fa'

const highlight = 'rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_90px_rgba(22,28,52,0.35)] backdrop-blur-2xl'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:px-8 reveal">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(0,179,255,0.18),_transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">About</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">B.Tech Student | Specialization in Artificial Intelligence & Data Science</h2>
          <p className="mt-5 max-w-xl text-slate-300">
            A premium portfolio built for an AI & Cloud engineering student who combines model development, data-driven systems, and modern full stack experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={highlight}>
              <h3 className="text-xl font-semibold text-white">Academic Profile</h3>
              <div className="mt-5 space-y-4 text-slate-300">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Degree</p>
                    <p className="mt-3 text-lg font-semibold text-white">{portfolioData.about.degree}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">University</p>
                    <p className="mt-3 text-lg font-semibold text-white">{portfolioData.about.university}</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">CGPA</p>
                  <p className="mt-3 text-lg font-semibold text-white">{portfolioData.about.cgpa}</p>
                </div>
              </div>
            </div>

            <div className={highlight}>
              <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {portfolioData.about.focus.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/30">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >
            {portfolioData.stats.map((stat) => (
              <div key={stat.label} className="group rounded-[32px] border border-white/10 bg-[#090d17]/90 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_24px_60px_rgba(0,179,255,0.14)]">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(0,179,255,0.18)]">
                    {stat.label === 'CGPA' ? <FaGraduationCap /> : stat.label === 'Role' ? <FaBrain /> : stat.label === 'Internships' ? <FaAward /> : <FaUniversity />}
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
