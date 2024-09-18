import React from 'react'
import './TaskListComponent.scss'

const TaskListComponent = ({ categories, month }) => {
  return (
    <>

        <h1 className='tasks-title'>tasks for {month} 1st:</h1>

        <div className='tasks-list'>

          {categories.map(category => (

            <div key={category.id} className={`tasks-list__category tasks-list__category--${category.color}`}>{category.name}</div>
          ))}
        </div>
    
    </>
  )
}

export default TaskListComponent