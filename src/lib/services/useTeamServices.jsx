import { taostStopLoading, toastErrorNotify, toastLoading, toastSuccessNotify } from "@/helpers/toastify";
import useAxios from "./useAxios"
import { useDispatch } from "react-redux";
import { fetchTeamFail, fetchTeamStart, fetchTeamSuccess, fetchTeamSuccessWithOutPayload } from "../features/teamSlice";

 

const useTeamServices = () => {
    const {axiosPublic, axiosToken} = useAxios()
    const dispatch = useDispatch()

    const getTeamApi = async() => {

        dispatch(fetchTeamStart())
        const idLoading = toastLoading(`Loading...` );
        try {
            
            const response = await axiosPublic('/team', );
            console.log('response get team = ', response)
            taostStopLoading(idLoading,"success",response?.data?.message) 
            dispatch(fetchTeamSuccess(response?.data?.data))
        } catch (error) {
            dispatch(fetchTeamFail())
            taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message) 
            console.log('error get team', error)
        }

    }
    const createNewTeamMember = async(payload) => {
        const endPoint = "/team";

        dispatch(fetchTeamStart());
        try {
          const response = await axiosToken.post(endPoint, payload, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("create new team member response =", response);
          const data = response?.data;
          dispatch(fetchTeamSuccessWithOutPayload());
    
           
            getTeamApi();
    
          //warnings
          toastSuccessNotify(data?.message);
        } catch (error) {
          dispatch(fetchTeamFail());
          toastErrorNotify(error?.response?.data?.message);
          console.log("create new team member api error:", error);
        }

    }
  return {getTeamApi, createNewTeamMember}
}

export default useTeamServices