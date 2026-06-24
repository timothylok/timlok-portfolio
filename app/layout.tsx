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

export const metadata: Metadata = {
  metadataBase: new URL('https://timlok-portfolio.vercel.app'),
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/favicon.png' }],
  },
  title: `${SITE_NAME} — Builder & Technical PM`,
  description: 'Portfolio of projects built with Claude Code. Ex-Java developer, Technical Project Manager, AI-assisted builder based in Auckland, NZ.',
  openGraph: {
    title: `${SITE_NAME} — Builder & Technical PM`,
    description: 'Portfolio of projects built with Claude Code. Based in Auckland, NZ.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Builder & Technical PM`,
    description: 'Portfolio of projects built with Claude Code. Based in Auckland, NZ.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${dmMono.variable}`}>
      <body>
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
