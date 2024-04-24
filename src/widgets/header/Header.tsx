import CartModal from '@/features/cart/cartModal'
import Logo from '@/shared/ui/Logo/Logo'
import Auth from '@/widgets/header/ui/Auth'
import { Layout } from '@/widgets/header/ui/layout'
import AppNavigation from '@/widgets/navigation/AppNavigation'

export const Header = ({
  variant,
}: {
  variant?: 'public' | 'private' | 'auth'
}) => (
  <Layout
    logo={<Logo />}
    navigation={<AppNavigation />}
    userInfo={
      <div className={'flex items-center gap-4 cursor-pointer'}>
        <div className='flex items-center gap-1'>
          <CartModal />
        </div>
        {variant === 'auth' ? undefined : <Auth />}
      </div>
    }
  />
)
