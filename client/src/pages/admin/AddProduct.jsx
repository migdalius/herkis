import React from "react";
import "./AddProduct.scss";
import HorizontalBar from "../../components/horizontalBar/HorizontalBar";
import Add from "../../components/add/Add";
const AddProduct = () => {
  return (
    <div className="bakery-add-product">
      <div className="container">
        <div className="left">
          <HorizontalBar />
        </div>
        <div className="right">
          <div className="main-content">
            <Add />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
