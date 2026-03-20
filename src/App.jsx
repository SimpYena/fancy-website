import React, { memo } from 'react'
import { Zap } from 'lucide-react'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import BentoServices from './components/BentoServices'
import CTA           from './components/CTA'

/* ── Footer — static UI, memoised for perf ── */
const Footer = memo(function Footer() {
  const LINKS = ['Privacy', 'Terms', 'Security', 'Blog']

  return (
    <footer className="border-t border-white/5 py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand mark */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <span className="font-mono text-sm font-semibold text-slate-500 tracking-[0.15em]">
            AETHER <span className="text-cyan-500/70">AI</span>
          </span>
        </div>

        {/* Footer links */}
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

        {/* Copyright */}
        <p className="text-xs text-slate-700 font-mono">
          © 2026 Aether AI Corp. All rights reserved.
        </p>
      </div>
    </footer>
  )
})

/* ── Root app — user flow: Hero → Services → Lead Capture ── */
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        {/* 1. Landing + Value Prop */}
        <Hero />
        {/* 2. Social Proof (stats embedded in Hero) + Services */}
        <BentoServices />
        {/* 3. Lead Capture */}
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
