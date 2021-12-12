//This is the map object that shows up first on the website

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //leaflet overhead and tools available to us
import "./Map.css";
import features from "../data/countries.json";                          //Accessor to our covid data for the map object

//Map needs to be initlized with some specific attributes to show up. A map will not render if it does not have a height and width
const Map = () => {
  const mapStyle = {
    height: "55vh",
    width: "85%",
    margin: "0 auto",
  };

  return (
    <div className="container">

    {/* MapContainer is a window that displays the map on our website */}
      <MapContainer
        zoom={6}
        scrollWheelZoom={true}
        style={mapStyle}
        center={[34.0522, 118.2437]}
      >
        {/* TileLayer is the image files of the map to be used in MapContainer */}
        <TileLayer
          attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
          url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
        {/* Makes a marker on the map for each country in our data set */}
        {features.map((ft) => (
          <Marker
            key={ft.countryInfo._id}
            position={[ft.countryInfo.lat, ft.countryInfo.long]}
          />
        ))}
      </MapContainer>
    </div>
  );
};
export default Map;
