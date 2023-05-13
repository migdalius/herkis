import React, { useState } from "react";
import "./BakeryList.scss";
import {
  BsBicycle,
  BsFillAirplaneFill,
  BsFillBagFill,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import Button from "@mui/material/Button";
import { WhereToVote } from "@mui/icons-material";

import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const BakeryList = () => {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleChanges = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="bakery-list">
      <ThemeProvider theme={theme}>
        <div className="container">
          <div className="left">
            <div className="sidebar">
              <div className="localization">
                <Button variant="outlined" endIcon={<WhereToVote />}>
                  Najbliższa Piekarnia
                </Button>
                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Miasto
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={city}
                      label="Miasto"
                      onChange={handleChange}
                    >
                      <MenuItem value={"warszawa"}>Warszawa</MenuItem>
                      <MenuItem value={"kraków"}>Kraków</MenuItem>
                      <MenuItem value={"Szczecin"}>Szczecin</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="label">
                <FormControlLabel control={<Switch />} label="Otwarte Teraz" />
                <FormControlLabel
                  control={<Switch />}
                  label="Dostawa do domu"
                />
              </div>
              <div className="sort">
                <p>Sortuj wg</p>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChanges}
                  >
                    <FormControlLabel
                      value="mostpouplar"
                      control={<Radio />}
                      label="Najpopularniejsze"
                    />
                    <FormControlLabel
                      value="rating"
                      control={<Radio />}
                      label="Ocena Piekarni"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="right">
            {/* Start */}
            <div className="bakery-container">
              <div className="left-side">
                <img
                  src="../img/piekarnie/slider/bedzie_dobrze_piekarnia_rzemiesnicza_warszawa.jpg"
                  alt=""
                />
              </div>
              <div className="right-side">
                <div className="bakery-title">Będzie dobrze</div>
                <div className="bakery-street">ul.Koralowa 38</div>
                <div className="bakery-city">Warszawa</div>
                <div className="delivery-container">
                  <div className="delivery">
                    <BsFillBagFill color={"#c19b77"} size={30} />
                    <p>Odbiór osobisty:</p>
                    <span>TAK</span>
                  </div>
                  <div className="delivery">
                    <BsBicycle color={"#c19b77"} size={30} />
                    <p>Dostawa do domu:</p>
                    <span>TAK</span>
                  </div>
                </div>
                <div className="rating-stars-contaner">
                  <p>Ocena Piekarni:</p>
                  <div>
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarHalf color={"#facc15"} size={18} />
                  </div>
                </div>
                <div className="rating-container">
                  <p>Jakość: 4.4/5</p>
                  <p>Ceny: 3.4/5</p>
                  <p>Obsługa: 2.4/5</p>
                </div>
              </div>
              <div className="button-container">
                <button>Produkty Piekarni</button>
              </div>
            </div>
            {/* End */}
            <div className="bakery-container">
              <div className="left-side">
                <img
                  src="../img/piekarnie/slider/bedzie_dobrze_piekarnia_rzemiesnicza_warszawa.jpg"
                  alt=""
                />
              </div>
              <div className="right-side">
                <div className="bakery-title">Będzie dobrze</div>
                <div className="bakery-street">ul.Koralowa 38</div>
                <div className="bakery-city">Warszawa</div>
                <div className="delivery-container">
                  <div className="delivery">
                    <BsFillBagFill color={"#c19b77"} size={30} />
                    <p>Odbiór osobisty:</p>
                    <span>TAK</span>
                  </div>
                  <div className="delivery">
                    <BsBicycle color={"#c19b77"} size={30} />
                    <p>Dostawa do domu:</p>
                    <span>TAK</span>
                  </div>
                </div>
                <div className="rating-stars-contaner">
                  <p>Ocena Piekarni:</p>
                  <div>
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarFill color={"#facc15"} size={18} />
                    <BsStarHalf color={"#facc15"} size={18} />
                  </div>
                </div>
                <div className="rating-container">
                  <p>Jakość: 4.4/5</p>
                  <p>Ceny: 3.4/5</p>
                  <p>Obsługa: 2.4/5</p>
                </div>
              </div>
              <div className="button-container">
                <button>Produkty Piekarni</button>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default BakeryList;
