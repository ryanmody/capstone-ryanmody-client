import React, { useEffect, useState } from "react";
import "./CalendarComponent.scss";
import axios from "axios";
import SubheaderComponent from "../SubheaderComponent/SubheaderComponent";
import { useParams } from "react-router-dom";

const CalendarHeaderComponent = ({ categories, tasks }) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const { month } = useParams();

  const [dates, setDates] = useState([]);

  const dateKey = [
    { day: "Sunday", skip: 0 },
    { day: "Monday", skip: 1 },
    { day: "Tuesday", skip: 2 },
    { day: "Wednesday", skip: 3 },
    { day: "Thursday", skip: 4 },
    { day: "Friday", skip: 5 },
    { day: "Saturday", skip: 6 },
  ];

  async function getMonths() {
    try {
      const response = await axios.get(`${baseUrl}/months`);
      const monthInfo = response.data;
      console.log(monthInfo);

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

  useEffect(() => {
    getMonths();
  }, [month]); // Need this `month` dependency to re-fetch data when `month` changes

  return (
    <>
      <SubheaderComponent month={month} />
      <div className="daysofweek">
        <p className="daysofweek__day">Sun</p>
        <p className="daysofweek__day">Mon</p>
        <p className="daysofweek__day">Tue</p>
        <p className="daysofweek__day">Wed</p>
        <p className="daysofweek__day">Thu</p>
        <p className="daysofweek__day">Frid</p>
        <p className="daysofweek__day">Sat</p>
      </div>

      <div className="calendar">
        {dates.map((date, index) => (
          <div key={index} className="calendar__date">
            <div>{date || ""}</div>
            <div className="calendar__bubble-container">
              {tasks.map((task) =>
                Number(task.date) === Number(date) ? (
                  <div
                    key={task.id}
                    className={`calendar__bubble calendar__bubble--${task.color}`}
                  ></div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarHeaderComponent;
