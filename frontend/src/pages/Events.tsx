// pages/Events.tsx
import EventCalendar from '@/components/event-calender'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarIcon,
  Clock12Icon,
  ListIcon,
  MapPinIcon,
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

  const categories = [
    'All',
    'Party',
    'Culture',
    'Sports',
    'Academic',
    'Workshop',
  ]

  return (
    <div className="min-h-screen bg-background pt-48">
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
        {/* View Toggle and Search Section */}
        <div className="mb-8 rounded-2xl bg-muted p-6 shadow-lg">
          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-background text-foreground'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Events Content */}
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

                    <p className="mb-4 text-gray-600">{event.description}</p>

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
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                Interactive Map Coming Soon
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Events
