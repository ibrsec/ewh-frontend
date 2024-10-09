"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

 

const LoginAdminLayout = ({children}) => {

  const accessToken = useSelector(state=> state.auth.accessToken)
  const router = useRouter();
  if(accessToken){
      router.replace("/adminpanel");
  }

  return (
    <div>{children}</div>
  )
}

export default LoginAdminLayout