import React from 'react'
import "./SubheaderComponent.scss"

const SubheaderComponent = ({ month }) => {
  return (
    <>
        <div className='month-year'>{month} 2024</div>

    </>
  )
}

export default SubheaderComponent