'use client'

import CartItem from '@/features/cart/ui/cartItem'
import { $cartIsOpen, closeCart, openCart } from '@/shared/context/modals'
import useOutSideClick from '@/shared/lib/hooks/useOutSideClick'
import { cn } from '@/shared/lib/mergeCn'
import { ArrowRight } from '@/shared/ui/ArrowRight/arrowRight'
import Button from '@/shared/ui/Button/Button'
import CartIcon from '@/shared/ui/CartIcon/CartIcon'
import Modal from '@/shared/ui/Modal/modal'
import { useUnit } from 'effector-react/compat'
import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

const CartModal = () => {
  const cartIsOpen = useUnit($cartIsOpen)
  const cartContainerRef = useRef(null)
  useOutSideClick({
    ref: cartContainerRef,
    callback: () => {
      closeCart()
    },
  })

  return (
    <>
      <Button
        variant={'ghost'}
        classnames={'flex gap-2 items-center'}
        onClick={() => openCart()}
      >
        <CartIcon />
        <span>1205 руб.</span>
      </Button>

      <CSSTransition
        in={cartIsOpen}
        timeout={{ exit: 300, enter: 100 }}
        unmountOnExit
      >
        {(status) => (
          <Modal isOpen={cartIsOpen}>
            <div
              ref={cartContainerRef}
              className={cn(`absolute right-0 bottom-0 top-0 w-[420px] bg-white z-[100] translate-x-full
                    ${status === 'entering' ? 'opacity-80 backdrop-blur-sm translate-x-full' : ''}
                    ${status === 'entered' ? 'opacity-100 translate-x-0' : ''}
                    ${status === 'exiting' ? 'opacity-70 translate-x-full' : ''}
                    transition-all duration-300
                    py-8 pl-8 pr-0 flex flex-col`)}
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
          </Modal>
        )}
      </CSSTransition>
    </>
  )
}

export default CartModal
