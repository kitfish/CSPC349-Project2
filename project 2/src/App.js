/*
    CPSC 349 Project 2 
    Barry and the Otters
*/

import React from "react";
import "./App.css";
import Map from "./components/Map"; //The leaflet map object and its functions
import Legend from "./components/Legend"; //An information box that will show up next to the map with some statistics about the map
import Ec from "./components/ec/Ec"; //eCharts component for charts and graphs
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="banner">
        <h3>COVID-19 CORONAVIRUS STATISTICS</h3>
      </div>
      <div className="positionrelative">
        <Map />
        <Legend />
      </div>
      <Ec />
    </div>
  );
}

export default App;
