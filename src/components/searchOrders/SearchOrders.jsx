import React from "react";
import "./SearchOrders.scss";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const SearchOrders = () => {
  return (
    <div className="search-orders">
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
          style={{ backgroundColor: "#ddd", cursor: "not-allowed" }}
        >
          Dodaj Zamówienie
        </Button>
      </div>
    </div>
  );
};

export default SearchOrders;
