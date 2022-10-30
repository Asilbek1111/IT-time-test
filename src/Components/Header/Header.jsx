import React from "react";
import "./style.scss";
import Intro from "../../Assets/intro.svg";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <h1>Websaytlarni qayta ishlash va yaratish xizmati</h1>
          <Button size="lg" variant="outline-light">
            Konsultatsiya olish
          </Button>{" "}
        </div>
        <div className="right">
          <img src={Intro} />
        </div>
      </div>
    </div>
  );
};

export default Header;
