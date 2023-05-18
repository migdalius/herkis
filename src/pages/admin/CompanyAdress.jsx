import React from "react";
import "./CompanyAdress.scss";
import HorizontalBar from "../../components/horizontalBar/HorizontalBar";
import AdressBakery from "../../components/adressBakery/AdressBakery";
const CompanyAdress = () => {
  return (
    <div className="bakery-adress">
      <div className="container">
        <div className="left">
          <HorizontalBar />
        </div>
        <div className="right">
          <div className="main-content">
            <AdressBakery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAdress;
