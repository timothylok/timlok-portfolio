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
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-clay-500/20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_30%,rgba(160,82,45,0.05),transparent_70%)]" />
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Portfolio</p>
        <h1 className="text-3xl sm:text-4xl font-display font-medium text-foreground leading-tight mb-2">Case Studies</h1>
        <div className="mt-2 mb-4 h-px w-36 bg-gradient-to-r from-clay-500/50 to-transparent" />
        <p className="text-lg text-foreground/65 max-w-2xl mb-4">
          Detailed breakdowns of how each project was built — the problem, the approach, the solution, and the results.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <CaseStudiesList />
      </section>

      <Footer />
    </main>
  )
}
