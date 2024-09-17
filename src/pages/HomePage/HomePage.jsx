import React from 'react'
import SubheaderComponent from '../../components/SubheaderComponent/SubheaderComponent'
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent'
import TaskListComponent from '../../components/TaskListComponent/TaskListComponent'
import axios from 'axios'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [categories, setCategories] = useState([])

  async function getAllCategories() {
    const response = await axios.get(`${baseUrl}/categories`)
    setCategories(response.data)
  }

  useEffect( () => {
    getAllCategories()
  }, [])

  console.log(categories)
  return (
    <>
        <SubheaderComponent/>
        <CalendarComponent />
        <TaskListComponent categories={categories} />
    </>
  )
}

export default HomePage