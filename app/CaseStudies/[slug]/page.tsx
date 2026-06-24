import { notFound } from 'next/navigation'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import { caseStudies, getCaseStudy } from '@/app/data/case-studies'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} — Case Study | Tim Lok`,
    description: cs.summary,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) notFound()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-20">

        {/* Back link */}
        <a
          href="/CaseStudies"
          className="inline-flex items-center gap-2 text-xs font-mono text-foreground/40 hover:text-foreground/70 transition-colors mb-10"
        >
          ← All case studies
        </a>

        {/* Header */}
        <header className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-4">Case Study</p>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground leading-tight mb-4">
            {cs.title}
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed mb-6">{cs.summary}</p>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono text-foreground/40 bg-white/5 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {cs.sections.map((section) => (
            <section key={section.heading} className="border-t border-white/10 pt-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                {section.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 pl-4">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-foreground/30 mt-1.5 shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <a
            href="/CaseStudies"
            className="text-sm text-foreground/40 hover:text-foreground/70 font-mono transition-colors"
          >
            ← All case studies
          </a>
          <a
            href="/contact"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Work with me →
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}
