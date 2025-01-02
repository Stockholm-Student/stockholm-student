import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BookmarkIcon, Clock3Icon, MapPinIcon, XIcon } from 'lucide-react'

interface EventCardProps {
  title: string
  date: Date
  time: string
  description: string
  location: string
  imageUrl?: string
}

export function EventCard({
  title,
  date,
  time,
  description,
  location,
  imageUrl,
}: EventCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden p-3 transition-all hover:shadow-lg">
      {imageUrl && (
        <>
          <div className="relative h-48 w-full overflow-clip rounded-sm">
            <Button
              variant={'transparent'}
              className="absolute right-0 z-10 p-3"
            >
              <XIcon />
            </Button>
            <Button
              variant={'transparent'}
              className="absolute bottom-0 right-0 z-10 p-3"
            >
              <BookmarkIcon />
            </Button>
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock3Icon className="h-4 w-4" />
          {date.toLocaleDateString()}, {time}
          <MapPinIcon className="h-4 w-4" />
          {location}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Share</Button>
        <Button>Register</Button>
      </CardFooter>
    </Card>
  )
}
