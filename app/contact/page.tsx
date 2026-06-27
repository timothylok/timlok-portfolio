import Nav from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/contact-form'
import { SITE_NAME } from '@/app/data/site'
import { projects } from '@/app/data/projects'

export const metadata = {
  title: `Contact — ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME} — Technical PM, AI automation builder, and full-stack developer based in Auckland, NZ.`,
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="relative overflow-hidden max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-clay-500/20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(160,82,45,0.05),transparent_70%)]" />
        <h1 className="text-4xl sm:text-5xl font-display font-light tracking-tight text-foreground leading-tight mb-2 [text-wrap:balance]">
          Let's build your next product.
        </h1>
        <div className="mx-auto mt-2 mb-4 h-px w-36 bg-gradient-to-r from-clay-500/50 to-transparent" />
        <p className="text-lg text-foreground/65 mb-2">
          I help founders ship AI-powered apps, dashboards, and automations — fast.
        </p>
        <p className="text-sm font-mono text-muted-foreground/70">I reply within 24 hours.</p>
      </section>

      <section className="max-w-xl mx-auto px-6 pb-12">
        <div className="bg-card border border-border rounded-2xl p-8">
          <ContactForm />
        </div>
      </section>

      <section className="max-w-xl mx-auto px-6 pb-20 text-center">
        <p className="text-sm text-foreground/40 mb-3">
          {projects.length} projects shipped in the last 18 months.<br />
          AI apps, dashboards, automations, and internal tools.
        </p>
        <p className="text-xs font-mono text-foreground/25">
          Prefer email? timlok [at] gmail [dot] com
        </p>
      </section>
      <Footer />
    </main>
  )
}
