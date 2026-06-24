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

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-4">
        <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-4">Portfolio</p>
        <p className="text-lg text-foreground/60 max-w-2xl mb-10">
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
