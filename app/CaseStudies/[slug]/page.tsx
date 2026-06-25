import { notFound } from 'next/navigation'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import { caseStudies, getCaseStudy, getRelated } from '@/app/data/case-studies'

const base = 'https://timlok-portfolio.vercel.app'

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

  const related = getRelated(params.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${base}/CaseStudies` },
      { '@type': 'ListItem', position: 3, name: cs!.title, item: `${base}/CaseStudies/${params.slug}` },
    ],
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
        <header className="relative overflow-hidden mb-12">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-indigo-500/25" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_30%,rgba(129,140,248,0.08),transparent_70%)]" />
          <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-4">Case Study</p>
          <h1 className="text-3xl sm:text-4xl font-display font-light tracking-tight text-foreground leading-tight mb-2 [text-wrap:balance]">
            {cs.title}
          </h1>
          <div className="mt-2 mb-4 h-px w-36 bg-gradient-to-r from-indigo-500/50 to-transparent" />
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
              <h2 className="text-base font-display font-medium text-foreground mb-4">
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

        {/* Related case studies */}
        {related.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm font-display font-medium text-foreground mb-6">Related Case Studies</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              {related.map((r) => (
                <a
                  key={r.slug}
                  href={`/CaseStudies/${r.slug}`}
                  className="group bg-card p-5 flex flex-col gap-2 hover:-translate-y-0.5 transition-transform motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors leading-snug">
                    {r.title}
                  </p>
                  <p className="text-xs text-foreground/40 leading-relaxed line-clamp-2">{r.summary}</p>
                  <span className="text-xs font-mono text-foreground/30 group-hover:text-foreground/60 transition-colors mt-auto pt-1">
                    Read →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
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
