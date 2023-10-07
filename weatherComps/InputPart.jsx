import React from "react";
import { useRef } from "react";

const InputPart = (props) => {
  const city = useRef(null);

  const sendDataToParent = () => {
    const data = city.current.value;

    props.onDataFromChild(data);
  };

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
      <button className="bg-violet-600 px-6 rounded-lg text-gray-200 text-lg">
        {/* this is the button for the current city you are in currently */}
        Current
      </button>
    </div>
  );
};

export default InputPart;
