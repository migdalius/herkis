import React from "react";
import "./Where.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Where = () => {
  const position = [52.22080860416399, 21.226402371164358];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>Koralowa 38, 05-077 Warszawa</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Where;
