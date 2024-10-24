import {
  taostStopLoading,
  toastErrorNotify,
  toastLoading,
  toastSuccessNotify,
} from "@/helpers/toastify";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import {
  fetchTrainingFail,
  fetchTrainingStart,
  fetchTrainingSuccess,
  fetchTrainingSuccessWithOutPayload,
} from "../features/trainingSlice";

const useTrainingServices = () => {
  const { axiosPublic, axiosToken } = useAxios();
  const dispatch = useDispatch();
  const endPoint = "/training";



  const getTrainingApi = async () => {
    dispatch(fetchTrainingStart());
    // const idLoading = toastLoading(`Loading...` );
    try {
      const response = await axiosPublic(endPoint);
      console.log("response get training = ", response);
      // taostStopLoading(idLoading,"success",response?.data?.message)
      // toastSuccessNotify(response?.data?.message);
      dispatch(fetchTrainingSuccess(response?.data?.data));
    } catch (error) {
      dispatch(fetchTrainingFail());
      // taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message)
      toastErrorNotify(error?.response?.data?.message);
      console.log("error get training", error);
    }
  };


  const createNewTrainingMember = async (payload) => {
    const idLoading = toastLoading(`Loading...` );
    dispatch(fetchTrainingStart());
    try {
      const response = await axiosToken.post(endPoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("create new training member response =", response);
      const data = response?.data;
      dispatch(fetchTrainingSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading,"success",response?.data?.message)

      getTrainingApi();
    } catch (error) {
      dispatch(fetchTrainingFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message);
      console.log("create new training member api error:", error);
    }
  };
  const updateTrainingMember = async (id, payload) => {
    const idLoading = toastLoading(`Loading...` );
    dispatch(fetchTrainingStart());
    try {
      const response = await axiosToken.put(endPoint + "/" + id, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("update training member response =", response);
      const data = response?.data;
      dispatch(fetchTrainingSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading,"success",response?.data?.message)

      getTrainingApi();
    } catch (error) {
      dispatch(fetchTrainingFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message);
      console.log("update training member api error:", error);
    }
  };
  const deleteTrainingMember = async (id) => {
    const idLoading = toastLoading(`Loading...` );
    dispatch(fetchTrainingStart());
    try {
      const response = await axiosToken.delete(endPoint + "/" + id);
      console.log("delete training member response =", response);
      const data = response?.data;
      dispatch(fetchTrainingSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message || "Training member is deleted!");
      taostStopLoading(idLoading,"success",response?.data?.message || "Training member is deleted!")

      getTrainingApi();
    } catch (error) {
      dispatch(fetchTrainingFail());
      // toastErrorNotify(
      //   error?.response?.data?.message || "Deleting Training member is failed!"
      // );
      taostStopLoading(idLoading,"error",""+ ""+error?.response?.data?.message  || "Deleting Training member is failed!");
      console.log("delete training member api error:", error);
    }
  };
  return {
    getTrainingApi,
    createNewTrainingMember,
    updateTrainingMember,
    deleteTrainingMember,
  };
};

export default useTrainingServices;
