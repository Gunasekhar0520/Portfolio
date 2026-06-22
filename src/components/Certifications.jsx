import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import portfolioData from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden px-6 py-24 lg:px-8 reveal">
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Certifications</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Industry-recognized credentials for AI and cloud practice.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-[#08101f]/90 p-8 text-slate-300 shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="flex items-center gap-4 text-cyan-300">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                  <FaCertificate className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{cert.date}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{cert.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
