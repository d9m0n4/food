'use client'

import { useAppSession } from '@/entities/session/use-app-session'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'

const CheckAuth = ({ children }: { children: React.ReactNode }) => {
  const session = useAppSession()
  const isUnauth = session.status === 'unauthenticated'

  useEffect(() => {
    if (isUnauth) {
      signIn()
    }
  }, [isUnauth])

  return <div>{session.status === 'authenticated' && children}</div>
}

export default CheckAuth
