'use client'

import CartItem from '@/features/cart/ui/cartItem'
import CartIcon from '@/shared/ui/CartIcon/CartIcon'
import { Portal } from '@/shared/ui/Portal/portal'
import { useState } from 'react'

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <CartIcon />
      </button>
      <Portal>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${!isOpen ? 'invisible' : 'visible'} fixed bottom-0 right-0 top-0 z-[99] 
          w-full bg-modal backdrop-blur-sm transition duration-300 ease-in-out`}
        >
          <div
            className={`absolute right-0 bottom-0 top-0 w-[420px] bg-white translate-x-full z-[100] 
            ${isOpen && 'transform-none'} transition duration-300 ease-in-out p-8`}
          >
            <div className='flex justify-between text-2xl font mb-4'>
              <h2 className='font-bold'>Корзина</h2>
              <span className='text-accent font-semibold'>7950 ₽</span>
            </div>
            <div className=''>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
        </div>
      </Portal>
    </>
  )
}

export default CartModal
