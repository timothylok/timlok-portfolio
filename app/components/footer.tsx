export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/40 font-mono">
        <div className="flex items-center gap-5">
          <a href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
            Let's build something together →
          </a>
          <a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/70 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/70 transition-colors">
            GitHub
          </a>
        </div>
        <span>Built with Next.js &amp; Claude Code</span>
      </div>
    </footer>
  )
}
