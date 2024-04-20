import Button from '@/shared/ui/Button/Button'
import { Minus } from '@/shared/ui/Minus/minus'
import { Plus } from '@/shared/ui/Plus/plus'
import Image from 'next/image'
import React from 'react'

import IMG from '../../../../public/h3.jpg'

const CartItem = () => (
  <div className='flex gap-2 border-b border-border py-4'>
    <div className='relative w-[100px] h-[55px] flex-auto flex-grow flex-shrink-0'>
      <Image
        src={IMG}
        alt={''}
        width={100}
        height={55}
        className='rounded-xl h-full'
      />
    </div>
    <div className='font-medium flex-auto flex-grow flex-shrink-0'>
      <p>Сет Майами Мама</p>
      <span className='text-accent'>795 ₽</span>
    </div>
    <div className='flex gap-2 items-center ml-auto'>
      <Button variant='outline'>
        <Minus />
      </Button>
      <span>1</span>
      <div>
        <Button variant='outline'>
          <Plus />
        </Button>
      </div>
    </div>
  </div>
)

export default CartItem
