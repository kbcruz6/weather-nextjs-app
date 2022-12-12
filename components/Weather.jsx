import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex flex-col justify-between max-w-[400px] w-full m-auto p-4 text-white z-10">
      {/*//! Title */}
      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="text-6xl mb-10 text-center font-bold text-shadow"
      >
        {data.name}
      </p>

      {/*//! Right now weather  */}
      <div className=" mb-10 flex justify-between items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="bg-white/30 rounded-2xl flex flex-col items-center font-bold text-shadow p-4 "
        >
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={80}
            height={80}
            className=""
          />
          <p className="text-2xl ">{data.weather[0].main}</p>
        </div>

        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600"
          className="text-7xl font-bold text-shadow"
        >
          {data.main.temp.toFixed(0)}°C
        </p>
      </div>

      {/*//! MIN-MAX  */}
      <div className=" mb-10 flex justify-between font-bold text-shadow">
        {/*//! Min temp  */}
        <div>
          {" "}
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="700"
            className="text-3xl"
          >
            Min / Max:
          </p>
        </div>
        {/* <div>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="700"
            className="text-3xl"
          >
            -
          </p>
        </div> */}
        {/*//! Max temp  */}
        <div>
          {" "}
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="800"
            className="text-3xl"
          >
            {data.main.temp_min.toFixed(0)}°C /{data.main.temp_max.toFixed(0)}
            °C
          </p>
        </div>
      </div>

      {/*//! Container w/Overlay  */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="1000"
        className="bg-black/60 p-8 rounded-2xl shadow-lg shadow-black"
      >
        {/*//! Content */}
        <div className="flex justify-between text-center">
          <div>
            <p className="text-xl">Feels Like</p>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}°C
            </p>
          </div>
          <div>
            <p className="text-xl">Humidity</p>
            <p className="font-bold text-2xl">
              {data.main.humidity.toFixed(0)} %
            </p>
          </div>
          <div>
            <p className="text-xl">Winds</p>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
