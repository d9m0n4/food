import { AppProvider } from '@/app/_providers/app-provider'
import Footer from '@/widgets/footer/footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${inter.className} flex flex-col min-h-dvh `}>
        <AppProvider>{children}</AppProvider>
        <Footer />
      </body>
    </html>
  )
}
