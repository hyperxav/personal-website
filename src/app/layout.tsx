import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const poppins = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hyperxav',
  description: 'Software Engineer | AI & Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${poppins.className} bg-white dark:bg-black text-primary-900 dark:text-white`}>
        <div className="relative min-h-screen">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
} 