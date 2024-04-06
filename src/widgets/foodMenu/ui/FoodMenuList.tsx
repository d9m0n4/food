import { foodMenu } from '@/widgets/foodMenu/model/foodMenu'
import FoodMenuListItem from '@/widgets/foodMenu/ui/FoodMenuListItem'

const FoodMenuList = () => (
  <ul className='flex gap-6'>
    {foodMenu.map(({ name, path }) => (
      <FoodMenuListItem key={path} text={name} path={path} />
    ))}
  </ul>
)

export default FoodMenuList
