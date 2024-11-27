// pages/Events.tsx
import CategoryFilter from '@/components/category-filter'
import EventCalendar from '@/components/event-calender'
import EventDialog from '@/components/event-dialog'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarIcon,
  Clock12Icon,
  ListIcon,
  MapPinIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  UsersIcon,
} from 'lucide-react'
import { useState } from 'react'

interface Event {
  id: number
  title: string
  date: string
  time: string
  image: string
  location: string
  category: string
  attendees: number
  description: string
}

const sampleEvents: Event[] = [
  {
    id: 1,
    title: 'Student Welcome Party',
    date: '2024-02-10',
    time: '19:00',
    image: '/event-images/party.jpg',
    location: 'KTH Campus Main Hall',
    category: 'Party',
    attendees: 120,
    description: 'Join us for the biggest welcome party of the semester!',
  },
  {
    id: 2,
    title: 'International Food Festival',
    date: '2024-02-15',
    time: '12:00',
    image: '/event-images/food.jpg',
    location: 'Student Union Building',
    category: 'Culture',
    attendees: 200,
    description:
      'Taste dishes from around the world prepared by international students.',
  },
  // Ajoutez plus d'événements ici
]

type ViewType = 'calendar' | 'list' | 'map'

const Events = () => {
  const [currentView, setCurrentView] = useState<ViewType>('calendar')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true)

  const categories = [
    'All',
    'Party',
    'Culture',
    'Sports',
    'Academic',
    'Workshop',
  ]

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
              { type: 'calendar', icon: CalendarIcon, label: 'Calendar' },
              { type: 'list', icon: ListIcon, label: 'List' },
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

        <div className="relative flex rounded-lg bg-muted p-6">
          <div
            className={`mr-4 w-1/5 border-r-2 ${!drawerOpen && 'hidden'} pr-4`}
          >
            <CategoryFilter></CategoryFilter>
          </div>
          <div className="z-10">
            <Button
              variant={'icon'}
              size={'icon'}
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="-mr-12"
            >
              <PanelLeftCloseIcon
                className={`${drawerOpen ? 'block' : 'hidden'}`}
              />
              <PanelLeftOpenIcon
                className={`${drawerOpen ? 'hidden' : 'block'}`}
              />
            </Button>
          </div>
          {/* Events Content */}
          <div className={`${drawerOpen ? 'w-4/5' : 'w-full'}`}>
            <AnimatePresence mode="wait">
              {currentView === 'list' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                  {sampleEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
                      whileHover={{ y: -5 }}
                    >
                      {/* Event Image */}
                      <div className="relative h-48 bg-gradient-to-r from-black to-[#8B7BA5]">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white text-opacity-30">
                          STST
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="p-6">
                        <div className="mb-4 flex items-start justify-between">
                          <h3 className="text-xl font-bold text-gray-800">
                            {event.title}
                          </h3>
                          <span className="rounded-full bg-black/10 px-3 py-1 text-sm text-black">
                            {event.category}
                          </span>
                        </div>

                        <p className="mb-4 text-gray-600">
                          {event.description}
                        </p>

                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Clock12Icon className="text-black" />
                            {event.date} at {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="text-black" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="text-black" />
                            {event.attendees} attendees
                          </div>
                        </div>

                        <motion.button
                          className="mt-6 w-full rounded-xl bg-black py-3 font-medium text-white transition-colors hover:bg-[#8B7BA5]"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Join Event
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
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
