"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// export const metadata = {
//   title: "LinguaPlus Akademi | Login",
//   description: "Learn English with LinguaPlus",
// };

const LoginAdminLayout = ({children}) => {

  const accessToken = useSelector(state=> state.auth.accessToken)
  const router = useRouter();
  // if(accessToken){
  //     router.replace("/adminpanel");
  // }

  useEffect(() => {
    if (accessToken) {
      router.replace("/adminpanel");
    }
  }, [accessToken, router]); // accessToken ve router değişikliklerini izler

  if (accessToken) {
    return null; // Token yoksa, bileşen render edilmeden önce boş dönülür
  }

  return (
    <div>{children}</div>
  )
}

export default LoginAdminLayout