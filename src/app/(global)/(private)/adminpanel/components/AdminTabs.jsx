"use client"; 
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

const tabs = [
    {
      title: "Eğitimler",
      href: "/adminpanel/egitimler"
    },
    {
      title: "Ekip",
      href: "/adminpanel/ekip"
    },
    {
      title: "Blog",
      href: "/adminpanel/blog"
    },
    {
      title: "Kitaplar",
      href: "/adminpanel/kitaplar"
    },
    {
      title: "Email",
      href: "/adminpanel/email"
    },
]

const AdminTabs = () => {
    const pathName = usePathname();
  return (
    <div className=" max-w-6xl mx-auto px-2   ">
      <LogoutButton />
      <ul className="mt-10 text-sm font-medium text-center text-gray-500 rounded-lg shadow flex divide-gray-700  flex-wrap ">
        {/* active */}

        {
        tabs.map((tab,idx) =>(
            <li key={idx} className=" flex-1 focus-within:z-10">
            <Link
            href={tab.href}
            className={
            "inline-block w-full py-4 px-2 sm:px-4 text-sm sm:text-md text-white  border-r   border-gray-700  hover:bg-red  active:bg-orange   focus:bg-amber-900  active cursor-pointer font-bold poppins-font transition-all " + (idx === 0 ? " rounded-s-md " : idx=== tabs.length-1 ? " rounded-e-md ": " " ) + 
            (pathName === tab.href ? "bg-red" : "bg-dark-red")
            }
            aria-current="page" 
            >
              {tab.title}
            </Link>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default AdminTabs;
