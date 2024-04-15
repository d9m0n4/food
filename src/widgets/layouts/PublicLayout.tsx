import Button from '@/shared/ui/Button/Button'
import FoodMenu from '@/widgets/foodMenu/FoodMenu'
import { Header } from '@/widgets/header/Header'
import Image from 'next/image'

import Img from '../../../public/h3.jpg'

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant='public' />
      <main className='flex min-h-screen flex-col items-center container mx-auto my-8'>
        <div className='h-80 w-full relative'>
          <Image
            src={Img}
            alt={'kek'}
            fill
            className='object-cover rounded-2xl'
            priority
            placeholder='blur'
          />
        </div>
        <FoodMenu />
        {children}
        <p>kek</p>
        <Button>Заказать</Button>
      </main>
    </>
  )
}
