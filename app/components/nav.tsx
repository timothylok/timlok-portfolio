'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE_NAME } from '@/app/data/site'

const links = [
  { label: 'Projects', href: '/#projects', event: 'Nav: Projects' },
  { label: 'About', href: '/#about', event: 'Nav: About' },
  { label: 'Case Studies', href: '/CaseStudies', event: 'Nav: Case Studies' },
  { label: 'CV', href: '/cv', event: 'Nav: CV' },
  { label: 'Contact', href: '/contact', event: 'Nav: Contact' },
  { label: 'GitHub', href: 'https://github.com/timothylok', event: 'Nav: GitHub', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/timlok', event: 'Nav: LinkedIn', external: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" data-umami-event="Nav: Home" className="text-sm font-display font-medium tracking-tight text-foreground hover:text-foreground/70 transition-colors">
          {SITE_NAME}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-foreground/45">
          {links.map(({ label, href, event, external }) => (
            <a
              key={label}
              href={href}
              data-umami-event={event}
              className="hover:text-foreground transition-colors"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </a>
          ))}
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
            {links.map(({ label, href, event, external }) => (
              <a
                key={label}
                href={href}
                data-umami-event={event}
                className="text-sm text-foreground/55 hover:text-foreground transition-colors py-2"
                onClick={() => setOpen(false)}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
