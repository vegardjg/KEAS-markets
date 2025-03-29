import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Energy Analytics',
  description: 'Energy data analytics and visualization platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
}
