import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData'
import { FaCloud, FaCodeBranch, FaLightbulb } from 'react-icons/fa'

export default function Internship() {
  return (
    <section id="internship" className="relative overflow-hidden px-6 py-24 lg:px-8 reveal">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/90">Internship</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">AI/Cloud Intern — IBM SkillsBuild</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Deep immersion in AI model development, IBM Cloud infrastructure, deployment workflows, and professional digital certification.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.45fr_1fr]"
        >
          <div className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="inline-flex items-center gap-4 rounded-3xl bg-cyan-400/10 px-4 py-3 text-cyan-200">
              <FaCloud className="h-5 w-5" />
              <span className="text-sm uppercase tracking-[0.2em]">IBM SkillsBuild</span>
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Duration</h3>
                <p className="mt-3 text-slate-300">{portfolioData.internship.duration}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Role</h3>
                <p className="mt-3 text-slate-300">AI/Cloud Intern</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-300">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/90">Certification earned</p>
                <p className="mt-3 text-lg font-semibold text-white">Global digital badge</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {portfolioData.internship.responsibilities.map((item, index) => (
              <div
                key={item}
                className="group rounded-[32px] border border-white/10 bg-[#07121e]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  {index % 2 === 0 ? <FaCodeBranch /> : <FaLightbulb />}
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Responsibility</p>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
