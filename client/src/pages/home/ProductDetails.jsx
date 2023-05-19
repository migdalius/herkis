import React, { useState } from "react";
import "./ProductDetails.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const ProductDetails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  return (
    <div className="productDetails">
      <div className="container">
        <div className="left">
          <h1>Chleb orkiszowy z mandarynką</h1>
          <span>Waga produktu: 500g</span>
          <div className="slider">
            <div className="slider__container">
              <div
                className="slider__slide"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="slider__item">
                  <img
                    src="http://127.0.0.1:5173/img/bread-hero.jpg"
                    alt="slide 1"
                  />
                </div>
                <div className="slider__item">
                  <img
                    src="http://127.0.0.1:5173/img/bread-hero.jpg"
                    alt="slide 2"
                  />
                </div>
                <div className="slider__item">
                  <img
                    src="http://127.0.0.1:5173/img/bread-hero.jpg"
                    alt="slide 3"
                  />
                </div>
              </div>
              <div className="slider__controls">
                <button
                  className="slider__control slider__control--prev"
                  onClick={() =>
                    handleSlideChange(Math.max(currentSlide - 1, 0))
                  }
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  className="slider__control slider__control--next"
                  onClick={() =>
                    handleSlideChange(Math.min(currentSlide + 1, 2))
                  }
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="desc-standard">
            <h3>Opis</h3>
          </div>
          <div className="desc-container">
            <div className="desc">
              <div className="product-title">Tytuł produktu</div>
              <div className="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate corrupti deleniti labore iste ipsa possimus quas amet
                fugiat, vitae temporibus incidunt placeat sequi quisquam
                architecto facere laudantium culpa vel veritatis?
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="sidebar">
            <h3 className="bakery-title">Dobre Bardzo</h3>
            <p className="bakery-rating">Ocena Piekarni: 4.5/5</p>
            <p className="product-weight">Waga: 500g</p>
            <p className="bakery-price">5,89 zł / szt.</p>
            <div className="bakery-counter">
              <p>Liczba sztuk</p>
              <div className="counter">
                <div className="button-container">
                  <button>-</button>
                  <input className="product-count" />
                  <button>+</button>
                </div>
                <p>z 15 791 sztuk</p>
              </div>
              <div className="bakery-button-container">
                <button>Rezerwuj Produkty</button>
                <span>
                  *Zarezerwowane produkty będą czekały do obioru w piekarni,
                  opłacisz je na miejscu.
                </span>
                <button disabled>Kup i Zapłać Online</button>
                <span>
                  *Jeżeli kupisz produkt, musisz go opłacić online i wybrać
                  odbiór w piekarni lub po opłaceniu dostawy zostanie ci
                  dostarczony do domu.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
