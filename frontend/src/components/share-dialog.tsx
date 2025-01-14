import { CopyIcon, ShareIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ShareDialogProps {
  shareLink: string
}

export function ShareDialog({ shareLink }: ShareDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Share</Button> */}
        <Button
          aria-label="Share Event"
          variant={'icon'}
          size={'icon'}
          onClick={(e) => {
            e.stopPropagation()
            console.log('clickedshare')
          }}
        >
          <ShareIcon className="" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
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
        </div>
      </DialogContent>
    </Dialog>
  )
}
