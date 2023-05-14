import React from "react";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3>Moje Konto</h3>
      <p>Moje Rezerwacje</p>
      <p>Moje Zakupy</p>
      <p>Ustawienia Konta</p>
      <p>Wyloguj</p>
    </div>
  );
};

export default SideBar;
