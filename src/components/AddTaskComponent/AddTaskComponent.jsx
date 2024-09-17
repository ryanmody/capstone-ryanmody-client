import React from "react";
import "./AddTaskComponent.scss";

const AddTaskComponent = () => {

    const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


  return (
    <>
      <div className="addtask">
        <form className="addtask__form" action="">
          <div className="addtask__box">
            <label htmlFor="name" className="addtask__labels">Name:</label>
            <input id="name" type="text"></input>
          </div>

          <div className="addtask__box">
            <label htmlFor="details">Details:</label>
            <textarea name="" id="details"></textarea>
          </div>

          <div className="addtask__box">
            <label htmlFor='dropdown' className="addtask__labels">
            Category:
            </label>
            <select id="dropdown" name="colors">
              <option value="option1">Red</option>
              <option value="option2">Blue</option>
              <option value="option3">Green</option>
            </select>
          </div>

          <div className="addtask__box">
            <h3 className="addtask__labels">Deadline:</h3>
            <div className="addtask__headline">
            <select className="addtask__monthday" id="dropdown" name="colors">
              <option value="option1">January</option>
              <option value="option2">February</option>
              <option value="option3">March</option>
              <option value="option3">April</option>
              <option value="option3">May</option>
              <option value="option3">June</option>
              <option value="option3">July</option>
              <option value="option3">August</option>
              <option value="option3">September</option>
              <option value="option3">October</option>
              <option value="option3">November</option>
              <option value="option3">December</option>
            </select>
            <select className="addtask__monthday" id="dropdown" name="colors">
                {dates.map(date => (
                    <option value={date}>{date}</option>
                ))}
            </select>
            </div>

          </div>


          <button className="addtask__button" type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default AddTaskComponent;
