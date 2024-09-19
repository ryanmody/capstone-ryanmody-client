import React from "react";
import "./AddCategoryComponent.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategoryComponent = () => {

  const navigate = useNavigate()

  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const postNewCategory = async (newCategory) => {
    try {
      await axios.post(`${baseUrl}/categories`, newCategory)
    } catch (error) {
      console.error(error);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    //Get values from form
    const nameValue = event.target.name.value;
    const detailsValue = event.target.details.value
    const colorValue = event.target.dropdown.value;

    // Check that name has info typed in
    if (!nameValue) {
      alert("You need to fill out a name!");
      return;
    }

    // Check that name has info typed in
    if (!event.target.details.value) {
      alert("You need to fill out a description!");
      return;
    }

    const newCategory = {
      name: nameValue,
      details: detailsValue,
      color: colorValue,
    };

    postNewCategory(newCategory)
    alert(`${newCategory.name} successfully added!`)
    navigate('/october/16')
  }

  return (
    <>
      <div className="addcategory">
        <form onSubmit={submitHandler} className="addcategory__form" action="">
          <div className="addcategory__box">
            <label htmlFor="name" className="addcategory__labels">
              Name:
            </label>
            <input name="name" id="name" type="text"></input>
          </div>

          <div className="addcategory__box">
            <label htmlFor="details">Details:</label>
            <textarea name="details" id="details"></textarea>
          </div>

          <div className="addcategory__box">
            <label htmlFor="dropdown" className="addcategory__labels">
              Color:
            </label>
            <select id="dropdown" name="colors">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
            </select>
          </div>

          {/* <Link onClick={() => submitHandler()}> */}
          <button className="addcategory__button" type="submit">
            Create
          </button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
};

export default AddCategoryComponent;
