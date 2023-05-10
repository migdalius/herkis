import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1>
            <i>Szukaj swojej</i> piekarni rzemieśniczej
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder="Szukaj piekarni.." />
            </div>
            <button>Szukaj</button>
          </div>
          <div className="popular">
            <span>Popularne:</span>
            <button>Będzie Dobrze</button>
            <button>Bread Morning</button>
            <button>Cała w Mące</button>
            <button>DEJ Piekarnia</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/bread-hero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
