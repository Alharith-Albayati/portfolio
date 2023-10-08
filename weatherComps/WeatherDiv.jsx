import React from "react";
import Image from "next/image";

const WeatherDiv = (props) => {
  return (
    <div className="w-[90vw] md:w-[80vw] lg:w-[60vw] h-[70vh] m-auto bg-[rgb(35,45,73)] mt-8 rounded-lg">
      {/* this is the main div for the weather info */}
      <div className="text-white text-3xl mx-auto w-fit h-fit translate-y-10">
        {/* this is the div for the h2 for the city name */}
        <h2>{props.location}</h2>
        <h3>
          {props.temp} C; {props.lat}; {props.lon}
        </h3>
      </div>
      <div>{/* this is the div for the icon */}</div>
      <div>{/* this is the div for the temperature */}</div>
      <div>{/* this is the div for the day and time*/}</div>
      <div>{/* this is the div for the weather information */}</div>
      <div>
        {/* this is the div for the favourite cities */}
        <div>{/* these are the favourite cities */}</div>
      </div>
    </div>
  );
};

export default WeatherDiv;
