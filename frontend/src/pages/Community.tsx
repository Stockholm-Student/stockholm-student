// pages/Community.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Johannes Brix',
    role: 'Community Leader',
    country: 'Germany',
    image: '/team/johannes.jpg',
    contact: {
      email: 'Johannes@stockholmstudent.com',
      instagram: '@johannesbrix',
      linkedin: 'johannesbrix',
    },
  },
  {
    name: 'Marco Rossi',
    role: 'Events Coordinator',
    country: 'Italy',
    image: '/team/marco.jpg',
    contact: {
      email: 'marco@stockholmstudent.com',
      instagram: '@marco_sthlm',
      linkedin: 'marcorossi',
    },
  },
  {
    name: 'Yuki Tanaka',
    role: 'Student Relations',
    country: 'Japan',
    image: '/team/yuki.jpg',
    contact: {
      email: 'yuki@stockholmstudent.com',
      instagram: '@yuki_sthlm',
      linkedin: 'yukitanaka',
    },
  },
]

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A698C5] to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pb-20 pt-32 text-center text-white"
      >
        <div className="mx-auto max-w-4xl px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-6 text-5xl font-bold"
          >
            Welcome to Our Community
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed"
          >
            Where international students from different cultures come together
            to create unforgettable experiences in Stockholm.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16">
        {/* Mission Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-8 text-3xl font-bold">Our Mission</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            We're here to transform the international student experience in
            Stockholm. Through crazy events, cultural exchanges, and meaningful
            connections, we're building a vibrant community where every student
            feels at home.
          </p>
        </motion.section>

        {/* Team Section */}
        <section className="space-y-12">
          <h2 className="text-center text-3xl font-bold">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="transform rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A698C5]/20 to-purple-200/30" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-800">{member.role}</p>
                    <p className="text-sm text-gray-600">
                      From: {member.country}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {member.contact.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaInstagram className="text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {member.contact.instagram}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="rounded-2xl bg-white p-8 shadow-lg"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold">Join Our Next Adventure!</h2>
            <p className="text-xl text-gray-700">
              Follow us on Instagram to stay updated with our latest events and
              activities!
            </p>
            <motion.a
              href="https://instagram.com/your_community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transform items-center space-x-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-white transition-all hover:-translate-y-1 hover:from-purple-600 hover:to-pink-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={24} />
              <span>Follow Our Instagram</span>
            </motion.a>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl font-bold">Get Involved!</h2>
          <p className="text-xl text-gray-700">
            Want to join our team or collaborate on an event? We're always
            looking for enthusiastic students to join our community!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#A698C5] px-8 py-3 text-white transition-all hover:bg-[#8B7BA5]"
          >
            Contact Us
          </motion.button>
        </motion.section>
      </div>
    </div>
  )
}

export default Community
