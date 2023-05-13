import React from "react";
import "./BakeryDetails.scss";
import { BsStarFill } from "react-icons/bs";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const BakeryDetails = () => {
  return (
    <div className="bakery-details">
      <div className="container">
        <div className="bakery-front">
          <div className="bakery-img">
            <img
              src="../img/piekarnie/slider/bedzie_dobrze_piekarnia_rzemiesnicza_warszawa.jpg"
              alt=""
            />
          </div>
          <div className="bakery-title-container">
            <h3>Dobre Bardzo</h3>
          </div>
          <div className="adress-container">
            <div className="adress">
              <h4>Dane Kontaktowe:</h4>
              <p>ul. Koralowa 38</p>
              <p>05-077, Warszawa</p>
              <p>Tel: 500-600-700</p>
              <p>E-mail: test@gmail.com</p>
            </div>
            <div className="rating">
              <h4>Ocena Piekarni</h4>
              <div>
                <BsStarFill color={"#facc15"} size={32} />
                <BsStarFill color={"#facc15"} size={32} />
                <BsStarFill color={"#facc15"} size={32} />
                <BsStarFill color={"#facc15"} size={32} />
                <BsStarFill color={"#facc15"} size={32} />
              </div>
              <span>4.8/5</span>
            </div>
            <div className="social">
              <h4>Gdzie nas znajdziesz?</h4>
              <div className="wrap">
                <div className="icon-container">
                  <LanguageIcon fontSize="large" style={{ color: "#222" }} />
                </div>
                <div className="icon-container">
                  <FacebookIcon fontSize="large" style={{ color: "#222" }} />
                </div>
                <div className="icon-container">
                  <InstagramIcon fontSize="large" style={{ color: "#222" }} />
                </div>
                <div className="icon-container">
                  <YouTubeIcon fontSize="large" style={{ color: "#222" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>dupa</div>
      </div>
    </div>
  );
};

export default BakeryDetails;
