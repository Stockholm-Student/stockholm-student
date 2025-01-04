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
import { BookmarkIcon, Clock3Icon, MapPinIcon, ShareIcon } from 'lucide-react'
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
    <Card
      className="group min-w-72 cursor-pointer overflow-hidden p-3 transition-all hover:shadow-lg"
      onClick={() => console.log('clickedevent')}
    >
      {imageUrl && (
        <>
          <div className="relative h-48 w-full overflow-clip rounded-sm">
            <Button
              variant={'icon_transparent'}
              size={'icon'}
              className="absolute bottom-1 left-1 z-10 p-2"
              onClick={(e) => {
                e.stopPropagation()
                console.log('clickedshare')
              }}
            >
              <ShareIcon className="" />
            </Button>
            <Button
              variant={'icon_transparent'}
              size={'icon'}
              className="absolute bottom-1 right-1 z-10 p-2"
              onClick={(e) => {
                e.stopPropagation()
                console.log('clickedsave')
              }}
            >
              <BookmarkIcon className="" />
            </Button>
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </>
      )}
      <CardHeader className="p-3">
        <CardTitle className="text-2xl">{title}</CardTitle>

        <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock3Icon className="h-4 w-4" />
            {start.toLocaleDateString()},{' '}
            {start.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="h-4 w-4" />
            {location}
          </div>
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
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
