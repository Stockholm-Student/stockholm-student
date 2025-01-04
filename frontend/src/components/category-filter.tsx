import { categoriesMap } from '@/types/types'
import { useState } from 'react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'

const CategoryFilter = () => {
  const defaultCategoryLength = 4
  const categoriesLength = Object.keys(categoriesMap).length
  const [visible, setVisible] = useState<number>(defaultCategoryLength)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [filterCategories, setFilterCategories] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    if (filterCategories.includes(category)) {
      setFilterCategories([
        ...filterCategories.filter((item) => category !== item),
      ])
    } else {
      setFilterCategories([...filterCategories, category])
    }
  }

  const resetCategories = () => {
    setFilterCategories([])
  }

  const toggleMore = () => {
    return () => {
      setVisible(
        visible === defaultCategoryLength
          ? categoriesLength
          : defaultCategoryLength
      )
      setShowMore(!showMore)
    }
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <span className="text-2xl">Categories</span>
        <Button
          variant={'ghost'}
          className="p-1 underline"
          onClick={resetCategories}
        >
          clear
        </Button>
      </div>
      <div className="flex flex-col">
        {Object.keys(categoriesMap)
          .slice(0, visible)
          .map((category) => {
            return (
              <div
                key={category}
                className="text-md flex w-full place-content-between items-center"
              >
                <span className="flex flex-row items-center gap-1 [&_svg]:size-4">
                  {categoriesMap[category]} {category}
                </span>
                <Checkbox
                  checked={filterCategories.includes(category) ? true : false}
                  onClick={() => toggleCategory(category)}
                />
              </div>
            )
          })}
        <Button
          variant={'link'}
          className="self-start pl-1 pt-0"
          onClick={toggleMore()}
        >
          {showMore ? 'Show less' : `Show ${categoriesLength - visible} more`}
        </Button>
      </div>
    </div>
  )
}

export default CategoryFilter
