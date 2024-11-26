// components/ScrollSection.tsx
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ScrollSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative flex min-h-screen max-w-screen-xl items-center justify-center">
      {/* Content */}
      <div className="relative px-6 py-20">
        <div className="flex flex-col items-start space-y-16">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl space-y-4"
          >
            <h2 className="text-5xl font-bold text-black">
              So many questions...
            </h2>
            <h3 className="text-4xl text-black">
              and we try to answer all of them!
            </h3>
          </motion.div>

          {/* Wiki Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-xl text-gray-800">
              Browse our wiki to find useful Information and Tips on common
              topics that make your Student life easier!
            </p>
            <motion.button
              onClick={() => navigate('/wiki')}
              className="relative flex items-center gap-2 overflow-hidden rounded-lg bg-black px-8 py-3 text-lg text-white shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all before:absolute before:inset-0 before:translate-x-[-200%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-1000 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:before:translate-x-[200%]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold text-2xl">Wiki</span>
              <span className="relative z-10 text-xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
