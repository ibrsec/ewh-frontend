"use client";

import LogoutButton from "./components/LogoutButton";
// import { useState } from "react";
// import EkipTab from "./components/ekip/EkipTab";

const Adminpanel = () => {
  // const [activeTab, setActiveTab] = useState("eğitimler");
  return (
    <div className="min-h-screen mb-24">

      
    </div>
  );
};

export default Adminpanel;


// <div className=" max-w-6xl mx-auto px-2   ">
//         <LogoutButton />
//         <ul className="mt-10 text-sm font-medium text-center text-gray-500 rounded-lg shadow flex divide-gray-700  ">
//           {/* active */}
//           <li className="w-full focus-within:z-10">
//             <div
//               className={
//                 "inline-block w-full p-4 text-white  border-r  rounded-s-md border-gray-700  hover:bg-red  active:bg-orange   focus:bg-amber-900  active cursor-pointer font-bold poppins-font transition-all " +
//                 (activeTab === "eğitimler" ? "bg-red" : "bg-dark-red")
//               }
//               aria-current="page"
//               onClick={() => setActiveTab("eğitimler")}
//             >
//               Eğitimler
//             </div>
//           </li>
//           <li className="w-full focus-within:z-10">
//             <div
//               className={
//                 "inline-block w-full p-4 text-white  border-r border-gray-700   hover:bg-red active:bg-orange focus:bg-amber-900 cursor-pointer font-bold poppins-font transition-all " +
//                 (activeTab === "ekip" ? "bg-red" : "bg-dark-red")
//               }
//               aria-current="page"
//               onClick={() => setActiveTab("ekip")}
//             >
//               Ekip
//             </div>
//           </li>

//           <li className="w-full focus-within:z-10">
//             <div
//               className={
//                 "inline-block w-full p-4 text-white  border-r border-gray-700   hover:bg-red active:bg-orange focus:bg-amber-900 cursor-pointer font-bold poppins-font transition-all " +
//                 (activeTab === "blog" ? "bg-red" : "bg-dark-red")
//               }
//               aria-current="page"
//               onClick={() => setActiveTab("blog")}
//             >
//               Blog
//             </div>
//           </li>
//           <li className="w-full focus-within:z-10">
//             <div
//               className={
//                 "inline-block w-full p-4 text-white  border-r border-gray-700 rounded-e-md   hover:bg-red active:bg-orange  focus:bg-amber-900 cursor-pointer font-bold poppins-font transition-all " +
//                 (activeTab === "kitaplar" ? "bg-red" : "bg-dark-red")
//               }
//               aria-current="page"
//               onClick={() => setActiveTab("kitaplar")}
//             >
//               Kitaplar
//             </div>
//           </li> 
//         </ul>

//         {activeTab === "eğitimler" ? (
//           <div className="">eğitimler</div>
//         ) : activeTab === "ekip" ? (
//           <EkipTab />
//         ) : activeTab === "blog" ? (
//           <div>blog</div>
//         ) : activeTab === "kitaplar" ? (
//           <div>kitaplar</div>
//         ) : (
//           <div></div>
//         )}
//       </div>