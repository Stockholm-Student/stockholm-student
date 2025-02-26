// components/HomeEventsSection.tsx
import { Button } from '@/components/ui/button'
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
      <section className="relative flex items-center justify-center rounded-t-2xl bg-background py-32"
        style={{
          backgroundImage: 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {/* Content */}
        <EventDetailDialog
          open={detailOpen}
          setOpen={setDetailOpen}
          event={selectedEvent}
        />
        <div className="flex items-center justify-center gap-x-24">
          <div className="flex items-center gap-4">
        <Button
          variant={'icon_transparent'}
          className="rounded-full p-3 hover:bg-muted"
          size={'lg'}
          onClick={() => setFrontCard((frontCard + 1) % 3)}
        >
          <ArrowLeftIcon className="!size-6 text-muted-foreground" />
        </Button>
        <div className="relative flex h-[calc(22rem+100px)] w-[calc(20rem+100px)]">
          {events.map((event, index) => {
            const cardIndex = (index + frontCard) % 3
            return (
          <div
            key={index}
            className="absolute w-80 transform transition-all duration-300"
            style={{
              left: `${cardIndex * 50}px`,
              top: `${cardIndex * 30}px`,
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
        <Button
          variant={'icon_transparent'}
          className="rounded-full p-3 hover:bg-muted"
          size={'lg'}
          onClick={() => setFrontCard((frontCard + 1) % 3)}
        >
          <ArrowRightIcon className="!size-6 text-muted-foreground" />
        </Button>
          </div>
          <div className="flex flex-col text-4xl font-semibold">
        <span>All Events.</span>
        <span>One Place.</span>

        <Button className='mt-8' size={'xl'} onClick={() => navigate('/events')}>
          Events
        </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeEventsSection
