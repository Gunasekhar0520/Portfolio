import { motion } from 'framer-motion'
import { FaRocket, FaStar, FaTrophy, FaBrain } from 'react-icons/fa'
import portfolioData from '../data/portfolioData'

const badges = [FaRocket, FaStar, FaTrophy, FaBrain]

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden px-6 py-24 lg:px-8 reveal">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Achievements</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Validated accomplishments across AI development and academic excellence.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioData.achievements.map((achievement, index) => {
            const Icon = badges[index % badges.length]
            return (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[32px] border border-white/10 bg-[#07101d]/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-lg font-semibold text-white">{achievement}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
