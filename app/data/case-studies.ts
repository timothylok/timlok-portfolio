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
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
