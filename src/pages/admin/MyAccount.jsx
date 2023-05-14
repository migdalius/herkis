import React from "react";
import "./MyAccount.scss";
const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="container">
        <div className="left">
          <div className="sidebar">
            <h3>Moje Konto</h3>
            <p>Moje Rezerwacje</p>
            <p>Moje Zakupy</p>
            <p>Ustawienia Konta</p>
            <p>Wyloguj</p>
          </div>
        </div>
        <div className="right">
          <div className="main-content">a</div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
