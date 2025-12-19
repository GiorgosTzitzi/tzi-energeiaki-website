import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TZI-ENERGEIAKI - Solar Energy Parks in Greece',
  description: 'Leading provider of solar energy parks in Greece, committed to sustainable energy solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

