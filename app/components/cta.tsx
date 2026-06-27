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
          <p className="text-sm text-foreground/65">
            Available for AI automation, dashboards, and full-stack delivery.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Button
            nativeButton={false}
            render={<a href="/contact" data-umami-event="CTA Section: Work With Me" />}
            className="rounded-full px-5 py-2.5 h-auto bg-clay-500 hover:bg-clay-600 text-white border-0 transition duration-200 shadow-[0_1px_8px_rgba(160,82,45,0.30)] hover:shadow-[0_2px_14px_rgba(160,82,45,0.45)]"
          >
            Work with me →
          </Button>
          <a
            href="mailto:timlok@gmail.com"
            data-umami-event="CTA Section: Email"
            className="text-sm font-mono text-muted-foreground hover:text-foreground/80 transition-colors"
          >
            timlok@gmail.com
          </a>
        </div>
      </div>
    </motion.section>
  )
}
