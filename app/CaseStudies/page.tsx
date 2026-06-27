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

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-display font-medium text-foreground leading-tight mb-4">Case Studies</h1>
        <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
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
