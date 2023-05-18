import React from "react";
import "./SearchProducts.scss";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
const SearchProducts = () => {
  return (
    <div className="search-products">
      <div>
        <div className="seach-text">Szukaj kodu odbioru lub nazwiska</div>
        <div className="search-container">
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#c19b77", cursor: "pointer" }}
        >
          Dodaj Produkt
        </Button>
      </div>
    </div>
  );
};

export default SearchProducts;
