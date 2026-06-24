import { SITE_NAME } from '@/app/data/site'

export default function Nav() {
  return (
    <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" data-umami-event="Nav: Home" className="text-sm font-display font-medium tracking-tight text-foreground hover:text-foreground/70 transition-colors">{SITE_NAME}</a>
        <div className="flex items-center gap-6 text-sm text-foreground/45">
          <a href="/#projects" data-umami-event="Nav: Projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="/#about" data-umami-event="Nav: About" className="hover:text-foreground transition-colors">About</a>
          <a href="/CaseStudies" data-umami-event="Nav: Case Studies" className="hover:text-foreground transition-colors">Case Studies</a>
          <a href="/cv" data-umami-event="Nav: CV" className="hover:text-foreground transition-colors">CV</a>
          <a href="/contact" data-umami-event="Nav: Contact" className="hover:text-foreground transition-colors">Contact</a>
          <a
            href="https://github.com/timothylok"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Nav: GitHub"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/timlok"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Nav: LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}
