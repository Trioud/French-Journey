import './globals.css'
import type { Metadata } from 'next'
import { Pacifico, Roboto_Mono } from 'next/font/google'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['cyrillic'],
  variable: '--font-pacifico',
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

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
    <html lang="en" className={`${pacifico.variable} ${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
