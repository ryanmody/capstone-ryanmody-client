import React from "react";
import "./AddCategoryComponent.scss";

const AddCategoryComponent = () => {
  return (
    <>
      <div className="addcategory">
        <form className="addcategory__form" action="">
          <div className="addcategory__box">
            <label htmlFor="name" className="addcategory__labels">Name:</label>
            <input id="name" type="text"></input>
          </div>

          <div className="addcategory__box">
            <label htmlFor="details">Details:</label>
            <textarea name="" id="details"></textarea>
          </div>

          <div className="addcategory__box">
            <label htmlFor='dropdown' className="addcategory__labels">
            Color:
            </label>
            <select id="dropdown" name="colors">
              <option value="option1">Red</option>
              <option value="option2">Blue</option>
              <option value="option3">Green</option>
            </select>
          </div>

          <button className="addcategory__button" type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default AddCategoryComponent;
