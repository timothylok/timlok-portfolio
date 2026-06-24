import Nav from './components/nav'
import Hero from './components/hero'
import Projects from './components/projects'
import About from './components/about'
import Footer from './components/footer'
import { projectSchemas } from './data/project-schemas'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchemas) }}
      />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  )
}
