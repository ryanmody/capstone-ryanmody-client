import React, { useState } from "react";
import "./TaskListComponent.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const TaskListComponent = ({ tasksDay, month, date }) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [isVisible, setIsVisible] = useState(0);

  const navigate = useNavigate()

  function visibilityHandler(id) {
    setIsVisible(isVisible === id ? 0 : id);
    console.log(isVisible);
  }

  async function doneHandler(id) {

    console.log(id)
    try {
      await axios.delete(`${baseUrl}/${id}`)
      navigate(0)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className="tasks-title">
        tasks for {month} {date}:
      </h1>

      <div className="tasks-list">
        {tasksDay.map((task) => (
          <div className="tasks-list__parent" key={task.id}>
            <div  className="tasks-list__container">
              <Link
                onClick={() => visibilityHandler(task.id)}
                className={`tasks-list__category tasks-list__category--${task.color}`}
              >
                {task.name}
              </Link>

              {/* Only render the dropdown if it matches the useState variable*/}
              {/* {isVisible == task.id ? (
                <div className="tasks-list__dropdown tasks-list__dropdown--visible">{task.description}</div>
              ) : null} */}

              <div
                className={`tasks-list__dropdown ${
                  isVisible == task.id ? `tasks-list__dropdown--visible` : ``
                }`}
              >
                <div>{task.description}</div>
                <div className="tasks-list__options">
                  <Link className="tasks-list__options--edit">Edit</Link>
                  <Link className="tasks-list__options--done" onClick={() => doneHandler(task.id)}>Done</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskListComponent;
