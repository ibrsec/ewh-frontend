"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const BookCard = ({ book, index }) => {
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
    <div ref={cardRef} className="       pb-4     group  relative h-[500px] transform scale-0 transition-all duration-1000">
      <img
        src="/images/hovershapes.png"
        alt=""
        className="absolute w-full h-full z-30   opacity-0 group-hover:opacity-30  group-hover:scale-125 transition-all duration-1000"
      />
      <div className="flex flex-col gap-9  h-full justify-between items-center ">
        <div className="overflow-hidden rounded-lg">
          <img
            src={book?.image}
            alt="egitmen"
            className="w-full h-full object-contain group-hover:scale-105 transition-all duration-1000 rounded-t-lg object-top"
          />
        </div>

        <div className="  px-5 flex flex-col gap-3 items-center">
          <p className="  text-xl manrope-font ">{book.name}</p>
          {/* <span className="bg-gray-500 h-0.5 w-full "></span> */}
          {/* <p className="text-red font-semibold text-xl md:text-2xl poppins-font">
            $ {book.price}
          </p> */}
          <div className="text-center w-[200px] flex mt-7 ">
            <Link
              href="https://wa.me/905554443355"
              target="_blank"
              className="primary-button w-full text-lg z-40"
            >
              Bilgi Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
