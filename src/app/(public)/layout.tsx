import CartIcon from '@/shared/ui/CartIcon/CartIcon'
import Logo from '@/shared/ui/Logo/Logo'
import ProfileIcon from '@/shared/ui/ProfileIcon/ProfileIcon'
import { Header } from '@/widgets/header/Header'
import AppNavigation from '@/widgets/navigation/AppNavigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import '../globals.css'

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
      <body className={`${inter.className} container mx-auto`}>
        <Header
          userInfo={
            <div className={'flex items-center gap-4 cursor-pointer'}>
              <div className='flex items-center gap-1'>
                <CartIcon />
                <span>1205 руб.</span>
              </div>
              <div className='flex items-center gap-1 cursor-pointer'>
                <ProfileIcon />
                <span>Профиль</span>
              </div>
            </div>
          }
          logo={<Logo />}
          navigation={<AppNavigation />}
        />
        {children}
      </body>
    </html>
  )
}
