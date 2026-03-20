import React, { memo } from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Code2,
  Workflow,
  BarChart3,
  Shield,
  Network,
  Cpu,
  Layers,
} from 'lucide-react'

/* ── Service definitions ── */
const SERVICES = [
  {
    id: 'strategy',
    icon: Brain,
    title: 'AI Strategy & Consulting',
    description:
      'End-to-end AI roadmaps aligned with your business objectives. We identify high-ROI opportunities, evaluate build-vs-buy trade-offs, and architect transformation paths that future-proof your organisation.',
    tags: ['Roadmapping', 'ROI Analysis', 'Risk Assessment', 'Change Mgmt'],
    gradient: 'from-cyan-500/20 via-cyan-600/5 to-transparent',
    iconColor:  'text-cyan-400',
    iconBg:     'bg-cyan-500/10 border border-cyan-500/20',
    colSpan:    'md:col-span-2',
    large: true,
  },
  {
    id: 'models',
    icon: Code2,
    title: 'Custom LLM Implementation',
    description:
      'Fine-tuned, domain-specific models trained on your proprietary data — deployed on-premise or in your cloud of choice.',
    tags: ['Fine-tuning', 'RAG', 'LoRA', 'RLHF'],
    gradient: 'from-violet-600/20 via-violet-700/5 to-transparent',
    iconColor:  'text-violet-400',
    iconBg:     'bg-violet-500/10 border border-violet-500/20',
    colSpan:    'md:col-span-1',
    large: false,
  },
  {
    id: 'agentic',
    icon: Workflow,
    title: 'Agentic Workflows',
    description:
      'Autonomous multi-agent systems that orchestrate complex business processes end-to-end with minimal human intervention.',
    tags: ['LangGraph', 'Tool Use', 'Multi-Agent'],
    gradient: 'from-fuchsia-600/20 via-fuchsia-700/5 to-transparent',
    iconColor:  'text-fuchsia-400',
    iconBg:     'bg-fuchsia-500/10 border border-fuchsia-500/20',
    colSpan:    'md:col-span-1',
    large: false,
  },
  {
    id: 'performance',
    icon: BarChart3,
    title: 'AI Ops & Performance',
    description:
      'Latency optimisation, cost reduction, and throughput scaling for production AI systems. We turn experiments into industrial-grade, observable engines.',
    tags: ['MLOps', 'Inference Opt.', 'Monitoring', 'Cost Reduction'],
    gradient: 'from-emerald-600/20 via-emerald-700/5 to-transparent',
    iconColor:  'text-emerald-400',
    iconBg:     'bg-emerald-500/10 border border-emerald-500/20',
    colSpan:    'md:col-span-2',
    large: true,
  },
]

/* ── Mini accent cards ── */
const MINI_CARDS = [
  { icon: Shield,  label: 'SOC 2 Type II',  sub: 'Certified',   color: 'text-cyan-400',    bg: 'bg-cyan-500/10'    },
  { icon: Network, label: 'Multi-Modal',    sub: 'Capable',     color: 'text-violet-400',  bg: 'bg-violet-500/10'  },
  { icon: Cpu,     label: 'On-Premise',     sub: 'Deployment',  color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Layers,  label: 'GPT-4o Ready',  sub: 'Integration', color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10' },
]

/* ── Motion variants ── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/* ── Service card ── */
const ServiceCard = memo(function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.025, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group relative ${service.colSpan} cursor-default`}
    >
      {/* Gradient-border shell — p-px trick */}
      <div className={`h-full p-px rounded-2xl bg-gradient-to-br ${service.gradient}`}>
        <div className="h-full rounded-2xl bg-slate-900/95 backdrop-blur-sm p-6 lg:p-7 flex flex-col gap-5">

          {/* Icon */}
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${service.iconBg}`}>
            <Icon className={`w-5 h-5 ${service.iconColor}`} />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className={`font-bold text-white mb-2 ${service.large ? 'text-xl' : 'text-lg'}`}>
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-white/5 border border-white/6 text-slate-400 text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover CTA hint */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 group-hover:text-slate-400 transition-colors duration-300">
            <span className="font-mono">Learn more</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200 inline-block">→</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
})

/* ── Section ── */
const BentoServices = memo(function BentoServices() {
  return (
    <section id="services" className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">

      {/* Background violet haze */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-violet-900/8 blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="block font-mono text-xs text-cyan-400 tracking-[0.22em] uppercase mb-4">
            // Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Where AI Meets{' '}
            <span className="shimmer-text">Precision</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Engineering-first solutions that integrate seamlessly with your
            existing infrastructure and scale without friction.
          </p>
        </motion.div>

        {/* ── Bento grid — 2+1 / 1+2 pattern ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        >
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </motion.div>

        {/* ── Mini accent cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {MINI_CARDS.map(({ icon: Icon, label, sub, color, bg }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="p-px rounded-2xl bg-gradient-to-br from-white/5 to-transparent cursor-default"
            >
              <div className="rounded-2xl bg-slate-900/90 p-5 flex flex-col items-center text-center gap-2.5">
                <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <div className={`text-sm font-semibold font-mono ${color}`}>{label}</div>
                <div className="text-xs text-slate-600">{sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

export default BentoServices
