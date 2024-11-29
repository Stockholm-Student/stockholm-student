import { categories } from '@/components/categories.tsx'
import { useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface Filter {
  showTitleBar: boolean
}

const CategoryFilter = ({
  showTitleBar: showTitle = true,
}: Partial<Filter>) => {
  const [filterCategories, setFilterCategories] = useState(
    categories.map((category) => ({
      ...category,
      active: false,
    }))
  )

  const toggleCategory = (id: number) => {
    setFilterCategories(
      filterCategories.map((category) =>
        category.id === id
          ? { ...category, active: !category.active }
          : category
      )
    )
  }

  const resetCategories = () => {
    setFilterCategories(
      filterCategories.map((category) => ({
        ...category,
        active: false,
      }))
    )
  }

  return (
    <div className="">
      {showTitle && (
        <div className="mb-4 flex flex-wrap justify-between">
          <span className="text-2xl">Categories</span>
          <Button
            variant={'link'}
            className="reset-button"
            onClick={resetCategories}
          >
            Reset Categories
          </Button>
        </div>
      )}
      <div className="flex flex-wrap">
        {filterCategories.map((category) => (
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
