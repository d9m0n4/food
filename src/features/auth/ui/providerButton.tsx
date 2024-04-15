'use client'

import useOAuthSignIn from '@/features/auth/useOAuthSignIn'
import Button from '@/shared/ui/Button/Button'
import { ClientSafeProvider } from 'next-auth/react'
import React from 'react'

const ProviderButton = ({ provider }: { provider: ClientSafeProvider }) => {
  const { signIn, isPending } = useOAuthSignIn(provider)

  return (
    <Button onClick={() => signIn()} disabled={isPending}>
      {isPending ? 'loading' : 'войти через GitHub'}
    </Button>
  )
}

export default ProviderButton
