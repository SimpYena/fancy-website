import React, { useState, useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'Case Studies', href: '#cases'    },
  { label: 'About',        href: '#about'    },
  { label: 'Contact',      href: '#contact'  },
]

const Navbar = memo(function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Main nav bar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/75 backdrop-blur-2xl border-b border-white/8 shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group" aria-label="Aether AI home">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/30"
              >
                <Zap className="w-4 h-4 text-white fill-white" />
              </motion.div>
              <span className="font-mono font-semibold text-white text-sm tracking-[0.15em] uppercase">
                Aether <span className="text-cyan-400">AI</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  {/* Underline sweep on hover */}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-300"
              >
                <Zap className="w-3.5 h-3.5" />
                Book a Call
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0   }}
            exit={{    opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-16 inset-x-0 z-40 md:hidden bg-slate-950/97 backdrop-blur-2xl border-b border-white/10 px-6 py-5"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-slate-300 hover:text-white border-b border-white/5 last:border-0 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm"
              >
                Book Discovery Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

export default Navbar
