/*
    CPSC 349 Project 2 
    Barry and the Otters
*/

import React, {Component} from "react";
import './App.css';
import Map from "./components/Map";         //The leaflet map object and its functions
import Legend from "./components/Legend";   //An information box that will show up next to the map with some statistics about the map


function App() {
  return (
    <div className='container'>
      <Map/>
      <Legend/>
       {/* --Additional html or components can be added under this line to render them directly under the map-- */}

    </div>
  );
}

export default App;
