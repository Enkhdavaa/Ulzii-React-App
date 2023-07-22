import Kalend from 'kalend'
import { CalendarView } from 'kalend'
import 'kalend/dist/styles/index.css'
import moment from 'moment'
import { useState, useEffect } from 'react'

export default function Events()
{
    const [events, setEvents] = useState([])

    useEffect(() => 
    {
        setEvents([
            {
                id: 1,
                startAt: '2023-07-25T12:00:00.000Z',
                endAt: '2023-07-25T13:00:00.000Z',
                timezoneStartAt: 'Europe/Berlin', // optional
                summary: 'Meeting to discuss over website',
                color: 'blue',
                calendarID: 'work'
            },
            {
                id: 2,
                startAt: '2023-07-21T18:00:00.000Z',
                endAt: '2023-07-21T19:00:00.000Z',
                timezoneStartAt: 'Europe/Berlin', // optional
                summary: 'test2',
                color: 'blue'
            }
        ])    
    }, [])

    return <div>
        <Kalend 
            // onEventClick={onEventClick}
            // onNewEventClick={onNewEventClick}
            events={events}
            // initialDate={'2023-07-22T22:16:55.262Z'}
            hourHeight={60}
            initialView={CalendarView.AGENDA}
            disabledViews={[CalendarView.DAY, CalendarView.THREE_DAYS, CalendarView.WEEK, CalendarView.MONTH]}
            // onSelectView={onSelectView}
            // selectedView={selectedView}
            // onPageChange={onPageChange}
            timeFormat={'24'}
            weekDayStart={'Monday'}
            calendarIDsHidden={['work']}
            language={'en'}
        />
    </div>
}