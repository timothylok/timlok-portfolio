import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SITE_NAME } from '@/app/data/site'
import './globals.css'

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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tim Lok',
  jobTitle: 'Technical Project Manager & AI Automation Builder',
  url: siteUrl,
  email: 'timlok@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Auckland', addressCountry: 'NZ' },
  sameAs: ['https://github.com/timothylok', 'https://www.linkedin.com/in/timlok'],
  knowsAbout: ['AI automation', 'Technical project management', 'Next.js', 'Claude Code', 'Multi-agent systems', 'Python', 'TypeScript'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
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
