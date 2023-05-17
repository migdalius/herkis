import React from "react";
import HorizontalBar from "../../components/horizontalBar/HorizontalBar";
import "./AddOrder.scss";
import NewOrder from "../../components/newOrder/NewOrder";
const AddOrder = () => {
  return (
    <div className="bakery-add-order">
      <div className="container">
        <div className="left">
          <HorizontalBar />
        </div>
        <div className="right">
          <div className="main-content">
            <NewOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
