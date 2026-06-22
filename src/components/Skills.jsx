import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData'

export default function Skills() {
  const categories = [
    { key: 'languages', title: 'Languages' },
    { key: 'web', title: 'Web' },
    { key: 'data', title: 'Data & AI' },
    { key: 'tools', title: 'Tools' }
  ]

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 lg:px-8 reveal">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Neon-powered skillset for AI, Cloud, and modern web.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">A premium catalog of languages, frameworks, and tools used to build scalable ML workflows and elegant frontend experiences.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {categories.map((cat, idx) => {
            const items = portfolioData.skills[cat.key] || []
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
              >
                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
