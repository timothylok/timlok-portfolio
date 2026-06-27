export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start justify-between gap-8 text-xs text-muted-foreground font-mono">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href="/#projects" data-umami-event="Footer: Projects" className="hover:text-foreground/60 transition-colors">Projects</a>
          <a href="/#about" data-umami-event="Footer: About" className="hover:text-foreground/60 transition-colors">About</a>
          <a href="/CaseStudies" data-umami-event="Footer: Case Studies" className="hover:text-foreground/60 transition-colors">Case Studies</a>
          <a href="/cv" data-umami-event="Footer: CV" className="hover:text-foreground/60 transition-colors">CV</a>
          <a href="/contact" data-umami-event="Footer: Contact" className="hover:text-foreground/60 transition-colors">Contact</a>
          <a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" data-umami-event="Footer: LinkedIn" className="hover:text-foreground/60 transition-colors">LinkedIn</a>
          <a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" data-umami-event="Footer: GitHub" className="hover:text-foreground/60 transition-colors">GitHub</a>
        </div>
        <span className="shrink-0">Built with Next.js &amp; Claude Code</span>
      </div>
    </footer>
  )
}
