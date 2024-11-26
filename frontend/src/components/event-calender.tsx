import moment from 'moment'
import React, { Fragment, useMemo } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from '../assets/events'
import * as dates from '../lib/dates'
import CalendarToolbar from './calendar-toolbar'

const mLocalizer = momentLocalizer(moment)

const ColoredDateCellWrapper = ({ children }) =>
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
  const { defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(),
      max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
      views: { month: true, week: true, day: true },
    }),
    []
  )

  return (
    <Fragment>
      <div className="event-calendar h-[80vh]" {...props}>
        <Calendar
          defaultDate={defaultDate}
          events={events}
          localizer={localizer}
          max={max}
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
