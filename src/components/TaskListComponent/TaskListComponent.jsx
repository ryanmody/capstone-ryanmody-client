import React from 'react'
import './TaskListComponent.scss'

const TaskListComponent = ({ categories }) => {
  return (
    <>

        <h1 className='tasks-title'>Tasks for Jan 1st:</h1>

        <div className='tasks-list'>

          {categories.map(category => (

            <div key={category.id} className={`tasks-list__category tasks-list__category--${category.color}`}>{category.name}</div>
          ))}
            {/* <div className='tasks-list__category'>Networking, Career, and Events</div> */}
        </div>
    
    </>
  )
}

export default TaskListComponent