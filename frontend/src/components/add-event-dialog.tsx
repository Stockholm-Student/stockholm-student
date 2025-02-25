import { Button } from '@/components/ui/button'
import { categoriesMap } from '@/types/types'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Community } from '@/types/interfaces'
import { useEffect, useState } from 'react'
import { MultiSelect } from './multi-select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Switch } from './ui/switch'
import { Textarea } from './ui/textarea'

//palceholder until ready
const communities: Community[] = [
  { name: 'DISK', communityId: '60f3b3b3b3b3b3b3b3b3b3b3b3' },
  { name: 'SUS', communityId: '60f2b2b2b2b2b3b3b3b3b3b3b3' },
]

const formSchema = z
  .object({
    communityId: z.string(),
    title: z
      .string()
      .min(3, 'Title must be at least 3 characters long')
      .max(120, 'Title cannot exceed 120 characters'),
    description: z
      .string()
      .min(20, 'Description must be at least 20 characters long'),
    startDate: z.string().date(),
    startTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/),
    endDate: z.string().date(),
    endTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/),
    location: z
      .string()
      .url('Please enter a valid URL')
      .refine((url) => url.includes('www.google.') && url.includes('maps'), {
        message: 'Please provide a valid Google Maps URL',
      })
      .refine(
        (url) =>
          url
            .match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)
            ?.slice(1)
            .map(Number),
        {
          message: 'Could not extract coordinates from URL',
        }
      ),
    categories: z
      .array(z.string(), {
        required_error: 'Please select at least one category',
      })
      .min(1, 'Select at least one category')
      .max(3, 'Maximum 3 categories allowed'),
    images: z.array(z.string()).max(3, 'Maximum 3 images allowed').optional(),
    isPublished: z.boolean().default(true),
  })
  .refine(
    (data) => {
      const start = new Date(`${data.startDate}T${data.startTime}`)
      const end = new Date(`${data.endDate}T${data.endTime}`)
      return end >= start
    },
    {
      message: 'End date and time must be after start date and time',
      path: ['endDate'], // This will show the error on the endDate field
    }
  )

export default function EventDialog() {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const [communitiesList, setCommunitiesList] = useState<Community[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]) //array to store selected categories for filtering

  const addEventForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      communityId: '',
      title: '',
      description: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      location: '',
      categories: [],
      isPublished: true,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Create event object from form values
    const event = {
      // communityId: values.communityId,
      title: values.title,
      description: values.description,
      start: `${values.startDate}T${values.startTime}`,
      end: `${values.endDate}T${values.endTime}`,
      location: values.location,
      // categories: values.categories,
      images: values.images,
      isPublished: values.isPublished,
      creatorId: 'adf83b22-09a7-467b-b5c1-3f14f659a3c5',
    }

    // Now you can use the event object to send to your API
    console.log('Event object:', event)
    // Send the event data to the backend
    fetch(`${import.meta.env.VITE_API_DOMAIN}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        setOpen(false)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const getCommunities = async () => {
    // try {
    //   const response = await fetch(`${import.meta.env.VITE_AUTH_DOMAIN}/api/`)
    //   const data = await response.json()
    //   console.log('Communities:', data)
    //   setCommunitiesList(data)
    // } catch (error) {
    //   console.error('Error:', error)
    // }
    setCommunitiesList(communities)
  }

  useEffect(() => {
    getCommunities()
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size={'lg'}>
          <PlusIcon /> Add new Event
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-h-[95vh] overflow-y-auto sm:max-w-[425px]"
        aria-describedby="dialog-description"
      >
        <DialogHeader>
          <DialogTitle>Add new Event</DialogTitle>
        </DialogHeader>

        <div>
          <div className="mb-4 flex w-full justify-center gap-4 rounded-lg bg-muted p-2">
            <Button
              variant={currentPage === 1 ? 'default' : 'ghost'}
              className={currentPage === 1 ? 'w-1/2' : 'w-1/4'}
              onClick={() => setCurrentPage(1)}
            >
              1. {currentPage === 1 && 'Basic Info'}
            </Button>
            <Button
              variant={currentPage === 2 ? 'default' : 'ghost'}
              className={currentPage === 2 ? 'w-1/2' : 'w-1/4'}
              onClick={() => setCurrentPage(2)}
            >
              2. {currentPage === 2 && 'Time & Location'}
            </Button>

            <Button
              variant={currentPage === 3 ? 'default' : 'ghost'}
              className={currentPage === 3 ? 'w-1/2' : 'w-1/4'}
              onClick={() => setCurrentPage(3)}
            >
              3. {currentPage === 3 && 'Additional Details'}
            </Button>
          </div>
        </div>
        <Form {...addEventForm}>
          <form
            onSubmit={addEventForm.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {currentPage === 1 && (
              <>
                <FormField
                  control={addEventForm.control}
                  name="communityId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Community*</FormLabel>
                      {communitiesList.length == 1 ? (
                        <p>
                          This is event will be added to:{' '}
                          {communitiesList[0].name}
                        </p>
                      ) : (
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a community" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {communitiesList.map((community) => (
                              <SelectItem
                                key={community.communityId}
                                value={community.communityId}
                              >
                                {community.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      <FormDescription>
                        {communitiesList.length > 1 &&
                          'Select the community where the event will be posted in'}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={addEventForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title*</FormLabel>
                      <FormControl>
                        <Input placeholder="Your event title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={addEventForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description*</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder="Describe your event (20 - 1500 characters)"
                            className="max-h-[250px]"
                            {...field}
                          />
                          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground"></div>
                        </div>
                      </FormControl>
                      <FormDescription className="text-right">
                        {field.value?.length || 0}/1500
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  onClick={() => setCurrentPage(2)}
                  className="float-right"
                >
                  Next
                </Button>
              </>
            )}
            {currentPage === 2 && (
              <>
                <div className="flex place-items-end justify-between gap-4">
                  <div className="w-1/2">
                    <FormField
                      control={addEventForm.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date*</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <FormField
                      control={addEventForm.control}
                      name="startTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start time*</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex place-items-end justify-between gap-4">
                  <div className="w-1/2">
                    <FormField
                      control={addEventForm.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date*</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-1/2">
                    <FormField
                      control={addEventForm.control}
                      name="endTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End time*</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={addEventForm.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location*</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="www.google.es/maps/place/.../@59.4067198,17.9426476,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9eed05efbb67:0x18ac39c13897c4a9!8m2!3d59.4067198!4d17.9452225!16s%2Fg%2F1tczcj6x?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Google maps link with the coordinates of the location
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="outline" onClick={() => setCurrentPage(1)}>
                  back
                </Button>
                <Button
                  onClick={() => setCurrentPage(3)}
                  className="float-right"
                >
                  Next
                </Button>
              </>
            )}
            {currentPage === 3 && (
              <>
                <FormField
                  control={addEventForm.control}
                  name="categories"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categories*</FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={Object.entries(categoriesMap).map(
                            ([value, label]) => ({
                              value,
                              label: value,
                              icon: label,
                            })
                          )}
                          onValueChange={(value) => {
                            setSelectedCategories(value)
                            field.onChange(value)
                          }}
                          defaultValue={selectedCategories}
                          placeholder="Select categories"
                          maxCount={3}
                        />
                      </FormControl>
                      <FormDescription>
                        Select 1 to 3 categories that fit your event
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={addEventForm.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>images</FormLabel>
                      <FormControl>
                        <Input
                          id="images"
                          type="file"
                          multiple
                          accept="image/*"
                          className="col-span-3 hover:cursor-pointer hover:underline"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={addEventForm.control}
                  name="isPublished"
                  defaultValue={true}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Publish</FormLabel>
                      <FormControl>
                        <Switch
                          id="isPublished"
                          defaultChecked
                          onCheckedChange={(checked) => {
                            field.onChange(checked)
                          }}
                          checked={field.value}
                        />
                      </FormControl>
                      <FormDescription>
                        {field.value
                          ? 'Your event will be published'
                          : 'Your event will not be published'}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="outline" onClick={() => setCurrentPage(2)}>
                  back
                </Button>
                {Object.keys(addEventForm.formState.errors).some((key) =>
                  [
                    'community',
                    'title',
                    'description',
                    'startDate',
                    'startTime',
                    'endDate',
                    'endTime',
                    'location',
                  ].includes(key)
                ) ? (
                  <>
                    <Button type="submit" disabled className="float-right ml-2">
                      Add Event
                    </Button>
                    <FormDescription className="!mt-2 text-red-500">
                      There are errors on page 1 and 2. Please fix them before
                      you can continue
                    </FormDescription>
                  </>
                ) : (
                  <Button type="submit" className="float-right ml-2">
                    Add Event
                  </Button>
                )}
              </>
            )}
          </form>
        </Form>
        <Button
          variant="outline"
          onClick={() => console.log(addEventForm.getValues())}
        >
          Log Current Form Data
        </Button>
      </DialogContent>
    </Dialog>
  )
}
