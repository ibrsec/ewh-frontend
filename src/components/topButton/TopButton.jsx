"use client";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";

const TopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Yumuşak geçiş için
        });
      };

  return (
      <button onClick={scrollToTop} target="_blank" className="bg-red w-[60px] h-[60px] overflow-hidden rounded-full flex items-center justify-center  cursor-pointer hover:opacity-80 active:opacity-90 transition-all  fixed bottom-28 right-8 z-50  ">
        <FaChevronUp className="text-white text-4xl" />
      </button>
  );
};

export default TopButton;
