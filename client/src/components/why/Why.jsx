import React from "react";
import "./Why.scss";
const Why = () => {
  return (
    <div className="why">
      <div className="container">
        <div className="left">
          <h2>Dlaczego wybrać piekarnie rzemieśnicze?</h2>
          <div className="content">
            <div className="title-content">
              <img src="./img/check.png" alt="" />
              <div className="title">Wyższa jakość produktów</div>
            </div>
            <div className="desc">
              w piekarniach rzemieślniczych stosuje się tradycyjne metody
              produkcji oraz wysokiej jakości składniki, co przekłada się na
              wyższą jakość produktów. Można być pewnym, że produkty są świeże i
              smaczne.
            </div>
          </div>
          <div className="content">
            <div className="title-content">
              <img src="./img/check.png" alt="" />
              <div className="title">Unikalne produkty</div>
            </div>
            <div className="desc">
              piekarnie rzemieślnicze oferują zwykle produkty, które są unikalne
              dla danego regionu lub okazji. W piekarniach rzemieślniczych można
              znaleźć różnorodne chleby, bułki, ciasta i wypieki, których nie
              znajdziemy w zwykłej piekarni.
            </div>
          </div>
          <div className="content">
            <div className="title-content">
              <img src="./img/check.png" alt="" />
              <div className="title">Brak sztucznych dodatków</div>
            </div>
            <div className="desc">
              w piekarniach rzemieślniczych zwykle stosuje się naturalne
              składniki bez sztucznych dodatków, konserwantów czy barwników, co
              przekłada się na lepszą jakość i wartość odżywczą produktów.
            </div>
          </div>
          <div className="content">
            <div className="title-content">
              <img src="./img/check.png" alt="" />
              <div className="title">Lokalne wsparcie</div>
            </div>
            <div className="desc">
              wybierając piekarnię rzemieślniczą, wspieramy lokalne biznesy i
              rozwój lokalnej społeczności. Piekarnie rzemieślnicze są zwykle
              prowadzone przez małe rodziny lub niezależnych właścicieli, którzy
              inwestują swoją pracę i pasję w produkcję wysokiej jakości
              produktów.
            </div>
          </div>
        </div>
        <div className="right">
          <img src="./img/wzor.png" alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Why;
