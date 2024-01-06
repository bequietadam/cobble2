import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cobbles',
  description: 'Code Editor / Portfolio, built with NextJS 13 (app directory)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark h-full'>
      <body className={inter.className + ' ' + 'h-full'}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
