"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toastWarnNotify } from "@/helpers/toastify";
import { emailValidation } from "@/helpers/emailValidation";
import useContactInfoPostServices from "@/lib/services/useContactInfoPostServices";

const ContactForm = () => {
  const sectionRef = useRef(null);

  // Bileşenin ekranda görünür olup olmadığını kontrol eden hook
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.05, // %10'u görünür olunca tetikler
  });

  const { contactInfoPost } = useContactInfoPostServices();

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputs.fullName || !inputs.email || !inputs.phone || !inputs.message) {
      toastWarnNotify("Please enter all fields for submit the contact form!");
      return;
    }

    if (inputs.fullName?.length > 100) {
      toastWarnNotify("Ad soyad 100 karakterden fazla olamaz!");
      return;
    }
    if (inputs.email?.length > 100) {
      toastWarnNotify("Email 100 karakterden fazla olamaz!");
      return;
    }
    if (inputs.phone?.length > 100) {
      toastWarnNotify("Telefon 100 karakterden fazla olamaz!");
      return;
    }
    if (inputs.message?.length > 1500) {
      toastWarnNotify("Mesajiniz 1500 karakterden fazla olamaz!");
      return;
    }
    if (!emailValidation(inputs.email)) {
      toastWarnNotify("Lutfen uygun bir email giriniz! - example@email.com");
      return;
    }

    contactInfoPost(inputs);

    setInputs({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ scale: 0 }} // Start invisible
      animate={isVisible ? { scale: 1 } : {}} // Scale up to original size
      transition={{ type: "spring", duration: 2, bounce: 0.4 }} // Smooth spring effect
      className=""
    >
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8">
          Bize Ulaşın!
        </h3>

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
            value={inputs.fullName}
            onChange={handleChange}
          />
          {inputs.fullName.length > 100 && (
            <span className="px-2 text-xs text-red-500">
              Ad soyad 100 karakteri geçemez!
            </span>
          )}
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
            placeholder="example@email.com*"
            value={inputs.email}
            onChange={handleChange}
          />
          {inputs.email.length > 100 && (
            <span className="px-2 text-xs text-red-500">
              Email 100 karakteri geçemez!
            </span>
          )}
          {inputs.email.length > 0 && !emailValidation(inputs.email) && (
            <span className="px-2 text-xs text-red-500">
              Lutfen uygun bir email adresi giriniz(email@example.com)
            </span>
          )}
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
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
            placeholder="Phone Number"
            name="phone"
            required={true}
            value={inputs.phone}
            onChange={handleChange}
          />
          {inputs.phone.length > 100 && (
            <span className="px-2 text-xs text-red-500">
              Telefon numarasi 100 karakteri geçemez!
            </span>
          )}
        </div>

        <div className="mb-5">
          <textarea
            type="string"
            id="message"
            className="min-h-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
            placeholder="Your message..."
            name="message"
            required={true}
            value={inputs.message}
            onChange={handleChange}
          ></textarea>
          {inputs.message.length > 1500 && (
            <span className="px-2 text-xs text-red-500">
              Mesajiniz 1500 karakteri geçemez!
            </span>
          )}
        </div>
        <button type="submit" className="primary-button-main w-full">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
