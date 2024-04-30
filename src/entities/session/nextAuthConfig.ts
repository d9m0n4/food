import { dbClient } from '@/shared/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions['adapter'],
  pages: {
    signIn: '/auth/sign-in',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
}
