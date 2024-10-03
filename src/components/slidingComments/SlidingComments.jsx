"use client";
import { useEffect, useState } from "react";

const SlidingComments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: "/images/comment1.png", alt: "comment1" },
    { src: "/images/comment2.png", alt: "comment2" },
    { src: "/images/comment3.png", alt: "comment3" },
    { src: "/images/comment1.png", alt: "comment1" },
    { src: "/images/comment4.png", alt: "comment4" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div id="indicators-carousel" className="relative w-full mt-64 mb-20 px-2">
      {/* Carousel wrapper */} 
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute block w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[220px] transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.src}
                className="w-full h-full object-contain"
                alt={slide.alt}
              />
            </div>
          ))}
        </div> 
      {/* Slider indicators */}
      <div className="absolute z-30  flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-dark-red" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider controls */}

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex  items-end sm:items-center justify-center h-full px-4 cursor-pointer group focus:outline-none  "
        onClick={prevSlide}
      > 
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl transition-all    group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-dark-red transition-all    rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span> 
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-end sm:items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
         
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl transition-all     group-focus:ring-4 group-focus:ring-white   group-focus:outline-none">
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-dark-red transition-all  rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span> 
      </button>
    </div>
  );
};

export default SlidingComments;
