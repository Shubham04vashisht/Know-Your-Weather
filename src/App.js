import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import MainSection from './components/MainSection';
import WeatherDetails from './components/WeatherDetails';
import getFormattedWeatherData from './components/FormatingData';
import { useEffect, useState } from "react";

const App = () => { 
  
  const [query, setQuery] = useState({q:"delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  console.log(weather);
  return (
    <>
    <div className="main">
     <Navbar setQuery={setQuery} units={units} setUnits={setUnits}/>
     {weather && (<div id="onlyID">
        <MainSection weather={weather}/>
        <WeatherDetails weather={weather}/> 
     </div>)
     }
    </div> 
    </>
  )
}

export default App

