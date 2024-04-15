import CheckAuth from '@/features/auth/chekAuth'
import PrivateLayout from '@/widgets/layouts/PrivateLayout'
import React from 'react'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivateLayout>
      <CheckAuth>{children}</CheckAuth>
    </PrivateLayout>
  )
}
