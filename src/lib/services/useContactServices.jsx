import { taostStopLoading, toastLoading } from "@/helpers/toastify"; 
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchContactFail, fetchContactStart, fetchContactSuccess, fetchContactSuccessWithOutPayload } from "../features/contactSlice";

const useContactServices = () => {
  const { axiosToken } = useAxios();
  const endPoint = "/contactInfo";
  const dispatch = useDispatch();

  const getContactsApi = async () => {
    dispatch(fetchContactStart());
    const idLoading = toastLoading(`Loading...`);
    try {
      const response = await axiosToken(endPoint);
      console.log("response get contact infos = ", response);
      taostStopLoading(idLoading, "success", response?.data?.message);
      dispatch(fetchContactSuccess(response?.data?.data));
    } catch (error) {
      dispatch(fetchContactFail());
      taostStopLoading(
        idLoading,
        "error",
        "" + "" + error?.response?.data?.message
      );
      console.log("error get contact infos", error);
    }
  };

 
  const deleteContact = async (id) => {
    const idLoading = toastLoading(`Loading...`);
    dispatch(fetchContactStart());
    try {
      const response = await axiosToken.delete(endPoint + "/" + id);
      console.log("delete contact info response =", response);
      const data = response?.data;
      dispatch(fetchContactSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message || "Email is deleted!");

      taostStopLoading(
        idLoading,
        "success",
        response?.data?.message || "contact info is deleted!"
      );

      getContactsApi();
    } catch (error) {
      dispatch(fetchContactFail());
      // toastErrorNotify(error?.response?.data?.message || "Deleting email is failed!");

      taostStopLoading(
        idLoading,
        "error",
        "" + "" + error?.response?.data?.message || "Deleting contact info is failed!"
      );
      console.log("delete contact info api error:", error);
    }
  };
 

  return { getContactsApi, deleteContact };
};

export default useContactServices;
