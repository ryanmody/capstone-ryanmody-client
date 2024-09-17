import React from "react";
import "./FooterComponent.scss";
import calendar from "../../assets/icons/Calendar.svg";
import check from "../../assets/icons/check-circle.svg";
import list from "../../assets/icons/List.svg";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__box">
          <img src={calendar} />
        </div>

        <div className="footer__box">
          <img src={check} />
        </div>

        <div className="footer__box footer__box--noborder">
          <img src={list} />
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
