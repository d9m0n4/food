import { Header } from '@/widgets/header/Header'
import React from 'react'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant='private' />
      {children}
    </>
  )
}
