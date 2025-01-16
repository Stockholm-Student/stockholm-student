import { useBreakpoints } from '@/lib/breakpoints'
import { Event } from '@/types/interfaces'
import { categoriesMap } from '@/types/types'
import { BookmarkIcon, Clock3Icon, MapPinIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { ResponsiveDialog } from './responsive-dialog'
import { SharePopover } from './share-dialog'
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
  const { sm } = useBreakpoints()

  const actionRow = () => {
    //contains the actionable buttons
    return (
      <div className="flex gap-2">
        <SharePopover shareLink="https://stockholmstudent.com" />

        <Button variant={'icon'} size={'icon'} aria-label="Bookmark Event">
          <BookmarkIcon className="" />
        </Button>
        <Button className="exclude">Buy Ticket</Button>
      </div>
    )
  }

  return (
    <ResponsiveDialog isOpen={open} setIsOpen={setOpen} title={event?.title}>
      <div className="flex flex-col gap-4">
        {event?.imageUrl != '' && (
          <img
            src={event?.imageUrl}
            alt=""
            className="max-h-48 w-full rounded-sm object-cover md:max-h-60 lg:max-h-80"
          />
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-lg text-muted-foreground">
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
          {sm && actionRow()}
        </div>

        <div className="flex flex-wrap gap-2">
          {event?.categories.map((category) => (
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
        {!sm && (
          <div className="item-center sticky bottom-1 flex w-full justify-end">
            {actionRow()}
          </div>
        )}
      </div>
    </ResponsiveDialog>
  )
}

export default EventDetailDialog
