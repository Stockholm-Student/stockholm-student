import { CopyIcon, ShareIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface SharePopoverProps {
  shareLink: string
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function SharePopover({ shareLink }: SharePopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="Share Event" variant={'icon'} size={'icon'}>
          <ShareIcon className="" />
        </Button>
      </PopoverTrigger>
      <PopoverContent usePortal={false} side="top" className="w-auto">
        <div className="text-2xl">Share link</div>
        Anyone who has this link will be able to view this.
        <div className="mt-4 flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={shareLink} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={() => {
              navigator.clipboard.writeText(shareLink)
            }}
          >
            <span className="sr-only">Copy</span>
            <CopyIcon />
          </Button>
        </div>{' '}
      </PopoverContent>
    </Popover>
  )
}
