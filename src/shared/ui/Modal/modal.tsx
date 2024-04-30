'use client'

import { Portal } from '@/shared/ui/Portal/portal'
import React, { ReactElement, useEffect } from 'react'

const Modal = ({
  children,
  isOpen,
}: {
  children: ReactElement
  isOpen: boolean
}) => {
  useEffect(() => {
    isOpen
      ? document.body.classList.add('overflow-hidden', 'pr-1.5')
      : document.body.classList.remove('overflow-hidden', 'pr-1.5')
    return () => document.body.classList.remove('overflow-hidden', 'pr-1.5')
  }, [isOpen])
  return (
    <Portal>
      <div className='fixed bottom-0 right-0 top-0 z-[99] w-full bg-modal backdrop-blur-sm transition-colors duration-500'>
        {children}
      </div>
    </Portal>
  )
}

export default Modal
