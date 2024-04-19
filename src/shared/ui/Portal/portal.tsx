'use client'

import { ReactElement } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({
  children,
  container = document.body,
}: {
  children: ReactElement
  container?: Element | DocumentFragment
}) => createPortal(children, container)
