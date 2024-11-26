// pages/Wiki.tsx
import { motion } from 'framer-motion'
import {
  BookIcon,
  BusFrontIcon,
  HomeIcon,
  ReceiptIcon,
  SearchIcon,
  ShoppingBasketIcon,
  UniversityIcon,
} from 'lucide-react'
import React, { useState } from 'react'

// Catégories des informations
const wikiCategories = [
  {
    title: 'Housing',
    icon: <HomeIcon className="text-2xl" />,
    topics: [
      'Student Housing Options',
      'Finding an Apartment',
      'Housing Contracts',
      'Rental Rules in Sweden',
    ],
  },
  {
    title: 'Student Life',
    icon: <BookIcon className="text-2xl" />,
    topics: [
      'Student Unions',
      'Study Tips',
      'Campus Facilities',
      'Student Rights',
    ],
  },
  {
    title: 'Money & Banking',
    icon: <ReceiptIcon className="text-2xl" />,
    topics: [
      'Swedish Bank Account',
      'Student Discounts',
      'Scholarships',
      'Part-time Jobs',
    ],
  },
  {
    title: 'Food & Shopping',
    icon: <ShoppingBasketIcon className="text-2xl" />,
    topics: [
      'Student Restaurants',
      'Grocery Shopping',
      'Budget Tips',
      'Swedish Food Culture',
    ],
  },
  {
    title: 'Transportation',
    icon: <BusFrontIcon className="text-2xl" />,
    topics: [
      'SL Card',
      'Student Travel Card',
      'Biking in Stockholm',
      'Night Transportation',
    ],
  },
  {
    title: 'Academic Info',
    icon: <UniversityIcon className="text-2xl" />,
    topics: [
      'Course Registration',
      'Exam Rules',
      'Libraries',
      'Academic Calendar',
    ],
  },
]

const Wiki: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A698C5] to-white">
      {/* Hero Section with Search */}
      <div className="pb-20 pt-32 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mx-auto max-w-4xl px-4"
        >
          <h1 className="mb-8 text-4xl font-bold text-white">Student Wiki</h1>
          <div className="relative mx-auto max-w-2xl">
            <input
              type="text"
              placeholder="Search for information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-2 border-white/50 bg-white/90 px-6 py-4 text-lg text-gray-800 shadow-lg outline-none backdrop-blur-sm transition-all focus:border-white focus:shadow-xl"
            />
            <SearchIcon className="absolute right-6 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wikiCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-[#A698C5]/10 p-3 text-[#A698C5]">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.topics.map((topic) => (
                  <li key={topic}>
                    <button
                      onClick={() => {
                        const topicId = topic.toLowerCase().replace(/\s+/g, '-')
                        window.location.hash = topicId
                      }}
                      className="flex w-full items-center gap-2 text-left text-gray-600 transition-colors hover:text-[#A698C5]"
                    >
                      <span className="text-sm">•</span>
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Access Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-[#A698C5]/10 py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Most Searched Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Finding Housing',
              'SL Card',
              'Bank Account',
              'Course Registration',
              'Student Discounts',
            ].map((topic) => (
              <motion.button
                key={topic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-6 py-2 text-gray-700 shadow-md transition-all hover:text-[#A698C5] hover:shadow-lg"
              >
                {topic}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Help Section */}
      <div className="bg-white py-16 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-gray-600">
            Can't find what you're looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto flex items-center gap-2 rounded-full bg-[#A698C5] px-8 py-3 text-white transition-all duration-300 hover:bg-[#8B7BA5]"
          >
            Ask the Community
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Wiki
