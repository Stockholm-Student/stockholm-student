import { addYears, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DateRangeFilterProps {
  selectedDateRange: DateRange | undefined
  setSelectedDateRange: (dateRange: DateRange | undefined) => void
}

/**
 * DateRangeFilter component allows users to filter items by date range.
 * It displays a calendar to select a date range.
 *
 * @param {DateRange} selectedDateRange - Date range selected by the user.
 * @param {Function} setSelectedDateRange - Function to set the selected date range.
 *
 * @returns {JSX.Element} The rendered DateRangeFilter component.
 */

export function DateRangeFilter({
  selectedDateRange,
  setSelectedDateRange,
}: DateRangeFilterProps) {
  const resetDateRange = () => {
    //clear selected date range to the standard one year range
    setSelectedDateRange({ from: new Date(), to: addYears(new Date(), 1) })
  }

  return (
    <div className={cn('grid gap-2')}>
      <div className="flex justify-between">
        <span className="text-2xl">Date Range</span>
        <Button
          variant={'ghost'}
          className="p-1 underline"
          onClick={resetDateRange}
        >
          clear
        </Button>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-fit min-w-40 justify-start text-left font-normal',
              !selectedDateRange && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {selectedDateRange?.from ? (
              selectedDateRange.to ? (
                <>
                  {format(selectedDateRange.from, 'dd.MM.yy')} -{' '}
                  {format(selectedDateRange.to, 'dd.MM.yy')}
                </>
              ) : (
                format(selectedDateRange.from, 'dd.MM.yy')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={selectedDateRange?.from}
            selected={selectedDateRange}
            onSelect={setSelectedDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
export default DateRangeFilter
