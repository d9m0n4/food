import Link from 'next/link'
import React from 'react'

const FoodMenuListItem = ({ text, path }: { text: string; path: string }) => (
  <li className='text-lg'>
    <Link href={`/${path}`}>{text}</Link>
  </li>
)

export default FoodMenuListItem
