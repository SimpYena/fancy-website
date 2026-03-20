import React, { memo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Cpu,
  GitBranch,
} from 'lucide-react'

/* ── Framer Motion variants ── */
const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
}

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const STATS = [
  { value: '200+', label: 'AI Projects'       },
  { value: '$2B+', label: 'Revenue Unlocked'  },
  { value: '98%',  label: 'Client Retention'  },
]

const TECH_TAGS = ['GPT-4o', 'Claude 3.7', 'LangGraph', 'RAG', 'LoRA', 'RLHF']

/* ── Floating terminal / dashboard card ── */
const TerminalCard = memo(function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0,  y: 0  }}
      transition={{ delay: 0.85, duration: 0.8, ease: 'easeOut' }}
      className="glass-card rounded-2xl p-5 animate-float"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"    />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"  />
        <span className="ml-2 font-mono text-xs text-slate-500">agent_orchestrator.py</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400">LIVE</span>
        </div>
      </div>

      {/* Syntax-highlighted code snippet */}
      <div className="font-mono text-xs leading-[1.75] space-y-px select-none">
        <p><span className="text-slate-600">01 </span><span className="text-violet-400">from</span><span className="text-slate-300"> aether </span><span className="text-violet-400">import</span><span className="text-cyan-300"> AgentOrchestrator</span></p>
        <p><span className="text-slate-600">02 </span></p>
        <p><span className="text-slate-600">03 </span><span className="text-slate-400">orchestrator</span><span className="text-slate-300"> = </span><span className="text-cyan-300">AgentOrchestrator</span><span className="text-slate-300">(</span></p>
        <p><span className="text-slate-600">04 </span><span className="text-slate-300">    model</span><span className="text-slate-400">=</span><span className="text-orange-300">"gpt-4o"</span><span className="text-slate-300">,</span></p>
        <p><span className="text-slate-600">05 </span><span className="text-slate-300">    temperature</span><span className="text-slate-400">=</span><span className="text-orange-300">0.1</span><span className="text-slate-300">,</span></p>
        <p><span className="text-slate-600">06 </span><span className="text-slate-300">    max_agents</span><span className="text-slate-400">=</span><span className="text-orange-300">12</span></p>
        <p><span className="text-slate-600">07 </span><span className="text-slate-300">)</span></p>
        <p><span className="text-slate-600">08 </span></p>
        <p><span className="text-slate-600">09 </span><span className="text-slate-400">result</span><span className="text-slate-300"> = orchestrator.</span><span className="text-cyan-300">run</span><span className="text-slate-300">(task)</span></p>
      </div>

      {/* Progress bar */}
      <div className="mt-4 pt-3 border-t border-white/6">
        <div className="flex justify-between text-xs font-mono mb-1.5">
          <span className="text-slate-500">Execution time</span>
          <span className="text-emerald-400">1.24 s ↓ 38%</span>
        </div>
        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '78%' }}
            transition={{ delay: 1.6, duration: 1.1, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
          />
        </div>
        <div className="flex justify-between text-xs font-mono mt-1">
          <span className="text-slate-700">0%</span>
          <span className="text-cyan-400">78% efficiency gain</span>
        </div>
      </div>
    </motion.div>
  )
})

/* ── Hero ── */
const Hero = memo(function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        {/* Cyan radial glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-cyan-500/8 blur-[140px] animate-pulse-glow" />
        {/* Violet radial glow */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/10 blur-[110px] animate-pulse-glow [animation-delay:2s]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.032]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(148 163 184) 1px, transparent 1px), linear-gradient(90deg, rgb(148 163 184) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div variants={container} initial="hidden" animate="visible">

            {/* Badge */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-[0.18em] uppercase">
                <Sparkles className="w-3 h-3" />
                Elite AI Consultancy · Est. 2023
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-6"
            >
              Intelligence
              <br />
              <span className="shimmer-text">Engineered</span>
              <br />
              for Scale.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={item}
              className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10"
            >
              Aether AI architects bespoke LLM systems and autonomous agentic
              workflows that transform how enterprise organisations operate,
              compete, and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-14">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-300"
              >
                Book Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                Explore Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={item} className="flex gap-8 lg:gap-10">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold font-mono text-white">{value}</div>
                  <div className="text-xs text-slate-500 tracking-wide mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — floating dashboard */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Terminal card */}
            <TerminalCard />

            {/* Metric chips */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, label: 'Throughput', value: '+340%', color: 'text-emerald-400', bg: 'bg-emerald-500/10', delay: 1.1 },
                { icon: Cpu,        label: 'Model Acc.', value: '94.7%', color: 'text-violet-400',  bg: 'bg-violet-500/10',  delay: 1.2 },
              ].map(({ icon: Icon, label, value, color, bg, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ delay, duration: 0.6 }}
                  className="glass-card rounded-2xl p-4 flex items-center gap-3"
                >
                  <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div>
                    <div className={`text-lg font-bold font-mono ${color}`}>{value}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 1.35, duration: 0.6 }}
              className="glass-card rounded-2xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-xs font-mono text-slate-500">Supported stack</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                  Latest
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Hero
