import Button from '@/shared/ui/Button/Button'
import Image from 'next/image'
import React from 'react'

const ProductItem = ({
  img,
  description,
  info,
  price,
  title,
}: {
  img: any
  title: string
  info: string
  description: string
  price: number
}) => (
  <div>
    <div className='flex flex-col gap-2 justify-between h-full p-3 cursor-pointer shadow-md rounded-xl hover:shadow-xl transition duration-300'>
      <div className='h-[125px] relative '>
        <Image
          src={img}
          alt={'kek'}
          loading='lazy'
          placeholder='blur'
          fill
          className={'w-full object-cover rounded-xl'}
        />
      </div>
      <div />
      <div className='flex justify-between'>
        <h4 className='font-bold'>{title}</h4>
        <span className='font-medium text-accent'>{info}</span>
      </div>
      <div className='text-sm text-center'>
        <p>{description}</p>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <Button>В корзину</Button>
        <div className='text-2xl font-medium'>
          <span>{price}₽</span>
        </div>
      </div>
    </div>
  </div>
)

export default ProductItem
