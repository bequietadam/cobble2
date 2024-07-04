import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { Providers } from './providers';

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
        </head>
        <body className={inter.className + ' ' + 'h-full'}>
          <Providers>
            {children}
          </Providers>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
