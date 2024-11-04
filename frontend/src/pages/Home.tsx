import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StockholmImage from '../assets/stockholm-night-day.jpeg'
import HomeEventsSection from '../components/HomeEventsSection'
import HomeQuestionsSection from '../components/HomeQuestionsSection'

const Home = () => {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Background with parallax effect */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          className={`absolute inset-0 transition-all ${scrollY == 0 ? 'p-8' : 'p-0'}`}
          style={{ y: scrollY * 0.5 }}
        >
          <img
            src={StockholmImage}
            alt="Stockholm"
            className={`h-full w-full object-cover ${scrollY == 0 ? 'rounded-xl' : ''}`}
          />
        </motion.div>

        {/* Enhanced Main content */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6 text-center"
          >
            {/* Main Heading with enhanced animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
              }}
              className="space-y-4"
            >
              <h2 className="text-shadow-lg bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text font-serif text-4xl font-semibold tracking-wider md:text-5xl">
                Your Student Life <br />
                in one place
              </h2>
            </motion.div>

            {/* Enhanced Button Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-16"
            >
              <motion.button
                onClick={() => navigate('/events')}
                className="rounded-lg border border-white/10 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 px-10 py-4 backdrop-blur-sm transition-all duration-500 ease-out hover:from-blue-500/30 hover:to-emerald-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span className="relative z-10 inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-lg font-medium uppercase tracking-[0.2em]">
                  <span>Discover Events</span>
                  <motion.svg
                    className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </motion.span>

                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10" />
                  <div className="absolute inset-0 bg-white/5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 translate-x-1/2 transform"
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: 3,
              duration: 2.5,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="flex flex-col items-center gap-3"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-light tracking-[0.5em] text-white/70">
                SCROLL
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-white/70 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="relative -mt-2 h-10 w-full rounded-t-2xl bg-white"></div>
      <HomeEventsSection />
      <HomeQuestionsSection />

      {/* Enhanced gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )
}

export default Home
