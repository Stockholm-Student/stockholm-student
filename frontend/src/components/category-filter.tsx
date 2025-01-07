import { categoriesMap } from '@/types/types'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'

interface CategoryFilterProps {
  selectedCategories: string[]
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
  defaultCategoryLength: number
}

/**
 * CategoryFilter component allows users to filter items by categories.
 * It displays a list of categories with checkboxes to select or deselect them.
 * Users can also clear all selected categories or toggle the visibility of additional categories.
 *
 * @param {Array<string>} selectedCategories - Array of selected categories by the user.
 * @param {Function} setSelectedCategories - Function to set selected categories.
 * @param {number} defaultCategoryLength - Number of categories to show by default.
 *
 * @returns {JSX.Element} The rendered CategoryFilter component.
 */
const CategoryFilter = ({
  selectedCategories,
  setSelectedCategories,
  defaultCategoryLength,
}: CategoryFilterProps) => {
  const categoriesLength = Object.keys(categoriesMap).length //total number of categories (used to display how many categories are hidden from user)
  const [visible, setVisible] = useState<number>(defaultCategoryLength) // number of categories visible to the user
  const [showMore, setShowMore] = useState<boolean>(false) //bool to track show more button state

  const toggleCategory = (category: string) => {
    //add or remove category from selectedCategories
    if (selectedCategories.includes(category)) {
      setSelectedCategories([
        ...selectedCategories.filter((item) => category !== item),
      ])
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const resetCategories = () => {
    //clear all selected categories
    setSelectedCategories([])
  }

  const toggleMore = () => {
    //show all categories or back to the default number
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
          .slice(0, visible === 0 ? categoriesLength : visible)
          .map((category) => {
            return (
              <div
                key={category}
                className="text-md flex w-full cursor-pointer place-content-between items-center"
                onClick={() => toggleCategory(category)}
              >
                <span className="flex flex-row items-center gap-1 [&_svg]:size-4">
                  {categoriesMap[category]} {category}
                </span>
                <Checkbox
                  checked={selectedCategories.includes(category) ? true : false}
                />
              </div>
            )
          })}
        {defaultCategoryLength != 0 && (
          <Button
            variant={'link'}
            className="self-start pl-1 pt-0"
            onClick={toggleMore()}
          >
            {showMore
              ? 'Show less'
              : `Show ${visible > 0 ? categoriesLength - visible : Math.abs(visible)} more`}
          </Button>
        )}
      </div>
    </div>
  )
}

export default CategoryFilter
