'use client'

import { useState } from 'react'
import { caseStudies } from '@/app/data/case-studies'
import { cn } from '@/lib/utils'

const PAGE_SIZE = 9

export default function CaseStudiesList() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(caseStudies.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const visible = caseStudies.slice(start, start + PAGE_SIZE)

  return (
    <>
      {/* Count */}
      <div className="flex items-baseline justify-between mb-8">
        <p className="text-sm font-display font-medium text-foreground">All case studies</p>
        <span className="text-sm text-foreground/40 font-mono">
          {start + 1}–{Math.min(start + PAGE_SIZE, caseStudies.length)} of {caseStudies.length}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden mb-8">
        {visible.map((cs) => (
          <a
            key={cs.slug}
            href={`/CaseStudies/${cs.slug}`}
            className="group bg-card p-6 flex flex-col gap-3 transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-sm font-medium text-foreground leading-snug group-hover:text-foreground/80 transition-colors">
                {cs.title}
              </h2>
              <span className="text-xs text-foreground/30 group-hover:text-foreground/60 transition-colors shrink-0">
                Read →
              </span>
            </div>

            <p className="text-sm text-foreground/50 leading-relaxed flex-1">
              {cs.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-foreground/40 bg-white/[0.04] border border-border px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={cn(
              'text-xs font-mono px-3 py-1.5 rounded-full border transition-colors',
              page === 1
                ? 'text-foreground/20 border-border cursor-not-allowed'
                : 'text-foreground/50 border-white/15 hover:border-white/30 hover:text-foreground/80'
            )}
          >
            ← prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={cn(
                'text-xs font-mono px-3 py-1.5 rounded-full border transition-colors',
                n === page
                  ? 'bg-white text-black border-white'
                  : 'text-foreground/50 border-white/15 hover:border-white/30 hover:text-foreground/80'
              )}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={cn(
              'text-xs font-mono px-3 py-1.5 rounded-full border transition-colors',
              page === totalPages
                ? 'text-foreground/20 border-border cursor-not-allowed'
                : 'text-foreground/50 border-white/15 hover:border-white/30 hover:text-foreground/80'
            )}
          >
            next →
          </button>
        </div>
      )}
    </>
  )
}
