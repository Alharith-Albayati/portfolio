import React from "react";
import { useRef, useState } from "react";

const InputPart = (props) => {
  const city = useRef(null);

  const [value, setValue] = useState(null);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const sendDataToParent = () => {
    const data = city.current.value;
    setValue(data);
    props.onDataFromChild(value);
  };

  function getUsersLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latit = position.coords.latitude;
        const longit = position.coords.longitude;
        setLat(latit);
        setLon(longit);
        async function getCurrentLocation() {
          if (lat && lon) {
            const res5 = await fetch(
              `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=85d1f10b1e28fa08bcb2c864fa11604f`
            );
            const res6 = await res5.json();
            if (res6.length > 0) {
              setCurrentLocation(res6[0].name);
            }
          }
        }
        getCurrentLocation();
        if (currentLocation !== null) {
          props.onCurrentLocation(currentLocation, lat, lon);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  return (
    <div className="flex gap-x-3 w-fit mx-auto h-fit pt-8">
      <input
        ref={city}
        type="search"
        className=" placeholder:text-lg placeholder-slate-400 py-3 px-3 rounded-xl"
        placeholder="Enter city name"
      />
      {/* above is the input search for the city*/}
      <button
        onClick={sendDataToParent}
        className="bg-violet-600 px-6 rounded-lg text-gray-200 text-lg"
      >
        {/* this is the search button*/}
        Search
      </button>
      <button
        onClick={getUsersLocation}
        className="bg-violet-600 px-6 rounded-lg text-gray-200 text-lg"
      >
        {/* this is the button for the current city you are in currently */}
        Current
      </button>
    </div>
  );
};

export default InputPart;
