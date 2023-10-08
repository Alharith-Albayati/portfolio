import InputPart from "@/weatherComps/InputPart";
import WeatherDiv from "@/weatherComps/WeatherDiv";
import React from "react";
import { useEffect, useState } from "react";

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [temp, setTemp] = useState(null);

  const handleDataFromChild = (data) => {
    setLocation(data);
  };

  const getCurrentLocationFromChild = (data, lat, lon) => {
    setLocation(data);
    setLatitude(lat);
    setLongitude(lon);
  };

  useEffect(() => {
    async function getLocation() {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=85d1f10b1e28fa08bcb2c864fa11604f`
      );
      const res2 = await res.json();
      if (res2.length > 0) {
        setLocation(res2[0].name);
        setLatitude(res2[0].lat);
        setLongitude(res2[0].lon);
      }
    }
    if (location) {
      getLocation();
    }
  }, [location]);

  useEffect(() => {
    async function getCurrentWeather() {
      const res3 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=85d1f10b1e28fa08bcb2c864fa11604f&units=metric`
      );
      const res4 = await res3.json();
      setTemp(res4.main.temp);
    }

    if (latitude !== null && longitude !== null) {
      getCurrentWeather();
    }
  }, [latitude, longitude]);

  return (
    <div className="w-full h-screen bg-[rgb(41,52,83)] font-Poppins">
      <InputPart
        onDataFromChild={handleDataFromChild}
        onCurrentLocation={getCurrentLocationFromChild}
      />
      <WeatherDiv
        location={location}
        lat={latitude}
        lon={longitude}
        temp={temp}
      />
    </div>
  );
};

export default Weather;
