import React from "react";
import "./FooterComponent.scss";
import calendar from "../../assets/icons/Calendar.svg";
import check from "../../assets/icons/check-circle.svg";
import list from "../../assets/icons/List.svg";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <Link className="footer__link" to={'/'}>
          <div className="footer__box">
            <img src={calendar} />
          </div>
        </Link>

        <Link className="footer__link" to={'/addcategory'}>
          <div className="footer__box">
            <img src={check} />
          </div>
        </Link>

        <Link className="footer__link footer__link--noborder" to={'/addtask'}>
          <div className="footer__box footer__box--noborder">
            <img src={list} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default FooterComponent;
