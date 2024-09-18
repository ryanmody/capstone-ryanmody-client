import React, { useEffect, useState } from "react";
import "./CalendarComponent.scss";
import SubheaderComponent from "../SubheaderComponent/SubheaderComponent";

const CalendarHeaderComponent = ({ categories, tasks, dates, month }) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

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
