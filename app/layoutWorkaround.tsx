import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import ClientLayout from './ClientLayout'
import Navigation from '@components/Navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'COBBLE2',
  description: 'Generated with love',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" className='dark h-full'>
        <head>
        </head>
        <body className={inter.className + ' ' + 'h-full'}>
          <div className="w-full flex flex-col">
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
            {/* <Providers> */}
            <Navigation />
            <div className="p-4 grow flex flex-col">
              <ClientLayout>
                {children}
              </ClientLayout>
            </div>
            {/* </Providers> */}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
