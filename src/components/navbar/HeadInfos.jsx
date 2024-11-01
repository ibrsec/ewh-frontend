import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import formatPhoneNumber from "@/helpers/formatPhoneNumber";

const HeadInfos = ({children}) => {
  return (
    <div className="bg-gradient-to-r from-black via-dark-red to-black   hidden sm:flex items-center justify-center gap-5 sm:gap-3 py-3 px-2 text-light-yellow h-[40px] relative poppins-font">
      <a
        href={"mailto:"+process.env.NEXT_PUBLIC_INFO_EMAIL}
        className=" flex items-center gap-1 font-semibold "
      >
        <IoMailOutline className="text-md" />
        <span className="text-xs  ">{process.env.NEXT_PUBLIC_INFO_EMAIL}</span>
      </a>
      <a
        href={"tel:"+process.env.NEXT_PUBLIC_INFO_PHONE}
        className=" flex items-center gap-1 font-semibold"
      >
        <IoIosPhonePortrait className="text-md" />
        <span className="text-xs   ">{formatPhoneNumber(process.env.NEXT_PUBLIC_INFO_PHONE)}</span>
      </a>
      <a href={process.env.NEXT_PUBLIC_INFO_INSTAGRAM} target="_blank" className=" flex items-center gap-1 font-semibold">
        <GrInstagram className="text-md" />
        <span className="text-xs   ">Instagram</span>
      </a>
      {children}
    </div>
  );
};

export default HeadInfos;
