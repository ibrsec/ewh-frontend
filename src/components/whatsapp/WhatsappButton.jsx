import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <>
      <Link href={"https://wa.me/"+process.env.NEXT_PUBLIC_INFO_PHONE} target="_blank" className="bg-[#24D366] w-[60px] h-[60px] overflow-hidden rounded-full flex items-center justify-center  cursor-pointer hover:opacity-80 active:opacity-90 transition-all  fixed bottom-5 right-8 z-50 heart-beat ">
        <FaWhatsapp className="text-white text-4xl" />
      </Link>
      <div className="bg-[#24D366] w-[60px] h-[60px]  rounded-full fixed bottom-5 right-8 heart-echo z-40"></div>
    </>
  );
};

export default WhatsappButton;
