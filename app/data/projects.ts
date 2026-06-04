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
    id: 15,
    title: 'This Portfolio — 1.08s LCP',
    description: 'Built and optimised this site in three decisions, not three sprints. (1) Replace Google Fonts @import with next/font — eliminate the render-blocking request. (2) Reject the proposal to remove Framer Motion — keep animations, fix only the LCP element. (3) Make the h1 a plain element so the browser can measure it immediately. Result: 1.08s LCP. The performance gain is a product of the right calls, made in the right order.',
    tags: ['Next.js', 'Vercel', 'Performance', 'shadcn/ui', 'Decision-making'],
    highlight: true,
    url: 'https://timlok-portfolio.vercel.app',
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

export const stack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind',
  'Python', 'Node.js', 'FFmpeg', 'LangChain',
  'Claude Code', 'MCP', 'Anthropic SDK', 'Google Cloud',
  'Vercel', 'Netlify',
]
