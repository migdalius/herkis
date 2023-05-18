import React, { useState } from "react";
import "./Add.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
const categories = [
  {
    value: "001",
    label: "Chleb",
  },
  {
    value: "002",
    label: "Bułki i Bagietki",
  },
  {
    value: "003",
    label: "Pieczywo słodkie",
  },
  {
    value: "004",
    label: "Ciasta",
  },
  {
    value: "005",
    label: "Ciastka",
  },
  {
    value: "006",
    label: "Przetwory",
  },
  {
    value: "007",
    label: "Napoje",
  },
];

const Add = () => {
  return (
    <>
      <h2>Dodaj Produkt</h2>
      <ThemeProvider theme={theme}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="produkt-form">
            <div className="product-flex">
              <TextField
                required
                id="product-name"
                label="Nazwa Produktu"
                defaultValue="Np: Chleb orkiszowy"
              />
              <TextField
                required
                id="product-category"
                select
                label="Kategoria Produktu"
                defaultValue=""
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="text-content">
              <TextField
                id="outlined-multiline-static"
                label="Opis produktu"
                multiline
                rows={4}
                defaultValue="Opis..."
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <TextField
                label="Waga Produktu"
                type="number"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">g</InputAdornment>
                  ),
                }}
              />
              <TextField label="Cena" type="number" id="product-price" />
            </div>
          </div>
        </Box>
        <div className="button-product">
          <Button variant="outlined">Dodaj Produkt</Button>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Add;
