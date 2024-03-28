'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavList = () => {
  const navLinks = [
    { href: '/delivery', name: 'Доставка' },
    { href: '/reviews', name: 'Отзывы' },
    { href: '/about', name: 'О Нас' },
  ]

  const pathname = usePathname()
  return (
    <ul className='flex gap-8'>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <li key={link.href}>
            <Link
              className={`hover:text-accent transition-colors duration-300 ease-in-out 
              ${isActive ? 'text-accent' : 'text-text'}`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavList
