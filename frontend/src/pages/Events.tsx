// pages/Events.tsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaCalendar,
  FaList,
  FaMapMarked,
  FaFilter,
  FaSearch,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
} from 'react-icons/fa'

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
  const [currentView, setCurrentView] = useState<ViewType>('list')
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
    <div className="min-h-screen bg-gradient-to-b from-[#A698C5]/10 to-white pt-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Upcoming Events
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover exciting events happening in the Stockholm student
            community
          </p>
        </motion.div>

        {/* View Toggle and Search Section */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* View Toggle Buttons */}
            <div className="flex rounded-xl bg-gray-100 p-1">
              {[
                { type: 'calendar', icon: FaCalendar, label: 'Calendar' },
                { type: 'list', icon: FaList, label: 'List' },
                { type: 'map', icon: FaMapMarked, label: 'Map' },
              ].map((view) => (
                <motion.button
                  key={view.type}
                  onClick={() => setCurrentView(view.type as ViewType)}
                  className={`flex items-center gap-2 rounded-lg px-6 py-3 transition-all ${
                    currentView === view.type
                      ? 'bg-[#A698C5] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <view.icon />
                  {view.label}
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full rounded-xl bg-gray-100 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#A698C5]/50"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-[#A698C5] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
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
                  <div className="relative h-48 bg-gradient-to-r from-[#A698C5] to-[#8B7BA5]">
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
                      <span className="rounded-full bg-[#A698C5]/10 px-3 py-1 text-sm text-[#A698C5]">
                        {event.category}
                      </span>
                    </div>

                    <p className="mb-4 text-gray-600">{event.description}</p>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-[#A698C5]" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#A698C5]" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-[#A698C5]" />
                        {event.attendees} attendees
                      </div>
                    </div>

                    <motion.button
                      className="mt-6 w-full rounded-xl bg-[#A698C5] py-3 font-medium text-white transition-colors hover:bg-[#8B7BA5]"
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

          {currentView === 'calendar' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="grid grid-cols-7 gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                  (day) => (
                    <div
                      key={day}
                      className="py-2 text-center font-medium text-gray-600"
                    >
                      {day}
                    </div>
                  )
                )}
                {Array(35)
                  .fill(null)
                  .map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border p-2 hover:bg-[#A698C5]/5"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-gray-700">{i + 1}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

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
