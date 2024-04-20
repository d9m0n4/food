'use client'

import CartItem from '@/features/cart/ui/cartItem'
import { ArrowRight } from '@/shared/ui/ArrowRight/arrowRight'
import Button from '@/shared/ui/Button/Button'
import CartIcon from '@/shared/ui/CartIcon/CartIcon'
import { Portal } from '@/shared/ui/Portal/portal'
import { useEffect, useState } from 'react'

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    isOpen
      ? document.body.classList.add('overflow-hidden', 'pr-1.5')
      : document.body.classList.remove('overflow-hidden', 'pr-1.5')
    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <CartIcon />
      </button>
      <Portal>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${!isOpen ? 'invisible' : 'visible'}  fixed bottom-0 right-0 top-0 z-[99]  
          w-full bg-modal backdrop-blur-sm transition duration-300 ease-in-out`}
        >
          <div
            className={`absolute right-0 bottom-0 top-0 w-[420px] bg-white  z-[100] 
            ${isOpen ? 'transform-none' : 'translate-x-full'} transition 
            duration-300 ease-in-out py-8 pl-8 pr-0 flex flex-col`}
          >
            <div className='flex justify-between text-2xl font mb-4 pr-8'>
              <h2 className='font-bold'>Корзина</h2>
              <span className='text-accent font-semibold'>7950 ₽</span>
            </div>
            <div className='flex-col overflow-auto pr-8 mb-8'>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className='flex justify-center mt-auto'>
              <Button classnames='flex items-center gap-2'>
                Далее <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </Portal>
    </>
  )
}

export default CartModal
