import React, { useState } from "react";
import "./HorizontalBar.scss";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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

  const AddOrder = () => {
    window.location.href = "/";
  };

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
            <BottomNavigationAction
              onClick={AddOrder}
              label="Dodaj Zamówienie"
              icon={<AddShoppingCartIcon />}
            />

            <BottomNavigationAction
              label="Lista Zamówień"
              icon={<ShoppingCartCheckoutIcon />}
            />
            <BottomNavigationAction label="Dodaj Produkt" icon={<AddIcon />} />
            <BottomNavigationAction
              label="Lista Produktów"
              icon={<ChecklistRtlIcon />}
            />
            <BottomNavigationAction
              label="Lista Klientów"
              icon={<PersonSearchIcon />}
            />
            <BottomNavigationAction
              label="Dane Piekarni"
              icon={<StoreIcon />}
            />
            <BottomNavigationAction
              label="Ustawienia"
              icon={<SettingsIcon />}
            />
            <BottomNavigationAction label="Wyloguj" icon={<LogoutIcon />} />
          </BottomNavigation>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default HorizontalBar;
