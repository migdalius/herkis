import React from "react";
import "./MyShopping.scss";
import SideBar from "../../components/sideBar/SideBar";
import Shopping from "../../components/shopping/Shopping";
const MyShopping = () => {
  return (
    <div className="my-shopping">
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <div className="main-content">
            <Shopping />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShopping;
