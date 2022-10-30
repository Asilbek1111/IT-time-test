import React from "react";
import "./style.scss";
import Card from "react-bootstrap/Card";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Narxlar</h1>
      {/* <Fade left > */}
        <div className="container">
          <Card
            border="primary"
            style={{ width: "22rem", border: "3px solid" }}
          >
            <Card.Header className="heading one">Landing Page</Card.Header>
            <Card.Body>
              <Card.Title className="price">9 000 000 so'm dan</Card.Title>
              <Card.Text>
                <Flip bottom cascade>
                  <ul>
                    <li>Moslashuvchan dizayn</li>
                    <li>Sayt tarkibi</li>
                    <li>Analitik tizim</li>
                    <li>Pochta sozlamalari</li>
                    <li>Onlayn suhbat</li>
                    <li>Xosting va domen sovg'a sifatida</li>
                    <li>Bir yil davomida kafolatli qo'llab-quvvatlash</li>
                    <li>Trening - 1 soat 10 kundan boshlab muddat</li>
                  </ul>
                </Flip>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="secondary"
            style={{ width: "22rem", border: "3px solid" }}
          >
            <Card.Header className="heading two">Korporative sayt</Card.Header>
            <Card.Body>
              <Card.Title className="price">15 000 000 so'm dan</Card.Title>
              <Card.Text>
                <Flip bottom cascade>
                  <ul>
                    <li>Kontentni boshqarish tizimi</li>
                    <li>Moslashuvchan dizayn</li>
                    <li>Tovarlar yoki xizmatlar katalogi</li>
                    <li>Yangiliklar / Blog / Modullar</li>
                    <li>Pochta sozlamalari</li>
                    <li>Onlayn suhbat</li>
                    <li>Xosting va domen sovg'a sifatida</li>
                    <li>Bir yil davomida kafolatli qo'llab-quvvatlash</li>
                    <li>Trening - 2 soat 15 kundan boshlab muddat</li>
                  </ul>
                </Flip>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="success"
            style={{ width: "22rem", border: "3px solid" }}
          >
            <Card.Header className="heading three">
              Internet magazin
            </Card.Header>
            <Card.Body>
              <Card.Title className="price">20 000 000 so'm dan</Card.Title>
              <Card.Text>
                <Flip bottom cascade>
                  <ul>
                    <li>1C Bitrix kontentni boshqarish tizimi</li>
                    <li>Biznes nashri litsenziyasi</li>
                    <li>Bozordan tayyor yechim</li>
                    <li>Shaxsiy kabinet</li>
                    <li>Onlayn suhbat</li>
                    <li>To'lov tizimi Click, Payme, Visa, Mastercard</li>
                    <li>Domen SOVG'A </li>
                    <li>Telegram boti SOVG'A</li>
                    <li>Sodiqlik tizimi SOVG'A</li>
                    <li>Bir yil davomida kafolatli qo'llab-quvvatlash</li>
                    <li>Trening - 3 soat Muddati 20 kundan boshlab</li>
                  </ul>
                </Flip>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      {/* </Fade> */}
    </div>
  );
};

export default Pricing;
