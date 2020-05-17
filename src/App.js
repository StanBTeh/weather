import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp="19" city="Stan" />
      <WeatherCard temp="25" city="Nadine" />
      <WeatherCard temp="40" city="Ysabelle" />
    </div>
  );
}

export default App;
