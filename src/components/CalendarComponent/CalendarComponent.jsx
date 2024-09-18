import React, { useEffect, useState } from "react";
import "./CalendarComponent.scss";
import SubheaderComponent from "../SubheaderComponent/SubheaderComponent";
import { Link } from "react-router-dom";

const CalendarHeaderComponent = ({ categories, tasksMonth, dates, month, date }) => {

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
        {dates.map((singleDate, index) => (

          <Link key={index} to={`/${month}/${singleDate}`} className="calendar__date">
            <div>{singleDate || ""}</div>
            <div className="calendar__bubble-container">
              {tasksMonth.map((task) =>
                Number(task.date) === Number(singleDate) ? (
                  <div
                    key={task.id}
                    className={`calendar__bubble calendar__bubble--${task.color}`}
                  ></div>
                ) : null
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CalendarHeaderComponent;
