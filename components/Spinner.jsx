import Image from "next/image";
import React from "react";
import spinner from "../public/spinner.gif";

const Spinner = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className="w-full h-screen items-center flex"
    >
      <Image
        className="w-[200px] block z-20 m-auto"
        src={spinner}
        alt="loading..."
      />
    </div>
  );
};

export default Spinner;
