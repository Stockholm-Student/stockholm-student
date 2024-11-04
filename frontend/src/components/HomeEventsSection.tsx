// components/ScrollSection.tsx
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import image from '../assets/stockholm-gamla-stan-0.jpeg'

const ScrollSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      {/* Content */}
      <div className=" flex mx-auto w-full max-w-screen-xl flex-row px-6 py-20 space-x-12">
        <div className="flex flex-col items-start justify-center space-y-10 lg:w-8/12 w-full">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl space-y-4"
          >
            <h2 className="text-5xl font-bold text-black">
              Having a hard time to keep track of all the Events?
            </h2>
            <h3 className="text-4xl text-black">We got you covered!</h3>
          </motion.div>

          {/* Event Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-xl text-gray-800">
              We teamed up with the organizers of the major student events to
              collect all the Events in one place. No need for countless
              WhatsApp groups, Websites, Newsletters and Instagram posts to stay
              up to date. Find the events that you are looking for.
            </p>
            <motion.button
              onClick={() => navigate('/events')}
              className="relative flex items-center gap-2 overflow-hidden rounded-lg bg-black px-8 py-3 text-lg text-white shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all before:absolute before:inset-0 before:translate-x-[-200%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-1000 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:before:translate-x-[200%]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold text-2xl">Events</span>
              <span className="relative z-10 text-xl">→</span>
            </motion.button>
            <motion.button
                onClick={() => navigate('/events')}
                className="rounded-lg border border-white/10 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 px-10 py-4 backdrop-blur-sm transition-all duration-500 ease-out hover:from-blue-500/30 hover:to-emerald-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span className="relative z-10 inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-xl font-semibold uppercase">
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
        </div>
        <div className="h-full lg:w-4/12 w-full">
        <p className='font-serif font-semibold text-4xl mb-4'>Next Event:</p>
          <div className='rounded-xl p-4 border border-white/10 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm'>
            <div className='relative bg-white w-full h-[600px] rounded-lg flex overflow-clip flex-col justify-center text-center'>
              <img src={image} alt='Event' className='absolute object-fill'/>
              <div className='absolute bg-black top-0 bottom-0 w-full opacity-40'></div>
              <p className='relative text-4xl font-bold text-white'>Event Card Here</p>
              <p className='relative text-2xl text-white font-semibold'>Event Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
