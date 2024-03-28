import Link from 'next/link'
import React from 'react'

export const Header = ({
  logo,
  navigation,
  userInfo,
}: {
  logo: React.ReactNode
  navigation: React.ReactNode
  userInfo: React.ReactNode
}) => (
  <header className='my-4 sticky top-0 '>
    <div className='container'>
      <div className='flex gap-14 items-center justify-between'>
        <div className='flex'>
          <Link href={'/'}>{logo}</Link>
        </div>
        <div className='flex mr-auto'>{navigation}</div>
        <div className='flex'>{userInfo}</div>
      </div>
    </div>
  </header>
)
