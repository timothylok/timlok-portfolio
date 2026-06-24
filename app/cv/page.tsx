import Nav from '../components/nav'
import Footer from '../components/footer'

export const metadata = {
  title: 'CV — Timothy Lok',
  description: 'CV of Timothy Lok — AI Automation Engineer, Technical PM, and Multi-Agent Systems Builder based in Auckland, NZ.',
}

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-14">

        {/* Header */}
        <header className="border-b border-white/10 pb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-4">Curriculum Vitae</p>
          <h1 className="text-4xl font-light text-foreground mb-2">Timothy Lok</h1>
          <p className="text-foreground/50 mb-5">Auckland, New Zealand · AI Automation Engineer · Technical PM · Multi-Agent Systems Builder</p>
          <div className="flex flex-wrap gap-5 text-sm font-mono text-foreground/40">
            <a href="https://timlok-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/70 transition-colors">timlok-portfolio.vercel.app ↗</a>
            <a href="https://www.linkedin.com/in/timlok" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/70 transition-colors">linkedin.com/in/timlok ↗</a>
            <a href="https://github.com/timothylok" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/70 transition-colors">github.com/timothylok ↗</a>
          </div>
        </header>

        {/* Summary */}
        <section>
          <SectionLabel>Summary</SectionLabel>
          <div className="space-y-3 text-foreground/60 leading-relaxed">
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
              <li key={item} className="text-sm text-foreground/55 flex gap-2">
                <span className="text-foreground/20 shrink-0 mt-0.5">—</span>
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
              <div key={cap.title} className="bg-card border border-white/10 rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-1">{cap.title}</p>
                <p className="text-sm text-foreground/50 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI & ML Foundations */}
        <section>
          <SectionLabel>AI &amp; ML Foundations (Practical)</SectionLabel>
          <ul className="space-y-2">
            {aiFoundations.map((item) => (
              <li key={item} className="text-sm text-foreground/55 flex gap-2">
                <span className="text-foreground/20 shrink-0 mt-0.5">—</span>
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
              <li key={item} className="text-sm text-foreground/55 flex gap-2">
                <span className="text-foreground/20 shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent Projects */}
        <section>
          <SectionLabel>Recent AI + Automation Projects</SectionLabel>
          <div className="space-y-7">
            {cvProjects.map((project) => (
              <div key={project.title} className="border-l border-white/10 pl-5">
                <h3 className="text-sm font-medium text-foreground">{project.title}</h3>
                <p className="text-xs font-mono text-foreground/35 mt-0.5 mb-2">{project.stack}</p>
                <ul className="space-y-1.5">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-sm text-foreground/55 leading-relaxed flex gap-2">
                      <span className="text-foreground/20 shrink-0 mt-0.5">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Highlights */}
        <section>
          <SectionLabel>Selected Engineering Highlights</SectionLabel>
          <div className="space-y-7">
            {highlights.map((h) => (
              <div key={h.title} className="border-l border-white/10 pl-5">
                <h3 className="text-sm font-medium text-foreground mb-2">{h.title}</h3>
                <ul className="space-y-1.5">
                  {h.points.map((point, i) => (
                    <li key={i} className="text-sm text-foreground/55 leading-relaxed flex gap-2">
                      <span className="text-foreground/20 shrink-0 mt-0.5">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="space-y-3">
            {techStack.map((row) => (
              <div key={row.category} className="flex gap-4 flex-wrap items-baseline">
                <span className="text-xs font-mono text-foreground/30 w-28 shrink-0">{row.category}</span>
                <span className="text-sm text-foreground/60">{row.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Work History */}
        <section>
          <SectionLabel>Work History</SectionLabel>
          <div className="space-y-7">
            <div className="border-l border-white/10 pl-5">
              <h3 className="text-sm font-medium text-foreground">Technical Project Manager / AI Builder</h3>
              <p className="text-xs font-mono text-foreground/30 mb-2">Auckland, NZ</p>
              <ul className="space-y-1.5">
                {[
                  'Delivered AI-powered systems, automation pipelines, and full-stack applications.',
                  'Managed feature delivery, sequencing, and technical decision-making.',
                  'Combined PM discipline with hands-on engineering to ship fast.',
                ].map((point, i) => (
                  <li key={i} className="text-sm text-foreground/55 flex gap-2">
                    <span className="text-foreground/20 shrink-0 mt-0.5">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l border-white/10 pl-5">
              <h3 className="text-sm font-medium text-foreground">Java Developer</h3>
              <p className="text-xs font-mono text-foreground/30 mb-2">Earlier Career</p>
              <p className="text-sm text-foreground/55">Strong foundation in backend engineering, typing discipline, and system design.</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <SectionLabel>Certifications</SectionLabel>
          <div className="bg-card border border-white/10 rounded-lg p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <p className="text-sm font-medium text-foreground">Microsoft Certified: Azure AI Engineer Associate</p>
              <p className="text-sm text-foreground/50">Microsoft</p>
              <p className="text-xs font-mono text-foreground/30 mt-1">Credential ID: 85466DAB8F398098</p>
            </div>
            <span className="text-xs font-mono text-foreground/30 shrink-0">Jun 2024 · Expires Jun 2025</span>
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
                  <p className="text-sm text-foreground/50">{edu.institution}</p>
                  {edu.notes && <p className="text-xs text-foreground/35 mt-1 leading-relaxed">{edu.notes}</p>}
                </div>
                <span className="text-xs font-mono text-foreground/30 shrink-0">{edu.years}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Positioning */}
        <section className="bg-card border border-white/10 rounded-xl p-6">
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
              <li key={item} className="text-sm text-foreground/60 flex gap-2">
                <span className="text-foreground/20 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-foreground/35 italic">Most contractors cover one or two of these — I bring all of them.</p>
        </section>

      </div>

      <Footer />
    </main>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-mono uppercase tracking-widest text-foreground/30 mb-4">{children}</p>
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

const cvProjects = [
  {
    title: 'Multi-Agent Content Pipeline',
    stack: 'Claude Code · Python · Multi-agent orchestration',
    points: [
      'Built a governed multi-agent system with strict role separation and a CLAUDE.md engineering contract.',
      'Enforced no self-verification, deterministic QC, and structured output guarantees.',
      'Designed for scalable content production and automated publishing.',
    ],
  },
  {
    title: 'TTS & Audio Production Pipeline',
    stack: 'Python · FFmpeg · TTS · QC automation',
    points: [
      'Automated full podcast production: loudness normalisation (LUFS), segment QC, and auto-regeneration of failed segments.',
      'Built a reliable, repeatable pipeline suitable for commercial audio workflows.',
    ],
  },
  {
    title: 'MCP Integration Stack (Google APIs + Local Server)',
    stack: 'MCP · Claude Desktop · Google Calendar / Gmail / Drive',
    points: [
      'Built a full MCP server stack enabling natural-language automation across email, scheduling, and document workflows.',
      'Demonstrated real-world agentic automation beyond sandbox examples.',
    ],
  },
  {
    title: 'YouTube → LLM Insight Extractor',
    stack: 'Python · Whisper · yt-dlp · Anthropic API',
    points: [
      'Automated transcript extraction, speech-to-text, and structured insight generation.',
      'Produces concepts, action items, and knowledge gaps for research workflows.',
    ],
  },
  {
    title: 'PDF Documentation Generator',
    stack: 'Python · ReportLab',
    points: [
      'Automated generation of branded PDF documentation with styled code blocks and metadata.',
      'Used for developer onboarding and technical guides.',
    ],
  },
  {
    title: 'eBook → Markdown Batch Converter',
    stack: 'Python · MarkItDown · MCP',
    points: [
      'Converted 52 PDFs to clean Markdown with error handling and retry logic.',
      'Fully automated, hands-off batch processing.',
    ],
  },
  {
    title: 'Harbour Bridge Monitor',
    stack: 'Next.js · React · Real-time data',
    points: [
      'Built a live infrastructure monitoring dashboard for Auckland Harbour Bridge.',
      'Includes status indicators, live polling, and production deployment.',
    ],
  },
  {
    title: 'Tom DeMark Indicator (TD Sequential) Charting App',
    stack: 'Next.js · TypeScript · Finance',
    points: [
      'Implemented full TD Sequential indicator logic and interactive charting.',
      'Used for technical analysis and signal research.',
    ],
  },
  {
    title: 'Portfolio AI (PRA)',
    stack: 'Next.js · AI · Finance',
    points: [
      'AI-powered portfolio analysis tool combining market data with LLM reasoning.',
      'Surfaces actionable insights for retail investors.',
    ],
  },
  {
    title: 'Natural Language SQL Query App',
    stack: 'LangChain · CopilotKit · Anthropic API',
    points: [
      'Built an NL → SQL interface with a Next.js backend.',
      'Converts plain English questions into validated SQL queries.',
    ],
  },
]

const highlights = [
  {
    title: 'CLAUDE.md — Engineering Contract for AI Agents',
    points: [
      'Defined strict behavioural rules, pipeline definitions, QC gates, and safety constraints.',
      'Demonstrates deep understanding of agent governance and deterministic AI behaviour.',
    ],
  },
  {
    title: 'Portfolio Website — 1.08s LCP',
    points: [
      'Achieved 1.08s LCP through three high-leverage decisions.',
      'Replaced Google Fonts @import with next/font to eliminate the render-blocking request.',
      'Kept Framer Motion, optimised only the LCP element rather than removing it.',
      'Simplified h1 for instant layout measurement.',
    ],
  },
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
