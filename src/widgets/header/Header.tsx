'use client'

import { useAppSession } from '@/entities/session/use-app-session'
import { SignIn } from '@/features/auth/sign-in'
import { useSignOut } from '@/features/auth/useSignOut'
import Button from '@/shared/ui/Button/Button'
import CartIcon from '@/shared/ui/CartIcon/CartIcon'
import Logo from '@/shared/ui/Logo/Logo'
import ProfileIcon from '@/shared/ui/ProfileIcon/ProfileIcon'
import { Layout } from '@/widgets/header/ui/layout'
import AppNavigation from '@/widgets/navigation/AppNavigation'
import Link from 'next/link'

export const Header = ({ variant }: { variant: 'public' | 'private' }) => {
  const session = useAppSession()
  const signOut = useSignOut()
  return (
    <Layout
      logo={<Logo />}
      navigation={<AppNavigation />}
      userInfo={
        <div className={'flex items-center gap-4 cursor-pointer'}>
          <div className='flex items-center gap-1'>
            <CartIcon />
            <span>1205 руб.</span>
          </div>
          {variant === 'private' ? (
            <div className='flex items-center gap-1 cursor-pointer'>
              <ProfileIcon />
              <span>Профиль</span>
            </div>
          ) : (
            <div className={'flex items-center gap-2'}>
              {session && session.status === 'unauthenticated' ? (
                <SignIn />
              ) : (
                <>
                  <Link href={'/profile'}>
                    <ProfileIcon />
                  </Link>
                  <Button onClick={() => signOut.signOut()}>Выйти</Button>
                </>
              )}
            </div>
          )}
        </div>
      }
    />
  )
}
