import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./Weather";
import axios from "axios";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";

const Search = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  //! API FETCH
  async function fetchWeather(e) {
    try {
      e.preventDefault();
      setLoading(true);
      await axios.get(url).then((response) => {
        setWeather(response.data);
        setCity("");
        setLoading(false);
      });
    } catch (error) {
      console.log(error.response);
      return Swal.fire({
        title: "Error! City not found",
        text: "Please enter a valid city",
        icon: "error",
        confirmButtonText: ` <a href="/">Ok</a>`,
      });
    }
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="flex flex-col justify-center items-center align-middle h-screen mt-3"
      >
        <div className="buscador relative flex justify-between items-center max-w-[400px] w-full m-auto pt-4 text-white z-50 px-4">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-white text-white rounded-2xl"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white"
                type="text"
                placeholder="Search city"
                value={city}
              />
            </div>
            <button>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
};

export default Search;