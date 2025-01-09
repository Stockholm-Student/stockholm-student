// pages/Events.tsx
import EventDialog from '@/components/add-event-dialog'
import CategoryFilter from '@/components/category-filter'
import DateRangeFilter from '@/components/date-range-filter'
import EventCalendar from '@/components/event-calender'
import { EventCard } from '@/components/event-card'
import EventDetailDialog from '@/components/event-detail-dialog'
import ResponsiveSidebar from '@/components/responsive-sidebar'
import { Button } from '@/components/ui/button'
import { useBreakpoints } from '@/lib/breakpoints'
import { Event } from '@/types/interfaces'
import { addYears } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarIcon, Grid3X3Icon, ListIcon, MapPinIcon } from 'lucide-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

const events: Event[] = [
  {
    title: 'Student Welcome Party',
    start: new Date('2025-09-01T21:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/cld-sample-3.jpg',
    location: 'KTH Campus Main Hall',
    categories: ['party', 'social', 'university', 'art', 'travel'],
    description:
      "Join us for the biggest welcome party of the semester! Meet new friends, enjoy great music, and dance the night away. There will be food and drinks available. Don't miss out on this unforgettable event!",
  },
  {
    title: 'International Food Festival',
    start: new Date('2025-01-07T15:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/samples/man-on-a-street.jpg',
    location: 'Student Union Building',
    categories: ['culture', 'food', 'health'],
    description:
      'Taste dishes from around the world prepared by international students.',
  },
  {
    title: 'Tech Talk: Future of AI',
    start: new Date('2025-03-15T10:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/samples/woman-on-a-football-field.jpg',
    location: 'KTH Innovation Hub',
    categories: ['technology', 'university'],
    description:
      'Join us for an insightful talk on the future of AI and its impact on various industries.',
  },
  {
    title: 'Outdoor Movie Night',
    start: new Date('2025-06-20T20:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/samples/man-portrait.jpg',
    location: 'KTH Campus Lawn',
    categories: ['entertainment', 'social'],
    description:
      'Enjoy a classic movie under the stars with friends. Popcorn and drinks will be provided.',
  },
  {
    title: 'Career Fair 2025',
    start: new Date('2025-04-10T09:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/cld-sample-2.jpg',
    location: 'Student Union Building',
    categories: ['career', 'social'],
    description:
      'Meet potential employers and learn about job opportunities in various fields.',
  },
  {
    title: 'Art Exhibition: Modern Art',
    start: new Date('2025-05-05T17:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/samples/coffee.jpg',
    location: 'KTH Art Gallery',
    categories: ['art', 'culture'],
    description:
      'Explore the latest trends in modern art at our annual art exhibition.',
  },
  // Add more events here
]

type ViewType = 'calendar' | 'grid' | 'map'

const Events = () => {
  const { sm } = useBreakpoints()

  const defaultShownFilters: number = 4

  const [currentView, setCurrentView] = useState<ViewType>('grid') //default view is grid
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false) //default drawer state is open for desktop but needs to be reversed since mobile drawer problems

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]) //array to store selected categories for filtering
  const [selectedDateRange, setSelectedDateRange] = useState<
    //default date range is one year, saves the value of the users selected date range for filtering
    DateRange | undefined
  >({
    from: new Date(),
    to: addYears(new Date(), 1),
  })

  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(
    undefined
  )
  const openDetailDialog = (event: Event) => {
    setSelectedEvent(event)
    setDetailOpen(true)
  }

  const filterEvents = (): Event[] => {
    //returns list of filtered events
    return (
      events //filter events based on selected Date Range
        .filter((a) =>
          selectedDateRange != undefined &&
          selectedDateRange.from != undefined &&
          selectedDateRange.to != undefined
            ? a.start.getTime() >=
                selectedDateRange.from.setHours(0, 0, 0, 0) &&
              a.start.getTime() <= selectedDateRange.to.setHours(23, 59, 59, 0)
            : true
        )
        //sort events based on start time
        .sort((a, b) => a.start.getTime() - b.start.getTime())
        //filter events based on selected categories, Elemtents must contain all selected categories
        .filter(
          (a) =>
            selectedCategories.length === 0 ||
            selectedCategories.every((r) => a.categories.includes(r))
        )
    )
  }

  const resetAllFilters = () => {
    setSelectedCategories([])
    setSelectedDateRange({
      from: new Date(),
      to: addYears(new Date(), 1),
    })
  }

  return (
    <div className="min-h-screen bg-background pt-36">
      <div className="fixed bottom-6 right-6 z-20">
        <EventDialog />
      </div>
      <EventDetailDialog
        open={detailOpen}
        setOpen={setDetailOpen}
        event={selectedEvent}
      />
      <div className="px-4">
        {/* Header Section */}
        <div className="mb-4 flex flex-row items-end justify-between">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="mb-0 font-serif text-5xl font-bold">Events</h1>
            {sm && <p>Discover exciting events happening in Stockholm</p>}
          </motion.div>

          <div className="flex h-fit w-fit justify-around rounded-md border p-2 sm:gap-2 sm:border-none sm:bg-muted">
            {[
              {
                type: 'grid',
                icon: sm ? Grid3X3Icon : ListIcon,
                label: sm ? 'Grid' : 'List',
              },
              { type: 'calendar', icon: CalendarIcon, label: 'Calendar' },
              { type: 'map', icon: MapPinIcon, label: 'Map' },
            ].map((view) => (
              <Button
                variant={currentView === view.type ? 'default' : 'ghost'}
                key={view.type}
                size={sm ? 'lg' : 'sm'}
                onClick={() => setCurrentView(view.type as ViewType)}
                className="w-full sm:w-auto"
              >
                <view.icon />
                {sm && view.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-md sm:bg-muted sm:p-4 md:flex-row md:p-6">
          {/* Filter Sidebar */}
          <ResponsiveSidebar
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            filterEvents={filterEvents}
            resetAllFilters={resetAllFilters}
          >
            {/* Filter Components */}
            <CategoryFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              defaultCategoryLength={defaultShownFilters}
            ></CategoryFilter>
            <DateRangeFilter
              selectedDateRange={selectedDateRange}
              setSelectedDateRange={setSelectedDateRange}
            ></DateRangeFilter>
          </ResponsiveSidebar>
          {/* Events Content */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {currentView === 'grid' && (
                <div
                  className={`grid gap-4 sm:grid-cols-2 ${drawerOpen ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' : 'md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}`}
                >
                  {filterEvents().map((event) => (
                    <EventCard
                      event={event}
                      setDetailOpen={() => openDetailDialog(event)}
                    />
                  ))}
                </div>
              )}

              {currentView === 'calendar' && <EventCalendar />}

              {currentView === 'map' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-[600px] rounded-md bg-card p-8 shadow-lg"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    Interactive Map Coming Soon
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
