import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const FoodMenuListItem = ({
  text,
  path,
  isActive,
}: {
  text: string
  path: string
  isActive: boolean
}) => (
  <li className='text-lg'>
    <Link className={`${isActive && 'text-accent'}`} href={`${path}`}>
      {text}
    </Link>
  </li>
)

export default FoodMenuListItem
