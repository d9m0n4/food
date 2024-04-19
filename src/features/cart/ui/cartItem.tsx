import Image from 'next/image'
import React from 'react'

import IMG from '../../../../public/h3.jpg'

const CartItem = () => (
  <div className='flex gap-2 border-b border-border py-4'>
    <div className='relative'>
      <Image
        src={IMG}
        alt={''}
        width={100}
        height={55}
        className='rounded-xl h-full'
      />
    </div>
    <div className='font-medium'>
      <p>Сет Майами Мама</p>
      <span className='text-accent'>795 ₽</span>
    </div>
    <div className='flex gap-2 items-center ml-auto'>
      <div>
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.5'
            y='0.5'
            width='27'
            height='27'
            rx='7.5'
            fill='white'
            stroke='#F2F2F2'
          />
          <path
            d='M17.2017 16.3675L15.1981 14.3639L17.2016 12.3604C17.9742 11.5879 16.776 10.3897 16.0034 11.1623L13.9999 13.1658L11.9964 11.1622C11.224 10.3898 10.0259 11.5879 10.7983 12.3603L12.8018 14.3639L10.7983 16.3674C10.0258 17.14 11.2239 18.3381 11.9965 17.5656L14 15.5621L16.0036 17.5656C16.776 18.3381 17.9742 17.14 17.2017 16.3675Z'
            fill='#D9D9D9'
          />
        </svg>
      </div>
      <span>1</span>
      <div>
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.5'
            y='0.5'
            width='27'
            height='27'
            rx='7.5'
            fill='white'
            stroke='#F2F2F2'
          />
          <path
            d='M17.2017 16.3675L15.1981 14.3639L17.2016 12.3604C17.9742 11.5879 16.776 10.3897 16.0034 11.1623L13.9999 13.1658L11.9964 11.1622C11.224 10.3898 10.0259 11.5879 10.7983 12.3603L12.8018 14.3639L10.7983 16.3674C10.0258 17.14 11.2239 18.3381 11.9965 17.5656L14 15.5621L16.0036 17.5656C16.776 18.3381 17.9742 17.14 17.2017 16.3675Z'
            fill='#D9D9D9'
          />
        </svg>
      </div>
    </div>
  </div>
)

export default CartItem
