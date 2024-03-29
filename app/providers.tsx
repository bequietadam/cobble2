'use client'

import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="h-full w-full flex">
        {children}
    </NextUIProvider>
  )
}
