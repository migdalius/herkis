import React from "react";
import "./OrderList.scss";
import SideBar from "../../components/sideBar/SideBar";
import Orders from "../../components/orders/Orders";
import HorizontalBar from "../../components/horizontalBar/HorizontalBar";
const OrderList = () => {
  return (
    <div className="bakery-order-list">
      <div className="container">
        <div className="left">
          <HorizontalBar />
        </div>
        <div className="right">
          <div className="main-content">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
