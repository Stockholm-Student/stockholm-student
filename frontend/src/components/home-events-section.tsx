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
        <div className="absolute -top-48 left-0 z-0 hidden h-full w-full lg:flex">
          <svg
            width="2000"
            height="1020"
            viewBox="0 0 2000 1020"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-muted"
          >
            <path d="M736.091 0H2000V512H1322.27V522.182C1614.64 587.636 1560.82 1019.64 1267 1019.64H0V512H714.273V501.818C571.727 474.182 483 385.455 483 253.091C483 122.182 596.455 0 736.091 0Z" />
          </svg>
        </div>
        <div className="z-[1] max-w-full lg:max-w-screen-xl">
          <div className="m-auto mb-12 lg:w-[350px]">
            <p className="mb-2 text-3xl font-semibold">
              Having a hard time to keep track of all the Events?
            </p>
            <p className="mb-4 text-xl font-medium">We got you covered!</p>
            We teamed up with the organizers of the major student events to
            collect all the Events in one place. No need for countless WhatsApp
            groups, Websites, Newsletters and Instagram posts to stay up to
            date. Find the events that you are looking for.
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-48 lg:flex-row lg:gap-x-24">
            <div className="relative flex w-full items-center lg:w-[calc(20rem+200px)]">
              {sm && (
                <Button
                  variant={'icon_transparent'}
                  className="mb-[75px] rounded-full p-3 hover:bg-muted"
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
                  className="mt-[75px] rounded-full p-3 hover:bg-muted"
                  size={'lg'}
                  onClick={() => setFrontCard((frontCard + 1) % 3)}
                >
                  <ArrowRightIcon className="!size-6 text-muted-foreground" />
                </Button>
              )}
            </div>
            <div className="mt-20 flex flex-col text-4xl font-semibold lg:mt-0">
              <span>All Events.</span>
              <span>One Place.</span>
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
