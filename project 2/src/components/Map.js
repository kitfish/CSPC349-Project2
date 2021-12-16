//This is the map object that shows up first on the website

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //leaflet overhead and tools available to us
import "./Map.css";
import features from "../data/countries.json";                          //Accessor to our covid data for the map object
import * as iconColor from "./leaflet-color-markers.js";                //Exported colored markers


//Map needs to be initlized with some specific attributes to show up. A map will not render if it does not have a height and width
const Map = () => {
  const mapStyle = {
    height: "75vh",
    width: "90%",
    margin: "0 auto",
  };

    //Determines the color of the map markers depending on how many covid cases are found
    function selectColor(props){
      var icon = iconColor.greenIcon;

      if(props > 5000000){return iconColor.redIcon}
      else if(props > 1000000){return iconColor.orangeIcon}
      else if(props > 250000){return iconColor.yellowIcon}

      return icon;
    }


  return (
    <div className="container">

    {/* MapContainer is a window that displays the map on our website */}
      <MapContainer
        zoom={6}
        scrollWheelZoom={true}
        style={mapStyle}
        center={[37,-100]}
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
            icon={selectColor(ft.cases)}
          >
            {/* Displays information about covid cases when the marker is clicked on */}
            <Popup>
              <h4>{ft.country}</h4>
              <hr/>
              <h5>Cases: {ft.cases}</h5>
              <h5>Deaths: {ft.deaths}</h5>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default Map;
