import { Event } from '@/types/interfaces'
import { categoriesMap } from '@/types/types'
import { BookmarkIcon, Clock3Icon, MapPinIcon, ShareIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { ResponsiveDialog } from './responsive-dialog'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface EventDetailDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  event: Event | undefined
}

const EventDetailDialog = ({
  open,
  setOpen,
  event,
}: EventDetailDialogProps) => {
  return (
    <ResponsiveDialog
      children={
        <div className="">
          <div
            className={`relative ${event?.imageUrl == '' && 'mb-3 flex h-12 w-full items-center gap-2'}`}
          >
            {event?.imageUrl != '' && (
              <img
                src={event?.imageUrl}
                alt=""
                className="mb-4 max-h-48 w-full rounded-sm object-cover md:max-h-60 lg:max-h-80"
              />
            )}
            <Button
              variant={event?.imageUrl == '' ? 'icon' : 'icon_transparent'}
              size={'icon'}
              className={`exclude ${event?.imageUrl == '' ? '' : 'absolute bottom-1 left-1'}`} //exclude class is needed since the Button style is overwritten in the ResponsiveDialog component
              onClick={(e) => {
                e.stopPropagation()
                console.log('clickedshare')
              }}
            >
              <ShareIcon className="" />
            </Button>
            <Button
              variant={event?.imageUrl == '' ? 'icon' : 'icon_transparent'}
              size={'icon'}
              className={`exclude ${event?.imageUrl == '' ? '' : 'absolute bottom-1 right-1'}`}
            >
              <BookmarkIcon className="" />
            </Button>
          </div>
          <div className="mb-2 flex flex-wrap gap-x-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock3Icon className="h-4 w-4" />
              {event?.start.toLocaleDateString()},{' '}
              {event?.start.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
            <div className="flex items-center gap-1">
              <MapPinIcon className="h-4 w-4" />
              {event?.location}
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{event?.title}</h1>
            <Button className="exclude">Buy Ticket</Button>
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            {event?.categories.slice(0, 3).map((category) => (
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
          <p>{event?.description}</p>
        </div>
      }
      isOpen={open}
      setIsOpen={setOpen}
      title=""
      large={true}
    ></ResponsiveDialog>
  )
}

export default EventDetailDialog
