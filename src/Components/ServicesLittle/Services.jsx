import React from "react";
import "./style.scss";
import Card from "react-bootstrap/Card";
import One from "../../Assets/1.svg";
import Two from "../../Assets/2.svg";
import Three from "../../Assets/3.svg";
import Four from "../../Assets/4.svg";
import Five from "../../Assets/5.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="card">
          <img src={One} alt="" />
          <p>Internet magazin</p>
        </div>
        <div className="card">
          <img src={Two} alt="" />
          <p>Landing Page</p>
        </div>
        <div className="card">
          <img src={Three} alt="" />
          <p>Texnik yordam</p>
        </div>
        <div className="card">
          <img src={Four} alt="" />
          <p>Korparativ saytlar</p>
        </div>
        <div className="card">
          <img src={Five} alt="" />
          <p>CRM sistemalar</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
