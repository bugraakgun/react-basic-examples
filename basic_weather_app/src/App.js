// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePosition } from 'use-position';
import './App.css';
import HavaDurumu from './components/HavaDurumu';

function App() {
  const [weather, setWeather] = useState();
  const key = '-'; //open weather api key
  const lang = navigator.language.split('-')[0];

  const {
    latitude,
    longitude,
  } = usePosition();

  const getData = async (lat,lon) => {
    try {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    latitude && longitude && getData(latitude,longitude);
  },[latitude,longitude]);

  

  return (
    <>
      <HavaDurumu weather={weather} />
    </>
  );
}

export default App;
