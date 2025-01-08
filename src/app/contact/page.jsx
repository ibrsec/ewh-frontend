import Banner from "@/components/banner/Banner";
import ContactForm from "./components/ContactForm";
import ContactContent from "./components/ContactContent";
import ContactInfos from "./components/ContactInfos";
import ContactInfoCards from "./components/ContactInfoCards";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const ContactPage = () => {
  return (
    <div className="mb-52">
      <Banner path="https://res.cloudinary.com/dkhuhh8xl/image/upload/v1736364095/contact_jvcxnc.jpg" title="İLETİŞİM" />
      {/* <Banner path="/images/contact.jpg" title="İLETİŞİM" /> */}

      <div className="max-w-6xl mx-auto px-2 mb-32 flex gap-20 flex-col md:flex-row">
        <div className="flex-1  rounded-lg shadow-xl border border-dark-red shadow-dark-red py-8 px-2">
          <ContactForm />
        </div>
        <div className="flex-1">
          <ContactContent />
        </div>
      </div>
      <div className="bg-dark-red h-1 max-w-6xl mx-auto px-2 mb-16 rounded-full"></div>
      <div className="max-w-6xl mx-auto px-2  flex flex-col gap-6 text-xl items-center justify-center">
        
        <p className="">Bize Whatsapp üzerinden de ulaşabilirsiniz!</p>
        <Link
          href={"https://wa.me/"+process.env.NEXT_PUBLIC_INFO_PHONE}
          target="_blank"
          className="flex items-center gap-7 bg-dark-red py-4 px-10 rounded-2xl hover:opacity-80 active:opacity-90 tranision-all duration-500"
        >
          <span className="flex items-center justify-center relative">
            <div className="bg-[#24D366] w-[60px] h-[60px] overflow-hidden rounded-full flex items-center justify-center  cursor-pointer hover:opacity-80 active:opacity-90 transition-all    ">
              <FaWhatsapp className="text-white text-4xl" />
            </div>
            <div className="bg-[#24D366] w-[60px] h-[60px]  rounded-full   heart-echo z-40 absolute"></div>
          </span>
          <span className="text-white text-2xl font-semibold poppins-font">Whatsapp</span>
        </Link>
      </div>

      <div className="bg-dark-red h-1 max-w-6xl mx-auto px-2 mt-16 mb-32 rounded-full"></div>
      

      {/* contact infos */}
      <div className="relative">
        <div className="bg-dark-red h-[400px] w-full flex items-center justify-center px-2">
          <ContactInfos />
        </div>
        <ContactInfoCards />
      </div>
    </div>
  );
};

export default ContactPage;
