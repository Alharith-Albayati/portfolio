import React from "react";

const WeatherDiv = (props) => {
  return (
    <div className="w-[40vw] h-[70vh] m-auto bg-[rgb(35,45,73)] mt-8 rounded-lg">
      {/* this is the main div for the weather info */}
      <div className="text-white text-3xl mx-auto w-fit h-fit translate-y-10">
        {/* this is the div for the h2 for the city name */}
        <h2>{props.location}</h2>
      </div>
    </div>
  );
};

export default WeatherDiv;
