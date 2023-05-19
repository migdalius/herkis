import React, { useState } from "react";
import "./Around.scss";

const Around = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation nie jest wspierane przez twoją przeglądarkę.");
    }
  };

  return (
    <div className="around" onClick={getLocation}>
      <h3>Znajdź najbliższą pieranie rzemieśniczą dla twojej lokalizacji</h3>
      <img src="./img/geo.svg" alt="" />
    </div>
  );
};

export default Around;
