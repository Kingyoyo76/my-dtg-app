import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DTG AI Solutions',
  description: 'AI-powered solutions engineered by DTG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
<script dangerouslySetInnerHTML={{__html: `
  window.onerror = function(message, source, lineno, colno, error) {
    document.body.innerHTML += '<div style="color: red; position: fixed; top: 0; left: 0; width: 100%; background: white; z-index: 9999;">' + message + '</div>';
  }
`}} /></body>
    </html>
  )
}