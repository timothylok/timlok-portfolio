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
          <h2 className="text-xl font-display font-medium text-foreground mb-6">About</h2>
          <div className="space-y-4 text-foreground/55 leading-relaxed max-w-prose">
            <p>
              I'm Tim Lok, a Technical Project Manager and AI‑accelerated builder based in Auckland. I specialise in designing and delivering systems that combine automation, data, and modern AI tooling to solve real business problems. My background spans software engineering, product delivery, and AI‑driven workflow design — giving me a unique ability to bridge strategy, execution, and technical implementation.
            </p>
            <p>
              Over the past several years, I've built a wide range of tools and systems: multi‑agent content pipelines, stock‑analysis engines, real‑time dashboards, automation frameworks, internal productivity tools, and full‑stack web applications. My work blends practical engineering with a strong delivery mindset — I focus on clarity, speed, and measurable outcomes.
            </p>
            <p>
              I'm comfortable working across the entire stack: Next.js, TypeScript, Python, Vercel, Notion, Google APIs, Claude/Anthropic tooling, and modern AI frameworks. I also design architectures that emphasise reliability, maintainability, and deterministic behaviour — especially in AI‑powered systems where consistency matters.
            </p>
            <p>
              Before moving into AI‑accelerated product development, I completed an MBA at the University of Adelaide and a BS in Computer Science from the University of Kentucky. This combination of business and engineering helps me communicate effectively with both technical and non‑technical stakeholders, making delivery smoother and faster.
            </p>
            <p>
              Today, I focus on building tools, automations, and products that help teams move faster and work smarter. Whether it's a dashboard, an AI agent workflow, a data pipeline, or a full product build, I bring structure, clarity, and momentum to every project.
            </p>
            <p>
              If you're looking for someone who can turn ideas into working systems — quickly and reliably — I'd love to connect.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-foreground/35 mb-3">Background</p>
            <ul className="space-y-2 text-sm text-foreground/55">
              <li>BS Computer Science, University of Kentucky</li>
              <li>MBA, University of Adelaide</li>
              <li>Technical Project Manager</li>
              <li>AI-accelerated builder (current)</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-foreground/35 mb-3">Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" className="text-foreground/55 hover:text-indigo-400 transition-colors">
                  github.com/timothylok ↗
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" className="text-foreground/55 hover:text-indigo-400 transition-colors">
                  linkedin.com/in/timlok ↗
                </a>
              </li>
              <li>
                <a href="mailto:timlok@gmail.com" className="text-foreground/55 hover:text-indigo-400 transition-colors">
                  timlok@gmail.com ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-foreground/35 mb-3">Location</p>
            <p className="text-sm text-foreground/55">Auckland, New Zealand</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
