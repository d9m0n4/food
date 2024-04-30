'use client'

import FoodMenuList from '@/widgets/foodMenu/ui/FoodMenuList'
import React, { useRef } from 'react'

const FoodMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (!menuRef) return
  //   window.addEventListener('scroll', () => {
  //     console.log(menuRef.current?.getBoundingClientRect().top)
  //   })
  //   return () => {
  //     window.removeEventListener('scroll', () => {})
  //   }
  // }, [])

  return (
    <div
      ref={menuRef}
      className={`my-12 w-full sticky top-[64px] z-10 bg-white`}
    >
      <FoodMenuList />
    </div>
  )
}

export default FoodMenu
