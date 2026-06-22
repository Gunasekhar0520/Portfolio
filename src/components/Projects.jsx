import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import portfolioData from '../data/portfolioData'

const placeholder = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=940&q=80'

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 lg:px-8 reveal">
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium project experiences for cinematic AI systems.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Showcasing a full stack movie booking app, AI predictive workflows, and a modern analytics dashboard with strong UI and structural polish.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#081018]/90 shadow-[0_40px_120px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="relative h-52 overflow-hidden rounded-t-[32px] bg-slate-900">
                <img
                  src={placeholder}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>
              <div className="space-y-5 p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                  <span>Featured</span>
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{project.tech.join(' • ')}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
                  >
                    <FaExternalLinkAlt />
                    View Demo
                  </a>
                  <a
                    href={portfolioData.meta.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
