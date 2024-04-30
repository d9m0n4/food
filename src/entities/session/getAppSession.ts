import { getServerSession } from 'next-auth'

import { nextAuthConfig } from './nextAuthConfig'

export const getAppSession = () => getServerSession(nextAuthConfig)
