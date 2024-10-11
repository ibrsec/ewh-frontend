import { taostStopLoading, toastLoading } from "@/helpers/toastify";
import axios from "axios";
// import useAxios from "./useAxios"

 

const useEmailServices = () => {
    // const {axiosPublic} = useAxios()

    const subscriptionApi = async(email) => {

        const idLoading = toastLoading(`Loading...` );
        try {

            const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/emails/subscription', { email });
            console.log('response subsc email = ', response)

            taostStopLoading(idLoading,"success",response?.data?.message) 
        } catch (error) {
            taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message) 
            console.log('error email subs', error)
        }

    }
  return {subscriptionApi}
}

export default useEmailServices