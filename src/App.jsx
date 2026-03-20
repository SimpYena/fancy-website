import React from 'react'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import BentoServices from './components/BentoServices'
import CTA           from './components/CTA'
import Footer        from './components/Footer'

/* ── Root app — user flow: Hero → Services → Lead Capture → Footer ── */
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
