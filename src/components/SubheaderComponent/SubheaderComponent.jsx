import React from "react";
import "./SubheaderComponent.scss";
import chevron from "../../assets/icons/chevron.svg";

const SubheaderComponent = ({ month }) => {
  return (
    <>
      <div className="month-year">
        <img className="month-year__chevron--yflip" src={chevron} alt="chevron" />
        <div className="month-year__title">{month} 2024</div>
        <img src={chevron} alt="chevron" />
      </div>
    </>
  );
};

export default SubheaderComponent;
