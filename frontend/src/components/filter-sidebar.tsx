import { Event } from '@/types/interfaces'
import { Dispatch, SetStateAction } from 'react'
import { DateRange } from 'react-day-picker'
import CategoryFilter from './category-filter'
import DateRangeFilter from './date-range-filter'
import ResponsiveSidebar from './responsive-sidebar'
import { Button } from './ui/button'

interface FilterSidebarProps {
  resetAllFilters: () => void
  filterEvents: () => Event[]
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  selectedCategories: string[]
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
  defaultShownFilters: number
  selectedDateRange: DateRange | undefined
  setSelectedDateRange: (dateRange: DateRange | undefined) => void
}

export function FilterSidebar({
  drawerOpen,
  setDrawerOpen,
  filterEvents,
  selectedCategories,
  setSelectedCategories,
  defaultShownFilters,
  selectedDateRange,
  setSelectedDateRange,
  resetAllFilters,
}: FilterSidebarProps) {
  return (
    <ResponsiveSidebar
      drawerOpen={drawerOpen}
      setDrawerOpen={setDrawerOpen}
      title="Filter"
      titleBarButton={true}
      buttonText="Reset All"
      buttonFunction={resetAllFilters}
      drawerContent={
        <>
          <hr className="-mx-4 w-[100vw]" />
          <Button className="mt-4 w-full" onClick={() => setDrawerOpen(false)}>
            Show {filterEvents().length} Results
          </Button>
        </>
      }
    >
      {/* Filter Components */}
      <CategoryFilter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        defaultCategoryLength={defaultShownFilters}
      ></CategoryFilter>
      <hr className="my-3 border-t border-border" />
      <DateRangeFilter
        selectedDateRange={selectedDateRange}
        setSelectedDateRange={setSelectedDateRange}
      ></DateRangeFilter>
    </ResponsiveSidebar>
  )
}
