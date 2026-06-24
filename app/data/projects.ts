export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  highlight?: boolean
  url?: string
}

export const projects: Project[] = [
  {
    id: 19,
    title: 'Tim Lok Portfolio — timlok-portfolio.vercel.app',
    description: 'This site. Built with Next.js 14 App Router, optimised to 1.08s LCP through three targeted decisions: replaced Google Fonts @import with next/font, kept Framer Motion but optimised only the LCP element, and simplified the h1 for instant layout measurement. Project filters and tech stack are auto-derived from a single projects array — adding a tag to any project registers it everywhere with no manual sync. CV page includes a print stylesheet that flips the dark theme to white with correct specificity, switches to Georgia for clean PDF rendering, and hides nav/footer. Contact form powered by Resend. Dual analytics: Vercel Analytics for page views, Umami for custom event tracking across all nav clicks, filter interactions, project link clicks, and form submissions — all on free tiers.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'shadcn/ui', 'Vercel', 'Vercel Analytics', 'Umami', 'Resend', 'Performance'],
    highlight: true,
    url: 'https://timlok-portfolio.vercel.app',
  },
  {
    id: 18,
    title: 'FIFA 2026 World Cup Predictor',
    description: 'Full-stack tournament prediction system live at fifa2026nz.vercel.app. The model blends Elo ratings (4-year decay, class-based K-factors, shrinkage calibration), Dixon-Coles Poisson scoring, and 10,000 Monte-Carlo simulations per run — then corrects for longshot bias against live Polymarket odds. A fully automated Python pipeline runs on GitHub Actions: fetches fresh international results daily, conditions on real tournament state (played scores, eliminations, shootout winners), validates the output, and commits updated JSON to trigger a zero-downtime Vercel redeploy — no manual intervention since kickoff. A Brier score ledger tracks forecast accuracy throughout. React frontend (Vite + Tailwind + Recharts) surfaces seven data views: group standings, knockout bracket, championship probability table with bookmaker value analysis, Elo trajectories since 2018, and a daily-updated probability chart. Covered by 66 pytest unit tests and 22 Playwright browser tests run against both local and production.',
    tags: ['Python', 'React', 'GitHub Actions', 'Vercel', 'Vite', 'Tailwind', 'Recharts', 'Monte Carlo', 'Playwright', 'Vercel Analytics'],
    highlight: true,
    url: 'https://fifa2026nz.vercel.app',
  },
  {
    id: 17,
    title: 'Executive Articulation Training System',
    description: 'Fully automated, cloud-hosted speaking-drill platform built to develop CTO-advisor communication skills. A daily cron pre-generates leadership scenarios via an LLM fallback chain; the user records a 60–120s browser response; audio is transcribed and scored across an 8-dimension executive rubric (clarity, structure, business alignment, and more). Results persist to Notion; a weekly AI-generated summary fires every Friday. Entire stack runs on free-tier services — Vercel, cron-job.org, Notion API, Groq Whisper — with zero manual intervention.',
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Notion', 'Groq', 'LLM', 'Automation', 'Serverless'],
    highlight: true,
  },
  {
    id: 16,
    title: 'Notion-DeMark — Automated Quant Signal Engine',
    description: 'Fully automated TD Sequential (DeMark) signal pipeline for a live production system. A serverless cron fetches 300-day OHLCV history daily, computes TD Setup (9), Countdown (13), TDST levels, EMA trend, ATR volatility, and signal strength — then upsert-writes to Notion and fires a Discord alert digest. A live SSG dashboard (Next.js + Vercel deploy hook) auto-rebuilds ~30s after each run. Navigated real production constraints: switched price providers twice after yahoo-finance2 and Alpha Vantage were blocked by Vercel egress IPs, landed on Tiingo; patched a path-to-regexp ReDoS vulnerability via npm overrides; designed Notion as the primary DB with a custom title-key upsert scheme — zero-cost, zero infrastructure.',
    tags: ['TypeScript', 'Next.js', 'Vercel', 'Notion', 'Discord', 'Finance', 'Serverless', 'Automation'],
    highlight: true,
  },
  {
    id: 1,
    title: 'Multi-Agent Content Pipeline',
    description: 'Planner → Worker → Verifier → QC → Uploader architecture with enforced role separation. No self-verification. No skipped checks. Governed by a CLAUDE.md engineering contract.',
    tags: ['Claude Code', 'Python', 'Multi-agent', 'AI Orchestration'],
    highlight: true,
  },
  {
    id: 2,
    title: 'TTS & Audio Production Pipeline',
    description: 'Full podcast production system with FFmpeg, broadcast-standard loudness normalisation (LUFS), segment-level QC reporting, and automatic regeneration of failed segments.',
    tags: ['Python', 'FFmpeg', 'TTS', 'Audio Engineering'],
  },
  {
    id: 3,
    title: 'MCP Integration Stack',
    description: 'Wired up MarkItDown, Google Calendar, Gmail, and Google Drive as a working local MCP server stack on Windows. Real tools plumbed together, not demos.',
    tags: ['MCP', 'Claude Desktop', 'Google APIs', 'Windows'],
  },
  {
    id: 4,
    title: 'SQL Natural Language Query App',
    description: 'Ask questions in plain English, get SQL results. Built with LangChain, CopilotKit, and the Anthropic API on a Next.js backend.',
    tags: ['Next.js', 'LangChain', 'CopilotKit', 'TypeScript'],
  },
  {
    id: 5,
    title: 'Fitter — Fitness Tracking App',
    description: 'Full-stack fitness and workout tracking application. Built end-to-end with Next.js, React, and Tailwind.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
  },
  {
    id: 6,
    title: 'Harbour Bridge Monitor',
    description: 'Real-time infrastructure monitoring dashboard for the Auckland Harbour Bridge. Live data display with status indicators.',
    tags: ['Next.js', 'React', 'Real-time', 'Dashboard'],
  },
  {
    id: 7,
    title: 'Tom DeMark Indicator',
    description: 'Technical analysis indicator implementation — TD Sequential and related signals — rendered as an interactive Next.js charting app.',
    tags: ['Next.js', 'TypeScript', 'Charting', 'Finance'],
  },
  {
    id: 8,
    title: 'Portfolio AI (PRA)',
    description: 'AI-powered portfolio analysis tool. Combines market data with LLM reasoning to surface actionable insights.',
    tags: ['Next.js', 'AI', 'Finance', 'TypeScript'],
  },
  {
    id: 9,
    title: 'BadFamily Badminton Platform',
    description: 'Tournament and event management site for a badminton family group. Deployed live on Netlify.',
    tags: ['Next.js', 'Netlify', 'React', 'Tailwind'],
    url: 'https://grand-badminton-family.netlify.app',
  },
  {
    id: 10,
    title: 'PDF Documentation Generator',
    description: 'Python script using ReportLab to generate professional PDF guides with styled code blocks, metadata headers, and custom typography. Used for internal dev documentation.',
    tags: ['Python', 'ReportLab', 'PDF', 'Automation'],
  },
  {
    id: 11,
    title: 'eBook → Markdown Batch Converter',
    description: 'Batch converted 52 PDFs to clean Markdown using the MarkItDown MCP server. Fully automated with error handling per file.',
    tags: ['Python', 'MarkItDown', 'MCP', 'Automation'],
  },
  {
    id: 12,
    title: 'YouTube → LLM Insight Extractor',
    description: 'Pipeline to download video transcripts with yt-dlp, transcribe with Whisper, then extract structured insights (concepts, action items, gaps) via the Anthropic API.',
    tags: ['Python', 'Whisper', 'yt-dlp', 'Anthropic SDK'],
  },
  {
    id: 13,
    title: 'Claude Operator Dashboard',
    description: 'Interactive tabbed reference UI covering the Claude trust hierarchy, model routing strategy, system prompt anatomy, and a live agent pipeline builder for my own workflows.',
    tags: ['React', 'Claude API', 'AI Tooling', 'TypeScript'],
  },
  {
    id: 14,
    title: 'CLAUDE.md — Engineering Contract',
    description: 'A governing contract for AI agent behaviour: role rules, no-self-verification enforcement, mandatory chunked file reads, pipeline definitions, and QC gates. The difference between a system prompt and an engineering contract.',
    tags: ['Claude Code', 'Prompt Engineering', 'AI Governance'],
    highlight: true,
  },
]

// Derived automatically — adding a tag to any project registers it here
export const stack = Array.from(new Set(projects.flatMap(p => p.tags))).sort()

// Maps each stack item to the projects that use it
export const stackMap = Object.fromEntries(
  stack.map(tag => [tag, projects.filter(p => p.tags.includes(tag))])
)
