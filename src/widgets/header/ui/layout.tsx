'use client'

import Link from 'next/link'
import React from 'react'

export const Layout = ({
  logo,
  navigation,
  userInfo,
}: {
  logo: React.ReactNode
  navigation: React.ReactNode
  userInfo: React.ReactNode
}) => (
  // const headerRef = useRef<HTMLDivElement>(null)
  //
  // useEffect(() => {
  //   if (!headerRef.current) return
  //   const height = headerRef?.current.clientHeight
  //   setHeaderHeight(height)
  // }, [])

  <header className={`py-4 z-10 bg-white sticky top-0 transition-shadow`}>
    <div className='container'>
      <div className='flex gap-14 items-center justify-between'>
        <div className='flex'>
          <Link href='/'>{logo}</Link>
        </div>
        <div className='flex mr-auto'>{navigation}</div>
        <div className='flex'>{userInfo}</div>
      </div>
    </div>
  </header>
)
