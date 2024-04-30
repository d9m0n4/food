'use client'

import { $productModalIsOpen, productModalClose } from '@/shared/context/modals'
import useOutSideClick from '@/shared/lib/hooks/useOutSideClick'
import { cn } from '@/shared/lib/mergeCn'
import Button from '@/shared/ui/Button/Button'
import { Minus } from '@/shared/ui/Minus/minus'
import Modal from '@/shared/ui/Modal/modal'
import { Plus } from '@/shared/ui/Plus/plus'
import { useUnit } from 'effector-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import IMG from '../../../public/h3.jpg'

const price = 299
const ProductModal = () => {
  const [productCount, setProductCount] = useState(1)

  const isProductModalOpen = useUnit($productModalIsOpen)
  const modalRef = useRef(null)

  useOutSideClick({ ref: modalRef, callback: () => productModalClose() })

  return (
    <Transition
      in={isProductModalOpen}
      timeout={{ exit: 200, enter: 100 }}
      unmountOnExit
      onExiting={() => document.body.classList.add('pr-1.5', 'overflow-hidden')}
    >
      {(status) => (
        <Modal isOpen={isProductModalOpen}>
          <div className='flex w-full h-full justify-center items-center'>
            <div
              ref={modalRef}
              className={cn(
                `p-8 rounded-xl w-[600px] bg-white transition-transform duration-300 
                ${status === 'entering' ? 'scale-0' : ''}
                ${status === 'entered' ? 'scale-100' : ''}
                ${status === 'exiting' ? 'scale-0' : ''}
               `
              )}
            >
              <div className='grid grid-cols-7 gap-8'>
                <div className='rounded-xl col-span-3'>
                  <Image src={IMG} alt={'kek'} className='rounded-xl' />
                </div>
                <div className='flex flex-col gap-2 col-span-4 text-sm'>
                  <h2 className='text-xl font-bold'>
                    Ролл Филадельфия премиум
                  </h2>
                  <div className='flex flex-col gap-2 mb-4'>
                    <p>Свежий огурец, сливочный сыр и слабосолёный лосось.</p>
                    <span>8 шт / 270 г</span>
                  </div>
                  <div className='self-end font-medium'>
                    <span>{price * productCount} ₽</span>
                  </div>
                  <div className='flex justify-between mt-2'>
                    <div className='flex items-center gap-2'>
                      <Button
                        disabled={productCount <= 1}
                        variant='outline'
                        onClick={() => setProductCount((prev) => prev - 1)}
                      >
                        <Minus />
                      </Button>
                      <span>{productCount}</span>
                      <Button
                        variant='outline'
                        onClick={() => setProductCount((prev) => prev + 1)}
                      >
                        <Plus />
                      </Button>
                    </div>
                    <Button>В корзину</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Transition>
  )
}

export default ProductModal
