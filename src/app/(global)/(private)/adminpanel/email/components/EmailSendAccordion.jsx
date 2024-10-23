import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import SendEmailComp from "./SendEmailComp";


const EmailSendAccordion = ({  content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-xl border border-dark-red shadow-dark-red pt-4 pb-5 px-5 mt-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 "
      >
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Open for sending email</h3>
          <span>{isOpen ? <FaChevronUp /> :<FaChevronDown />}</span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-none " : "max-h-0 "
        }`}
      >
        <div className="px-4 pb-4 pt-10">
            <p className="text-red-700 mb-10">Email listedeki herkese gonderilecektir!!!</p>
            <SendEmailComp />
        </div>
      </div>
    </div>
  );
};

export default EmailSendAccordion;
