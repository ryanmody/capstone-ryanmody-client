import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RoutePage = () => {

    const navigate = useNavigate()

    const monthsArray = [
        "january", "february", "march", "april", "may", 
        "june", "july", "august", "september", "october", 
        "november", "december"
      ];

    
    function getCurrentDate() {
        const month = new Date().getMonth()
        const dateNumber = new Date().getDate()
        
        console.log(dateNumber, month)


        navigate(`/${monthsArray[month]}/${dateNumber}`)
    }

    useEffect(() => {
        getCurrentDate()
    }, [])


  return (
    <>
        <div>Loading...</div>
    </>
  )
}

export default RoutePage