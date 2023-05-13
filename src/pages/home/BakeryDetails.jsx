import React from "react";
import "./BakeryDetails.scss";
import ProductCard from "../../components/productCard/ProductCard";
import { BsStarFill } from "react-icons/bs";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
const BakeryDetails = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%", typography: "body1", fontSize: "18px" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      sx={{ fontSize: "20px", px: 4 }}
                      label="Produkty 300"
                      value="1"
                    />
                    <Tab
                      sx={{ fontSize: "20px", px: 4 }}
                      label="Gdzie Pracujemy?"
                      value="2"
                    />
                    <Tab
                      sx={{ fontSize: "20px", px: 4 }}
                      label="O firmie"
                      value="3"
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div>
                    <ProductCard />
                  </div>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default BakeryDetails;
