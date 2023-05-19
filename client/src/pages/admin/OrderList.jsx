import React from "react";
import "./OrderList.scss";

import Orders from "../../components/orders/Orders";
import HorizontalBar from "../../components/horizontalBar/HorizontalBar";
import SearchOrders from "../../components/searchOrders/SearchOrders";
const OrderList = () => {
  return (
    <div className="bakery-order-list">
      <div className="container">
        <div className="left">
          <HorizontalBar />
        </div>
        <div className="right">
          <div className="main-content">
            <SearchOrders />
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
