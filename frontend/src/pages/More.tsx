// pages/More.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaArrowRight } from "react-icons/fa";

const partners = [
  {
    name: "KTH Royal Institute",
    logo: "/partner-logos/kth.png",
    description:
      "Sweden's largest technical research and learning institution.",
  },
  {
    name: "Stockholm University",
    logo: "/partner-logos/su.png",
    description:
      "One of the largest universities in Sweden, focused on science and humanities.",
  },
  {
    name: "ESN Stockholm",
    logo: "/partner-logos/esn.png",
    description: "Erasmus Student Network supporting international students.",
  },
];

const contacts = [
  {
    title: "General Inquiries",
    email: "info@stockholmstudent.com",
    response: "24-48 hours",
  },
  {
    title: "Partnership Opportunities",
    email: "partners@stockholmstudent.com",
    response: "2-3 business days",
  },
  {
    title: "Student Support",
    email: "support@stockholmstudent.com",
    response: "24 hours",
  },
];

export default function More() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A698C5] to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-[#A698C5] overflow-hidden" // Changé de bg-[#0C1445] à bg-[#A698C5]
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#A698C5]/50 to-[#8B7BA5]/50" />{" "}
        {/* Ajusté l'opacité */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-white text-center px-4"
          >
            Together We Build
            <br />
            <span className="text-3xl font-light mt-2 block">
              The Student Community
            </span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Partners Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow
                         border border-gray-100 group hover:-translate-y-1 duration-300"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <div
                    className="w-16 h-16 bg-[#A698C5]/10 rounded-full 
                               group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-center">
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
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all
                         border border-gray-100 hover:-translate-y-1 duration-300"
              >
                <div className="relative h-12 flex items-center justify-start mb-4">
                  <FaEnvelope className="text-[#A698C5] text-xl absolute left-0" />
                  <h3 className="text-xl font-semibold ml-8">
                    {contact.title}
                  </h3>
                </div>
                <p className="text-[#8B7BA5] mb-2 hover:text-[#A698C5] transition-colors">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2"
                  >
                    {contact.email}
                    <FaArrowRight className="text-sm" />
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
          className="text-center py-16 bg-gradient-to-r from-[#A698C5]/10 to-[#8B7BA5]/10 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Network?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for new partners to help make student life in
            Stockholm better. If you're interested in collaborating, we'd love
            to hear from you!
          </p>
          <motion.button
            className="bg-[#A698C5] text-white px-8 py-3 rounded-full
                     hover:bg-[#8B7BA5] transition-all duration-300
                     flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Become a Partner</span>
            <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-[#A698C5]/5 border-t border-[#A698C5]/10 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Stockholm Student. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
