import Link from 'next/link'

const NavList = () => (
  <ul className='flex gap-8'>
    <li>
      <Link
        className='hover:text-accent transition-colors duration-300 ease-in-out '
        href={'delivery'}
      >
        Доставка
      </Link>
    </li>
    <li>
      <Link href={'reviews'}>Отзывы</Link>
    </li>
    <li>
      <Link href={'about'}>О Нас</Link>
    </li>
  </ul>
)

export default NavList
