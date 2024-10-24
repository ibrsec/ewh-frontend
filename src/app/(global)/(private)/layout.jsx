"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import { useSelector } from "react-redux"

 

const PrivateLayout = ({children}) => {

    const accessToken = useSelector(state=> state.auth.accessToken)
    const router = useRouter();
    // if(!accessToken){
    //     router.push("/admin-login");
    // }
    useEffect(() => {
      if (!accessToken) {
        router.push("/admin-login"); // Erişim token yoksa yönlendirme yap
      }
    }, [accessToken, router]); // accessToken ve router değişikliklerini izler
  
    if (!accessToken) {
      return null; // Token yoksa, bileşen render edilmeden önce boş dönülür
    }


  return (
    <div>{children}</div>
  )
}

export default PrivateLayout