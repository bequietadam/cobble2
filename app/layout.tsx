import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { getSandpackCssText } from '@codesandbox/sandpack-react'
import SandCss from '@components/SandCss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'COBBLE2',
  description: 'Generated with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark h-full'>
      <head>
        <SandCss />
      </head>
      <body className={inter.className + ' ' + 'h-full'}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
