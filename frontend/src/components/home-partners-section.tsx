// components/ScrollSection.tsx
import {
  CalendarCheckIcon,
  HeartHandshakeIcon,
  LucideProps,
  RadioIcon,
} from 'lucide-react'
import { RefAttributes } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'

interface ValueCardProps {
  title: string
  description: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
}

const cardContents: ValueCardProps[] = [
  {
    title: 'Manage Events',
    description:
      'Our intuitive UI and management features help you to handle your events with ease.',
    icon: CalendarCheckIcon,
  },
  {
    title: 'Expand your audience',
    description:
      'A platform for all students studying in Stockholm. With our help you reach them.',
    icon: RadioIcon,
  },
  {
    title: 'Close Collaboration',
    description:
      'Feedback is something that we take really serious and appreciate. Talk to us about problems you face, functionality you need or new ideas you have.',
    icon: HeartHandshakeIcon,
  },
]

const HomePartnersSection = () => {
  return (
    <section className="relative m-auto flex max-w-screen-xl flex-col items-center justify-center gap-4">
      <p className="text-3xl font-medium">Our Partners</p>
      <p className="mb-6 w-3/5 min-w-56 text-center">
        Are you an Organization or company that hosts student Events and want to
        publish them on our platform? <br></br> Feel free to contact us and we
        look forward to work with you!
      </p>
      <div className="flex flex-col justify-around px-4 sm:flex-row">
        {cardContents.map((card, index) => (
          <Card
            key={index}
            className="flex max-w-[400px] flex-col rounded-md border border-muted shadow-sm hover:shadow-lg sm:w-[30%] lg:w-1/4"
          >
            <CardHeader>
              <card.icon
                size={64}
                strokeWidth={1.6}
                className="mb-2 text-foreground/90"
              />
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-xl font-bold text-muted-foreground/20">
                0{index + 1}
              </p>
              <p className="mb-2 text-lg font-medium">{card.title}</p>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default HomePartnersSection
