'use client'

import { motion } from 'framer-motion'

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
          <h2 className="text-xl font-medium text-foreground mb-6">About</h2>
          <div className="space-y-4 text-foreground/60 leading-relaxed">
            <p>
              I started as a Java developer, moved into technical project management, and spent years sitting in the gap between what customers said they needed and what engineers actually built.
            </p>
            <p>
              Over the last 18 months, AI coding tools gave me back my leverage. I've been building apps — not as a side hobby, but as a serious practice. Multi-agent pipelines, audio production systems, financial dashboards, MCP integrations.
            </p>
            <p>
              My approach is simple: I use Claude Code as my primary tool, I don't review every line of code, but I test every single feature. The result is production-quality software shipped at a pace that wasn't possible before.
            </p>
            <p>
              The CLAUDE.md I wrote to govern my AI pipelines is probably the truest summary of how I think: define roles, enforce separation of concerns, never self-verify, never claim success without validation.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-3">Background</p>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Java Developer (prior career)</li>
              <li>Technical Project Manager</li>
              <li>AI-assisted builder (current)</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-3">Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  github.com/timothylok ↗
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  linkedin.com/in/timlok ↗
                </a>
              </li>
              <li>
                <a href="mailto:timlok@gmail.com" className="text-foreground/60 hover:text-foreground transition-colors">
                  timlok@gmail.com ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-3">Location</p>
            <p className="text-sm text-foreground/60">Auckland, New Zealand</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
