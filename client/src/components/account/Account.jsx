import React from "react";
import "./Account.scss";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Account = () => {
  return (
    <div className="account">
      <h4>
        Witaj, Wojtek tylko niektóre piekarnie udostępniają możliwość zamawiania
        i opłacania produktów online.
      </h4>
      <div className="kokpit">
        <div className="kokpit-links">
          <p>Moje Rezerwacje</p>
          <ShoppingBagIcon style={{ fontSize: 100, color: "#c19b77" }} />
        </div>
        <div className="kokpit-links">
          <p>Moje Zakupy</p>
          <ShoppingBasketIcon style={{ fontSize: 100, color: "#c19b77" }} />
        </div>
        <div className="kokpit-links">
          <p>Ustawienia</p>
          <SettingsIcon style={{ fontSize: 100, color: "#c19b77" }} />
        </div>
        <div className="kokpit-links">
          <p>Wyloguj</p>
          <LogoutIcon style={{ fontSize: 100, color: "#c19b77" }} />
        </div>
      </div>
    </div>
  );
};

export default Account;
