import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const res = await fetch('https://timlok-portfolio.vercel.app/images/tim-lok-mountain.jpeg')
  const buffer = await res.arrayBuffer()
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode(...Array.from(bytes.subarray(i, i + 8192)))
  }
  const src = `data:image/jpeg;base64,${btoa(binary)}`

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: 1200, height: 630, position: 'relative', backgroundColor: '#0A0A0A' }}>

        {/* Photo — 1200px wide, top-aligned, crops at bottom (face stays visible) */}
        <img src={src} style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 900 }} />

        {/* Gradient rising from bottom */}
        <div style={{
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 1200,
          height: 300,
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 55%, transparent 100%)',
        }} />

        {/* Text — bottom left */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: 52, left: 56 }}>
          <div style={{ fontSize: 54, fontWeight: 300, color: '#ffffff', letterSpacing: '-1px', lineHeight: 1, marginBottom: 12 }}>
            Timothy Lok
          </div>
          <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.60)' }}>
            Builder & Technical PM
          </div>
        </div>

      </div>
    ),
    { width: 1200, height: 630 }
  )
}
