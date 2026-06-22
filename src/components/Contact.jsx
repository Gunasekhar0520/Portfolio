import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import portfolioData from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Portfolio Inquiry')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${portfolioData.meta.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:px-8 reveal">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">High-end contact and collaboration access.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Reach out directly for AI development, cloud systems, or full stack collaboration with a premium technical profile.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[36px] border border-white/10 bg-[#07121e]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <div className="space-y-6">
              <div className="rounded-3xl bg-white/5 p-6 text-slate-300">
                <div className="flex items-center gap-4 text-cyan-300">
                  <FaPhone className="h-5 w-5" />
                  <span className="font-medium uppercase tracking-[0.2em]">Phone</span>
                </div>
                <p className="mt-4 text-lg font-semibold text-white">{portfolioData.meta.phone}</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 text-slate-300">
                <div className="flex items-center gap-4 text-cyan-300">
                  <FaEnvelope className="h-5 w-5" />
                  <span className="font-medium uppercase tracking-[0.2em]">Email</span>
                </div>
                <p className="mt-4 text-lg font-semibold text-white">
                  <a href={`mailto:${portfolioData.meta.email}`} className="underline decoration-cyan-300/50">
                    {portfolioData.meta.email}
                  </a>
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <a
                  href={portfolioData.meta.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-center text-slate-200 transition hover:border-cyan-400/30"
                >
                  <FaLinkedin className="mx-auto h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-sm">LinkedIn</p>
                </a>
                <a
                  href={portfolioData.meta.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-center text-slate-200 transition hover:border-cyan-400/30"
                >
                  <FaGithub className="mx-auto h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-sm">GitHub</p>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-center text-slate-200 transition hover:border-cyan-400/30"
                >
                  <FaInstagram className="mx-auto h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-sm">Instagram</p>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-[36px] border border-white/10 bg-[#07111e]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-slate-400">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-slate-400">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/50"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-slate-400">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/50"
                placeholder="Tell me about your project"
              />
            </div>
            <button className="btn-neon w-full rounded-3xl px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-cyan-400/15" type="submit">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
