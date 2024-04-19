import { foodMenu } from '@/widgets/foodMenu/model/foodMenu'
import FoodMenuListItem from '@/widgets/foodMenu/ui/FoodMenuListItem'
import { usePathname } from 'next/navigation'

const FoodMenuList = () => {
  const pathname = usePathname()
  return (
    <ul className='flex items-center justify-center gap-6 '>
      {foodMenu.map(({ name, path }) => {
        const isActive = pathname.startsWith(`/${path}`)
        return (
          <FoodMenuListItem
            key={path}
            text={name}
            path={path}
            isActive={isActive}
          />
        )
      })}
    </ul>
  )
}

export default FoodMenuList
