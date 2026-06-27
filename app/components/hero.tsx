'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { projects } from '@/app/data/projects'

const stats = [
  { value: String(projects.length), label: 'projects shipped' },
  { value: '18 mo', label: 'building with AI' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const, delay },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden max-w-5xl mx-auto px-6 pt-14 sm:pt-24 pb-16">
      <div className="max-w-3xl">
        <motion.p {...fadeUp(0)} className="text-xs font-mono uppercase tracking-widest text-foreground/35 mb-6">
          Auckland, New Zealand
        </motion.p>

        <motion.h1 {...fadeUp(0.05)} className="text-5xl sm:text-7xl font-display font-bold tracking-tight leading-[1.05] [text-wrap:balance]">
          <span className="sr-only">Tim Lok – Technical Project Manager & AI Automation Builder. </span>
          <span className="text-foreground">Building AI-powered</span>
          <br />
          <span className="text-foreground">products </span>
          <span className="text-indigo-300">— fast.<span className="cursor-blink inline-block w-[3px] h-[0.75em] bg-indigo-400 ml-1.5 rounded-[1px] align-[0.05em]" aria-hidden="true" /></span>
        </motion.h1>

        {/* Gradient thread underline */}
        <div className="mt-3 mb-7 h-px w-36 bg-gradient-to-r from-indigo-500/70 to-transparent" />

        <motion.p {...fadeUp(0.2)} className="text-lg text-foreground/65 leading-relaxed mb-3">
          Ex-Java developer turned Technical Project Manager — now building again, faster than before, with AI as my force multiplier.
        </motion.p>

        <motion.p {...fadeUp(0.25)} className="text-base text-foreground/45 leading-relaxed mb-8">
          I don't review every line of code. I review every feature. These are the things I've shipped.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
          <Button
            nativeButton={false}
            render={<a href="/contact" data-umami-event="Hero: Work With Me" />}
            className="rounded-full px-5 py-2.5 h-auto bg-indigo-500 hover:bg-indigo-400 text-white border-0 transition duration-200 shadow-[0_0_18px_rgba(99,102,241,0.45)] hover:shadow-[0_0_28px_rgba(99,102,241,0.7)]"
          >
            Work with me →
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="/CaseStudies" data-umami-event="Hero: Case Studies" />}
            className="rounded-full px-5 py-2.5 h-auto border-indigo-400/20 text-foreground/60 shadow-[0_0_10px_rgba(129,140,248,0.12)] transition-all duration-200 hover:bg-white/5 hover:text-foreground hover:border-indigo-400/40 hover:shadow-[0_0_18px_rgba(129,140,248,0.3)]"
          >
            Case Studies →
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" data-umami-event="Hero: LinkedIn" />}
            className="rounded-full px-5 py-2.5 h-auto border-indigo-400/20 text-foreground/60 shadow-[0_0_10px_rgba(129,140,248,0.12)] transition-all duration-200 hover:bg-white/5 hover:text-foreground hover:border-indigo-400/40 hover:shadow-[0_0_18px_rgba(129,140,248,0.3)]"
          >
            LinkedIn ↗
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" data-umami-event="Hero: GitHub" />}
            className="rounded-full px-5 py-2.5 h-auto border-indigo-400/20 text-foreground/60 shadow-[0_0_10px_rgba(129,140,248,0.12)] transition-all duration-200 hover:bg-white/5 hover:text-foreground hover:border-indigo-400/40 hover:shadow-[0_0_18px_rgba(129,140,248,0.3)]"
          >
            GitHub ↗
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-16 border-t border-border pt-12"
      >
        <div className="grid grid-cols-2 gap-8 max-w-xs">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-display font-medium text-[#e4a95c] mb-1">{stat.value}</p>
              <p className="text-xs font-mono uppercase tracking-widest text-foreground/40">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs font-mono text-foreground/30 tracking-wide">Next.js · Claude Code · Python · TypeScript</p>
      </motion.div>
    </section>
  )
}
