// pages/Events.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaList, FaMapMarked, FaFilter, FaSearch, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  location: string;
  category: string;
  attendees: number;
  description: string;
}

const sampleEvents: Event[] = [
  {
    id: 1,
    title: "Student Welcome Party",
    date: "2024-02-10",
    time: "19:00",
    image: "/event-images/party.jpg",
    location: "KTH Campus Main Hall",
    category: "Party",
    attendees: 120,
    description: "Join us for the biggest welcome party of the semester!"
  },
  {
    id: 2,
    title: "International Food Festival",
    date: "2024-02-15",
    time: "12:00",
    image: "/event-images/food.jpg",
    location: "Student Union Building",
    category: "Culture",
    attendees: 200,
    description: "Taste dishes from around the world prepared by international students."
  },
  // Ajoutez plus d'événements ici
];

type ViewType = 'calendar' | 'list' | 'map';

const Events = () => {
  const [currentView, setCurrentView] = useState<ViewType>('list');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['All', 'Party', 'Culture', 'Sports', 'Academic', 'Workshop'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A698C5]/10 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover exciting events happening in the Stockholm student community
          </p>
        </motion.div>

        {/* View Toggle and Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* View Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              {[
                { type: 'calendar', icon: FaCalendar, label: 'Calendar' },
                { type: 'list', icon: FaList, label: 'List' },
                { type: 'map', icon: FaMapMarked, label: 'Map' }
              ].map(view => (
                <motion.button
                  key={view.type}
                  onClick={() => setCurrentView(view.type as ViewType)}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
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
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#A698C5]/50"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {sampleEvents.map(event => (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  {/* Event Image */}
                  <div className="h-48 bg-gradient-to-r from-[#A698C5] to-[#8B7BA5] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-30 text-6xl font-bold">
                      STST
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                      <span className="px-3 py-1 bg-[#A698C5]/10 text-[#A698C5] rounded-full text-sm">
                        {event.category}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{event.description}</p>

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
                      className="mt-6 w-full py-3 bg-[#A698C5] text-white rounded-xl font-medium
                               hover:bg-[#8B7BA5] transition-colors"
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
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="grid grid-cols-7 gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="text-center font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
                {Array(35).fill(null).map((_, i) => (
                  <motion.div
                    key={i}
                    className="aspect-square border rounded-xl p-2 hover:bg-[#A698C5]/5 cursor-pointer
                             flex flex-col items-center justify-center"
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
              className="bg-white rounded-2xl shadow-lg p-8 h-[600px]"
            >
              <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                Interactive Map Coming Soon
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;