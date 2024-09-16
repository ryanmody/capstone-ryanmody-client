import React from 'react'
import SubheaderComponent from '../../components/SubheaderComponent/SubheaderComponent'
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent'
import TaskListComponent from '../../components/TaskListComponent/TaskListComponent'

const HomePage = () => {
  return (
    <>
        <SubheaderComponent/>
        <CalendarComponent />
        <TaskListComponent />
    </>
  )
}

export default HomePage