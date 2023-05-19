import React from "react";
import "./Reservation.scss";

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="table">
        <div className="user-reservation-container">
          <div className="user-pay">
            <p>Zamówienie gotowe do odbioru</p>
            <p>Status: Odebrane</p>
          </div>
          <div className="user-desc">
            <div className="date-container">
              <p>05.06.2023 14:21</p>
              <p className="user-company">Dobre bardzo</p>
            </div>
            <div>
              <p>Kod odbioru: 42334</p>
            </div>
          </div>
          <div className="user-product-container">
            <div className="single-product">
              <img src="../img/bread-hero.jpg" alt="" />
              <p className="single-product-title">
                Chleb orkiszowy z mandarynką
              </p>
              <p className="single-product-price">2 x 5.65 zł</p>
              <div className="single-product-sum">11.30 zł</div>
            </div>
          </div>
          <div className="single-product-sum">
            <p>Łączna suma do zapłaty w piekarni:</p>
            <p>11.30 zł</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
