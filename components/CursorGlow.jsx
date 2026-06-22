import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor-glow'
    document.body.appendChild(cursor)

    const moveCursor = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    window.addEventListener('pointermove', moveCursor)
    return () => {
      window.removeEventListener('pointermove', moveCursor)
      cursor.remove()
    }
  }, [])

  return null
}
