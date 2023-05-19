import React from "react";
import "./ProductList.scss";
import HorizontalBar from "../../components/horizontalBar/HorizontalBar";
import BakeryProductList from "../../components/bakeryProductList/BakeryProductList";

import SearchProducts from "../../components/searchProducts/SearchProducts";

const ProductList = () => {
  return (
    <div className="bakery-product-list">
      <div className="container">
        <div className="left">
          <HorizontalBar />
        </div>
        <div className="right">
          <div className="main-content">
            <SearchProducts />
            <BakeryProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
