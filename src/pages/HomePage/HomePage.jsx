import React from 'react'
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent'
import TaskListComponent from '../../components/TaskListComponent/TaskListComponent'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const HomePage = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [categories, setCategories] = useState([])
  const [day, setDay] = useState(1)
  const [tasks, setTasks] = useState([])
  const [dates, setDates] = useState([]);
  // Get the month from the URL
  const { month } = useParams();

    // Initalize an array of objects that'll be my "key" for determining how many boxes to "skip"
    const dateKey = [
      { day: "Sunday", skip: 0 },
      { day: "Monday", skip: 1 },
      { day: "Tuesday", skip: 2 },
      { day: "Wednesday", skip: 3 },
      { day: "Thursday", skip: 4 },
      { day: "Friday", skip: 5 },
      { day: "Saturday", skip: 6 },
    ];
  
    //Get all months data
    async function getMonths() {
      try {
        const response = await axios.get(`${baseUrl}/months`);
        const monthInfo = response.data;
  
        // Find which month we're on
        const foundMonth = monthInfo.find(
          (object) => object.month.toLowerCase() === month
        );
        if (foundMonth) {
          // Logic for figuring out how many boxes to "skip"
          const skip =
            dateKey.find((object) => object.day === foundMonth.startday).skip ||
            0;
  
          //Logic for getting how many days in the month
          const datesArray = Array.from(
            { length: foundMonth.days },
            (_, i) => i + 1
          );
  
          //Logic for adding empty string to array based on value of skip, then adding the days after in the month.
          const updatedDatesArray = [...Array(skip).fill(""), ...datesArray];
          setDates(updatedDatesArray);
        }
      } catch (error) {
        console.error(error);
      }
    }

  async function getAllCategories() {
    const response = await axios.get(`${baseUrl}/categories`)
    setCategories(response.data)
  }

  async function getAllTasks() {
    const response = await axios.get(`${baseUrl}/${month}/tasks`)
    console.log(response.data)
    setTasks(response.data)
  }

  useEffect(() => {
    getMonths();
    getAllCategories()
    getAllTasks()
  }, [month]); // Need this 'month' dependency to re-fetch data when 'month' changes


  return (
    <>
        {/* <SubheaderComponent/> */}
        <CalendarComponent month={month} dates={dates} categories={categories} tasks={tasks} />
        <TaskListComponent month={month} categories={categories} />
    </>
  )
}

export default HomePage