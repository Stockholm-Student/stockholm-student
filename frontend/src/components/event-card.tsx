import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Event } from '@/types/interfaces'
import { categoriesMap } from '@/types/types'
import { useAuth0 } from '@auth0/auth0-react'
import { BookmarkIcon, Clock3Icon, MapPinIcon } from 'lucide-react'
import { Badge } from './ui/badge'

interface EventCardProps {
  event: Event
  setDetailOpen: (open: boolean) => void
}

export function EventCard({ event, setDetailOpen }: EventCardProps) {
  const { isAuthenticated } = useAuth0()

  const saveEvent = (event: Event) => {
    if (!isAuthenticated) {
      console.log('not authenticated')
      return
    }
    console.log('save event', event)
  }
  return (
    <Card
      className="group min-w-72 cursor-pointer overflow-hidden p-3 transition-all hover:shadow-lg sm:border"
      onClick={() => setDetailOpen(true)}
    >
      {event.imageUrl && (
        <>
          <div className="relative aspect-video w-full overflow-clip rounded-sm">
            {isAuthenticated && (
              <Button
                variant={'icon_transparent'}
                size={'icon'}
                className="absolute bottom-1 right-1 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  saveEvent(event)
                }}
              >
                <BookmarkIcon className="" />
              </Button>
            )}
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </>
      )}
      <CardHeader className="p-3">
        <CardTitle className="text-2xl">{event.title}</CardTitle>

        <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock3Icon className="h-4 w-4" />
            {event.start.toLocaleDateString()},{' '}
            {event.start.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="h-4 w-4" />
            {event.location}
          </div>
        </div>
        <div className="no-scrollbar relative flex w-full gap-2 overflow-scroll pt-2">
          {event.categories.map((category) => {
            const IconComponent = categoriesMap[category]
            return (
              <Badge
                key={category}
                variant={'static'}
                className="flex w-fit gap-2"
              >
                <IconComponent key={category} className="h-4 w-4" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            )
          })}
          <div className="sticky right-0 h-auto bg-gradient-to-r from-transparent to-white pl-6"></div>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-2">
        <CardDescription className="line-clamp-3">
          {event.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
