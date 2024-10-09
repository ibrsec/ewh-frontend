import useAuthServices from "@/lib/services/useAuthServices";
import { TbLogout } from "react-icons/tb";

const LogoutButton = () => {
  const { logoutApi } = useAuthServices();
  return (
    <div className="flex items-center justify-end gap-5  pe-12 ">
      {/* -------------------------- */}
      <button
        type="button"
        className={
          "text-red  hover:text-red-orange active:text-black  font-medium  text-4xl transition-all duration-1000 ease-in-out flex items-center gap-3"
        }
        onClick={logoutApi}
      >
        <TbLogout /> 
        <span className="text-lg poppins-font font-semibold">Logout</span>
      </button>
      {/* ------------ */}
    </div>
  );
};

export default LogoutButton;
