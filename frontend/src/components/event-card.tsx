import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Event } from '@/types/interfaces'
import { categoriesMap } from '@/types/types'
import { BookmarkIcon, Clock3Icon, MapPinIcon, Share2Icon } from 'lucide-react'
import { Badge } from './ui/badge'

export function EventCard({
  title,
  imageUrl,
  categories,
  start,
  location,
  description,
}: Event) {
  return (
    <Card className="w-full max-w-sm overflow-hidden p-3 transition-all hover:shadow-lg">
      {imageUrl && (
        <>
          <div className="relative h-48 w-full overflow-clip rounded-sm">
            <Button
              variant={'icon_transparent'}
              size={'icon'}
              className="absolute bottom-1 left-1 z-10 p-2"
            >
              <Share2Icon className="" />
            </Button>
            <Button
              variant={'icon_transparent'}
              size={'icon'}
              className="absolute bottom-1 right-1 z-10 p-2"
            >
              <BookmarkIcon className="" />
            </Button>
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </>
      )}
      <CardHeader className="px-3">
        <CardTitle className="text-2xl">{title}</CardTitle>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock3Icon className="h-4 w-4" />
          {start.toLocaleDateString()},{' '}
          {start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          <MapPinIcon className="h-4 w-4" />
          {location}
        </div>
        <div className="flex gap-2 overflow-hidden pt-2">
          {categories.slice(0, 3).map((category) => (
            <Badge
              key={category}
              variant={'static'}
              className="flex w-fit gap-2"
            >
              {categoriesMap[category]}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-3">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-auto flex-grow items-end justify-end pb-4">
        <Button>More info</Button>
      </CardFooter>
    </Card>
  )
}
