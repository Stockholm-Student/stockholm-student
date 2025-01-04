// pages/Events.tsx
import CategoryFilter from '@/components/category-filter'
import EventCalendar from '@/components/event-calender'
import { EventCard } from '@/components/event-card'
import EventDialog from '@/components/event-dialog'
import { Button } from '@/components/ui/button'
import { Event } from '@/types/interfaces'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarIcon,
  Grid3X3Icon,
  MapPinIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
} from 'lucide-react'
import { useState } from 'react'

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
  const [currentView, setCurrentView] = useState<ViewType>('grid')
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true)

  return (
    <div className="min-h-screen bg-background pt-36">
      <div className="fixed bottom-6 right-6 z-20">
        <EventDialog />
      </div>
      <div className="px-4">
        {/* Header Section */}
        <div className="flex justify-between text-foreground">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-6"
          >
            <h1 className="mb-0 font-serif text-5xl font-bold">Events</h1>
            <p>
              Discover exciting events happening in the Stockholm student
              community
            </p>
          </motion.div>

          <div className="flex h-fit gap-2 rounded-xl bg-muted p-2">
            {[
              { type: 'grid', icon: Grid3X3Icon, label: 'Grid' },
              { type: 'calendar', icon: CalendarIcon, label: 'Calendar' },
              { type: 'map', icon: MapPinIcon, label: 'Map' },
            ].map((view) => (
              <Button
                variant={currentView === view.type ? 'default' : 'ghost'}
                key={view.type}
                size={'lg'}
                onClick={() => setCurrentView(view.type as ViewType)}
              >
                <view.icon />
                {view.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex rounded-md bg-muted p-6">
          <div className={`mr-3 border-r-2 ${drawerOpen && 'hidden'}`}>
            <Button
              variant={'ghost'}
              size={'icon'}
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="sticky top-20"
            >
              <PanelLeftOpenIcon className="!h-6 !w-6" />
            </Button>
          </div>
          <div
            className={`mr-4 w-1/5 border-r-2 ${!drawerOpen && 'hidden'} pr-4`}
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
                <Button variant={'outline'} className="ml-auto">
                  Reset all
                </Button>
              </div>
              <CategoryFilter></CategoryFilter>
            </div>
          </div>

          {/* Events Content */}
          <div className={`${drawerOpen ? 'w-4/5' : 'w-full'}`}>
            <AnimatePresence mode="wait">
              {currentView === 'grid' && (
                <div className="grid gap-4 sm:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {events
                    .filter((a) => a.start.getTime() >= new Date().getTime())
                    .sort((a, b) => a.start.getTime() - b.start.getTime())
                    .map((event) => (
                      <EventCard
                        key={event.title}
                        title={event.title}
                        imageUrl={event.imageUrl}
                        categories={event.categories}
                        start={event.start}
                        location={event.location}
                        description={event.description}
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
                  className="h-[600px] rounded-2xl bg-white p-8 shadow-lg"
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
