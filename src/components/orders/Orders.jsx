import React from "react";
import "./Orders.scss";

import bread from "../../img/bread-hero.jpg";

const Orders = () => {
  return (
    <div className="orders-table-container">
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Kod odbioru</th>
              <th>Imię i Nazwisko</th>
              <th>Telefon</th>
              <th>Zamówienie</th>
              <th>Kwota</th>
              <th>Status Zamówienia</th>
              <th>Data zamówienia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>D4032</td>
              <td>Wojciech Nowak</td>
              <td>600-700-800</td>
              <td>
                <div className="order-product-container">
                  <div className="order-image-container">
                    <img src={bread} alt="" />
                  </div>
                  <div className="order-title-container">
                    <p>3x Podłoże truskawka poziomka ziemia specjalistyczna</p>
                    <p>7.47 zł</p>
                  </div>
                </div>
              </td>
              <td>New York</td>
              <td>New York</td>
              <td>New York</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
