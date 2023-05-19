import React from "react";
import "./MyReservation.scss";
import SideBar from "../../components/sideBar/SideBar";
import Reservation from "../../components/reservation/Reservation";
const MyReservation = () => {
  return (
    <div className="my-account">
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <div className="main-content">
            <Reservation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservation;
