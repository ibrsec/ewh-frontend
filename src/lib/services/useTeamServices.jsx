import {
  taostStopLoading,
  toastErrorNotify,
  toastLoading,
  toastSuccessNotify,
} from "@/helpers/toastify";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import {
  fetchTeamFail,
  fetchTeamStart,
  fetchTeamSuccess,
  fetchTeamSuccessWithOutPayload,
} from "../features/teamSlice";

const useTeamServices = () => {
  const { axiosPublic, axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getTeamApi = async () => {
    dispatch(fetchTeamStart());
    // const idLoading = toastLoading(`Loading...` );
    try {
      const response = await axiosToken("/team");
      console.log("response get team = ", response);
      // taostStopLoading(idLoading,"success",response?.data?.message)
      dispatch(fetchTeamSuccess(response?.data?.data));
    } catch (error) {
      dispatch(fetchTeamFail());
      // taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message)
      toastErrorNotify(error?.response?.data?.message);
      console.log("error get team", error);
    }
  };

  const createNewTeamMember = async (payload) => {
    const endPoint = "/team";
    const idLoading = toastLoading(`Loading...`);
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
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading,"success",response?.data?.message)
    } catch (error) {
      dispatch(fetchTeamFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message)
      console.log("create new team member api error:", error);
    }
  };
  const updateTeamMember = async (id, payload) => {
    const idLoading = toastLoading(`Loading...`);
    const endPoint = "/team/" + id;

    dispatch(fetchTeamStart());
    try {
      const response = await axiosToken.put(endPoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("update team member response =", response);
      const data = response?.data;
      dispatch(fetchTeamSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading,"success",response?.data?.message)

      getTeamApi();
    } catch (error) {
      dispatch(fetchTeamFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message)
      console.log("update team member api error:", error);
    }
  };
  const deleteTeamMember = async (id) => {
    const idLoading = toastLoading(`Loading...`);
    const endPoint = "/team/" + id;

    dispatch(fetchTeamStart());
    try {
      const response = await axiosToken.delete(endPoint);
      console.log("delete team member response =", response);
      const data = response?.data;
      dispatch(fetchTeamSuccessWithOutPayload());

      getTeamApi();

      //warnings
      // toastSuccessNotify(data?.message || "Team member is deleted!");
      taostStopLoading(idLoading,"success",response?.data?.message || "Team member is deleted!")
    } catch (error) {
      dispatch(fetchTeamFail());
      // toastErrorNotify(
      //   error?.response?.data?.message || "Deleting Team member is failed!"
      // );
      taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message || "Deleting Team member is failed!")
      console.log("delete team member api error:", error);
    }
  };
  return {
    getTeamApi,
    createNewTeamMember,
    updateTeamMember,
    deleteTeamMember,
  };
};

export default useTeamServices;
