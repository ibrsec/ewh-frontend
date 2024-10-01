"use client";

import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde görünürlüğü true yaparak animasyonu başlat
    setIsVisible(true);
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch  md:justify-between gap-2 pt-8 pb-16 px-2  ">
      <div className={"  flex-1 flex flex-col  items-stretch gap-10  transition-all duration-1000 ease-in-out " +
              (isVisible
                ? " translate-x-0 opacity-100 "
                : " -translate-x-full opacity-0 ")}>
        <div>
          <h1
            className={`xl:text-[90px] lg:text-7xl md:text-6xl sm:text-6xl text-4xl font-[700]  geist-font `}
            style={{ lineHeight: "1.1" }}
          >
            WONDERFULL <br /> STORIES
          </h1>
          <p className="text-md md:text-lg text-gray-500 font-medium mt-10  manrope-font ">
            Listen to the little stories to improve your Russian and immerse
            yourself in the nuances of the language, enhancing your
            comprehension and fluency over time.
          </p>
        </div>
        <div className="flex items-center gap-1 justify-center flex-col lg:flex-row ">
          <button
            type="button"
            className="text-dark-red hover:text-light-yellow border border-dark-red hover:bg-dark-red focus:ring-4 focus:outline-none focus:ring-dark-red font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full lg:w-[200px]"
          >
            Wanna try it out!
          </button>
          <button
            type="button"
            className="text-dark-red hover:text-light-yellow border border-dark-red hover:bg-dark-red focus:ring-4 focus:outline-none focus:ring-dark-red font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full lg:w-[200px]"
          >
            How it works
          </button>
        </div>
      </div>
      <div className={"flex-1 flex gap-1  transition-all duration-1000 ease-in-out " +
              (isVisible
                ? " translate-x-0 opacity-100 "
                : " translate-x-full opacity-0 ")}>
        <div className="rounded-3xl overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/61ffe2d56dc18443ec1e6b0f/663a151951f8003d76e1c0b3_flowers%2002-p-800.png"
            alt="hero"
            className=" max-h-none md:max-h-[500px] rounded-3xl"
          />
        </div>

        <div className="hidden lg:flex flex-col items-center justify-between bg-dark-red rounded-3xl py-4 px-5">
          <div className="text-lg bg-orange-mid p-4 rounded-2xl ">
            <MdOutlineArrowOutward className="text-xl text-light-yellow " />
          </div>
          <span className="vertical-text manrope-font font-semibold text-lg text-white">
            Eğitimlerimiz
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
