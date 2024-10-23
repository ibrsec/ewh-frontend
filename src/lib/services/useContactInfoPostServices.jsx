import { taostStopLoading, toastLoading } from "@/helpers/toastify";
import axios from "axios";
 

 

const useContactInfoPostServices = () => { 


    const contactInfoPost = async(payload) => {

        const idLoading = toastLoading(`Loading...` );
        try {

            const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/contactInfo', payload);
            console.log('response contactInfo post  = ', response)

            taostStopLoading(idLoading,"success",response?.data?.message) 
        } catch (error) {
            taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message) 
            console.log('error contactInfo', error)
        }

    }
 


  return {contactInfoPost }
}

export default useContactInfoPostServices