import Button from '@/shared/ui/Button/Button'
import Image from 'next/image'

import image from '../../../public/hero.jpg'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <div className='max-h-[300px] h-full' />
      <p>kek</p>
      <Button>Заказать</Button>
    </main>
  )
}
