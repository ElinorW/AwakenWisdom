import { GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import './styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awaken Wisdom',
  description: 'A fun project to generate quotes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
