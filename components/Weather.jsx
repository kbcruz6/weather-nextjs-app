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
        className="text-6xl mb-10 text-center "
      >
        {data.name}
      </p>

      {/*//! Right now weather  */}
      <div className=" mb-10 flex justify-between items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="flex flex-col items-center"
        >
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={80}
            height={80}
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>

        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600"
          className="text-7xl"
        >
          {data.main.temp.toFixed(0)}°C
        </p>
      </div>

      {/*//! MIN-MAX  */}
      <div className=" mb-10 flex justify-between">
        {/*//! Min temp  */}
        <div>
          {" "}
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="700"
            className="text-3xl"
          >
            Min: {data.main.temp_min.toFixed(0)}°C
          </p>
        </div>
        {/*//! Max temp  */}
        <div>
          {" "}
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="800"
            className="text-3xl"
          >
            Max: {data.main.temp_max.toFixed(0)}°C
          </p>
        </div>
      </div>

      {/*//! Container w/Overlay  */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="1000"
        className="bg-black/60 p-8 rounded-md shadow-lg shadow-[#040c16]"
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
