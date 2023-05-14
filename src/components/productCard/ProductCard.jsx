import React from "react";
import "./ProductCard.scss";
const ProductCard = () => {
  return (
    <div className="product-cart">
      <div className="cart">
        <img src="../img/bread-hero.jpg" alt="" />
        <h4>Chleb orkiszowy z mandarynką</h4>
        <p>Waga: 500g</p>
        <div className="price-container">
          <span>5.65 zł</span>
          <button>Kup Teraz</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
