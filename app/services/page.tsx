import Nav from '../components/nav'
import Footer from '../components/footer'
import { SITE_NAME } from '@/app/data/site'
import { cn } from '@/lib/utils'

export const metadata = {
  title: `Services — ${SITE_NAME}`,
  description: 'AI systems & automation, full-stack product development, technical project management, and agile delivery — available for contracts and consulting engagements.',
}

const services = [
  {
    title: 'AI Systems & Automation',
    body: 'I design and build AI‑powered systems — multi‑agent workflows, automation pipelines, and orchestration layers that eliminate manual work and accelerate delivery. From RAG to custom copilots, I help teams turn AI from hype into working systems.',
    featured: true,
  },
  {
    title: 'Full‑Stack Product Development',
    body: 'From MVP to production, I build fast, modern applications using Next.js, Node, and TypeScript. Clean architecture, strong foundations, and production‑grade execution — shipped quickly and built to scale.',
  },
  {
    title: 'Technical Project Management',
    body: 'I scope, plan, and manage technical projects end‑to‑end. Clear requirements, aligned stakeholders, predictable delivery, and no surprises. I bring structure to ambiguity and momentum to stalled initiatives.',
  },
  {
    title: 'Agile Delivery & Scrum Leadership',
    body: 'I run sprints, coach teams, and optimize workflows so engineering teams move with speed and focus. Practical, outcome‑driven agile — not ceremony for ceremony\'s sake.',
  },
  {
    title: 'Product Strategy & Advisory',
    body: 'I help founders and teams define what to build, how to build it, and how to ship it efficiently. From MVP definition to architecture decisions, I provide clarity, direction, and technical insight that reduces risk and accelerates progress.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-14">

        <header className="border-t-2 border-clay-500/50 border-b border-border pt-8 pb-10">
          <h1 className="text-4xl font-display font-light text-foreground mb-4 [text-wrap:balance]">Services</h1>
          <p className="text-foreground/65 leading-relaxed max-w-2xl [text-wrap:pretty]">
            I combine technical project management, agile delivery, and hands‑on AI engineering to help teams ship faster, smarter, and with more clarity.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                'bg-card border rounded-xl p-6 flex flex-col gap-3',
                service.featured
                  ? 'md:col-span-2 bg-clay-50 border-clay-500/35'
                  : 'border-border'
              )}
            >
              <h2 className={cn(
                'font-display font-medium text-foreground leading-snug',
                service.featured ? 'text-base' : 'text-sm'
              )}>
                {service.title}
              </h2>
              <p className={cn(
                'text-sm leading-relaxed [text-wrap:pretty]',
                service.featured ? 'text-foreground/75' : 'text-foreground/65'
              )}>
                {service.body}
              </p>
            </div>
          ))}
        </section>

        <div className="border-t border-border pt-10">
          <p className="text-sm text-foreground/65 mb-5 [text-wrap:pretty]">
            Available for contracts, consulting engagements, and advisory work based in Auckland — remote‑friendly worldwide.
          </p>
          <a
            href="/contact"
            data-umami-event="Services: Contact CTA"
            className="inline-flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Get in touch →
          </a>
        </div>

      </div>

      <Footer />
    </main>
  )
}
