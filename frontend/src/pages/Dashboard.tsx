// pages/Events.tsx
import { useBreakpoints } from '@/lib/breakpoints'

const Events = () => {
  const { sm } = useBreakpoints()

  return (
    <div className="min-h-screen bg-background pt-36">
      <div className="px-4">
        {/* Header Section */}
        <div className="mb-4 flex flex-row items-end justify-between">
          Main Part
        </div>
        <div className="flex flex-col rounded-md sm:bg-muted sm:p-4 md:flex-row md:p-6">
          Sidebar
        </div>
      </div>
    </div>
  )
}

export default Events
