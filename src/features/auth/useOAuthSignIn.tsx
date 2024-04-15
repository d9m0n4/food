'use client'

import { useMutation } from '@tanstack/react-query'
import { ClientSafeProvider, signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const useOAuthSignIn = (provider: ClientSafeProvider) => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  const signInMutation = useMutation({
    mutationFn: () =>
      signIn(provider.id, { callbackUrl: callbackUrl ?? undefined }),
  })
  return {
    signIn: signInMutation.mutate,
    isPending: signInMutation.isPending,
  }
}

export default useOAuthSignIn
