import React from 'react'
import './CalendarComponent.scss'

const CalendarHeaderComponent = () => {
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
    </>
  )
}

export default CalendarHeaderComponent