import { taostStopLoading, toastLoading } from "@/helpers/toastify";
import useAxios from "./useAxios"
import { useDispatch } from "react-redux";
import { fetchTeamFail, fetchTeamStart, fetchTeamSuccess } from "../features/teamSlice";

 

const useTeamServices = () => {
    const {axiosPublic} = useAxios()
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
  return {getTeamApi}
}

export default useTeamServices