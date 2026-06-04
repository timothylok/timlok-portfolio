import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: 32,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.5px' }}>
          TL
        </span>
      </div>
    ),
    { width: 32, height: 32 }
  )
}
