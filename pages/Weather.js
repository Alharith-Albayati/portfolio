import InputPart from "@/weatherComps/InputPart";
import WeatherDiv from "@/weatherComps/WeatherDiv";
import React from "react";
import { useEffect, useState } from "react";

const Weather = () => {
  const [dataFromInput, setDataFromInput] = useState("");
  const [location, setLocation] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromInput(data);
  };

  useEffect(() => {
    async function getLocation() {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${dataFromInput}&appid=85d1f10b1e28fa08bcb2c864fa11604f`
      );
      const res2 = await res.json();
      if (res2.length > 0) {
        setLocation(res2[0].name);
      }
    }

    if (dataFromInput) {
      getLocation();
    }
  }, [dataFromInput]);
  return (
    <div className="w-full h-screen bg-[rgb(41,52,83)] font-Poppins">
      <InputPart onDataFromChild={handleDataFromChild} />
      <WeatherDiv location={location} />
    </div>
  );
};

export default Weather;
