import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const headers = { 'Content-Type': 'application/json; charset=utf-8' }

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400, headers })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const what = String(body.what ?? '').trim()
  const budget = String(body.budget ?? '').trim()
  const timeline = String(body.timeline ?? '').trim()
  const link = String(body.link ?? '').trim()

  if (!name || !email || !what) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400, headers })
  }
  if (!email.includes('@') || !email.includes('.')) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400, headers })
  }
  if (name.length > 200 || email.length > 200 || what.length > 10000) {
    return NextResponse.json({ error: 'Input too long' }, { status: 400, headers })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'timlok@gmail.com',
    subject: `New enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `What they're building: ${what}`,
      budget ? `Budget: ${budget}` : '',
      timeline ? `Timeline: ${timeline}` : '',
      link ? `Link: ${link}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) return NextResponse.json({ error }, { status: 500, headers })
  return NextResponse.json({ ok: true }, { headers })
}
