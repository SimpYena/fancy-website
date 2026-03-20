import React, { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle2, Zap, Clock, Lock } from 'lucide-react'

const BENEFITS = [
  { icon: Calendar, text: '60-min personalised session'  },
  { icon: Clock,    text: 'Response within 24 hours'     },
  { icon: Lock,     text: 'NDA-protected by default'     },
]

const CTA = memo(function CTA() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    // Simulated async submission — replace with real API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Radial gradient wash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-r from-cyan-900/20 via-violet-900/25 to-cyan-900/20 blur-3xl" />
        {/* Gradient top-border rule */}
        <div className="absolute top-0 inset-x-0 gradient-rule" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Scarcity badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-xs font-mono tracking-[0.18em] uppercase mb-8">
            <Zap className="w-3 h-3" />
            Limited Quarterly Intake
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Ready to Build the{' '}
            <span className="shimmer-text">Future?</span>
          </h2>

          {/* Sub-headline */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
            Join 200+ enterprise teams already leveraging Aether's proprietary AI
            frameworks to automate operations and unlock exponential growth.
          </p>

          {/* Benefit icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            {BENEFITS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>

          {/* ── Lead capture form ── */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all duration-200"
              />
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.04, y: -1 } : {}}
                whileTap={!loading  ? { scale: 0.97 }         : {}}
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Calendar className="w-4 h-4" />
                {loading ? 'Submitting…' : 'Book Discovery Call'}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </motion.button>
            </form>
          ) : (
            /* ── Success state ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1     }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">You're confirmed!</h3>
                <p className="text-slate-400 text-sm">
                  Our team will reach out within 24 hours to schedule your session.
                </p>
              </div>
            </motion.div>
          )}

          {/* Trust note */}
          <p className="mt-6 text-xs text-slate-700 font-mono">
            No spam · No cold sales · One focused conversation.
          </p>
        </motion.div>
      </div>
    </section>
  )
})

export default CTA
