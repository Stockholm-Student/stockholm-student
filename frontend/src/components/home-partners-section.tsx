// components/ScrollSection.tsx
import {
  CalendarCheckIcon,
  HeartHandshakeIcon,
  LucideProps,
  RadioIcon,
} from 'lucide-react'
import { RefAttributes } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'
import { useBreakpoints } from '@/lib/breakpoints'

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
  const { sm } = useBreakpoints()
  return (
    <section className="relative m-auto flex max-w-screen-xl w-full flex-col items-center justify-center gap-4">
      <p className="w-full text-3xl font-medium lg:text-center">Our Partners</p>
      <p className="mb-6 min-w-56 w-full lg:w-3/5 lg:text-center">
        Are you an Organization or company that hosts student Events and want to
        publish them on our platform? <br></br> Feel free to contact us and we
        look forward to work with you!
      </p>
      <div className="flex flex-col w-full justify-between lg:justify-around gap-4 sm:flex-row items-center sm:items-stretch">
        {cardContents.map((card, index) => (
          <Card
            key={index}
            className="flex flex-row sm:max-w-[350px] w-full sm:flex-col flex-1 rounded-md border border-muted shadow-sm hover:shadow-lg"
          >
            <CardHeader>
              <card.icon
                size={sm? 64 : 48}
                strokeWidth={sm? 1.6 : 1.3}
                className="mb-2 text-foreground/90"
              />
            </CardHeader>
            <CardContent className={`${!sm && 'pl-0'}`}>
              <p className="mb-2 text-xl mt-4 md:mt-0 font-bold text-muted-foreground/20">
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
