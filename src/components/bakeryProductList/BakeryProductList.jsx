import React, { useState } from "react";
import "./BakeryProductList.scss";

import bread from "../../img/bread-hero.jpg";
import Switch from "@mui/material/Switch";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const label = { inputProps: { "aria-label": "Switch demo" } };

const BakeryProductList = () => {
  return (
    <div className="products-table-container">
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Symbol Produktu</th>
              <th>Nazwa Produktu</th>
              <th>Waga (g)</th>
              <th>Zdjęcie</th>
              <th>Cena</th>
              <th>Status Produktu</th>
              <th>Opcje Dodatkowe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>CK-400</td>
              <td>Chleb orkiszowy z masłem</td>
              <td>500</td>
              <td>
                <div className="product-container">
                  <div className="product-image-container">
                    <img src={bread} alt="" />
                  </div>
                </div>
              </td>
              <td>40.99 zł</td>
              <td>
                <ThemeProvider theme={theme}>
                  <div className="active-product">
                    <Switch {...label} defaultChecked />
                  </div>
                </ThemeProvider>
              </td>

              <td>
                <div className="action-container">
                  <EditIcon
                    className="action-icons"
                    style={{ color: "#555" }}
                  />
                  <DeleteIcon
                    className="action-icons"
                    style={{ color: "red" }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BakeryProductList;
