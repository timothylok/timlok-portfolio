'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '15', label: 'projects shipped' },
  { value: 'Next.js', label: 'primary stack' },
  { value: 'Claude Code', label: 'AI tooling' },
  { value: '~18 mo', label: 'building with AI tools' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const, delay },
})

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
      <div className="max-w-2xl">
        <motion.p {...fadeUp(0)} className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-5">
          Auckland, New Zealand
        </motion.p>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
          Building AI-powered products
          <br />
          <span className="text-foreground/40">— fast.</span>
        </h1>

        <motion.p {...fadeUp(0.2)} className="text-lg text-foreground/70 leading-relaxed mb-3">
          Ex-Java developer turned Technical Project Manager — now building again, faster than before, with AI as my force multiplier.
        </motion.p>

        <motion.p {...fadeUp(0.25)} className="text-base text-foreground/50 leading-relaxed mb-8">
          I don't review every line of code. I review every feature. These are the things I've shipped.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
          <Button
            render={<a href="#projects" />}
            className="rounded-full px-5 py-2.5 h-auto bg-white text-black hover:bg-white/90"
          >
            View projects
          </Button>
          <Button
            variant="outline"
            render={<a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" />}
            className="rounded-full px-5 py-2.5 h-auto border-white/20 text-foreground/70 hover:bg-white/5 hover:text-foreground"
          >
            LinkedIn
          </Button>
          <Button
            variant="outline"
            render={<a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" />}
            className="rounded-full px-5 py-2.5 h-auto border-white/20 text-foreground/70 hover:bg-white/5 hover:text-foreground"
          >
            GitHub
          </Button>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-medium text-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-foreground/40">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
