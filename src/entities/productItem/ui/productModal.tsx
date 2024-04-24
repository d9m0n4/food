import Button from '@/shared/ui/Button/Button'
import { Minus } from '@/shared/ui/Minus/minus'
import { Plus } from '@/shared/ui/Plus/plus'
import Image from 'next/image'
import React, { forwardRef } from 'react'

import IMG from '../../../../public/h3.jpg'

// eslint-disable-next-line react/display-name
const ProductModal = forwardRef(
  ({}, ref: React.ForwardedRef<HTMLDivElement>) => (
    <div className='flex w-full h-full justify-center items-center'>
      <div ref={ref} className='p-8 rounded-xl w-[600px] bg-white'>
        <div className='grid grid-cols-7 gap-8'>
          <div className='rounded-xl col-span-3'>
            <Image src={IMG} alt={'kek'} className='rounded-xl' />
          </div>
          <div className='flex flex-col gap-2 col-span-4 text-sm'>
            <h2 className='text-xl font-bold'>Ролл Филадельфия премиум</h2>
            <div className='flex flex-col gap-2 mb-4'>
              <p>Свежий огурец, сливочный сыр и слабосолёный лосось.</p>
              <span>8 шт / 270 г</span>
            </div>
            <div className='self-end font-medium'>
              <span>299 ₽</span>
            </div>
            <div className='flex justify-between mt-2'>
              <div className='flex items-center gap-2'>
                <Button variant='outline'>
                  <Minus />
                </Button>
                <span>5</span>
                <Button variant='outline'>
                  <Plus />
                </Button>
              </div>
              <Button>Заказать</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
)

export default ProductModal
