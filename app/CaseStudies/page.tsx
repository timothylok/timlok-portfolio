import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import CaseStudiesList from './CaseStudiesList'

export const metadata = {
  title: 'Case Studies — Tim Lok',
  description: 'In-depth case studies on AI automation, dashboards, and full-stack product delivery by Tim Lok — Technical PM and AI builder based in Auckland, NZ.',
}

export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative overflow-hidden max-w-5xl mx-auto px-6 pt-16 pb-4">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-indigo-500/25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_30%,rgba(129,140,248,0.08),transparent_70%)]" />
        <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-4">Portfolio</p>
        <p className="text-lg text-foreground/60 max-w-2xl mb-4">
          Detailed breakdowns of how each project was built — the problem, the approach, the solution, and the results.
        </p>
        <div className="mt-1 mb-6 h-px w-36 bg-gradient-to-r from-indigo-500/50 to-transparent" />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <CaseStudiesList />
      </section>

      <Footer />
    </main>
  )
}
