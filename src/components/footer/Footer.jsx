"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

const navs = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/aboutus" },
  { name: "Eğitimlerimiz", href: "/trainings" },
  { name: "Ekibimiz", href: "/team" },
  { name: "Kitaplarımız", href: "/books" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/contact" },
];
const trainings = [
  { name: "Genel İngilizce", href: "/genel" },
  { name: "Grup Dersleri", href: "/grup" },
  { name: "Özel Ders", href: "/ozel" },
  { name: "Speaking Club", href: "/speaking" },
  { name: "IELTS Kursu", href: "/ielts" },
];
const contacts = [
  {
    name: "info@projectName",
    href: "mailto:info@projectName.com",
    icon: <IoMailOutline className="text-lg" />,
  },
  {
    name: "+90 (555) 444 33 44",
    href: "tel:+905554443344",
    icon: <IoIosPhonePortrait className="text-lg" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/english.with.hatice/",
    icon: <GrInstagram className="text-lg" />,
  },
];

const Footer = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" w-screen  px-2 ">
      <div className="relative h-[200px] ">
        <div className="absolute top-0 left-0 right-0 z-10 ">
          <img
            src="/images/footer-top.svg"
            alt="footer-top"
            className="w-full"
          />
        </div>
      </div>
      <div className="bg-gradient-to-b from-black  to-dark-red relative z-20 min-h-[500px] -top-28 sm:-top-10 md:top-0 pb-12">
        <div className="text-white  max-w-6xl mx-auto px-2  ">
          {/* mail */}
          <div className="flex flex-col gap-3  ">
            <h3 className="text-light-orange text-xl md:text-2xl manrope-font text-center font-semibold">
              E-Bülten
            </h3>
            <p className="text-white poppins-font text-md md:text-lg text-center">
              Yeniliklerden haberdar olabilmek için e-posta bültenimize abone
              olmayı unutmayın!
            </p>
            <form className="mb-6">
              <label
                htmlFor="email-subs"
                className=" flex items-center gap-2 w-full md:w-[768px] mx-auto  p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base "
              >
                <MdEmail className="text-2xl text-orange" />

                <input
                  type="email"
                  id="email-subs"
                  placeholder="Email Adresiniz"
                  className="  bg-transparent text-base   flex-1    border-none focus:ring-0 "
                />
              </label>
              <div className="text-center mt-5">
                <button className="primary-button-white ">Abone Ol</button>
              </div>
            </form>
          </div>

          {/* footer content */}
          <div className="flex justify-between gap-10 lg:gap-2 mt-16 flex-col lg:flex-row ">
            {/* logo motto */}
            <div className="w-full lg:w-2/6 flex flex-col items-center lg:items-stretch">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="/images/logo-beyaz.png"
                  className="h-36 sm:h-44"
                  alt="Logo"
                />
              </Link>
              <p className="text-white poppins-font text-lg font-semibold text-center lg:text-left w-1/2 lg:w-full">
                İngilizce öğrenme amacınız ne olursa olsun bizimle hedeflerinize
                giden yolda emin adımlarla yürüyebilirsiniz.
              </p>
            </div>

            <div className="flex-1 flex justify-around gap-8 sm:gap-2 flex-col sm:flex-row items-center sm:items-stretch">
              {/* Links */}
              <div className="">
                <h5 className="font-bold text-xl relative text-center sm:text-left">
                  Linkler
                  <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-[100px] sm:w-[50px]  h-[1px] bg-white    "></span>
                </h5>

                <ul className=" mt-5">
                  {navs?.map((nav, idx) => (
                    <li key={idx}>
                      <Link
                        href={nav.href}
                        className={
                          "text-center sm:text-left group relative  block py-2 px-3 md:font-[600] text-[18px]  text-sm lg:text-md hover:text-light-yellow     transition-all active:text-yellow  font-semibold  " +
                          (pathName === nav.href ? "text-yellow" : "text-white")
                        }
                      >
                        <span
                          className={
                            "absolute top-1/2 -translate-y-1/2 -left-2 w-2 h-2 rounded-full transition-all  bg-yellow   group-hover:inline sm:group-hover:hidden   " +
                            (pathName === nav.href
                              ? " inline sm:hidden "
                              : " hidden")
                          }
                        ></span>

                        <span className=" ">{nav.name}</span>

                        <span
                          className={
                            "absolute top-1/2 -translate-y-1/2 -right-2 w-2 h-2 rounded-full transition-all  bg-yellow   group-hover:inline    " +
                            (pathName === nav.href ? " inline " : " hidden")
                          }
                        ></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* egitimler */}
              <div className="">
                <h5 className="font-bold text-xl relative text-center sm:text-left">
                  Eğitimler
                  <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-[100px] sm:w-[50px]  h-[1px] bg-white    "></span>
                </h5>

                <ul className=" mt-5">
                  {trainings?.map((training, idx) => (
                    <li key={idx}>
                      <Link
                        href={training.href}
                        className={
                          "text-center sm:text-left group relative  block py-2 px-3 md:font-[600] text-[18px]  text-sm lg:text-md hover:text-light-yellow     transition-all active:text-yellow  font-semibold text-white "
                          // + (pathName === training.href ? "text-yellow" : "text-white")
                        }
                      >
                        {/* <span
                        className={
                          "absolute top-1/2 -translate-y-1/2 -left-2 w-2 h-2 rounded-full transition-all  bg-yellow   group-hover:inline sm:group-hover:hidden   " +
                          (pathName === training.href ? " inline sm:hidden " : " hidden")
                        }
                      ></span> */}

                        <span className=" ">{training.name}</span>

                        {/* <span
                        className={
                          "absolute top-1/2 -translate-y-1/2 -right-2 w-2 h-2 rounded-full transition-all  bg-yellow   group-hover:inline    " +
                          (pathName === training.href ? " inline " : " hidden")
                        }
                      ></span> */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* iletisim info */}
              <div className="">
                <h5 className="font-bold text-xl relative text-center sm:text-left">
                  İletişim
                  <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-[100px] sm:w-[50px]  h-[1px] bg-white    "></span>
                </h5>

                <ul className=" mt-5 flex items-center sm:items-stretch flex-col">
                  {contacts?.map((contact, idx) => (
                    <li key={idx}>
                      <Link
                        href={contact.href}
                        target={contact.name === "Instagram" ? "_blank" : ""}
                        className={
                          "text-center sm:text-left group relative   py-2 px-3 md:font-[600] text-[18px]  text-sm lg:text-md hover:text-light-yellow     transition-all active:text-yellow  font-semibold text-white flex items-center gap-2"
                          // + (pathName === contact.href ? "text-yellow" : "text-white")
                        }
                      >
                        {/* <span
                        className={
                          "absolute top-1/2 -translate-y-1/2 -left-2 w-2 h-2 rounded-full transition-all  bg-yellow   group-hover:inline sm:group-hover:hidden   " +
                          (pathName === contact.href ? " inline sm:hidden " : " hidden")
                        }
                      ></span> */}

                        {contact.icon}
                        <span className=" ">{contact.name}</span>

                        {/* <span
                        className={
                          "absolute top-1/2 -translate-y-1/2 -right-2 w-2 h-2 rounded-full transition-all  bg-yellow   group-hover:inline    " +
                          (pathName === contact.href ? " inline " : " hidden")
                        }
                      ></span> */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        {/* footerin footeri */}

        <div className=" mt-16 pt-10   text-white">
          <div className="w-full bg-white h-[.5px] my-5"></div>
          <p className="text-center text-sm sm:text-md">© Copyright English with Hatice - 2024</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
