






"use client";

import Link from "next/link"; 
import { usePathname } from "next/navigation"; 
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";

const NavbarTry = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu durumunu kontrol ediyoruz

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Menu açılma/kapanma durumunu değiştir
  };
    const pathName = usePathname()
    console.log(pathName);

  return (
    <div className="sticky top-0 bg-transparent z-50">
      <nav className="bg-transparent manrope-font backdrop-blur-lg ">
        <div className="max-w-screen-6xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto px-2">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="h-36 sm:h-44" alt="Logo" />
          </Link>
          <div className="flex items-center md:order-2 space-x-3  rtl:space-x-reverse">
            <button
              type="button"
              className="text-red  hover:text-red-orange active:text-black transition-all  font-medium  text-xl "
            >
                <FaUserCircle />
              
            </button>
            <button
              type="button"
              className="text-red  hover:text-red-orange active:text-black transition-all  font-medium  text-xl  "
            >
                <HiMiniShoppingBag />
              
            </button>
            <button
              onClick={toggleMenu} // Menüyü açıp kapatmak için
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-light-yellow focus:outline-none focus:ring-2 focus:ring-orange  "
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-red" : " text-dark-red"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M3 3L13 13M3 13L13 3" : "M1 1h15M1 7h15M1 13h15"}
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-wrap justify-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50  lg:space-x-1 xl:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent  ">
            <li>
                <Link
                  href="/"
                  className={"group relative  block py-2 px-3 md:font-[600] text-[18px] text-dark-red md:text-[14px] lg:text-[17px] hover:text-light-yellow  md:hover:text-red-orange rounded hover:bg-red-orange md:hover:bg-transparent  transition-all active:bg-orange    " + (pathName === '/' ? "bg-orange-mid md:bg-transparent text-light-yellow md:text-red-orange" : "") }
                >
                  <span className=" ">Anasayfa</span>
                  <span className={"absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-orange group-hover:w-full hidden md:inline group-active:bg-black " + (pathName === '/' ? " w-full " : "")}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className={"group relative  block py-2 px-3 md:font-[600] text-dark-red md:text-[17px] hover:text-light-yellow  md:hover:text-red-orange rounded hover:bg-red-orange md:hover:bg-transparent  transition-all active:bg-orange     " + (pathName === '/aboutus' ? "bg-orange-mid md:bg-transparent text-light-yellow md:text-red-orange" : "") }
                >
                  <span>Hakkımızda</span>
                  <span className={"absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-orange group-hover:w-full hidden md:inline group-active:bg-black " + (pathName === '/aboutus' ? " w-full " : "")}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/trainings"
                  className={
                    "group relative  block py-2 px-3 md:font-[600] text-dark-red md:text-[17px] hover:text-light-yellow  md:hover:text-red-orange rounded hover:bg-red-orange md:hover:bg-transparent  transition-all active:bg-orange     " + (pathName === '/trainings' ? "bg-orange-mid md:bg-transparent text-light-yellow md:text-red-orange" : "")
                  }
                >
                  <span>Eğitimlerimiz</span>
                  <span className={"absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-orange group-hover:w-full hidden md:inline group-active:bg-black " + (pathName === '/trainings' ? " w-full " : "")}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className={
                    "group relative  block py-2 px-3 md:font-[600] text-dark-red md:text-[17px] hover:text-light-yellow  md:hover:text-red-orange rounded hover:bg-red-orange md:hover:bg-transparent  transition-all active:bg-orange    " + (pathName === '/team' ? "bg-orange-mid md:bg-transparent text-light-yellow md:text-red-orange" : "")
                  }
                >
                  <span>Ekibimiz</span>
                  <span className={"absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-orange group-hover:w-full hidden md:inline group-active:bg-black " + (pathName === '/team' ? " w-full " : "")}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className={
                    "group relative  block py-2 px-3 md:font-[600] text-dark-red md:text-[17px] hover:text-light-yellow  md:hover:text-red-orange rounded hover:bg-red-orange md:hover:bg-transparent  transition-all active:bg-orange   " + (pathName === '/books' ? "bg-orange-mid md:bg-transparent text-light-yellow md:text-red-orange" : "")
                  }
                >
                  <span>Kitaplarımız</span>
                  <span className={"absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-orange group-hover:w-full hidden md:inline group-active:bg-black " + (pathName === '/books' ? " w-full " : "")}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={
                    "group relative  block py-2 px-3 md:font-[600] text-dark-red md:text-[17px] hover:text-light-yellow  md:hover:text-red-orange rounded hover:bg-red-orange md:hover:bg-transparent  transition-all active:bg-orange   " + (pathName === '/blog' ? "bg-orange-mid md:bg-transparent text-light-yellow md:text-red-orange" : "")
                  }
                >
                  <span>Blog</span>
                  <span className={"absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-orange group-hover:w-full hidden md:inline group-active:bg-black " + (pathName === '/blog' ? " w-full " : "")}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    "group relative  block py-2 px-3 md:font-[600] text-dark-red md:text-[17px] hover:text-light-yellow  md:hover:text-red-orange rounded hover:bg-red-orange md:hover:bg-transparent  transition-all active:bg-orange   " + (pathName === '/contact' ? "bg-orange-mid md:bg-transparent text-light-yellow md:text-red-orange" : "")
                  }
                >
                  <span>İletişim</span>
                  <span className={"absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-orange group-hover:w-full hidden md:inline group-active:bg-black " + (pathName === '/contact' ? " w-full " : "")}></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTry;






// import { useState } from "react";

// const NavbarTry = () => {
//   const [isOpen, setIsOpen] = useState(false); // Menu durumunu kontrol ediyoruz

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Menu açılma/kapanma durumunu değiştir
//   };

//   return (
//     <div className="sticky top-0 bg-white z-50">
//       <nav className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-6xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="/images/logo.png"
//               className="h-32"
//               alt="Logo"
//             />
//           </a>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Get started
//             </button>
//             <button
//               onClick={toggleMenu} // Menüyü açıp kapatmak için
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded={isOpen ? "true" : "false"}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className={`${
//               isOpen ? "block" : "hidden"
//             } items-center justify-between w-full md:flex md:w-auto md:order-1`}
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavbarTry;

// const NavbarTry = () => {
//   return (
//     <div className="sticky top-0 bg-white z-50">
//       <nav className="bg-white dark:bg-gray-900  border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-6xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="/images/logo.png"
//               className="h-32"
//               alt="Logo"
//             />
//           </a>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Get started
//             </button>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavbarTry;

// "use client";

// import { Navbar } from "flowbite-react";

// function NavbarTry() {
//   return (
//     <div className="sticky top-0 bg-white z-50 pb-5">
//       <Navbar fluid rounded>
//         <Navbar.Brand href="https://flowbite.com/">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="mr-3 h-6 sm:h-9"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//             Flowbite
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse>
//           <Navbar.Link href="/navbars" active>
//             Home
//           </Navbar.Link>
//           <Navbar.Link href="/navbars">About</Navbar.Link>
//           <Navbar.Link href="/navbars">Services</Navbar.Link>
//           <Navbar.Link href="/navbars">Pricing</Navbar.Link>
//           <Navbar.Link href="/navbars">Contact</Navbar.Link>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavbarTry;
