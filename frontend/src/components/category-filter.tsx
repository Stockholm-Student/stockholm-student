import {
  BikeIcon,
  CpuIcon,
  FlaskConicalIcon,
  MusicIcon,
  VenetianMaskIcon,
} from 'lucide-react'
import { useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const CategoryFilter = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Technology', icon: <CpuIcon className='mr-2 w-6'/>, active: false },
    { id: 2, name: 'Science', icon: <FlaskConicalIcon className='mr-2 w-6'/>, active: false },
    { id: 3, name: 'Art', icon: <VenetianMaskIcon className='mr-2 w-6'/>, active: false },
    { id: 4, name: 'Sports', icon: <BikeIcon className='mr-2 w-6'/>, active: false },
    { id: 5, name: 'Music', icon: <MusicIcon className='mr-2 w-6'/>, active: false },
  ])

  const toggleCategory = (id: number) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, active: !category.active }
          : category
      )
    )
  }

  const resetCategories = () => {
    setCategories(
      categories.map((category) => ({
        ...category,
        active: false,
      }))
    )
  }

  return (
    <div className="">
      <div className="mb-4 flex justify-between">
        <span className="text-2xl">Categories</span>
        <Button
          variant={'link'}
          className="reset-button"
          onClick={resetCategories}
        >
          Reset Categories
        </Button>
      </div>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={category.active ? 'default' : 'outline'}
            className={`badge mb-2 mr-2 cursor-pointer ${category.active ? 'active' : ''}`}
            onClick={() => toggleCategory(category.id)}
          >
            {category.icon} {category.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
