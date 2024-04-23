'use client'

import CartItem from '@/features/cart/ui/cartItem'
import useOutSideClick from '@/shared/lib/hooks/useOutSideClick'
import { ArrowRight } from '@/shared/ui/ArrowRight/arrowRight'
import Button from '@/shared/ui/Button/Button'
import CartIcon from '@/shared/ui/CartIcon/CartIcon'
import { Portal } from '@/shared/ui/Portal/portal'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const cartContainerRef = useRef(null)
  useOutSideClick({
    ref: cartContainerRef,
    callback: () => {
      setIsOpen(false)
    },
  })

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

      <CSSTransition in={isOpen} timeout={500} unmountOnExit>
        {(status) => (
          <Portal>
            <div
              className={`fixed bottom-0 right-0 top-0 z-[99] 
                  w-full bg-modal backdrop-blur-sm transition-colors duration-500
                  ${status === 'entering' && 'opacity-100'}
                    ${status === 'entered' && 'opacity-100'}
                    ${status === 'exiting' && 'opacity-100'}
                    ${status === 'exited' && 'opacity-0'}`}
            >
              <div
                ref={cartContainerRef}
                className={`absolute right-0 bottom-0 top-0 w-[420px] bg-white z-[100] translate-x-full
                    ${status === 'entering' && 'opacity-70 translate-x-0'}
                    ${status === 'entered' && 'opacity-100 translate-x-0'}
                    ${status === 'exiting' && 'opacity-70 translate-x-full'}
                    ${status === 'exited' && 'opacity-0 translate-x-full'}
                    transition-all duration-500
                    py-8 pl-8 pr-0 flex flex-col`}
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
        )}
      </CSSTransition>
    </>
  )
}

export default CartModal
