import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { getSandpackCssText } from '@codesandbox/sandpack-react'
import SandCss from '@components/SandCss'
import ClientLayout from './ClientLayout'
import Navigation from '@components/Navigation'

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
        <div className="w-full flex flex-col">
          {/* <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
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
  )
}
