import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusIcon } from 'lucide-react'

import { useState } from 'react'

export default function EventDialog() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size={'xl'}><PlusIcon/> Add new Event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Event</DialogTitle>
        </DialogHeader>

        <div>
          <div className="mb-4 flex w-full rounded-lg justify-center gap-4 bg-muted p-2">
            <Button
              variant={currentPage === 1 ? 'default' : 'ghost'}
              className="w-1/2"
              onClick={() => setCurrentPage(1)}
            >
              Basic Info
            </Button>
            <Button
              variant={currentPage === 2 ? 'default' : 'ghost'}
              className="w-1/2"
              onClick={() => setCurrentPage(2)}
            >
              Additional Details
            </Button>
          </div>
        </div>
        <div className="grid gap-4 py-4">
          {currentPage === 1 && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Your Event Title"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>

                <textarea
                  id="description"
                  placeholder="Event Description (max 500 characters)"
                  className="col-span-3 h-24 resize-none rounded-md border p-2"
                  maxLength={500}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input id="date" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time
                </Label>
                <Input id="time" type="time" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Event Location"
                  className="col-span-3"
                />
              </div>
            </>
          )}
          {currentPage === 2 && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <select
                  id="category"
                  className="col-span-3 rounded-md border p-2"
                  multiple
                >
                  <option value="sports">Sports</option>
                  <option value="culture">Culture</option>
                  <option value="education">Education</option>
                  <option value="social">Social</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="maxAttendees" className="text-right">
                  Max Attendees
                </Label>
                <Input
                  id="maxAttendees"
                  type="number"
                  min="1"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="images" className="text-right">
                  Images
                </Label>
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="isPublished" className="text-right">
                  Publish
                </Label>
                <Input
                  id="isPublished"
                  type="checkbox"
                  className="col-span-3 h-6 w-6"
                />
              </div>
            </>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          {currentPage === 1 ? (
            <Button onClick={() => setCurrentPage(2)}>Next</Button>
          ) : (
            <Button type="submit">Save changes</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
