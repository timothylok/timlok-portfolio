import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
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
  title: 'Timothy Lok — Builder & Technical PM',
  description: 'Portfolio of projects built with Claude Code. Ex-Java developer, Technical Project Manager, AI-assisted builder based in Auckland, NZ.',
  openGraph: {
    title: 'Timothy Lok — Builder & Technical PM',
    description: 'Portfolio of projects built with Claude Code. Based in Auckland, NZ.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timothy Lok — Builder & Technical PM',
    description: 'Portfolio of projects built with Claude Code. Based in Auckland, NZ.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
