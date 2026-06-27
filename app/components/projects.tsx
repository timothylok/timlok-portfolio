'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/app/data/projects'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'AI & LLM', 'Dashboards & Data', 'Automation', 'Full-Stack'] as const
type Category = typeof CATEGORIES[number]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = useMemo(() => {
    const base = activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)
    return [...base].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0))
  }, [activeCategory])

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xl font-display font-medium text-foreground">Projects</h2>
        <motion.span
          key={filtered.length}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="text-xs text-muted-foreground font-mono uppercase tracking-wide"
        >
          {filtered.length} shown
        </motion.span>
      </div>

      <div className="flex gap-2 mb-10 overflow-x-auto pb-1 -mx-6 px-6 flex-nowrap sm:flex-wrap sm:overflow-x-visible sm:pb-0 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            data-umami-event="Filter Click"
            data-umami-event-tag={cat}
            className={cn(
              'text-xs font-mono px-3 py-2.5 rounded-full border transition-colors whitespace-nowrap',
              activeCategory === cat
                ? 'bg-clay-500 text-white border-clay-500'
                : 'bg-transparent text-foreground/55 border-border hover:border-clay-500/30 hover:text-foreground/80'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-sm text-muted-foreground font-mono mb-3">No projects in this category.</p>
          <button
            onClick={() => setActiveCategory('All')}
            className="text-xs text-clay-500 hover:text-clay-600 transition-colors font-mono"
          >
            Clear filter →
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                'group bg-card border rounded-xl flex flex-col gap-3 transition-colors duration-200',
                project.highlight
                  ? 'p-7 border-clay-500/35 bg-clay-50 hover:border-clay-500/55 md:col-span-2'
                  : 'p-6 border-border hover:border-clay-500/30'
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className={cn(
                  'font-display font-medium text-foreground leading-snug',
                  project.highlight ? 'text-base' : 'text-sm'
                )}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.highlight && (
                    <span className="text-xs font-mono bg-clay-100 text-clay-700 border border-clay-200 px-2 py-0.5 rounded-full">
                      featured
                    </span>
                  )}
                  {project.caseStudySlug && (
                    <a
                      href={`/CaseStudies/${project.caseStudySlug}`}
                      data-umami-event="Project: Case Study"
                      data-umami-event-project={project.title}
                      className={cn(
                        'text-xs transition-colors',
                        project.highlight
                          ? 'text-clay-600/80 hover:text-clay-600'
                          : 'text-foreground/40 group-hover:text-foreground/65 hover:!text-clay-600'
                      )}
                    >
                      case study →
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-umami-event="Project: Live Link"
                      data-umami-event-project={project.title}
                      className={cn(
                        'text-xs transition-colors',
                        project.highlight
                          ? 'text-clay-600/80 hover:text-clay-600'
                          : 'text-foreground/40 group-hover:text-foreground/65 hover:!text-clay-600'
                      )}
                    >
                      live ↗
                    </a>
                  )}
                </div>
              </div>

              <p className={cn(
                'text-sm leading-relaxed flex-1',
                project.highlight ? 'text-foreground/75' : 'text-foreground/65'
              )}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground bg-clay-50 border border-clay-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
