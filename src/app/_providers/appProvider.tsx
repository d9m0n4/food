'use client'

import { SessionProvider } from '@/entities/session/sessionProvider'
import { queryClient } from '@/shared/api/query-client'
import { QueryClientProvider } from '@tanstack/react-query'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}
