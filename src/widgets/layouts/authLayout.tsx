import { Header } from '@/widgets/header/Header'
import React from 'react'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant='auth' />
      {children}
    </>
  )
}
