// pages/More.tsx
import { motion } from 'framer-motion'
import { ArrowRightIcon, MailIcon } from 'lucide-react'

const partners = [
  {
    name: 'KTH Royal Institute',
    logo: '/partner-logos/kth.png',
    description:
      "Sweden's largest technical research and learning institution.",
  },
  {
    name: 'Stockholm University',
    logo: '/partner-logos/su.png',
    description:
      'One of the largest universities in Sweden, focused on science and humanities.',
  },
  {
    name: 'ESN Stockholm',
    logo: '/partner-logos/esn.png',
    description: 'Erasmus Student Network supporting international students.',
  },
]

const contacts = [
  {
    title: 'General Inquiries',
    email: 'info@stockholmstudent.com',
    response: '24-48 hours',
  },
  {
    title: 'Partnership Opportunities',
    email: 'partners@stockholmstudent.com',
    response: '2-3 business days',
  },
  {
    title: 'Student Support',
    email: 'support@stockholmstudent.com',
    response: '24 hours',
  },
]

export default function More() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A698C5] to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] overflow-hidden bg-[#A698C5]" // Changé de bg-[#0C1445] à bg-[#A698C5]
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#A698C5]/50 to-[#8B7BA5]/50" />{' '}
        {/* Ajusté l'opacité */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 text-center text-5xl font-bold text-white"
          >
            Together We Build
            <br />
            <span className="mt-2 block text-3xl font-light">
              The Student Community
            </span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16">
        {/* Partners Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Our Partners</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-20 items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-[#A698C5]/10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 text-center text-xl font-semibold">
                  {partner.name}
                </h3>
                <p className="text-center text-gray-600">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Get in Touch</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative mb-4 flex h-12 items-center justify-start">
                  <MailIcon className="absolute left-0 text-xl text-[#A698C5]" />
                  <h3 className="ml-8 text-xl font-semibold">
                    {contact.title}
                  </h3>
                </div>
                <p className="mb-2 text-[#8B7BA5] transition-colors hover:text-[#A698C5]">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2"
                  >
                    {contact.email}
                    <ArrowRightIcon className="text-sm" />
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  Response time: {contact.response}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl bg-gradient-to-r from-[#A698C5]/10 to-[#8B7BA5]/10 py-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Want to Join Our Network?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            We're always looking for new partners to help make student life in
            Stockholm better. If you're interested in collaborating, we'd love
            to hear from you!
          </p>
          <motion.button
            className="mx-auto flex items-center gap-2 rounded-full bg-[#A698C5] px-8 py-3 text-white transition-all duration-300 hover:bg-[#8B7BA5]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Become a Partner</span>
            <ArrowRightIcon className="text-sm" />
          </motion.button>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#A698C5]/10 bg-[#A698C5]/5 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-gray-600">
          <p>© 2024 Stockholm Student. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
