// components/ScrollSection.tsx
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import image from '../assets/stockholm-gamla-stan-0.jpeg'

const ScrollSection = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="relative -mt-4 h-10 w-full rounded-t-2xl bg-background"></div>

      <section className="relative flex min-h-screen items-center justify-center">
        {/* Content */}
        <div className="mx-auto flex w-full max-w-screen-xl flex-row space-x-12 px-6 py-20">
          <div className="flex w-full flex-col items-start justify-center space-y-10 lg:w-8/12">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl space-y-4"
            >
              <h2 className="text-5xl font-bold text-foreground">
                Having a hard time to keep track of all the Events?
              </h2>
              <h3 className="text-4xl text-foreground">We got you covered!</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="max-w-2xl space-y-6"
            >
              <p className="text-xl text-foreground">
                We teamed up with the organizers of the major student events to
                collect all the Events in one place. No need for countless
                WhatsApp groups, Websites, Newsletters and Instagram posts to
                stay up to date. Find the events that you are looking for.
              </p>
              <Button size={'xl'} onClick={() => navigate('/events')}>
                Events <ArrowRightIcon />
              </Button>
            </motion.div>
          </div>
          <div className="h-full w-full lg:w-4/12">
            <p className="mb-4 font-serif text-4xl font-semibold">
              Next Event:
            </p>
            <div className="rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-4 backdrop-blur-sm">
              <div className="relative flex h-[600px] w-full flex-col justify-center overflow-clip rounded-lg bg-white text-center">
                <img src={image} alt="Event" className="absolute object-fill" />
                <div className="absolute bottom-0 top-0 w-full bg-black opacity-40"></div>
                <p className="relative text-4xl font-bold text-white">
                  Event Card Here
                </p>
                <p className="relative text-2xl font-semibold text-white">
                  Event Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollSection
