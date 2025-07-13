import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.slmc.ch'),
  title: {
    template: '%s | SLMC',
    default: 'SLMC - Professional Services & Solutions',
  },
  description:
    'Leading provider of professional services and innovative solutions',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
