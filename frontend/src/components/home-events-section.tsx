// components/HomeEventsSection.tsx
import { Button } from '@/components/ui/button'
import { useBreakpoints } from '@/lib/breakpoints'
import { Event } from '@/types/interfaces'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EventCard } from './event-card'
import EventDetailDialog from './event-detail-dialog'

const events: Event[] = [
  {
    title: 'Student Welcome Party',
    start: new Date('2025-09-01T21:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/cld-sample-3.jpg',
    location: 'KTH Campus Main Hall',
    categories: ['party', 'social', 'university', 'art', 'travel'],
    description:
      "Join us for the biggest welcome party of the semester! Meet new friends, enjoy great music, and dance the night away. There will be food and drinks available. Don't miss out on this unforgettable event!",
  },
  {
    title: 'International Food Festival',
    start: new Date('2025-01-07T15:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/samples/man-on-a-street.jpg',
    location: 'Student Union Building',
    categories: ['culture', 'food', 'health'],
    description:
      'Taste dishes from around the world prepared by international students.',
  },
  {
    title: 'Tech Talk: Future of AI',
    start: new Date('2025-03-15T10:00:00'),
    imageUrl:
      'https://res.cloudinary.com/dwarbciwt/image/upload/v1735656649/samples/woman-on-a-football-field.jpg',
    location: 'KTH Innovation Hub',
    categories: ['technology', 'university'],
    description:
      'Join us for an insightful talk on the future of AI and its impact on various industries.',
  },
]

const HomeEventsSection = () => {
  const navigate = useNavigate()
  const [frontCard, setFrontCard] = useState(0)

  const { sm } = useBreakpoints()

  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(
    undefined
  )
  const openDetailDialog = (event: Event) => {
    setSelectedEvent(event)
    setDetailOpen(true)
  }

  return (
    <>
      <section className="relative flex flex-col items-center">
        {/* Content */}
        <EventDetailDialog
          open={detailOpen}
          setOpen={setDetailOpen}
          event={selectedEvent}
        />
        <div className="absolute inset-0 -mx-6 hidden items-center justify-center overflow-hidden md:flex">
          <div className="relative min-h-full w-full">
            <svg
              width="5120"
              height="1020"
              viewBox="0 0 5120 1020"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 top-1/2 max-h-full min-h-full w-auto -translate-x-1/2 -translate-y-1/2 fill-muted"
              preserveAspectRatio="xMidYMid slice"
            >
              <path d="M2296.09 0H5120V512H2882.27V522.182C3174.64 587.636 3120.82 1019.64 2827 1019.64H0V512H2274.27V501.818C2131.73 474.182 2043 385.455 2043 253.091C2043 122.182 2156.45 0 2296.09 0Z" />
            </svg>
          </div>
        </div>
        <div className="z-[1] mt-12 flex max-w-full flex-col md:max-w-screen-xl">
          <div className="m-auto mb-10 flex flex-col justify-center md:mb-0 md:min-h-[350px] md:w-[350px]">
            <p className="mb-2 text-3xl font-semibold">
              Having a hard time to keep track of all the Events?
            </p>
            <p className="mb-4 text-xl font-medium">We got you covered!</p>
            We teamed up with the organizers of the major student events to
            collect all the Events in one place. No need for countless WhatsApp
            groups, Websites, Newsletters and Instagram posts to stay up to
            date. Find the events that you are looking for.
          </div>
          <div className="flex min-h-[550px] flex-col items-center justify-center md:flex-row md:gap-x-12 lg:gap-x-24">
            <div className="relative flex items-center md:w-[calc(20rem+200px)]">
              {sm && (
                <Button
                  variant={'icon_transparent'}
                  className="mb-[75px] rounded-full bg-transparent p-3 hover:bg-muted"
                  size={'lg'}
                  onClick={() => setFrontCard((frontCard + 1) % 3)}
                >
                  <ArrowLeftIcon className="!size-6 text-muted-foreground" />
                </Button>
              )}
              <div className="relative flex h-[calc(22rem+100px)] w-[calc(20rem+100px)]">
                {events.map((event, index) => {
                  const cardIndex = (index + frontCard) % 3
                  return (
                    <div
                      key={index}
                      className="absolute w-80 transform transition-all duration-300"
                      style={{
                        left: `${cardIndex * (sm ? 45 : 20)}px`,
                        top: `${cardIndex * 40}px`,
                        zIndex: cardIndex,
                      }}
                    >
                      <div
                        className="pointer-events-none absolute z-10 h-full w-full bg-white"
                        style={{
                          opacity: `${(events.length - cardIndex - 1) * 20}%`,
                        }}
                      ></div>
                      <EventCard
                        event={event}
                        setDetailOpen={() => openDetailDialog(event)}
                      />
                    </div>
                  )
                })}
              </div>
              {sm && (
                <Button
                  variant={'icon_transparent'}
                  className="mt-[75px] rounded-full bg-transparent p-3 hover:bg-muted"
                  size={'lg'}
                  onClick={() => setFrontCard((frontCard + 1) % 3)}
                >
                  <ArrowRightIcon className="!size-6 text-muted-foreground" />
                </Button>
              )}
            </div>
            <div className="mt-20 flex flex-col items-center text-4xl font-semibold md:mt-0">
              <div className="flex min-w-[155px] gap-4 md:flex-col md:gap-0">
                <span>All Events.</span>
                <span>One Place.</span>
              </div>
              <Button
                className="mt-8"
                size={'xl'}
                onClick={() => navigate('/events')}
              >
                Events
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeEventsSection
