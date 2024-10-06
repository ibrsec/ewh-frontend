"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { motion } from "framer-motion";

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
      <div className="bg-white cols-span-1 border rounded-md shadow-xl shadow-dark-red border-dark-red min-h-[200px] flex items-center justify-center gap-2  ">
        aa
      </div>
      <div className="bg-white cols-span-1 border rounded-md shadow-xl shadow-dark-red border-dark-red min-h-[200px] flex items-center justify-center gap-2">
        aa
      </div>
      <div className="bg-white cols-span-1 border rounded-md shadow-xl shadow-dark-red border-dark-red min-h-[200px] flex items-center justify-center gap-2">
        aa
      </div>
    </motion.div>
  );
};

export default ContactInfoCards;
