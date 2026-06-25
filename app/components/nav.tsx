'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { SITE_NAME } from '@/app/data/site'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Projects', href: '/#projects', event: 'Nav: Projects' },
  { label: 'About', href: '/#about', event: 'Nav: About' },
  { label: 'Case Studies', href: '/CaseStudies', event: 'Nav: Case Studies' },
  { label: 'CV', href: '/cv', event: 'Nav: CV' },
  { label: 'Contact', href: '/contact', event: 'Nav: Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function isCurrent(href: string) {
    if (href.startsWith('/#')) return false
    return pathname.startsWith(href)
  }

  return (
    <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" data-umami-event="Nav: Home" className="text-sm font-display font-medium tracking-tight text-foreground hover:text-foreground/70 transition-colors">
          {SITE_NAME}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map(({ label, href, event }) => {
            const current = isCurrent(href)
            return (
              <a
                key={label}
                href={href}
                data-umami-event={event}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'transition-colors',
                  current ? 'text-foreground' : 'text-foreground/45 hover:text-foreground'
                )}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground/60 hover:text-foreground transition-colors p-1 -mr-1"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(({ label, href, event }) => {
              const current = isCurrent(href)
              return (
                <a
                  key={label}
                  href={href}
                  data-umami-event={event}
                  aria-current={current ? 'page' : undefined}
                  className={cn(
                    'text-sm py-2 transition-colors',
                    current ? 'text-foreground' : 'text-foreground/55 hover:text-foreground'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
