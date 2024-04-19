'use client'

import { useAppSession } from '@/entities/session/use-app-session'
import { SignIn } from '@/features/auth/sign-in'
import { useSignOut } from '@/features/auth/useSignOut'
import Button from '@/shared/ui/Button/Button'
import ProfileIcon from '@/shared/ui/ProfileIcon/ProfileIcon'
import Link from 'next/link'
import React from 'react'

const Auth = () => {
  const session = useAppSession()
  const signOut = useSignOut()

  if (session.status === 'loading') {
    return <div>loading</div>
  }

  if (session.status === 'unauthenticated') {
    return <SignIn />
  }
  return (
    <>
      <div className={'flex items-center gap-2'}>
        <Link href={'profile'}>
          <ProfileIcon />
        </Link>
        <button onClick={() => signOut.signOut()}>Выйти</button>
      </div>
    </>
  )
}

export default Auth
