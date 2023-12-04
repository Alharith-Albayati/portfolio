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
  function clickSearch() {
    setLocation(city.current.value);
    setIsCurrented(false);
  }

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
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=85d1f10b1e28fa08bcb2c864fa11604f`
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
          `http://api.weatherapi.com/v1/current.json?key=c24c069d750f42d387e144638230311&q=${query}`
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
          `http://api.weatherapi.com/v1/forecast.json?key=c24c069d750f42d387e144638230311&q=${location}&days=5&aqi=no&alerts=no
      `
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
      <div className="h-24 w-fit mx-auto mb-4 bg-transparent flex items-center gap-x-2">
        {/* this is the div for the input and buttons */}
        <input
          ref={city}
          type="search"
          placeholder="Enter location here..."
          className=" bg-slate-100 pl-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none"
        />
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
      <div
        className={`h-[70vh] w-[90vw] sm:w-[80vw] lg:w-[50vw] mx-auto bg-[rgb(34,43,71)] rounded-lg flex flex-col items-center ${
          !location && "justify-center"
        } pt-6`}
      >
        {/* this is the div for the weather info */}
        <h1 className="text-white text-4xl">{location}</h1>
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
              <h3>{temp} C</h3>
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
              <div className="flex flex-col items-center">
                {/* first weather */}
                <div className="text-white text-lg">
                  {/* day div */}
                  <h4>{days[0]}</h4>
                </div>
                <div>
                  {/* icon div */}
                  <Image
                    src={`https:${icons[0]}`}
                    alt="weather icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex gap-x-3">
                  {/* min-max temp div */}
                  <p className="text-red-300 text-md">{minTemp[0]} C</p>
                  <p className="text-green-300 text-md">{maxTemp[0]} C</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                {/* second weather */}
                <div className="text-white text-lg">
                  {/* day div */}
                  <h4>{days[1]}</h4>
                </div>
                <div>
                  {/* icon div */}
                  <Image
                    src={`https:${icons[1]}`}
                    alt="weather icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex gap-x-3">
                  {/* min-max temp div */}
                  <p className="text-red-300 text-md">{minTemp[1]} C</p>
                  <p className="text-green-300 text-md">{maxTemp[1]} C</p>
                </div>{" "}
              </div>
              <div className="flex flex-col items-center">
                {/* third weather */}
                <div className="text-white text-lg">
                  {/* day div */}
                  <h4>{days[2]}</h4>
                </div>
                <div>
                  {/* icon div */}
                  <Image
                    src={`https:${icons[2]}`}
                    alt="weather icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex gap-x-3">
                  {/* min-max temp div */}
                  <p className="text-red-300 text-md">{minTemp[2]} C</p>
                  <p className="text-green-300 text-md">{maxTemp[2]} C</p>
                </div>{" "}
              </div>
              <div className="flex flex-col items-center">
                {/* fourth weather */}
                <div className="text-white text-lg">
                  {/* day div */}
                  <h4>{days[3]}</h4>
                </div>
                <div>
                  {/* icon div */}
                  <Image
                    src={`https:${icons[3]}`}
                    alt="weather icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex gap-x-3">
                  {/* min-max temp div */}
                  <p className="text-red-300 text-md">{minTemp[3]} C</p>
                  <p className="text-green-300 text-md">{maxTemp[3]} C</p>
                </div>{" "}
              </div>
              <div className="flex flex-col items-center">
                {/* fifth weather */}
                <div className="text-white text-lg">
                  {/* day div */}
                  <h4>{days[4]}</h4>
                </div>
                <div>
                  {/* icon div */}
                  <Image
                    src={`https:${icons[4]}`}
                    alt="weather icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex gap-x-3">
                  {/* min-max temp div */}
                  <p className="text-red-300 text-md">{minTemp[4]} C</p>
                  <p className="text-green-300 text-md">{maxTemp[4]} C</p>
                </div>{" "}
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-white text-3xl ">
            No Data... please specify a valid location
          </h1>
        )}
      </div>
    </>
  );
};

export default WeatherBox;
