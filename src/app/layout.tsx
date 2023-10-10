import './globals.css'
import type { Metadata } from 'next'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: '400', subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'French Journey',
  description:
    'French Journey is a progressive web application aiming to help their users learn more French.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pacifico.className}>{children}</body>
    </html>
  )
}
