import ContactForm from '../components/contact-form'
import { SITE_NAME } from '@/app/data/site'

export const metadata = {
  title: `Contact — ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME} — Technical PM, AI automation builder, and full-stack developer based in Auckland, NZ.`,
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-5">
          Get in touch
        </p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground leading-tight mb-4">
          Let's build your next product.
        </h1>
        <p className="text-lg text-foreground/60 mb-2">
          I help founders ship AI-powered apps, dashboards, and automations — fast.
        </p>
        <p className="text-sm font-mono text-foreground/30">I reply within 24 hours.</p>
      </section>

      <section className="max-w-xl mx-auto px-6 pb-12">
        <div className="bg-card border border-white/10 rounded-2xl p-8">
          <ContactForm />
        </div>
      </section>

      <section className="max-w-xl mx-auto px-6 pb-20 text-center">
        <p className="text-sm text-foreground/40 mb-3">
          15+ projects shipped in the last 18 months.<br />
          AI apps, dashboards, automations, and internal tools.
        </p>
        <p className="text-xs font-mono text-foreground/25">
          Prefer email? timlok [at] gmail [dot] com
        </p>
      </section>
    </main>
  )
}
