export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  category: 'AI & LLM' | 'Dashboards & Data' | 'Automation' | 'Full-Stack'
  highlight?: boolean
  url?: string
  caseStudySlug?: string
}

export const projects: Project[] = [
  {
    id: 19,
    caseStudySlug: 'portfolio-website',
    title: 'Tim Lok Portfolio — timlok-portfolio.vercel.app',
    description: 'This site. Built with Next.js 14 App Router and optimised to 1.08s LCP through three targeted decisions. Project filters and stack tags auto-derive from a single data array — adding a project tag registers it everywhere with no manual sync. Contact form via Resend; dual Vercel + Umami analytics tracking every nav click, filter interaction, and link tap.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'shadcn/ui', 'Vercel', 'Vercel Analytics', 'Umami', 'Resend', 'Performance'],
    category: 'Full-Stack',
    url: 'https://timlok-portfolio.vercel.app',
  },
  {
    id: 18,
    caseStudySlug: 'fifa-2026-world-cup-predictor',
    title: 'FIFA 2026 World Cup Predictor',
    description: 'Live tournament prediction system at fifa2026nz.vercel.app. The model blends Elo ratings, Dixon-Coles Poisson scoring, and 10,000 Monte-Carlo simulations per run — corrected for longshot bias against live Polymarket odds. A fully automated Python pipeline on GitHub Actions keeps forecasts current with no manual intervention since kickoff; 66 pytest + 22 Playwright tests cover both local and production.',
    tags: ['Python', 'React', 'GitHub Actions', 'Vercel', 'Vite', 'Tailwind', 'Recharts', 'Monte Carlo', 'Playwright', 'Vercel Analytics'],
    category: 'Dashboards & Data',
    url: 'https://fifa2026nz.vercel.app',
  },
  {
    id: 17,
    caseStudySlug: 'executive-articulation-training',
    title: 'Executive Articulation Training System',
    description: 'Fully automated, cloud-hosted speaking-drill platform built to develop CTO-advisor communication skills. A daily cron pre-generates leadership scenarios via an LLM fallback chain; the user records a 60–120s browser response; audio is transcribed and scored across an 8-dimension executive rubric (clarity, structure, business alignment, and more). Results persist to Notion; a weekly AI-generated summary fires every Friday. Entire stack runs on free-tier services — Vercel, cron-job.org, Notion API, Groq Whisper — with zero manual intervention.',
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Notion', 'Groq', 'LLM', 'Automation', 'Serverless'],
    category: 'AI & LLM',
  },
  {
    id: 16,
    caseStudySlug: 'demark-stock-analysis-engine',
    title: 'Notion-DeMark — Automated Quant Signal Engine',
    description: 'Fully automated TD Sequential (DeMark) signal pipeline for a live production system. A serverless cron fetches 300-day OHLCV history daily, computes TD Setup (9), Countdown (13), TDST levels, EMA trend, ATR volatility, and signal strength — then upsert-writes to Notion and fires a Discord alert digest. A live SSG dashboard (Next.js + Vercel deploy hook) auto-rebuilds ~30s after each run. Navigated real production constraints: switched price providers twice after yahoo-finance2 and Alpha Vantage were blocked by Vercel egress IPs, landed on Tiingo; patched a path-to-regexp ReDoS vulnerability via npm overrides; designed Notion as the primary DB with a custom title-key upsert scheme — zero-cost, zero infrastructure.',
    tags: ['TypeScript', 'Next.js', 'Vercel', 'Notion', 'Discord', 'Finance', 'Serverless', 'Automation'],
    category: 'Dashboards & Data',
  },
  {
    id: 1,
    caseStudySlug: 'multi-agent-content-pipeline',
    title: 'Multi-Agent Content Pipeline',
    description: 'Planner → Worker → Verifier → QC → Uploader architecture with enforced role separation. No self-verification. No skipped checks. Governed by a CLAUDE.md engineering contract.',
    tags: ['Claude Code', 'Python', 'Multi-agent', 'AI Orchestration'],
    category: 'AI & LLM',
  },
  {
    id: 2,
    caseStudySlug: 'tts-audio-production-pipeline',
    title: 'TTS & Audio Production Pipeline',
    description: 'Full podcast production system with FFmpeg, broadcast-standard loudness normalisation (LUFS), segment-level QC reporting, and automatic regeneration of failed segments.',
    tags: ['Python', 'FFmpeg', 'TTS', 'Audio Engineering'],
    category: 'Automation',
  },
  {
    id: 3,
    caseStudySlug: 'mcp-integration-stack',
    title: 'MCP Integration Stack',
    description: 'Wired up MarkItDown, Google Calendar, Gmail, and Google Drive as a working local MCP server stack on Windows. Real tools plumbed together, not demos.',
    tags: ['MCP', 'Claude Desktop', 'Google APIs', 'Windows'],
    category: 'AI & LLM',
    highlight: true,
  },
  {
    id: 4,
    caseStudySlug: 'sql-natural-language-query',
    title: 'SQL Natural Language Query App',
    description: 'Ask questions in plain English, get SQL results. Built with LangChain, CopilotKit, and the Anthropic API on a Next.js backend.',
    tags: ['Next.js', 'LangChain', 'CopilotKit', 'TypeScript'],
    category: 'Full-Stack',
  },
  {
    id: 5,
    caseStudySlug: 'fittertrack',
    title: 'Fitter — Fitness Tracking App',
    description: 'Full-stack fitness and workout tracking application. Built end-to-end with Next.js, React, and Tailwind.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    category: 'Full-Stack',
  },
  {
    id: 6,
    caseStudySlug: 'auckland-harbour-bridge-monitor',
    title: 'Harbour Bridge Monitor',
    description: 'Real-time infrastructure monitoring dashboard for the Auckland Harbour Bridge. Live data display with status indicators.',
    tags: ['Next.js', 'React', 'Real-time', 'Dashboard'],
    category: 'Dashboards & Data',
  },
  {
    id: 7,
    caseStudySlug: 'tom-demark-indicator',
    title: 'Tom DeMark Indicator',
    description: 'Technical analysis indicator implementation — TD Sequential and related signals — rendered as an interactive Next.js charting app.',
    tags: ['Next.js', 'TypeScript', 'Charting', 'Finance'],
    category: 'Dashboards & Data',
  },
  {
    id: 8,
    caseStudySlug: 'portfolio-ai-pra',
    title: 'Portfolio AI (PRA)',
    description: 'AI-powered portfolio analysis tool. Combines market data with LLM reasoning to surface actionable insights.',
    tags: ['Next.js', 'AI', 'Finance', 'TypeScript'],
    category: 'Dashboards & Data',
  },
  {
    id: 9,
    caseStudySlug: 'badfamily-badminton-platform',
    title: 'BadFamily Badminton Platform',
    description: 'Tournament and event management site for a badminton family group. Deployed live on Netlify.',
    tags: ['Next.js', 'Netlify', 'React', 'Tailwind'],
    category: 'Full-Stack',
    url: 'https://grand-badminton-family.netlify.app',
  },
  {
    id: 10,
    caseStudySlug: 'pdf-documentation-generator',
    title: 'PDF Documentation Generator',
    description: 'Python script using ReportLab to generate professional PDF guides with styled code blocks, metadata headers, and custom typography. Used for internal dev documentation.',
    tags: ['Python', 'ReportLab', 'PDF', 'Automation'],
    category: 'Automation',
  },
  {
    id: 11,
    caseStudySlug: 'ebook-markdown-converter',
    title: 'eBook → Markdown Batch Converter',
    description: 'Batch converted 52 PDFs to clean Markdown using the MarkItDown MCP server. Fully automated with error handling per file.',
    tags: ['Python', 'MarkItDown', 'MCP', 'Automation'],
    category: 'Automation',
  },
  {
    id: 12,
    caseStudySlug: 'youtube-llm-insight-extractor',
    title: 'YouTube → LLM Insight Extractor',
    description: 'Pipeline to download video transcripts with yt-dlp, transcribe with Whisper, then extract structured insights (concepts, action items, gaps) via the Anthropic API.',
    tags: ['Python', 'Whisper', 'yt-dlp', 'Anthropic SDK'],
    category: 'AI & LLM',
    highlight: true,
  },
  {
    id: 13,
    caseStudySlug: 'claude-operator-dashboard',
    title: 'Claude Operator Dashboard',
    description: 'Interactive tabbed reference UI covering the Claude trust hierarchy, model routing strategy, system prompt anatomy, and a live agent pipeline builder for my own workflows.',
    tags: ['React', 'Claude API', 'AI Tooling', 'TypeScript'],
    category: 'AI & LLM',
  },
  {
    id: 14,
    caseStudySlug: 'claude-md-engineering-contract',
    title: 'CLAUDE.md — Engineering Contract',
    description: 'A governing contract for AI agent behaviour: role rules, no-self-verification enforcement, mandatory chunked file reads, pipeline definitions, and QC gates. The difference between a system prompt and an engineering contract.',
    tags: ['Claude Code', 'Prompt Engineering', 'AI Governance'],
    category: 'AI & LLM',
  },
]

// Derived automatically — adding a tag to any project registers it here
export const stack = Array.from(new Set(projects.flatMap(p => p.tags))).sort()

// Maps each stack item to the projects that use it
export const stackMap = Object.fromEntries(
  stack.map(tag => [tag, projects.filter(p => p.tags.includes(tag))])
)
