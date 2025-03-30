import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'hyperxav | Freelance Software Engineer',
  description: 'I design and build AI-powered applications, machine learning tools, and fullstack web platforms for forward-thinking clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 