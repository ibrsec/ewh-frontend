"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {

  const sectionRef = useRef(null);

  // Bileşenin ekranda görünür olup olmadığını kontrol eden hook
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1, // %10'u görünür olunca tetikler
  });
  return (
    <motion.div
    ref={sectionRef}
    initial={{ scale: 0 }} // Start invisible
    animate={isVisible ? { scale: 1 } : {}} // Scale up to original size
    transition={{ type: "spring", duration: 2, bounce: 0.4 }} // Smooth spring effect
      className=""
    >
    <form className="max-w-sm mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8">Bize Ulaşın!</h3>
        

      <div className="mb-5">
        {/* <label
          htmlFor="fullName"
          className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
        >
          Ad Soyad:
        </label> */}
        <input
          type="text"
          id="fullName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="fullName"
          placeholder="Ad Soyad*"
        />
      </div>
      <div className="mb-5">
        {/* <label
          htmlFor="fullName"
          className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
        >
          Ad Soyad:
        </label> */}
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="email"
          placeholder="example@emeil.com*"
        />
      </div>

      
      <div className="mb-5">
        {/* <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label> */}
        <input
          type="string"
          id="phoneNumber"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Phone Number"
          name="number"
          required={true}
        />
      </div> 
      
      <div className="mb-5"> 
        <textarea
          type="string"
          id="message"
          className="min-h-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
          name="message"
          required={true}
        ></textarea>
      </div> 
      <button
        type="submit"
        className="primary-button-main w-full"
      >
        Submit
      </button>
    </form>
    </motion.div>
  );
};

export default ContactForm;
