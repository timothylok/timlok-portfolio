import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, what, budget, timeline, link } = await req.json()

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'timlok@gmail.com',
    subject: `New enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `What they're building: ${what}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      link ? `Link: ${link}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  })

  const headers = { 'Content-Type': 'application/json; charset=utf-8' }
  if (error) return NextResponse.json({ error }, { status: 500, headers })
  return NextResponse.json({ ok: true }, { headers })
}
