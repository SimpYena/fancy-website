import React, { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { Zap, Send, CheckCircle2 } from 'lucide-react'

/* ── Footer with integrated contact form ── */
const Footer = memo(function Footer() {
  const LINKS = ['Privacy', 'Terms', 'Security', 'Blog']

  const [form,       setForm]       = useState({ name: '', email: '', message: '' })
  const [submitted,  setSubmitted]  = useState(false)
  const [loading,    setLoading]    = useState(false)
  const [emailError, setEmailError] = useState('')

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'email') {
      setEmailError(value && !isValidEmail(value) ? 'Please enter a valid email address.' : '')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message || loading) return
    if (!isValidEmail(form.email)) {
      setEmailError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    // Simulated async submission — replace with real API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all duration-200'

  return (
    <footer className="border-t border-white/5 py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ── Top section: brand + contact form ── */}
        <div className="flex flex-col lg:flex-row gap-14 mb-12">

          {/* Brand info */}
          <div className="lg:w-1/3 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="font-mono text-sm font-semibold text-slate-500 tracking-[0.15em]">
                AETHER <span className="text-cyan-500/70">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Elite AI consultancy helping enterprise teams implement LLMs,
              agentic workflows, and intelligent automation at scale.
            </p>
          </div>

          {/* Contact form */}
          <div className="lg:flex-1">
            <h3 className="text-base font-semibold text-slate-300 mb-5 font-mono tracking-wide">
              Get in touch
            </h3>

            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col gap-3"
                noValidate
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={inputClass}
                  />
                  <div className="flex flex-col gap-1 flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className={`${inputClass} ${emailError ? 'border-red-500/60' : ''}`}
                    />
                    {emailError && (
                      <p className="text-xs text-red-400 font-mono px-1">{emailError}</p>
                    )}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.04, y: -1 } : {}}
                    whileTap={!loading  ? { scale: 0.97 }         : {}}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {loading ? 'Sending…' : 'Send Message'}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1     }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex items-center gap-4 py-6"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-0.5">Message received!</h4>
                  <p className="text-xs text-slate-400">
                    Our team will get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* ── Bottom bar: links + copyright ── */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-8" aria-label="Footer">
            {LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-mono"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="text-xs text-slate-700 font-mono">
            © 2026 Aether AI Corp. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
})

export default Footer
