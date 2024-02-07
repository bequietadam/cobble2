import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import SandCss from '@components/SandCss'

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
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en" className='dark h-full'>
        <head>
          {/* <SandCss /> */}
        </head>
        <body className={inter.className + ' ' + 'h-full'}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
