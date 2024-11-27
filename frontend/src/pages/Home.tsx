import HomeEventsSection from '@/components/home-events-section'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StockholmImage from '../assets/stockholm-night-day.jpeg'
import BasicDialog from '@/components/basic-dialog'

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
    <div className="relative min-h-screen scroll-smooth bg-background">
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
          <BasicDialog />
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
        <span className="my-4 text-lg">Colors:</span>
        <div className="flex space-x-4">
          <div className="bg-white p-5 text-black rounded-xl">
            <span>Lightmode:</span>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-background"></div>
              <span>background</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-foreground"></div>{' '}
              <span>foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-card"></div> <span>card</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-card-foreground"></div>{' '}
              <span>card-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-popover"></div>
              <span>popover</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-popover-foreground"></div>{' '}
              <span>popover-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-primary"></div> <span>primary</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-primary-foreground"></div>{' '}
              <span>primary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-secondary"></div>{' '}
              <span>secondary</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-secondary-foreground"></div>
              <span>secondary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-muted"></div> <span>muted</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-muted-foreground"></div>{' '}
              <span>muted-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-accent"></div> <span>accent</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-accent-foreground"></div>{' '}
              <span>accent-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-destructive"></div>{' '}
              <span>destructive</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-destructive-foreground"></div>{' '}
              <span>destructive-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-border"></div>
              <span>border</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-input"></div> <span>input</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-ring"></div> <span>ring</span>
            </div>
          </div>
          <div className="bg-neutral-900 p-5 text-white rounded-xl">
            <span>Darkmode:</span>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-background"></div>
              <span>background</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-foreground"></div>{' '}
              <span>foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-card"></div> <span>card</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-card-foreground"></div>{' '}
              <span>card-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-popover"></div>
              <span>popover</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-popover-foreground"></div>{' '}
              <span>popover-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-primary"></div>{' '}
              <span>primary</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-primary-foreground"></div>{' '}
              <span>primary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-secondary"></div>{' '}
              <span>secondary</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-secondary-foreground"></div>
              <span>secondary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-muted"></div> <span>muted</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-muted-foreground"></div>{' '}
              <span>muted-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-accent"></div> <span>accent</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-accent-foreground"></div>{' '}
              <span>accent-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-destructive"></div>{' '}
              <span>destructive</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-destructive-foreground"></div>{' '}
              <span>destructive-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-border"></div>
              <span>border</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-input"></div> <span>input</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-ring"></div> <span>ring</span>
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced gradient overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/30 to-transparent" /> */}
    </div>
  )
}

export default Home
