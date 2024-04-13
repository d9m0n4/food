'use client'

import { signIn } from 'next-auth/react'

export function SignIn() {
  const handleSignIn = () => signIn()
  return (
    <button type='submit' onClick={handleSignIn}>
      Войти
    </button>
  )
}
