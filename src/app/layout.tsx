import { GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import './styles/globals.css'
import type { Metadata } from 'next'
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

export const metadata: Metadata = {
  title: 'Awaken Wisdom',
  description: 'A fun project to generate quotes',
}

Amplify.configure({...awsExports, ssr:true});

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
