'use client'

import { ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({
  children,
  container,
}: {
  children: ReactElement
  container?: Element | DocumentFragment
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
    ? createPortal(children, container ? container : document.body)
    : null
}
