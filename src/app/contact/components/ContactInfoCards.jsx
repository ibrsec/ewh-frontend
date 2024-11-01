"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { motion } from "framer-motion";

import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import formatPhoneNumber from "@/helpers/formatPhoneNumber";

const ContactInfoCards = () => {
  const sectionRef = useRef(null);

  // Bileşenin ekranda görünür olup olmadığını kontrol eden hook
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1, // %10'u görünür olunca tetikler
  });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }} // Başlangıçta görünmez
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Göründüğünde animasyon başlat
      transition={{ duration: 1.1 }} // Animasyon süresi
      className="grid grid-cols-1 sm:grid-cols-3 gap-10  border-red-500 max-w-6xl mx-auto px-2 mb-32 relative -top-16"
    >
      {/* absolute -bottom-3 left-1/2 -x-translate-x-1/2 w-full */}
      <Link href={"tel:"+process.env.NEXT_PUBLIC_INFO_PHONE} target="_blank" className="bg-white cols-span-1 border rounded-md shadow-xl shadow-dark-red border-dark-red min-h-[200px] flex items-center justify-center   gap-3 flex-col group hover:-translate-y-1 transition-all duration-700  ">
        <div className="bg-dark-red p-4 rounded-xl rotate-45">
            <FaPhone  className="text-2xl text-white -rotate-45"/>
        </div>

        <span className="font-bold manrope-font text-lg">Phone Number</span>
        <div className=" manrope-font text-md text-gray-800 group-hover:text-orange group-hover:scale-110 transition-all duration-700">{formatPhoneNumber(process.env.NEXT_PUBLIC_INFO_PHONE)}</div>
      </Link>
      <Link href={"mailto:"+process.env.NEXT_PUBLIC_INFO_EMAIL} target="_blank" className="bg-white cols-span-1 border rounded-md shadow-xl shadow-dark-red border-dark-red min-h-[200px] flex items-center justify-center gap-3 flex-col group hover:-translate-y-1 transition-all duration-700 ">
      <div className="bg-dark-red p-4 rounded-xl rotate-45">
            <IoMdMail  className="text-2xl text-white -rotate-45"/>
        </div>

        <span className="font-bold manrope-font text-lg">Mail Adress</span>
        <div className=" manrope-font text-sm text-gray-800 group-hover:text-orange group-hover:scale-110 transition-all duration-700">{process.env.NEXT_PUBLIC_INFO_EMAIL}</div>
      </Link>
      <Link href={process.env.NEXT_PUBLIC_INFO_INSTAGRAM} target="_blank" className="bg-white cols-span-1 border rounded-md shadow-xl shadow-dark-red border-dark-red min-h-[200px] flex items-center justify-center gap-3 flex-col group hover:-translate-y-1 transition-all duration-700">
      <div className="bg-dark-red p-4 rounded-xl rotate-45">
            <RiInstagramFill  className="text-2xl text-white -rotate-45"/>
        </div>

        <span className="font-bold manrope-font text-lg">Instagram</span>
        <span className=" manrope-font text-sm text-gray-800 group-hover:text-orange group-hover:scale-110 transition-all duration-700">{process.env.NEXT_PUBLIC_INFO_INSTAGRAM.slice(process.env.NEXT_PUBLIC_INFO_INSTAGRAM.lastIndexOf('/')+1)}</span>
      </Link>
    </motion.div>
  );
};

export default ContactInfoCards;
