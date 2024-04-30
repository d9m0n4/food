import { createDomain, createEvent } from 'effector'

const modals = createDomain()

export const openCart = createEvent()
export const closeCart = createEvent()
export const productModalOpen = createEvent()
export const productModalClose = createEvent()

export const $cartIsOpen = modals
  .createStore(false)
  .on(openCart, () => true)
  .on(closeCart, () => false)

export const $productModalIsOpen = modals
  .createStore(false)
  .on(productModalOpen, () => true)
  .on(productModalClose, () => false)
