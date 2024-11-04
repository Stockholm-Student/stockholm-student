// pages/Wiki.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBook,
  FaHome,
  FaMoneyBill,
  FaUtensils,
  FaSubway,
  FaUniversity,
} from "react-icons/fa";

// Catégories des informations
const wikiCategories = [
  {
    title: "Housing",
    icon: <FaHome className="text-2xl" />,
    topics: [
      "Student Housing Options",
      "Finding an Apartment",
      "Housing Contracts",
      "Rental Rules in Sweden",
    ],
  },
  {
    title: "Student Life",
    icon: <FaBook className="text-2xl" />,
    topics: [
      "Student Unions",
      "Study Tips",
      "Campus Facilities",
      "Student Rights",
    ],
  },
  {
    title: "Money & Banking",
    icon: <FaMoneyBill className="text-2xl" />,
    topics: [
      "Swedish Bank Account",
      "Student Discounts",
      "Scholarships",
      "Part-time Jobs",
    ],
  },
  {
    title: "Food & Shopping",
    icon: <FaUtensils className="text-2xl" />,
    topics: [
      "Student Restaurants",
      "Grocery Shopping",
      "Budget Tips",
      "Swedish Food Culture",
    ],
  },
  {
    title: "Transportation",
    icon: <FaSubway className="text-2xl" />,
    topics: [
      "SL Card",
      "Student Travel Card",
      "Biking in Stockholm",
      "Night Transportation",
    ],
  },
  {
    title: "Academic Info",
    icon: <FaUniversity className="text-2xl" />,
    topics: [
      "Course Registration",
      "Exam Rules",
      "Libraries",
      "Academic Calendar",
    ],
  },
];

const Wiki: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A698C5] to-white">
      {/* Hero Section with Search */}
      <div className="pt-32 pb-20 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Student Wiki</h1>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm
                       border-2 border-white/50 focus:border-white
                       text-gray-800 text-lg outline-none
                       shadow-lg focus:shadow-xl transition-all"
            />
            <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wikiCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl
                       transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#A698C5]/10 text-[#A698C5]">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.topics.map((topic) => (
                  <li key={topic}>
                    <button
                      onClick={() => {
                        const topicId = topic
                          .toLowerCase()
                          .replace(/\s+/g, "-");
                        window.location.hash = topicId;
                      }}
                      className="text-gray-600 hover:text-[#A698C5] transition-colors
                               flex items-center gap-2 w-full text-left"
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
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Most Searched Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Finding Housing",
              "SL Card",
              "Bank Account",
              "Course Registration",
              "Student Discounts",
            ].map((topic) => (
              <motion.button
                key={topic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white rounded-full shadow-md
                         hover:shadow-lg transition-all text-gray-700
                         hover:text-[#A698C5]"
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
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#A698C5] text-white px-8 py-3 rounded-full
                    hover:bg-[#8B7BA5] transition-all duration-300
                    flex items-center gap-2 mx-auto"
          >
            Ask the Community
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Wiki;
