import React, { useState } from "react";
import "./HorizontalBar.scss";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddIcon from "@mui/icons-material/Add";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const HorizontalBar = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <div className="horizontal-bar">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: 1380 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {/* <BottomNavigationAction
              component={Link}
              to="/moje-konto/piekarnia/dodaj-zamowienie"
              label="Dodaj Zamówienie"
              icon={<AddShoppingCartIcon />}
            /> */}

            <BottomNavigationAction
              component={Link}
              to="/moje-konto/piekarnia/lista-zamowien"
              label="Lista Zamówień"
              icon={<ShoppingCartCheckoutIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/moje-konto/piekarnia/dodaj-produkt"
              label="Dodaj Produkt"
              icon={<AddIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/moje-konto/piekarnia/lista-produktow"
              label="Lista Produktów"
              icon={<ChecklistRtlIcon />}
            />
            {/* <BottomNavigationAction
              label="Lista Klientów"
              icon={<PersonSearchIcon />}
            /> */}
            <BottomNavigationAction
              component={Link}
              to="/moje-konto/piekarnia/dane-piekarni"
              label="Dane Piekarni"
              icon={<StoreIcon />}
            />
            {/* <BottomNavigationAction
              label="Ustawienia"
              icon={<SettingsIcon />}
            /> */}
            <BottomNavigationAction label="Wyloguj" icon={<LogoutIcon />} />
          </BottomNavigation>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default HorizontalBar;
