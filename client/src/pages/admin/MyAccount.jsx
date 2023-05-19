import React from "react";
import "./MyAccount.scss";
import SideBar from "../../components/sideBar/SideBar";
import Account from "../../components/account/Account";
const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <div className="main-content">
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
