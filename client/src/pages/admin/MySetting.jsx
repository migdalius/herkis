import React from "react";
import "./MySetting.scss";
import SideBar from "../../components/sideBar/SideBar";
import Setting from "../../components/setting/Setting";
const MySetting = () => {
  return (
    <div className="my-setting">
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <div className="main-content">
            <Setting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySetting;
