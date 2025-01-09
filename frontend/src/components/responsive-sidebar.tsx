import { useBreakpoints } from '@/lib/breakpoints'
import { Event } from '@/types/interfaces'
import { PanelLeftCloseIcon, PanelLeftOpenIcon, XIcon } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer'

interface ResponsiveSidebarProps {
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  filterEvents: () => Event[]
  resetAllFilters: () => void
  children: React.ReactNode
}

const ResponsiveSidebar = ({
  drawerOpen,
  setDrawerOpen,
  selectedCategories,
  setSelectedCategories,
  filterEvents,
  resetAllFilters,
  children,
}: ResponsiveSidebarProps) => {
  const { md } = useBreakpoints()
  if (md) {
    return (
      <>
        {/* Sidebar closed state */}
        {/* invert drawerOpen here since the filters should be open by default but otherwise problems with the mobile drawer emerge*/}
        <div className={`mr-3 border-r-2 ${!drawerOpen && 'hidden'}`}>
          <Button
            variant={'ghost'}
            size={'icon'}
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="sticky top-20"
          >
            <PanelLeftOpenIcon className="!h-6 !w-6" />
          </Button>
        </div>
        {/* Sidebar open state */}
        <div
          className={`mr-4 w-[250px] border-r-2 ${drawerOpen && 'hidden'} pr-4`}
        >
          <div className="sticky top-20">
            <div className="flex flex-row items-center gap-2 pb-4">
              <Button
                variant={'ghost'}
                size={'icon'}
                onClick={() => setDrawerOpen(!drawerOpen)}
              >
                <PanelLeftCloseIcon className="!h-6 !w-6" />
              </Button>
              <span className="text-2xl font-medium">Filters</span>
              <Button
                variant={'outline'}
                className="ml-auto"
                onClick={resetAllFilters}
              >
                Reset all
              </Button>
            </div>
            {/* Filter Components */}
            {children}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div>
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              className="mb-2 mr-2 inline-block rounded-full bg-primary px-2 py-1 text-sm font-medium text-white"
            >
              {category}{' '}
              <XIcon
                className="inline-block h-4 w-4 cursor-pointer"
                onClick={() =>
                  setSelectedCategories(
                    selectedCategories.filter(
                      (categoryName) => categoryName !== category
                    )
                  )
                }
              />
            </Badge>
          ))}
        </div>
        <Button
          variant={'outline'}
          className="mb-4 w-fit"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          Filter
        </Button>
      </div>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="px-4 pb-4">
          <DrawerHeader className="px-0 text-left">
            <div className="space-between flex">
              <DrawerTitle className="font-serif text-3xl font-semibold">
                Filters
              </DrawerTitle>
              <Button
                variant={'outline'}
                className="ml-auto"
                onClick={resetAllFilters}
              >
                Reset all
              </Button>
            </div>
          </DrawerHeader>
          <div className="mb-2 max-h-[50vh] overflow-y-auto">{children}</div>
          <hr className="-mx-4 w-[100vw]" />
          <Button className="mt-4 w-full" onClick={() => setDrawerOpen(false)}>
            Show {filterEvents().length} Results
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ResponsiveSidebar
