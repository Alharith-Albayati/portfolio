import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const WeatherBox = () => {
  const city = useRef(null);
  const [location, setLocation] = useState(null);
  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(
    "//cdn.weatherapi.com/weather/64x64/day/266.png"
  );
  const [time, setTime] = useState(null);
  const [convDate, setConvDate] = useState(null);
  const [status, setStatus] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [isCurrented, setIsCurrented] = useState(false);
  const [forecastDays, setForecastDays] = useState([]);
  const [days, setDays] = useState([]);
  const [icons, setIcons] = useState([
    "//cdn.weatherapi.com/weather/64x64/day/266.png",
    "//cdn.weatherapi.com/weather/64x64/day/266.png",
    "//cdn.weatherapi.com/weather/64x64/day/266.png",
    "//cdn.weatherapi.com/weather/64x64/day/266.png",
    "//cdn.weatherapi.com/weather/64x64/day/266.png",
  ]);
  const [minTemp, setMinTemp] = useState([]);
  const [maxTemp, setMaxTemp] = useState([]);
  const [fIsClicked, setFIsClicked] = useState(false);
  function clickSearch() {
    setLocation(city.current.value);
    setIsCurrented(false);
  }

  const useFahrenheit = () => {
    setFIsClicked(true);
  };

  const useCelsius = () => {
    setFIsClicked(false);
  };

  function currentIsClicked() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error(
            "this is an error happened when retrieving the current coords: ",
            error
          );
        }
      );
    } else {
      console.log("geolocation is not supported in this browser");
    }

    getCurrentLocation(lat, lon);

    setIsCurrented(true);
    if (isCurrented) {
      getCurrentTime();
    }
  }

  const getCurrentLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_CURRENT_LOCATION_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(
          "there is an error with the response of getting current location"
        );
      }
      const ress = await response.json();
      setLocation(ress[0].local_names.en);
    } catch (error) {
      console.error(
        "this is the error massage of getting the location: ",
        error
      );
    }
  };

  const getDayAndTime = (getDate) => {
    const date = new Date(getDate);
    const options = {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date);
  };

  const getCurrentTime = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    setCurrentTime(formatter.format(date));
  };

  const Day = (day) => {
    const date = new Date(day);
    const options = {
      weekday: "long",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date);
  };

  useEffect(() => {
    async function getCurrentWeather(query) {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${query}`
        );
        if (!res.ok) {
          throw new Error("calling the weather api failed");
        }
        const parsedRes = await res.json();
        setTemp(parsedRes.current.temp_c);
        setIcon(parsedRes.current.condition.icon);
        if (!isCurrented) {
          setTime(parsedRes.location.localtime);
        }
        setStatus(parsedRes.current.condition.text);
        setHumidity(parsedRes.current.humidity);
        setWind(parsedRes.current.wind_kph);
      } catch (error) {
        console.error(
          "this is the error massage from the weather api: ",
          error
        );
      }
    }

    async function getForecastWeather(location) {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=5&aqi=no&alerts=no`
        );
        if (!response.ok) {
          throw new Error(
            "there was en error with the response of the forcast api"
          );
        }
        const resBody = await response.json();
        const days = resBody.forecast.forecastday.map((day) => day.date);
        setForecastDays(days);
        const abbDays = forecastDays.map((day) => Day(day));
        setDays(abbDays);
        const sevIcons = resBody.forecast.forecastday.map(
          (icon) => icon.day.condition.icon
        );
        setIcons(sevIcons);
        const min_temps = resBody.forecast.forecastday.map(
          (day) => day.day.mintemp_c
        );
        setMinTemp(min_temps);
        const max_temp = resBody.forecast.forecastday.map(
          (day) => day.day.maxtemp_c
        );
        setMaxTemp(max_temp);
      } catch (error) {
        console.error(
          "this is the error catched for the response of the forcastWeather api: ",
          error
        );
      }
    }

    if (location) {
      getCurrentWeather(location);
      getForecastWeather(location);
    }
  }, [location]);

  useEffect(() => {
    setConvDate(getDayAndTime(time));
  }, [time]);

  return (
    <>
      <div className="h-24 w-fit mx-auto py-4 mb-8 bg-transparent flex max-sm:flex-col gap-y-4 items-center gap-x-2 md:gap-x-4">
        {/* this is the div for the input and buttons */}
        <input
          ref={city}
          type="search"
          placeholder="Enter location here..."
          className=" bg-slate-100 pl-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none"
        />
        <div className="flex items-center justify-between gap-x-4 pb-4 md:pb-0">
          {/* this is the div containter for the search and current buttons */}
          <button
            onClick={clickSearch}
            className="bg-indigo-500 text-violet-200 rounded-lg px-4 py-2 hover:bg-indigo-700 ease-in duration-400"
          >
            Search
          </button>
          <button
            onClick={currentIsClicked}
            className="bg-indigo-500 text-violet-200 rounded-lg px-4 py-2 hover:bg-indigo-700 ease-in duration-400"
          >
            Current
          </button>
        </div>
      </div>
      <div
        className={`h-[70vh] w-[90vw] sm:w-[80vw] relative lg:w-[50vw] mx-auto bg-[rgb(34,43,71)] rounded-lg flex flex-col items-center ${
          !location && "justify-center"
        } pt-6`}
      >
        {/* this is the div for the weather info */}
        <h1 className="text-white text-4xl">{location}</h1>
        <div className="flex absolute top-8 right-2 px-6 py-2 justify-center gap-x-2">
          <button
            onClick={useCelsius}
            className="bg-indigo-500 text-violet-200 rounded-lg px-4 py-2 hover:bg-indigo-700 ease-in duration-400 text-center"
          >
            C
          </button>
          <button
            onClick={useFahrenheit}
            className="bg-indigo-500 text-violet-200 rounded-lg px-4 py-2 hover:bg-indigo-700 ease-in duration-400 text-center"
          >
            F
          </button>
        </div>
        {location ? (
          <>
            <div>
              {/* this is the div for the weather icon */}
              <Image
                src={`https:${icon}`}
                width={150}
                height={150}
                alt="weather icon"
              />
            </div>
            <div className="text-white text-3xl">
              {/* this is the div for the temperature */}
              <h3>
                {fIsClicked
                  ? ((9 / 5) * temp + 32).toFixed(2) + "F"
                  : temp + "C"}
              </h3>
            </div>
            <div className="text-white text-lg">
              {/*this is the div for the day and time */}
              <p>{isCurrented ? currentTime : convDate}</p>
            </div>
            <div className="text-white text-md">
              {/* this is the div for the status of the weather */}
              <p>
                {status} | Humidity: {humidity} % | Wind: {wind} km/h
              </p>
            </div>
            <div className="flex mt-12 justify-center gap-x-12">
              {/* this is the div for the weather of the days */}
              {[0, 1, 2, 3, 4].map((num, index) => {
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-white text-lg">
                      {/* day div */}
                      <h4>{days[num]}</h4>
                    </div>
                    <div>
                      {/* icon div */}
                      <Image
                        src={`https:${icons[num]}`}
                        alt="weather icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex gap-x-3">
                      {/* min-max temp div */}
                      <p className="text-red-300 text-md">
                        {fIsClicked
                          ? ((9 / 5) * minTemp[num] + 32).toFixed(2) + "F"
                          : minTemp[num] + "C"}
                      </p>
                      <p className="text-green-300 text-md">
                        {fIsClicked
                          ? ((9 / 5) * maxTemp[num] + 32).toFixed(2) + "F"
                          : maxTemp[num] + "C"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <h1 className="text-white text-3xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            No Data... please specify a valid location
          </h1>
        )}
      </div>
    </>
  );
};

export default WeatherBox;
