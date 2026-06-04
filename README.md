# Timothy Lok — Portfolio

Personal portfolio built with Next.js 14, Tailwind CSS, and TypeScript.

## Deploy to Vercel (5 minutes)

### Step 1 — Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/timothylok/portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to https://vercel.com and sign in with your GitHub account
2. Click **Add New → Project**
3. Import the `portfolio` repo
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live at `https://timothylok.vercel.app` within ~2 minutes.

### Step 3 — Custom domain (optional)

In Vercel project settings → Domains, add `timothylok.com` or similar.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000
