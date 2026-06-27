'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { projects } from '@/app/data/projects'

const CAREER_START_DATE = new Date(1998, 0, 1)
const yearsExperience = Math.floor((Date.now() - CAREER_START_DATE.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

const AI_BUILDING_START_DATE = new Date(2024, 5, 1)
const monthsAI = Math.floor((Date.now() - AI_BUILDING_START_DATE.getTime()) / (1000 * 60 * 60 * 24 * 30.44))

const stats = [
  { value: String(projects.length), label: 'projects shipped' },
  { value: `${monthsAI} mo`, label: 'building with AI' },
  { value: `${yearsExperience} yr`, label: 'Software development & Project Management' },
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
        <motion.p {...fadeUp(0)} className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Auckland, New Zealand
        </motion.p>

        <motion.h1 {...fadeUp(0.05)} className="text-5xl sm:text-7xl font-display font-bold tracking-tight leading-[1.05] [text-wrap:balance]">
          <span className="sr-only">Tim Lok – Technical Project Manager & AI Automation Builder. </span>
          <span className="text-foreground">Building AI-powered</span>
          <br />
          <span className="text-foreground">products </span>
          <span className="text-clay-500">— fast.<svg aria-hidden="true" className="cursor-blink inline-block ml-2 text-clay-500 align-[0.05em]" style={{ height: '0.75em', width: 'auto' }} viewBox="0 0 24 24" fill="currentColor"><path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.818a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .845-.143Z"/></svg></span>
        </motion.h1>

        {/* Gradient thread underline */}
        <div className="mt-3 mb-7 h-px w-36 bg-gradient-to-r from-clay-500/70 to-transparent" />

        <motion.p {...fadeUp(0.2)} className="text-lg text-foreground/65 leading-relaxed mb-3">
          Ex-Java developer turned Technical Project Manager — now building again, faster than before, with AI as my force multiplier.
        </motion.p>

        <motion.p {...fadeUp(0.25)} className="text-base text-foreground/65 leading-relaxed mb-8">
          I don't review every line of code. I review every feature. These are the things I've shipped.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
          <Button
            nativeButton={false}
            render={<a href="/contact" data-umami-event="Hero: Work With Me" />}
            className="rounded-full px-5 py-2.5 h-auto bg-clay-500 hover:bg-clay-600 text-white border-0 transition duration-200 shadow-[0_1px_8px_rgba(160,82,45,0.30)] hover:shadow-[0_2px_14px_rgba(160,82,45,0.45)]"
          >
            Work with me →
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="/CaseStudies" data-umami-event="Hero: Case Studies" />}
            className="rounded-full px-5 py-2.5 h-auto border-clay-500/25 text-foreground/65 transition-all duration-200 hover:bg-clay-50 hover:text-foreground hover:border-clay-500/45"
          >
            Case Studies →
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" data-umami-event="Hero: LinkedIn" />}
            className="rounded-full px-5 py-2.5 h-auto border-clay-500/25 text-foreground/65 transition-all duration-200 hover:bg-clay-50 hover:text-foreground hover:border-clay-500/45"
          >
            LinkedIn ↗
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" data-umami-event="Hero: GitHub" />}
            className="rounded-full px-5 py-2.5 h-auto border-clay-500/25 text-foreground/65 transition-all duration-200 hover:bg-clay-50 hover:text-foreground hover:border-clay-500/45"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 max-w-lg">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-display font-medium text-clay-600 mb-1">{stat.value}</p>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs font-mono text-muted-foreground/60 tracking-wide">Next.js · Claude Code · Python · TypeScript</p>
      </motion.div>
    </section>
  )
}
