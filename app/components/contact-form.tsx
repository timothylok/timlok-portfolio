'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [fields, setFields] = useState({
    name: '',
    email: '',
    what: '',
    budget: '',
    timeline: '',
    link: '',
  })

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('sent')
        ;(window as any).umami?.track('Contact Form Submitted')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-light text-foreground mb-2">Message sent.</p>
        <p className="text-sm text-foreground/50">I'll reply within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={fields.name} onChange={set('name')} required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={fields.email} onChange={set('email')} required placeholder="you@example.com" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="what">What are you building?</Label>
        <Textarea
          id="what"
          value={fields.what}
          onChange={set('what')}
          required
          rows={4}
          placeholder="Describe your project, problem, or idea..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="budget">Budget range</Label>
          <Select onValueChange={(v: string | null) => setFields(f => ({ ...f, budget: v ?? '' }))}>
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Under $5k">Under $5k</SelectItem>
              <SelectItem value="$5k–$15k">$5k–$15k</SelectItem>
              <SelectItem value="$15k–$30k">$15k–$30k</SelectItem>
              <SelectItem value="$30k+">$30k+</SelectItem>
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Select onValueChange={(v: string | null) => setFields(f => ({ ...f, timeline: v ?? '' }))}>
            <SelectTrigger id="timeline">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ASAP">ASAP</SelectItem>
              <SelectItem value="1–4 weeks">1–4 weeks</SelectItem>
              <SelectItem value="1–3 months">1–3 months</SelectItem>
              <SelectItem value="3+ months">3+ months</SelectItem>
              <SelectItem value="Flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="link">Link <span className="text-foreground/30">(optional)</span></Label>
        <Input
          id="link"
          value={fields.link}
          onChange={set('link')}
          placeholder="github.com/... or similar"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">Something went wrong. Try emailing me directly.</p>
      )}

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full py-3 h-auto bg-white text-black hover:bg-white/90 font-medium mt-1"
      >
        {status === 'sending' ? 'Sending...' : 'Send message →'}
      </Button>
    </form>
  )
}
