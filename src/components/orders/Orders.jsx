import React, { useState } from "react";
import "./Orders.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import bread from "../../img/bread-hero.jpg";

const options = ["W przygotowaniu", "Do odbioru", "Odebrane"];

const Orders = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

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
              <th>Data Odbioru</th>
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
              <td>40.99 zł</td>
              <td>
                <div>
                  <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    id="user-order-status"
                    options={options}
                    sx={{ width: 210 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Zmień Status" />
                    )}
                  />
                </div>
              </td>
              <td>17.05.2023 07:25</td>
              <td>18.05.2023 09:20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
