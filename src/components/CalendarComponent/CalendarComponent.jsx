import React from 'react'
import './CalendarComponent.scss'

const CalendarHeaderComponent = () => {

  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

  return (
    <>
        <div className='daysofweek'>
          <p className='daysofweek__day'>Sun</p>
          <p className='daysofweek__day'>Mon</p>
          <p className='daysofweek__day'>Tue</p>
          <p className='daysofweek__day'>Wed</p>
          <p className='daysofweek__day'>Thu</p>
          <p className='daysofweek__day'>Frid</p>
          <p className='daysofweek__day'>Sat</p>
        </div>

        <div className='calendar'>

          {dates.map(date => (
            <div className='calendar__date'>{date}</div>
          ))}
        </div>
    </>
  )
}

export default CalendarHeaderComponent