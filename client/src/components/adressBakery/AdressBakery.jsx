import React, { useState } from "react";
import "./AdressBakery.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

const AdressBakery = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [zipCode, setZipCode] = useState("");

  const handleZipCodeChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = inputValue.replace(/^(\d{2})(\d{3})$/, "$1-$2");
    setZipCode(formattedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="adress-bakery-container">
      <h2>Dane Piekarni</h2>
      <ThemeProvider theme={theme}>
        <div className="bakery-container">
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                disabled
                label="Nazwa Piekarni"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Ulica"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Kod Pocztowy (xx-xxx)"
                value={zipCode}
                onChange={handleZipCodeChange}
                fullWidth
                margin="normal"
                inputProps={{
                  maxLength: 6,
                  pattern: "^\\d{2}-\\d{3}$",
                }}
              />
            </div>
            <div>
              <TextField
                label="Strona WWW"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Facebook"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Instagram"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Youtube"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
            </div>
          </form>
          <Button type="submit" variant="outlined">
            Zapisz Zmiany
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AdressBakery;
