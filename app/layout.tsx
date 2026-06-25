import type { Metadata } from 'next'
import { DM_Sans, DM_Mono, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SITE_NAME } from '@/app/data/site'
import ConsoleEgg from '@/app/components/console-egg'
import MotionProvider from '@/app/components/motion-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: false,
  weight: ['400', '500'],
})

const siteUrl = 'https://timlok-portfolio.vercel.app'
const siteTitle = `${SITE_NAME} – Technical PM & AI Automation Builder`
const siteDescription = 'Technical PM specialising in AI automation, dashboards, and full-stack delivery. 19 projects shipped with Claude Code. Based in Auckland, NZ.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/favicon.png' }],
  },
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'NY6OlmtuVw7GylDwz2ny4U3Oy8VEODScLOitr2Wxo3g',
  },
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tim Lok Portfolio',
  url: siteUrl,
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tim Lok',
  alternateName: 'TinHung',
  jobTitle: 'Technical Project Manager',
  description: 'Technical Project Manager and AI-driven builder specialising in automation, dashboards, and full‑stack product delivery.',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/timlok',
    'https://github.com/timlok',
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Adelaide', sameAs: 'https://www.adelaide.edu.au/' },
    { '@type': 'CollegeOrUniversity', name: 'University of Kentucky', sameAs: 'https://www.uky.edu/' },
  ],
  knowsAbout: [
    'AI automation',
    'Technical project management',
    'Next.js',
    'TypeScript',
    'Vercel',
    'Notion automation',
    'Data dashboards',
    'AI agents',
    'Product delivery',
  ],
  worksFor: { '@type': 'Organization', name: 'Independent / Freelance' },
  address: { '@type': 'PostalAddress', addressLocality: 'Auckland', addressCountry: 'New Zealand' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <MotionProvider>{children}</MotionProvider>
        <ConsoleEgg />
        <Analytics />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6eb255cc-41d6-427a-9724-78a28ee9de96"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
