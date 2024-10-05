"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiSololearn } from "react-icons/si";

const TrainingCard = ({ training, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.remove("opacity-0", "scale-0");
        cardRef.current.classList.add("opacity-100", "scale-100");
      }
    }, index * 100); // Gecikme her kart için

    return () => clearTimeout(timer); // Temizleme işlemi
  }, [index]);
  return (
    <div ref={cardRef} className=" border-2 border-dark-red   transition-all duration-1000 rounded-lg pt-7 pb-4 px-5 shadow-md shadow-dark-red group relative transform scale-0 ">
      <img
        src="/images/hovershapes.png"
        alt=""
        className="absolute w-full h-full z-30   opacity-0 group-hover:opacity-30  group-hover:scale-125 transition-all duration-1000"
      />
      <div className="flex flex-col gap-5 justify-between h-full ">


        <div className="flex flex-col gap-6 flex-1">
          <div className=" flex items-center gap-5 text-dark-red text-lg">
            <SiSololearn className="group-hover:rotate-180 transition-all duration-700" />
            <p className="font-semibold text-xl text-dark-red poppins-font">
              {training.name}
            </p>
          </div>
          <ul className=" ">
            {training.points.map((point, index) => (
              <li key={index} className="text-sm text-gray-700 mb-3">
                ► {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <p className="text-gray-600 font-semibold">{training.description}</p>
          <div className="flex items-center gap-1 justify-between">
            <p className="text-black font-bold text-lg">{training?.time}</p>
            <p className=" text-end text-2xl text-red font-semibold">
              ${training.price}
            </p>
          </div>
          <div className="text-center w-full flex mt-7 ">
            <Link
              href={training.href}
              className="primary-button-main w-full text-lg z-40"
            >
              Detaylar
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default TrainingCard;
