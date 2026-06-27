'use client'

import { motion } from 'framer-motion'
import { aboutParagraphs, aboutBackground, aboutLinks, aboutLocation } from '@/app/data/about'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-xl font-display font-medium text-foreground mb-6">About</h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed max-w-prose [text-wrap:pretty]">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-sm font-display font-medium text-muted-foreground mb-3">Background</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              {aboutBackground.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-display font-medium text-muted-foreground mb-3">Links</p>
            <ul className="space-y-2 text-sm">
              {aboutLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'} className="text-foreground/70 hover:text-clay-600 transition-colors">
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-display font-medium text-muted-foreground mb-3">Location</p>
            <p className="text-sm text-foreground/70">{aboutLocation}</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
