'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/app/data/projects'
import { cn } from '@/lib/utils'

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')

  const tags = useMemo(() => {
    const all = projects.flatMap((p) => p.tags)
    return ['All', ...Array.from(new Set(all)).sort()]
  }, [])

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xl font-medium text-foreground">Projects</h2>
        <span className="text-sm text-foreground/40 font-mono">{filtered.length} shown</span>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            data-umami-event="Filter Click"
            data-umami-event-tag={tag}
            className={cn(
              'text-xs font-mono px-3 py-1.5 rounded-full border transition-colors',
              activeTag === tag
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-foreground/50 border-white/15 hover:border-white/30 hover:text-foreground/80'
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={cn(
                'bg-card p-6 flex flex-col gap-3 transition-transform hover:-translate-y-0.5',
                project.highlight && 'border-l-2 border-l-emerald-500'
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-medium text-foreground leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.highlight && (
                    <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      featured
                    </span>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-umami-event="Project: Live Link"
                      data-umami-event-project={project.title}
                      className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
>
                      live ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-foreground/50 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    data-umami-event="Project: Tag Click"
                    data-umami-event-tag={tag}
                    className="text-xs font-mono text-foreground/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded hover:text-foreground/70 hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
