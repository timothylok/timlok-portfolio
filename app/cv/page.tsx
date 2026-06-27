import Nav from '../components/nav'
import Footer from '../components/footer'
import { projects } from '@/app/data/projects'
import { SITE_NAME } from '@/app/data/site'

export const metadata = {
  title: `CV — ${SITE_NAME}`,
  description: `CV of ${SITE_NAME} — AI Automation Engineer, Technical PM, and Multi-Agent Systems Builder based in Auckland, NZ.`,
}

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-14">

        {/* Header */}
        <header className="border-t-2 border-clay-500/50 border-b border-border pt-8 pb-10">
          <h1 className="text-4xl font-display font-light text-foreground mb-3 [text-wrap:balance]">{SITE_NAME}</h1>
          <p className="text-foreground/65 mb-5">Auckland, New Zealand · AI Automation Engineer · Technical PM · Multi-Agent Systems Builder</p>
          <div className="flex flex-wrap gap-5 text-sm font-mono text-muted-foreground">
            <a href="https://timlok-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" data-umami-event="CV: Portfolio Link" className="hover:text-foreground/70 transition-colors">timlok-portfolio.vercel.app ↗</a>
            <a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" data-umami-event="CV: LinkedIn" className="hover:text-foreground/70 transition-colors">linkedin.com/in/timlok ↗</a>
            <a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" data-umami-event="CV: GitHub" className="hover:text-foreground/70 transition-colors">github.com/timothylok ↗</a>
          </div>
        </header>

        {/* Summary */}
        <section>
          <SectionLabel>Summary</SectionLabel>
          <div className="space-y-3 text-foreground/70 leading-relaxed">
            <p>
              AI-accelerated builder specialising in <Strong>agent-based automation</Strong>, <Strong>Claude Code orchestration</Strong>, and <Strong>end-to-end delivery of production systems</Strong>. Former Java developer turned Technical Project Manager — now building again, faster than ever, using AI as a force multiplier.
            </p>
            <p>
              I design and ship <Strong>real, working automation pipelines</Strong>, not demos: multi-agent planners, verification layers, MCP integrations, data pipelines, and AI-governed workflows. I focus on <Strong>speed, correctness, and operational reliability</Strong>.
            </p>
          </div>
        </section>

        {/* Business Impact */}
        <section>
          <SectionLabel>Business Impact</SectionLabel>
          <ul className="space-y-2">
            {businessImpact.map((item) => (
              <li key={item} className="text-sm text-foreground/70 flex gap-2">
                <span className="text-muted-foreground shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Core Capabilities */}
        <section>
          <SectionLabel>Core Capabilities</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-1">{cap.title}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI & ML Foundations */}
        <section>
          <SectionLabel>AI &amp; ML Foundations (Practical)</SectionLabel>
          <ul className="space-y-2">
            {aiFoundations.map((item) => (
              <li key={item} className="text-sm text-foreground/70 flex gap-2">
                <span className="text-muted-foreground shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* AI Governance & Safety */}
        <section>
          <SectionLabel>AI Governance &amp; Safety</SectionLabel>
          <ul className="space-y-2">
            {aiGovernance.map((item) => (
              <li key={item} className="text-sm text-foreground/70 flex gap-2">
                <span className="text-muted-foreground shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent Projects */}
        <section>
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="space-y-7">
            {projects.filter((p) => p.highlight).slice(0, 3).map((project) => (
              <div key={project.id} className="border-l border-border pl-5">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-sm font-medium text-foreground">{project.title}</h3>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground hover:text-foreground/70 transition-colors shrink-0">
                      live ↗
                    </a>
                  )}
                </div>
                <p className="text-xs font-mono text-muted-foreground mb-2">{project.tags.join(' · ')}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <a
          href="https://timlok-portfolio.vercel.app/#projects"
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="CV: Full Portfolio"
          className="text-xs font-mono text-muted-foreground hover:text-foreground/80 transition-colors"
        >
          View full portfolio ↗
        </a>

{/* Tech Stack */}
        <section>
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="space-y-3">
            {techStack.map((row) => (
              <div key={row.category} className="flex gap-4 flex-wrap items-baseline">
                <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">{row.category}</span>
                <span className="text-sm text-foreground/70">{row.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Work History */}
        <section>
          <SectionLabel>Work History</SectionLabel>
          <div className="space-y-7">
            <div className="border-l border-border pl-5">
              <h3 className="text-sm font-medium text-foreground">Technical Project Manager / AI Builder</h3>
              <p className="text-xs font-mono text-muted-foreground mb-2">Auckland, NZ</p>
              <ul className="space-y-1.5">
                {[
                  'Delivered AI-powered systems, automation pipelines, and full-stack applications.',
                  'Managed feature delivery, sequencing, and technical decision-making.',
                  'Combined PM discipline with hands-on engineering to ship fast.',
                ].map((point, i) => (
                  <li key={i} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-muted-foreground shrink-0 mt-0.5">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l border-border pl-5">
              <h3 className="text-sm font-medium text-foreground">Java Developer</h3>
              <p className="text-xs font-mono text-muted-foreground mb-2">Earlier Career</p>
              <p className="text-sm text-foreground/70">Strong foundation in backend engineering, typing discipline, and system design.</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <SectionLabel>Certifications</SectionLabel>
          <div className="bg-card border border-border rounded-lg p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <p className="text-sm font-medium text-foreground">Microsoft Certified: Azure AI Engineer Associate</p>
              <p className="text-sm text-foreground/70">Microsoft</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">Credential ID: 85466DAB8F398098</p>
            </div>
            <span className="text-xs font-mono text-muted-foreground shrink-0">Jun 2024 · Expires Jun 2025</span>
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionLabel>Education</SectionLabel>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h3 className="text-sm font-medium text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-foreground/70">{edu.institution}</p>
                  {edu.notes && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{edu.notes}</p>}
                </div>
                <span className="text-xs font-mono text-muted-foreground shrink-0">{edu.years}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Positioning */}
        <section className="bg-card border border-border rounded-xl p-6">
          <SectionLabel>Positioning for AI Automation Contracts</SectionLabel>
          <ul className="space-y-1.5 mb-4">
            {[
              'Multi-agent orchestration',
              'MCP integrations',
              'Real-world automation',
              'Claude Code engineering contracts',
              'Deterministic QC pipelines',
              'Production deployments',
              'Full-stack delivery',
              'PM-level clarity',
              'Business context',
              'Speed of execution',
            ].map((item) => (
              <li key={item} className="text-sm text-foreground/70 flex gap-2">
                <span className="text-muted-foreground shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground italic">Most contractors cover one or two of these — I bring all of them.</p>
        </section>

      </div>

      <Footer />
    </main>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{children}</p>
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-foreground/80">{children}</strong>
}

const businessImpact = [
  'Delivered fully automated, end-to-end systems requiring zero routine human intervention.',
  'Reduced manual workload by 80–95% through agent-based automation and workflow orchestration.',
  'Built autonomous pipelines that scale without human oversight, with automated recovery and exception handling.',
  'Delivered production-ready solutions in days, not months, accelerating time-to-value for clients.',
]

const capabilities = [
  {
    title: 'AI Agent Architecture',
    description: 'Planner → Worker → Verifier → QC → Uploader pipelines, strict role separation, deterministic behaviour.',
  },
  {
    title: 'Automation Engineering',
    description: 'MCP servers, Google APIs, email/drive/calendar automation, batch processing, PDF generation, transcription pipelines.',
  },
  {
    title: 'Claude Code & Anthropic SDK',
    description: 'Contract-driven agent behaviour, chunked file reads, QC gates, structured output guarantees.',
  },
  {
    title: 'Next.js + TypeScript',
    description: 'Full-stack apps, dashboards, real-time systems, charting, data visualisation.',
  },
  {
    title: 'Python Automation',
    description: 'FFmpeg, Whisper, ReportLab, yt-dlp, batch converters, data processing.',
  },
  {
    title: 'Technical PM Delivery',
    description: 'Feature-level review, sequencing decisions, performance optimisation, stakeholder alignment.',
  },
]

const aiFoundations = [
  'Prompt engineering & structured output design',
  'Embeddings & vector search',
  'Retrieval-augmented generation (RAG)',
  'Model evaluation & safety constraints',
  'Fine-tuning workflows (conceptual)',
  'LLM orchestration & agent governance',
]

const aiGovernance = [
  'Deterministic agent workflows',
  'Verification layers & QC gates',
  'Structured output enforcement',
  'Role separation & non-self-verification',
  'Failure recovery & retry logic',
]


const techStack = [
  { category: 'AI & Agents', items: 'Claude Code, Anthropic SDK, MCP, LangChain, CopilotKit' },
  { category: 'Automation', items: 'Python, FFmpeg, Whisper, ReportLab, MarkItDown, Google APIs' },
  { category: 'Web', items: 'Next.js, React, TypeScript, Tailwind, Vercel' },
  { category: 'Data', items: 'SQL, charting libraries, structured output pipelines' },
  { category: 'Tooling', items: 'Windows, GitHub Actions, real-time dashboards' },
]

const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'University of Adelaide',
    years: '2004 – 2006',
    notes: 'Director, University of Adelaide Alumni Association Hong Kong Chapter (2007–2008)',
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'University of Kentucky',
    years: '1995 – 1997',
    notes: null,
  },
]
