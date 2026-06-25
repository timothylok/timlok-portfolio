'use client'

import { useEffect } from 'react'

export default function ConsoleEgg() {
  useEffect(() => {
    console.log(
      '%cTim Lok — Portfolio',
      'color:#818cf8;font-size:14px;font-weight:600;font-family:monospace'
    )
    console.log(
      '%cBuilt with Next.js + Claude Code.\n%cIf you\'re reading this, you already know how to dig.\nLet\'s build something → timlok@gmail.com',
      'color:#52525b;font-size:11px;font-family:monospace',
      'color:#71717a;font-size:11px;font-family:monospace'
    )
  }, [])
  return null
}
