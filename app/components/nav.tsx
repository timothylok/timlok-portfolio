export default function Nav() {
  return (
    <nav className="border-b border-white/10 sticky top-0 bg-background/90 backdrop-blur-sm z-10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium tracking-tight text-foreground">Timothy Lok</span>
        <div className="flex items-center gap-6 text-sm text-foreground/50">
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a
            href="https://github.com/timothylok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/timlok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}
