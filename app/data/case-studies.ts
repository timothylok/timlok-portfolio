export type Section = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  tags: string[]
  sections: Section[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'auckland-harbour-bridge-monitor',
    title: 'Auckland Harbour Bridge Monitor',
    summary: 'Real-time traffic monitoring system that polls live bridge data every 30 minutes and delivers instant Discord alerts — built in under 60 minutes with Claude Code.',
    tags: ['Next.js', 'Vercel', 'Discord', 'Automation', 'Real-time'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The Auckland Harbour Bridge Monitor is a real-time traffic monitoring system built to solve a simple but annoying problem: checking the bridge status manually multiple times a day. The goal was to create a fully automated workflow that polls live traffic data every 30 minutes, processes it, and sends actionable alerts to a Discord channel. The entire system was built in under an hour using Claude Code, Next.js, and Vercel — demonstrating how quickly a well-designed AI-assisted workflow can deliver a production-ready tool.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'The Harbour Bridge is a critical route for Auckland commuters, but its status can change rapidly due to wind, accidents, or lane closures. Manually checking the NZTA website is inefficient and easy to forget. I needed a lightweight, automated solution that would:',
        ],
        bullets: [
          'Poll live traffic data',
          'Detect changes',
          'Send alerts instantly',
          'Run reliably without maintenance',
          'Deploy quickly',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'I used Claude Code to scaffold the initial project structure, generate API handlers, and set up the polling workflow. The architecture was intentionally simple:',
        ],
        bullets: [
          'Next.js API route to fetch and normalize NZTA data',
          'Cron-job.org to trigger the endpoint every 30 minutes',
          'Discord Webhook for push notifications',
          'Vercel for hosting and serverless execution',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'The system stores no state — instead, it compares the latest payload with the previous one sent to Discord, ensuring only meaningful changes trigger alerts. The final system includes:',
        ],
        bullets: [
          'A clean JSON endpoint that fetches and formats traffic data',
          'A polling workflow that runs every 30 minutes',
          'A change-detection layer that prevents duplicate alerts',
          'A Discord notification system with colour-coded statuses',
          'A simple UI showing the latest bridge conditions',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Built in under 60 minutes',
          'Fully automated traffic monitoring with zero maintenance',
          'Instant alerts for lane closures or high-wind restrictions',
          'Demonstrates how AI-assisted development delivers production tools at speed',
        ],
      },
    ],
  },
  {
    slug: 'fittertrack',
    title: 'FitterTrack — Fitness Tracking App',
    summary: 'A fast, minimal fitness tracking app built with Next.js and Supabase — designed for daily use, not feature bloat.',
    tags: ['Next.js', 'Supabase', 'React', 'Tailwind', 'TypeScript'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'FitterTrack is a lightweight fitness tracking app designed to help users log workouts, track progress, and visualize performance trends. Built with Next.js, Supabase, and Vercel, the goal was to create a fast, intuitive, mobile-friendly tool that solves the common problem of over-complicated fitness apps.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: ["Most fitness apps are bloated with features users don't need. I wanted something:"],
        bullets: ['Fast', 'Minimal', 'Easy to use', 'Data-driven', 'Private'],
      },
      {
        heading: 'Approach',
        paragraphs: ['The architecture is intentionally simple, focusing on speed, clarity, and frictionless UX:'],
        bullets: [
          'Next.js App Router for UI',
          'Supabase for auth and database',
          'Server Actions for secure mutations',
          'Vercel for hosting',
          'Tailwind CSS for styling',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: ['FitterTrack includes a deliberately minimal feature set — no ads, no clutter, no social feed:'],
        bullets: [
          'Workout logging',
          'Exercise templates',
          'Progress charts',
          'Personal records',
          'Mobile-first UI',
          'Secure user accounts',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Daily-usable fitness tracker that stays out of your way',
          'Fast, clean, and fully private',
          'Built in under two weeks',
          'Demonstrates end-to-end full-stack product delivery',
        ],
      },
    ],
  },
  {
    slug: 'ai-quote-assistant',
    title: 'AI Quote Assistant',
    summary: 'Automated quote generation system that takes structured client inputs and produces polished, client-ready documents — reducing quote time from 45 minutes to 5.',
    tags: ['AI', 'Next.js', 'Notion', 'PDF', 'Automation'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The AI Quote Assistant automates the process of generating professional quotes for clients. It takes structured inputs — scope, requirements, and timeline — and produces polished, client-ready documents in minutes rather than hours.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: ['Writing quotes manually is slow and repetitive. I needed a tool that:'],
        bullets: [
          'Standardizes structure across all quotes',
          'Reduces writing time significantly',
          'Ensures consistent quality and tone',
          'Works with natural language input',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['I built a multi-step workflow that transforms raw input into a finished document:'],
        bullets: [
          'Input form → structured data',
          'AI transformation → quote draft',
          'Formatting layer → polished output',
          'Export to Notion or PDF',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: ['The system includes:'],
        bullets: [
          'A guided quote builder with structured input fields',
          'AI-powered content generation from scope descriptions',
          'Pricing logic with configurable templates',
          'Export options to Notion and PDF',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Quote creation time reduced from 45 minutes to 5',
          'Consistent tone and structure across all client documents',
          'Zero manual formatting required',
        ],
      },
    ],
  },
  {
    slug: 'renovation-website-blueprint',
    title: 'Renovation Website Blueprint',
    summary: 'A complete website blueprint for a home renovation company — sitemap, architecture, content structure, SEO plan, and deployment workflow — ready for development.',
    tags: ['Next.js', 'SEO', 'Architecture', 'Automation'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A full website blueprint for a home renovation company, covering sitemap, architecture, content structure, SEO plan, and deployment workflow. The goal was to deliver a complete, unambiguous specification that could go straight into development — no scope creep, no back-and-forth.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'The client needed a clear, professional blueprint before development began. Without one, projects like this typically suffer from scope creep, miscommunication, and wasted development hours.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['I created a complete pre-development specification covering:'],
        bullets: [
          'Sitemap with all pages and hierarchy',
          'Page structure and content layout per section',
          'Component architecture ready for implementation',
          'SEO plan with target keywords and metadata strategy',
          'Deployment workflow from development to production',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A complete blueprint ready for Claude Code to generate the full site — covering every page, every component, and every deployment step. No ambiguity remaining before a line of code was written.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Reduced development time by 70% through clear upfront specification',
          'Zero scope ambiguity entering development',
          'Blueprint used directly as Claude Code context for site generation',
        ],
      },
    ],
  },
  {
    slug: 'thecolab-ai-skills-integration',
    title: 'thecolab.ai Skills Integration',
    summary: 'Custom integration layer connecting thecolab.ai\'s skill system with external tools — robust API gateway with validation, error handling, and structured logging.',
    tags: ['API', 'Integration', 'TypeScript', 'Automation'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A custom integration layer connecting thecolab.ai\'s skill system with external tools and APIs. The goal was to make skill execution reliable, observable, and fast — moving from brittle direct calls to a structured gateway layer.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Skills needed to call external APIs reliably, but without a proper integration layer, failures were hard to diagnose and retries were unpredictable. The system needed structure.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['I built a clean integration framework with:'],
        bullets: [
          'API gateway layer normalizing all outbound calls',
          'Input validation before any external request',
          'Structured error handling with typed failure modes',
          'Logging at every integration boundary',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A robust integration framework that treats every external API call as a first-class operation — validated on input, logged on execution, and handled gracefully on failure.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Stable, predictable skill execution across all external integrations',
          'Faster debugging with structured logs at every boundary',
          'Improved reliability across the skill system',
        ],
      },
    ],
  },
  {
    slug: 'local-ai-dev-environment',
    title: 'Local AI Dev Environment Setup',
    summary: 'A private, offline-capable AI development environment using Ollama, Gemma, and Claude Code — zero latency, fully private, faster iteration.',
    tags: ['Ollama', 'Claude Code', 'AI Tooling', 'Python'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A local AI development environment using Ollama, Gemma, and Claude Code. The goal was to create a fast, private, offline-capable AI workflow for development and experimentation — no API latency, no data leaving the machine.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Cloud AI APIs are powerful but add latency and send data offsite. For development and experimentation, I needed fast, offline AI workflows that could run without internet access and without privacy trade-offs.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['I set up:'],
        bullets: [
          'Ollama for local model serving',
          'Gemma as the primary local model',
          'VSCode integration for inline AI assistance',
          'Prompt workflow templates for common dev tasks',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Zero API latency for local development and testing',
          'Fully private — no data leaves the machine',
          'Faster iteration cycles for prompt engineering and model experimentation',
        ],
      },
    ],
  },
  {
    slug: 'demark-stock-analysis-engine',
    title: 'DeMark Stock Analysis Engine',
    summary: 'A fully automated daily stock analysis engine computing TD Sequential, TDST, trend context, and signal changes — synced to Notion and triggered on cron.',
    tags: ['Python', 'Notion', 'Finance', 'Automation', 'Vercel', 'TypeScript'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'A fully automated daily stock analysis engine using DeMark indicators, Notion, Vercel, and cron jobs. The system computes TD Sequential signals, TDST support/resistance levels, trend context, and signal changes every day — syncing results to Notion and triggering a live dashboard redeploy.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Needed a reliable, automated system to compute TD Sequential, TDST, trend context, and signal changes daily without manual data pulls, spreadsheet work, or missed runs.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['I built:'],
        bullets: [
          'Automated data ingestion from a live price provider',
          'Full DeMark indicator engine (TD Setup, Countdown, TDST, EMA, ATR)',
          'Signal detection with change-tracking between runs',
          'Notion sync via upsert-write scheme as zero-cost database',
          'Daily cron automation with zero manual intervention',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A complete quant pipeline that runs daily, detects DeMark signals across a watchlist, writes structured results to Notion, fires a Discord digest, and triggers a live dashboard redeploy within 30 seconds of each run.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Fully automated — zero manual runs since deployment',
          'Accurate DeMark signals computed daily across entire watchlist',
          'Zero infrastructure cost using Notion as the primary database',
        ],
      },
    ],
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    summary: 'A fast, SEO-ready personal portfolio built with Next.js 14 and Claude Code — 1.08s LCP, auto-derived project filters, dual analytics, and a print-ready CV.',
    tags: ['Next.js', 'Vercel', 'SEO', 'TypeScript', 'Performance'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This portfolio site — the one you\'re reading — was built with Next.js, Vercel, and a clean design system. The goal was a professional, fast, SEO-ready personal site that could be updated and extended without friction.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: ['Needed a professional, fast, SEO-ready personal site that:'],
        bullets: [
          'Loads quickly and scores well on Core Web Vitals',
          'Keeps project data and stack tags in sync automatically',
          'Includes a print-ready CV with correct dark-mode overrides',
          'Tracks engagement without sending data to Google',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['I built with a deliberate focus on performance and zero-maintenance:'],
        bullets: [
          'Hero section and project grid with auto-derived stack filters',
          'About section with full background and credentials',
          'Contact form powered by Resend',
          'SEO foundation: sitemap, robots.txt, JSON-LD schema, meta tags',
          'Print stylesheet for the CV page with Georgia font and dark-mode overrides',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          '1.08s LCP through targeted optimisation (next/font, LCP-only Framer Motion, simplified H1)',
          'Stack tags auto-sync from project data — no manual updates',
          'Dual analytics: Vercel Analytics + Umami on free tiers',
          'SEO-ready with full JSON-LD schema, sitemap, and Search Console integration',
        ],
      },
    ],
  },
  {
    slug: 'fifa-2026-world-cup-predictor',
    title: 'FIFA 2026 World Cup Predictor',
    summary: 'Full-stack tournament prediction system blending Elo ratings, Dixon-Coles Poisson scoring, and 10,000 Monte Carlo simulations — fully automated via GitHub Actions with zero manual intervention since kickoff.',
    tags: ['Python', 'React', 'Monte Carlo', 'GitHub Actions', 'Vercel', 'Playwright'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The FIFA 2026 World Cup Predictor is a full-stack tournament prediction system built to model the entire World Cup in real time. The model blends Elo ratings with 4-year decay, Dixon-Coles Poisson scoring, and 10,000 Monte Carlo simulations per run — then corrects for longshot bias against live Polymarket odds. A fully automated Python pipeline runs on GitHub Actions, fetching results daily, conditioning on actual tournament state, and triggering a zero-downtime Vercel redeploy with no manual intervention.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Pre-tournament predictors go stale the moment the first match is played. I needed a system that could condition on live results — played scores, eliminations, shootout winners — and update probabilities continuously throughout the tournament without any manual input.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The model layers three components to produce calibrated probabilities:'],
        bullets: [
          'Elo ratings with 4-year decay and class-based K-factors for home/away/neutral adjustments',
          'Dixon-Coles Poisson scoring for match outcome simulation',
          '10,000 Monte Carlo simulations per run for championship probability distributions',
          'Longshot bias correction benchmarked against live Polymarket prediction market odds',
          'GitHub Actions pipeline fetching fresh results daily and conditioning on real tournament state',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A React frontend (Vite + Tailwind + Recharts) surfaces seven data views: group standings, knockout bracket, championship probability table with bookmaker value analysis, Elo trajectories since 2018, and a daily-updated probability chart. A Brier score ledger tracks forecast accuracy throughout. The Python pipeline validates output and commits updated JSON to trigger a zero-downtime Vercel redeploy.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Live since tournament kickoff with zero manual intervention',
          '66 pytest unit tests and 22 Playwright browser tests across local and production',
          'Brier score ledger tracking forecast accuracy throughout the tournament',
          'Demonstrates end-to-end ML pipeline delivery: modelling, automation, testing, and production deployment',
        ],
      },
    ],
  },
  {
    slug: 'executive-articulation-training',
    title: 'Executive Articulation Training System',
    summary: 'Cloud-hosted speaking-drill platform that pre-generates leadership scenarios, transcribes browser responses with Groq Whisper, and scores them across an 8-dimension executive communication rubric — entirely on free-tier services.',
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Notion', 'Groq', 'Automation'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The Executive Articulation Training System is a fully automated, cloud-hosted speaking-drill platform built to develop CTO-advisor communication skills. A daily cron pre-generates leadership scenarios via an LLM fallback chain; the user records a 60–120 second browser response; audio is transcribed and scored across an 8-dimension executive rubric covering clarity, structure, business alignment, and more. Results persist to Notion and a weekly AI-generated summary fires every Friday.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          "Developing executive communication skills requires consistent, structured practice with real feedback — not ad hoc journalling or expensive coaching. I needed a system that could generate high-quality scenarios daily, capture spoken responses, and produce structured scoring without any manual facilitation.",
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The system is built around three automated loops:'],
        bullets: [
          'Daily scenario generation via LLM fallback chain (primary + backup model) triggered by cron-job.org',
          'Browser-based audio recording with Groq Whisper transcription for accurate speech-to-text',
          '8-dimension executive rubric scoring: clarity, structure, concision, business alignment, confidence, insight, storytelling, and call-to-action',
          'Notion as the persistence layer — all sessions, scores, and trends stored in a structured database',
          'Weekly AI-generated coaching summary delivered every Friday',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A fully serverless platform running entirely on free-tier services: Vercel for hosting, cron-job.org for scheduling, Notion API for data, and Groq Whisper for transcription. Zero ongoing cost, zero manual intervention, and a weekly coaching loop that compounds over time.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Daily practice sessions with automated AI scoring across 8 executive dimensions',
          'Weekly coaching summaries delivered automatically every Friday',
          'Zero infrastructure cost across the entire stack',
          'Demonstrates how to build a complete feedback loop with no recurring spend',
        ],
      },
    ],
  },
  {
    slug: 'multi-agent-content-pipeline',
    title: 'Multi-Agent Content Pipeline',
    summary: 'Five-agent content production system with enforced role separation — Planner, Worker, Verifier, QC, Uploader — governed by a CLAUDE.md engineering contract that prevents self-verification at every stage.',
    tags: ['Claude Code', 'Python', 'Multi-agent', 'AI Orchestration'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The Multi-Agent Content Pipeline is a production content system built on a strict role-separation architecture: Planner → Worker → Verifier → QC → Uploader. No agent reviews its own output. No stage is skipped. The entire system is governed by a CLAUDE.md engineering contract that defines each role, enforces separation of concerns, and requires explicit validation before any handoff.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'AI-generated content pipelines fail in predictable ways: agents self-verify and pass bad output, QC gates get skipped under time pressure, and there is no audit trail when something goes wrong. I needed a system that made these failure modes structurally impossible — not just discouraged.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The architecture enforces three principles at every stage:'],
        bullets: [
          'Role separation — each agent has exactly one responsibility and cannot perform another agent\'s role',
          'No self-verification — the agent that produces output is never the agent that validates it',
          'Mandatory QC gates — the pipeline halts and alerts on any validation failure; it does not continue',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A five-stage Python pipeline where each agent is instantiated with a scoped system prompt that explicitly forbids out-of-role behaviour. The CLAUDE.md engineering contract is loaded as context at every stage, making the rules visible and enforceable. The Uploader only executes after explicit QC sign-off.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Deterministic, auditable content production with zero self-verification',
          'QC enforced at every handoff — pipeline halts rather than silently passing bad output',
          'Reusable pattern deployed across multiple subsequent pipelines',
          'Foundation for the CLAUDE.md Engineering Contract project',
        ],
      },
    ],
  },
  {
    slug: 'tts-audio-production-pipeline',
    title: 'TTS & Audio Production Pipeline',
    summary: 'Full podcast production system with FFmpeg audio processing, broadcast-standard LUFS loudness normalisation, segment-level QC, and automatic regeneration of failed segments — end-to-end with no manual steps.',
    tags: ['Python', 'FFmpeg', 'TTS', 'Audio Engineering'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The TTS & Audio Production Pipeline is a fully automated podcast production system that takes a script and produces broadcast-ready audio. It handles TTS generation, FFmpeg processing, broadcast-standard loudness normalisation to LUFS targets, segment-level QC reporting, and automatic regeneration of any segment that fails quality checks.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'TTS pipelines fail silently. A segment gets clipped, a loudness level spikes, or a voice model stutters — and without per-segment validation, the failure ships. I needed a pipeline that treated every segment as a testable unit, validated against broadcast standards, and self-healed on failure.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The pipeline is built around a segment-as-unit-of-work model:'],
        bullets: [
          'Script parsed into segments with speaker, tone, and pacing metadata',
          'TTS generation per segment with configurable voice and model parameters',
          'FFmpeg processing: normalisation, silence trimming, format conversion',
          'LUFS measurement against broadcast target (typically -16 LUFS for podcasts)',
          'Segment-level QC report generated after each run',
          'Automatic regeneration of failed segments without reprocessing the full script',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A Python pipeline that produces a full QC report alongside every audio output. Failed segments are flagged with failure reason (loudness out of range, duration anomaly, silence detected) and regenerated automatically. The final assembly step only runs after all segments pass QC.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Broadcast-ready audio produced end-to-end with no manual intervention',
          'Consistent LUFS output across all segments and episodes',
          'Self-healing on segment failure — no full reruns required',
          'Demonstrates production-grade quality assurance applied to AI-generated media',
        ],
      },
    ],
  },
  {
    slug: 'mcp-integration-stack',
    title: 'MCP Integration Stack',
    summary: 'Working local MCP server stack on Windows connecting MarkItDown, Google Calendar, Gmail, and Google Drive as real tool integrations for Claude Desktop — not sandboxed demos.',
    tags: ['MCP', 'Claude Desktop', 'Google APIs', 'Windows'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The MCP Integration Stack is a working local Model Context Protocol server environment on Windows, connecting MarkItDown, Google Calendar, Gmail, and Google Drive as real tool integrations for Claude Desktop. The goal was a production-ready daily-use AI environment — not a demo setup — where Claude could read and act on live calendar, email, drive, and document data.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'MCP on Windows is underdocumented and full of environment-specific edge cases. Getting Google APIs authenticated, keeping MCP server processes stable across sessions, and wiring multiple servers into a single Claude Desktop config required solving problems that most guides skip entirely.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The stack was assembled and validated in layers:'],
        bullets: [
          'Claude Desktop configured with a multi-server MCP config pointing to each local server',
          'MarkItDown MCP server for document-to-text conversion (PDF, DOCX, XLSX)',
          'Google Calendar MCP server with OAuth2 flow for reading and writing calendar events',
          'Gmail MCP server for reading, searching, and drafting emails',
          'Google Drive MCP server for file listing, reading, and basic operations',
          'Windows-specific process management to keep servers alive across restarts',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A stable, multi-server MCP environment that Claude Desktop connects to on startup. Each server handles one domain; Claude orchestrates across them. The result is an AI assistant with live access to the full Google Workspace suite and local document processing — all running locally on Windows.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Daily-use AI environment with real Google Workspace integration',
          'MarkItDown enabling Claude to process PDFs, Word docs, and spreadsheets directly',
          'Featured project on the portfolio — demonstrates production MCP deployment on Windows',
          'Blueprint for anyone setting up a multi-server MCP stack outside of macOS/Linux',
        ],
      },
    ],
  },
  {
    slug: 'sql-natural-language-query',
    title: 'SQL Natural Language Query App',
    summary: 'Ask a database questions in plain English and get structured results — built with LangChain, CopilotKit, and the Anthropic API on a Next.js backend.',
    tags: ['Next.js', 'LangChain', 'CopilotKit', 'TypeScript'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The SQL Natural Language Query App lets users ask questions in plain English and receive structured database results without writing a single line of SQL. Built with LangChain for LLM-to-SQL translation, CopilotKit for the AI assistant interface, and the Anthropic API for reasoning — all on a Next.js backend.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Most data in organisations sits in SQL databases that only engineers can query. Business users with legitimate data questions are blocked by a skill gap. I wanted to close that gap with a conversational interface that produced real, accurate SQL behind the scenes.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The system translates natural language to SQL in three steps:'],
        bullets: [
          'Schema introspection — the app reads the database schema at startup and passes it as context',
          'LangChain SQL chain — translates the user\'s question into a valid SQL query using the schema',
          'Anthropic API reasoning — validates and refines the query before execution',
          'CopilotKit UI — provides a chat-style interface with query history and result display',
          'Results returned as structured tables with the generated SQL visible for transparency',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A Next.js application where users type questions like "Which customers spent the most last quarter?" and receive a formatted results table alongside the SQL that produced it. The transparency layer — showing the generated SQL — builds trust and helps users refine their questions.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Non-technical users can query databases via natural language',
          'Generated SQL visible for auditability and trust-building',
          'Demonstrates LangChain + CopilotKit + Anthropic API integration in a production Next.js app',
        ],
      },
    ],
  },
  {
    slug: 'tom-demark-indicator',
    title: 'Tom DeMark Indicator',
    summary: 'Interactive Next.js charting application implementing TD Sequential and related DeMark technical analysis signals — the visual foundation for the later automated signal engine.',
    tags: ['Next.js', 'TypeScript', 'Charting', 'Finance'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The Tom DeMark Indicator is an interactive Next.js charting application that implements TD Sequential and related DeMark technical analysis signals. It was built to understand and visualise DeMark logic from first principles — and became the foundation for the later fully automated Notion-DeMark signal engine.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'DeMark indicators are well-documented in theory but rarely implemented correctly in practice. Most charting tools either omit them entirely or implement them inaccurately. I needed a clean, verifiable implementation I could trust as the basis for a production signal system.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The implementation was built from the DeMark specification:'],
        bullets: [
          'TD Setup: 9-bar sequential count with true range qualifier',
          'TD Countdown: 13-bar count with close vs. two-bars-ago comparison',
          'TDST: support and resistance levels derived from Setup highs/lows',
          'Interactive chart rendering with signal annotations at correct bar positions',
          'Test cases built from known published DeMark examples to validate accuracy',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'An interactive Next.js app where price data can be loaded and DeMark signals are rendered as annotations on a candlestick chart. Setup counts, Countdown counts, and TDST levels are all visible and verifiable against published examples.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Accurate DeMark implementation validated against published examples',
          'Interactive chart with Setup, Countdown, and TDST signal annotations',
          'Became the indicator engine core for the Notion-DeMark automated signal pipeline',
        ],
      },
    ],
  },
  {
    slug: 'portfolio-ai-pra',
    title: 'Portfolio AI (PRA)',
    summary: 'AI-powered portfolio analysis tool combining live market data with LLM reasoning to surface actionable investment insights and risk commentary.',
    tags: ['Next.js', 'AI', 'Finance', 'TypeScript'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Portfolio AI (PRA) is an AI-powered portfolio analysis tool that combines live market data with LLM reasoning to surface actionable investment insights. Rather than static charts and numbers, PRA generates structured commentary — position risk, sector concentration, momentum context — on demand.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Portfolio dashboards display data but rarely interpret it. A chart showing a position down 12% tells you nothing about whether that is expected volatility or a signal to act. I wanted a tool that could apply structured analytical reasoning to portfolio data and produce commentary worth reading.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The analysis pipeline runs in two stages:'],
        bullets: [
          'Data layer: live market data fetched and normalised into a structured portfolio snapshot',
          'LLM reasoning: Anthropic API analyses the snapshot against a defined analytical framework',
          'Framework covers: position sizing, sector concentration, recent momentum, drawdown context',
          'Output structured as named insight categories — not freeform text — for consistency',
          'Next.js frontend displays insights alongside the underlying data for transparency',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A Next.js application where the user inputs their portfolio and receives structured AI-generated commentary across key analytical dimensions. Each insight is paired with the data that drove it, keeping the analysis grounded and auditable.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Structured AI investment commentary generated on demand from live data',
          'Insights grounded in visible underlying data — not a black box',
          'Demonstrates LLM reasoning applied to financial analysis in a production Next.js app',
        ],
      },
    ],
  },
  {
    slug: 'badfamily-badminton-platform',
    title: 'BadFamily Badminton Platform',
    summary: 'Tournament and event management site for a badminton family group — built with Next.js and deployed live on Netlify.',
    tags: ['Next.js', 'Netlify', 'React', 'Tailwind'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The BadFamily Badminton Platform is a tournament and event management site built for a badminton family group. It handles scheduling, results tracking, and standings — deployed live on Netlify and actively used for group tournaments.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Organising a recurring badminton tournament group on WhatsApp and spreadsheets creates confusion: missed updates, stale standings, and no single source of truth. I needed a simple, self-hosted site the group could check for current standings and upcoming fixtures.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The build was kept intentionally simple and fast to maintain:'],
        bullets: [
          'Next.js App Router for clean page routing and performance',
          'React components for results tables, standings, and fixture lists',
          'Tailwind CSS for a clean, mobile-friendly layout',
          'Netlify deployment for zero-cost hosting with instant redeploys on push',
          'Static data structure — tournament data updated via code, no CMS required',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A live site at grand-badminton-family.netlify.app that the group uses as the source of truth for standings, results, and upcoming fixtures. Updates are made via a simple data file and deployed automatically.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Live and actively used by the badminton group',
          'Single source of truth replacing WhatsApp chaos and spreadsheets',
          'Zero hosting cost on Netlify free tier',
          'Demonstrates full delivery of a real-use community tool',
        ],
      },
    ],
  },
  {
    slug: 'pdf-documentation-generator',
    title: 'PDF Documentation Generator',
    summary: 'Python script using ReportLab to generate professional PDF guides with styled code blocks, metadata headers, and custom typography — eliminating manual formatting for internal developer documentation.',
    tags: ['Python', 'ReportLab', 'PDF', 'Automation'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The PDF Documentation Generator is a Python script that produces professional developer documentation in PDF format using ReportLab. It handles styled code blocks with syntax context, metadata headers, custom typography, and consistent layout — generating polished documentation from structured content without any manual formatting.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Internal developer documentation written in Markdown or Word documents looks inconsistent and unprofessional when shared as PDFs. Manual formatting in Word is slow and breaks every time content changes. I needed a programmatic approach that produced professional output reliably every time.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The generator is built around a content schema that drives layout:'],
        bullets: [
          'Structured Python content objects define sections, headings, paragraphs, and code blocks',
          'ReportLab renders each element type with a defined style — no manual positioning',
          'Code blocks styled with monospace font, background fill, and line numbers',
          'Metadata headers: title, date, version, and author on the cover page',
          'Page numbers, running headers, and consistent margins throughout',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A Python script that takes structured content as input and outputs a professional PDF. Updating documentation means updating the content object — the formatting is applied automatically. New document types can be added by defining a new content schema.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Professional developer PDFs generated in seconds with zero manual formatting',
          'Consistent output across all documentation — same layout, fonts, and styling every time',
          'Reusable across any documentation type by updating the content schema',
        ],
      },
    ],
  },
  {
    slug: 'ebook-markdown-converter',
    title: 'eBook to Markdown Batch Converter',
    summary: 'Automated batch converter that processed 52 PDFs to clean Markdown using the MarkItDown MCP server — with per-file error handling and zero manual intervention.',
    tags: ['Python', 'MarkItDown', 'MCP', 'Automation'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The eBook to Markdown Batch Converter is a Python automation script that converted a library of 52 PDFs to clean, structured Markdown using the MarkItDown MCP server. Each file was processed individually with its own error handling — failures were logged and skipped without stopping the run.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'A library of 52 PDFs needed to be converted to Markdown for LLM ingestion and downstream processing. Manual conversion would take hours and produce inconsistent output. Batch processing with a single failure-halting script would mean losing the whole run if one PDF was malformed.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The script is designed around resilience:'],
        bullets: [
          'Each PDF processed in its own try/except block — one failure cannot stop the batch',
          'MarkItDown MCP server handles the actual PDF-to-Markdown conversion',
          'Output written to individual .md files with the same filename as the source PDF',
          'Per-file success/failure logged with error type and file path',
          'Summary report generated at end of run: total processed, succeeded, failed',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A Python script that processes an entire directory of PDFs, converts each to clean Markdown via MarkItDown, logs every outcome, and produces a final summary. Malformed or unsupported files are skipped with a logged reason — the batch always completes.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          '52 PDFs converted to clean Markdown in a single automated run',
          'Zero manual intervention required; failures logged and skipped gracefully',
          'Output files ready for direct LLM ingestion and downstream processing',
        ],
      },
    ],
  },
  {
    slug: 'youtube-llm-insight-extractor',
    title: 'YouTube to LLM Insight Extractor',
    summary: 'Pipeline to download YouTube transcripts, transcribe with Whisper, and extract structured insights — concepts, action items, and knowledge gaps — via the Anthropic API.',
    tags: ['Python', 'Whisper', 'yt-dlp', 'Anthropic SDK'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The YouTube to LLM Insight Extractor is an end-to-end pipeline that downloads YouTube video transcripts with yt-dlp, transcribes audio with Whisper, and extracts structured insights via the Anthropic API. The output is not a raw transcript — it is a structured document of key concepts, action items, and identified knowledge gaps.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'YouTube contains enormous amounts of high-quality expert content, but watching videos to extract specific insights is slow and difficult to scale. I needed a pipeline that could process a video and produce structured, actionable output — not just a text dump.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The pipeline runs in three stages:'],
        bullets: [
          'yt-dlp downloads the audio track or transcript from any YouTube URL',
          'Whisper transcribes the audio to clean text with speaker segmentation where available',
          'Anthropic API processes the transcript against a structured extraction prompt',
          'Extraction schema: key concepts, action items, knowledge gaps, and notable quotes',
          'Output written as a structured Markdown file with named sections per category',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A Python pipeline where you pass a YouTube URL and receive a structured Markdown document. Each output section is defined and consistent: key concepts are bullet-pointed, action items are labelled, knowledge gaps are explicitly named. The structured format makes the output immediately useful for notes, study, or further processing.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Structured knowledge extraction from any YouTube video in minutes',
          'Consistent output schema — concepts, action items, gaps — across all processed videos',
          'Reusable pipeline applicable to any YouTube source or audio transcript',
          'Featured project on the portfolio — demonstrates multi-model pipeline design',
        ],
      },
    ],
  },
  {
    slug: 'claude-operator-dashboard',
    title: 'Claude Operator Dashboard',
    summary: 'Interactive tabbed reference UI covering the Claude trust hierarchy, model routing strategy, system prompt anatomy, and a live agent pipeline builder for personal AI workflows.',
    tags: ['React', 'Claude API', 'AI Tooling', 'TypeScript'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The Claude Operator Dashboard is an interactive reference tool covering the Claude API operator model in depth: the trust hierarchy between Anthropic, operators, and users; model routing strategy; system prompt anatomy; and a live agent pipeline builder for designing and testing multi-agent workflows.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'The Claude operator model has meaningful depth — trust levels, permission inheritance, prompt layering, model routing — that is spread across documentation and only becomes clear through experimentation. I needed a single, interactive reference that made the system tangible and usable for daily AI system design.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The dashboard is structured as tabbed interactive sections:'],
        bullets: [
          'Trust hierarchy tab: visual diagram of Anthropic → Operator → User permission flow',
          'Model routing tab: decision logic for choosing between Claude models by task type',
          'System prompt anatomy tab: annotated breakdown of effective system prompt structure',
          'Agent pipeline builder: live configuration tool for designing multi-agent workflows',
          'Each section includes working examples drawn from real pipelines',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A React application used as a daily reference tool during AI system design. The pipeline builder in particular is used to sketch and validate agent architectures before implementation — defining roles, tool access, handoff conditions, and verification requirements.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Daily-use reference tool for Claude API operator work',
          'Pipeline builder used to design architectures before implementation',
          'Demonstrates deep understanding of the Claude operator model and multi-agent system design',
        ],
      },
    ],
  },
  {
    slug: 'impeccable-design-workflow',
    title: 'Impeccable — AI‑Driven Design That Elevates Every Build',
    summary: 'Systematic AI‑powered design workflow embedded in every build — improved portfolio design score from 28 → 33 through structured critique cycles, iteration scoring, and visual hierarchy guidance.',
    tags: ['Claude Code', 'AI Tooling', 'Design System', 'Next.js'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Impeccable is a systematic, AI‑powered design workflow that helps builders craft beautiful, strategic, and consistent product design — without needing deep design expertise. It acts like having a designer at your side: guiding structure, layout, spacing, typography, and visual hierarchy while keeping everything aligned with product strategy.',
          'I adopted Impeccable early in my portfolio redesign. What started as an experiment quickly became a core part of my build process. My site went through multiple iterations, improving its design score from 28 → 33, and continues to improve. Best of all, the tool is free — and now it\'s part of my permanent skillset.',
        ],
      },
      {
        heading: 'The Challenge',
        paragraphs: [
          'As an AI builder and technical PM, I move fast. I ship systems, pipelines, and full‑stack apps quickly — but design is traditionally a bottleneck. Good design requires:',
        ],
        bullets: [
          'Visual hierarchy',
          'Spacing discipline',
          'Typography choices',
          'Layout consistency',
          'Strategic alignment with product goals',
        ],
      },
      {
        heading: 'The Solution: Impeccable',
        paragraphs: [
          'These are areas where most builders either slow down or rely heavily on designers. I needed a way to maintain speed without sacrificing design quality.',
          'Impeccable provides a structured, repeatable design review process powered by AI agents. Instead of guessing, I get:',
        ],
        bullets: [
          'Clear design critiques',
          'Actionable improvement steps',
          'Strategic alignment checks',
          'Visual hierarchy guidance',
          'Iteration scoring to measure progress',
        ],
      },
      {
        heading: 'How I Used It',
        paragraphs: [
          'It\'s not just "AI giving feedback." It\'s a design system that teaches you how to think like a designer — while letting you stay in builder mode.',
          'I applied Impeccable to my portfolio redesign. Each iteration followed the same loop: generate a design review, apply improvements, re‑score the design, and repeat until the design feels cohesive and intentional. This loop helped refine:',
        ],
        bullets: [
          'Hero section clarity',
          'Typography hierarchy',
          'Spacing rhythm',
          'Section structure',
          'Visual consistency across components',
          'CTA placement and emphasis',
          'Project card layout and readability',
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          'The result: a cleaner, more strategic, more professional portfolio — built without needing a dedicated designer.',
        ],
        bullets: [
          'Design score improved from 28 → 33',
          'Clearer hierarchy and readability',
          'Stronger alignment between design and product strategy',
          'More polished presentation of projects and services',
          'Faster iteration cycles',
          'Zero cost — the tool is free',
          'Now part of my everyday build workflow',
        ],
      },
      {
        heading: 'Why This Matters for Clients',
        paragraphs: [
          'Impeccable didn\'t just improve my site. It improved how I build.',
          'This workflow is now embedded in my delivery process. When I build AI systems, MVPs, or automation pipelines, I also ensure:',
        ],
        bullets: [
          'The product looks professional',
          'The design supports the strategy',
          'The UI feels intentional',
          'The experience is cohesive',
          'Iterations are fast and measurable',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Clients don\'t just get a working system — they get a system that looks and feels right, without needing a designer on day one. Impeccable gives me a design partner that scales with me. And now, it scales with every client I work with.',
          'Impeccable has become part of my skillset: a design‑thinking engine that enhances every build. It lets me ship faster, iterate smarter, and deliver products that are both functional and beautifully crafted — even when design details are unclear at the start.',
          'It\'s systematic. It\'s strategic. It\'s free. And it\'s now part of how I build.',
        ],
      },
    ],
  },
  {
    slug: 'claude-md-engineering-contract',
    title: 'CLAUDE.md — Engineering Contract',
    summary: 'A governing contract for AI agent behaviour: role rules, no-self-verification enforcement, mandatory chunked reads, pipeline definitions, and QC gates — the difference between a system prompt and an engineering contract.',
    tags: ['Claude Code', 'Prompt Engineering', 'AI Governance'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'CLAUDE.md is a governing contract for AI agent behaviour. Where a system prompt describes what to do, an engineering contract defines how to operate: explicit role boundaries, no-self-verification enforcement, mandatory chunked file reads, pipeline stage definitions, and QC gates that cannot be bypassed. It is the difference between guiding an agent and governing one.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'AI agents fail in consistent ways: they self-verify and declare success without validation, they skip quality checks when under token pressure, they read large files in one pass and miss content, and they conflate planning with execution. A system prompt asks the agent to avoid these failures. An engineering contract makes them structurally difficult.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: ['The contract is built around four governing principles:'],
        bullets: [
          'Role rules: each agent is assigned a single role with explicit forbidden actions listed',
          'No self-verification: the agent that produces output is contractually prohibited from validating it',
          'Chunked reads: all file reads over a defined size must be split — single-pass reads are a contract violation',
          'QC gates: defined checkpoints that must produce a signed-off output before the pipeline continues',
          'Pipeline definitions: each workflow stage is named, scoped, and handed off explicitly',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: [
          'A structured Markdown document loaded as context at the start of every Claude Code session. The contract is written in the second person — "You are..." — making the rules active and present rather than advisory. It is version-controlled and updated as new failure modes are discovered.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Consistent, trustworthy AI pipeline behaviour across all projects',
          'Self-verification and QC skipping structurally prevented, not just discouraged',
          'Standard starting point for every new Claude Code pipeline',
          'Demonstrates a governance-first approach to AI system design',
        ],
      },
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getRelated(slug: string, count = 3): CaseStudy[] {
  const current = getCaseStudy(slug)
  if (!current) return []
  return caseStudies
    .filter((cs) => cs.slug !== slug)
    .map((cs) => ({ cs, overlap: cs.tags.filter((t) => current.tags.includes(t)).length }))
    .filter(({ overlap }) => overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, count)
    .map(({ cs }) => cs)
}
