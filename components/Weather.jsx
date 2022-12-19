import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="relative flex flex-col justify-between max-w-[400px] w-full m-auto p-4 text-white z-10 "
    >
      {/*//! Title */}
      <p className="text-5xl mb-2 text-center font-bold text-shadow">
        {/* {data.name} */}
        {data.location.name}
      </p>
      <p className="text-md mb-5 text-center font-bold text-shadow">
        {data.location.country}
      </p>

      {/*//! Right now weather  */}
      <div className=" mb-10 flex justify-between px-5 items-center ">
        {/* bg-white/30 shadow-md shadow-black*/}
        <div className=" rounded-2xl flex flex-col items-center font-bold text-shadow ">
          <Image
            // src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            src={`http:${data.current.condition.icon}`}
            alt="/"
            width={80}
            height={80}
            className=""
          />
          {/* <p className="text-2xl ">{data.weather[0].main}</p> */}
          <p className="text-xl text-center">{data.current.condition.text}</p>
        </div>
        <p className="text-6xl font-bold text-shadow">
          {/* {data.main.temp.toFixed(0)}°C */}
          {data.current.temp_c.toFixed(0)}°C
        </p>
      </div>

      {/*//! MIN-MAX  */}
      {/* <div className=" mb-10 flex justify-between font-bold text-shadow"> */}
      {/*//! Min  */}
      {/* <div>
          <p className="text-3xl">Min: {data.main.temp_min.toFixed(0)}°C</p>
        </div> */}

      {/*//! Max  */}
      {/* <div>
          <p className="text-3xl">
            Max: {data.main.temp_max.toFixed(0)}
            °C
          </p>
        </div>
      </div> */}

      {/*//! Container w/Overlay  */}
      {/* bg-black/60 p-8 rounded-2xl shadow-lg shadow-black */}
      <div className="p-8 bg-black/60 rounded-2xl shadow-lg shadow-black">
        {/*//! Content */}
        <div className="flex justify-between text-center">
          <div>
            <p className="text-xl">Feels Like</p>
            <p className="font-bold text-2xl">
              {/* {data.main.feels_like.toFixed(0)}°C */}
              {data.current.feelslike_c.toFixed(0)}°C
            </p>
          </div>
          <div>
            <p className="text-xl">Humidity</p>
            <p className="font-bold text-2xl">
              {/* {data.main.humidity.toFixed(0)} % */}
              {data.current.humidity.toFixed(0)} %
            </p>
          </div>
          <div>
            <p className="text-xl">Winds</p>
            <p className="font-bold text-2xl">
              {/* {data.wind.speed.toFixed(0)} km/h */}
              {data.current.wind_kph.toFixed(0)} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
