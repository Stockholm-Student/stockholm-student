/* eslint-disable */
import moment from 'moment'
import React, { Fragment, useMemo } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from '../assets/events'
import CalendarToolbar from './calendar-toolbar'

const mLocalizer = momentLocalizer(moment)

interface Event {
  id: number
  title: string
  start: Date
  end: Date
  style: any
}

const ColoredDateCellWrapper = ({
  children,
}: {
  children: React.ReactElement<Event>
}) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
export default function EventCalendar({ localizer = mLocalizer, ...props }) {
  const { defaultDate, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(),
      views: { month: true, week: true, day: true },
    }),
    []
  )

  return (
    <Fragment>
      <div className="event-calendar h-[80vh]" {...props}>
        <Calendar
          // id="event-calendar"
          // title="Event Calendar"
          // start={new Date(2021, 3, 1)}
          // end={new Date(2021, 3, 30)}
          defaultDate={defaultDate}
          events={events}
          localizer={localizer}
          components={{
            toolbar: CalendarToolbar,
          }}
          showMultiDayTimes
          step={60}
          views={views}
        />
      </div>
    </Fragment>
  )
}
