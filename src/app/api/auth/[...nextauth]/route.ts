import { nextAuthConfig } from '@/entities/session/nextAuthConfig'
import NextAuth from 'next-auth'

const authHandler = NextAuth(nextAuthConfig)

export { authHandler as GET, authHandler as POST }
