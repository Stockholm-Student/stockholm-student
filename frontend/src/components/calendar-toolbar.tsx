import 'react-big-calendar/lib/css/react-big-calendar.css'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import moment from 'moment'
import { useState } from 'react'
import { Navigate, ToolbarProps } from 'react-big-calendar'
import { Button } from './ui/button'

const CalendarToolbar = (props: ToolbarProps) => {
  const [viewState, setViewState] = useState('month')

  const goToDayView = () => {
    props.onView('day')
    setViewState('day')
  }
  const goToWeekView = () => {
    props.onView('week')
    setViewState('week')
  }
  const goToMonthView = () => {
    props.onView('month')
    setViewState('month')
  }

  const goToBack = () => {
    props.onNavigate(Navigate.PREVIOUS)
  }

  const goToNext = () => {
    props.onNavigate(Navigate.NEXT)
  }

  const goToToday = () => {
    props.onNavigate(Navigate.TODAY)
  }

  // if you decided to inject a datepicker such as MUI or React Widgets ones, use this function on datepicker onChange
  //   const goToSpecificDate = (newDate: Date) => {
  //     props.onNavigate(Navigate.DATE, newDate)
  //   }

  return (
    <div className="ml-12 flex content-center items-center justify-between pb-2 text-center">
      <div className="flex h-fit space-x-6">
        <Button className="" variant={'outline'} onClick={goToToday}>
          Today
        </Button>
        <div className="space-x-2">
          <Button variant={'icon'} size={'icon'} onClick={goToBack}>
            <ChevronLeftIcon />
          </Button>
          <Button variant={'icon'} size={'icon'} onClick={goToNext}>
            <ChevronRightIcon />
          </Button>
        </div>
        <span className="flex h-fit self-center text-2xl font-semibold">
          {moment(props.date).format('MMMM YYYY')}
        </span>
      </div>
      <div className="w-fit space-x-2">
        <Button onClick={goToMonthView}>month</Button>
        <Button onClick={goToWeekView}>week</Button>
        <Button onClick={goToDayView}>day</Button>
      </div>
    </div>
  )
}

export default CalendarToolbar
