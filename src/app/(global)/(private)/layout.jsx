"use client";
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

 

const PrivateLayout = ({children}) => {

    const accessToken = useSelector(state=> state.auth.accessToken)
    const router = useRouter();
    if(!accessToken){
        router.push("/login-admin-1239");
    }

  return (
    <div>{children}</div>
  )
}

export default PrivateLayout