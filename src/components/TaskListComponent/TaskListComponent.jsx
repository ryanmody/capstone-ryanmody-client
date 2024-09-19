import React from 'react'
import './TaskListComponent.scss'
import { Link } from 'react-router-dom'

const TaskListComponent = ({ tasksDay, month, date}) => {
  return (
    <>

        <h1 className='tasks-title'>tasks for {month} {date}:</h1>

        <div className='tasks-list'>

          {tasksDay.map(task => (

            <Link key={task.id} className={`tasks-list__category tasks-list__category--${task.color}`}>{task.name}</Link>

          ))}
        </div>
    
    </>
  )
}

export default TaskListComponent