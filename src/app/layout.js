import "./globals.css";

// import "flowbite/dist/flowbite";

import Navbar from "@/components/navbar/Navbar";
import HeadInfos from "@/components/navbar/HeadInfos";
import Footer from "@/components/footer/Footer";
import WhatsappButton from "@/components/whatsapp/WhatsappButton";
import TopButton from "@/components/topButton/TopButton";
import { ToastContainer } from "react-toastify"; 

export const metadata = {
  title: "English With Hatice | Anasayfa",
  description: "Learn English with Hatice",
};

export default function RootLayout({ children }) {
  return ( 
        <html lang="en">
          <body className={` `}>
            {/* HeadInfos component */}
            <HeadInfos />
            <div className="sticky top-0  z-50   min-h-screen ">
              <Navbar />
              {children}
              <Footer />
              <WhatsappButton />
              <TopButton />

              <ToastContainer />
            </div>
          </body>
        </html> 
  );
}
