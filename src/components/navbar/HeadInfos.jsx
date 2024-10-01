import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

const HeadInfos = ({children}) => {
  return (
    <div className="bg-gradient-to-r from-red via-dark-red to-orange   hidden sm:flex items-center justify-center gap-5 sm:gap-3 py-3 px-2 text-light-yellow h-[40px] relative poppins-font">
      <a
        href="mailto:info@projectName.com"
        className=" flex items-center gap-1 font-semibold "
      >
        <IoMailOutline className="text-md" />
        <span className="text-xs  ">info@projectName.com</span>
      </a>
      <a
        href="tel:+905554443344"
        className=" flex items-center gap-1 font-semibold"
      >
        <IoIosPhonePortrait className="text-md" />
        <span className="text-xs   ">+90 (555) 444 33 44</span>
      </a>
      <a href="https://www.instagram.com/english.with.hatice/" target="_blank" className=" flex items-center gap-1 font-semibold">
        <GrInstagram className="text-md" />
        <span className="text-xs   ">Instagram</span>
      </a>
      {children}
    </div>
  );
};

export default HeadInfos;
