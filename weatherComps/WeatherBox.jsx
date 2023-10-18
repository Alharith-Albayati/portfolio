import React, { useRef, useState, useEffect } from "react";

const WeatherBox = () => {
  const city = useRef(null);
  const [location, setLocation] = useState(null);
  const [temp, setTemp] = useState(null);
  function clickSearch() {
    setLocation(city.current.value);
  }

  useEffect(() => {
    async function getCurrentWeather() {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=69204b963e7b4f58972182713231510&q=${location}`
        );
        if (!res.ok) {
          throw new Error("calling API failed");
        }
        const parsedRes = await res.json();
        setTemp(parsedRes.current.temp_c);
      } catch (error) {
        console.error(error);
      }
    }
    if (location) {
      getCurrentWeather();
    }
  }, [location]);

  return (
    <>
      <div className="h-24 w-fit mx-auto mb-4 bg-transparent flex items-center gap-x-2">
        {/* this is the div for the input and buttons */}
        <input
          ref={city}
          type="text"
          placeholder="Enter location here..."
          className=" bg-slate-100 pl-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none"
        />
        <button
          onClick={clickSearch}
          className="bg-indigo-500 text-violet-200 rounded-lg px-4 py-2 hover:bg-indigo-700 ease-in duration-400"
        >
          Search
        </button>
        <button className="bg-indigo-500 text-violet-200 rounded-lg px-4 py-2 hover:bg-indigo-700 ease-in duration-400">
          Current
        </button>
      </div>
      <div className="h-[70vh] w-[90vw] sm:w-[80vw] lg:w-[50vw] mx-auto bg-[rgb(34,43,71)] rounded-lg">
        {/* this is the div for the weather info */}
        <h1>
          here it is the weather info:
          {location};
          <br />
          {temp} C
        </h1>
      </div>
    </>
  );
};

export default WeatherBox;
