import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DTG AI Solutions - Dominate Your Industry with AI-Powered Solutions',
  description: 'DTG AI Solutions provides cutting-edge artificial intelligence solutions for businesses across various industries. Revolutionize your operations with our unbreakable AI integration.',
  keywords: 'AI solutions, artificial intelligence, business automation, data analytics, machine learning',
  openGraph: {
    title: 'DTG AI Solutions - Dominate Your Industry with AI-Powered Solutions',
    description: 'Revolutionize your operations with our unbreakable AI integration and optimize for peak performance.',
    images: [{ url: '/og-image.jpg' }],
  },
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