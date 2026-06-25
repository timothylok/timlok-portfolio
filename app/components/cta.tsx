'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-5xl mx-auto px-6 py-16 border-t border-border"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p className="text-xl font-display font-medium text-foreground mb-1">
            Ready to ship something?
          </p>
          <p className="text-sm text-foreground/45">
            Available for AI automation, dashboards, and full-stack delivery.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Button
            nativeButton={false}
            render={<a href="/contact" data-umami-event="CTA Section: Work With Me" />}
            className="rounded-full px-5 py-2.5 h-auto bg-indigo-500 hover:bg-indigo-400 text-white border-0 transition duration-200 shadow-[0_0_18px_rgba(99,102,241,0.45)] hover:shadow-[0_0_28px_rgba(99,102,241,0.7)]"
          >
            Work with me →
          </Button>
          <a
            href="mailto:timlok@gmail.com"
            data-umami-event="CTA Section: Email"
            className="text-sm font-mono text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            timlok@gmail.com
          </a>
        </div>
      </div>
    </motion.section>
  )
}
