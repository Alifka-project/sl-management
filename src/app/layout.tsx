import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | S&L Management and Consulting',
    default: 'S&L Management and Consulting GmbH',
  },
  description: 'Premium Family Office Services in Switzerland',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
