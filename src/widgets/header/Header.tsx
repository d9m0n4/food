import CartIcon from '@/shared/ui/CartIcon/CartIcon'
import Logo from '@/shared/ui/Logo/Logo'
import ProfileIcon from '@/shared/ui/ProfileIcon/ProfileIcon'
import { Layout } from '@/widgets/header/ui/layout'
import AppNavigation from '@/widgets/navigation/AppNavigation'

export const Header = ({ variant }: { variant: 'public' | 'private' }) => (
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
          <div>Войти</div>
        )}
      </div>
    }
  />
)
