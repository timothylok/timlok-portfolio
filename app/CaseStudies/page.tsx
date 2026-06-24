import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import { caseStudies } from '@/app/data/case-studies'

export const metadata = {
  title: 'Case Studies — Tim Lok',
  description: 'In-depth case studies on AI automation, dashboards, and full-stack product delivery by Tim Lok — Technical PM and AI builder based in Auckland, NZ.',
}

export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-4">Case Studies</p>
        <h1 className="text-4xl font-light tracking-tight text-foreground mb-4">Projects in depth</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Detailed breakdowns of how each project was built — the problem, the approach, the solution, and the results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="divide-y divide-white/10">
          {caseStudies.map((cs) => (
            <a
              key={cs.slug}
              href={`/CaseStudies/${cs.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 py-8 hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-colors"
            >
              <div className="flex-1">
                <h2 className="text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors mb-2">
                  {cs.title}
                </h2>
                <p className="text-sm text-foreground/50 leading-relaxed mb-3">{cs.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-foreground/40 bg-white/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-foreground/30 group-hover:text-foreground/60 transition-colors text-sm font-mono shrink-0 mt-1">
                Read →
              </span>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
