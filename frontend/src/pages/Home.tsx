import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StockholmImage from '../assets/stockholm-night-day.jpeg'
import HomeEventsSection from '../components/HomeEventsSection'

// const MotionButton = motion(Button)

const Home = () => {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen scroll-smooth bg-gray-100">
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

        {/* Title and Button */}
        <div className="relative z-20 flex h-full flex-col justify-center px-4 text-neutral-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6 text-center"
          >
            {/* Main Heading with animation */}
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
              <h2 className="font-serif text-4xl font-semibold tracking-wider md:text-5xl">
                Your Student Life <br />
                in one place
              </h2>
            </motion.div>
            <Button
              variant={'transparent'}
              size={'xxl'}
              onClick={() => navigate('/events')}
            >
              Discover Events <ArrowRightIcon />
            </Button>
          </motion.div>
        </div>
      </div>

      <HomeEventsSection />
      {/* <HomeQuestionsSection /> */}

      
      <div className="flex flex-col justify-center p-10">
        <span className="text-2xl">Components Showcase:</span>
        <span className="mb-2 mt-5 text-lg">Buttons:</span>
        <div className="flex w-full justify-around">
          <Button>
            Default
            <ArrowRightIcon />
          </Button>
          <Button variant={'outline'}>
            Outline
            <ArrowRightIcon />
          </Button>
          <Button variant={'transparent'}>Transparent</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'destructive'}>Destructive</Button>
        </div>
      </div>
      {/* Enhanced gradient overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/30 to-transparent" /> */}
    </div>
  )
}

export default Home
