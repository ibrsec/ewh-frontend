import { taostStopLoading, toastErrorNotify, toastLoading, toastSuccessNotify } from "@/helpers/toastify";
import {
  fetchEmailFail,
  fetchEmailStart,
  fetchEmailSuccess,
  fetchEmailSuccessWithOutPayload,
} from "../features/emailSlice";
import useAxios from "./useAxios";
import { useDispatch, useSelector } from "react-redux";

const useEmailServices = () => {
  const { axiosToken } = useAxios();
  const endPoint = "/emails";
  const dispatch = useDispatch();

  // const page = useSelector((state) => state.email.page);
  // const search = useSelector((state) => state.email.search);

  const getEmailsApi = async (query = "") => {
    dispatch(fetchEmailStart());
    try {
      // const response = await axiosToken(endPoint+ "?page=" + page + "&search[email]="+search);
      const response = await axiosToken(endPoint+ query);
      // console.log("response get emails = ", response);
      // taostStopLoading(idLoading, "success", response?.data?.message);
      dispatch(fetchEmailSuccess(response?.data));
    } catch (error) {
      dispatch(fetchEmailFail());
      toastErrorNotify( error?.response?.data?.message );
      console.log("error get emails", error);
    }
  };
  const createNewEmail = async (payload) => {
    const idLoading = toastLoading(`Loading...`);
    dispatch(fetchEmailStart());
    try {
      const response = await axiosToken.post(endPoint, payload);
      // console.log("create new email response =", response);
      const data = response?.data;
      dispatch(fetchEmailSuccessWithOutPayload());

      //warnings
      //   toastSuccessNotify(data?.message);
      taostStopLoading(idLoading, "success", response?.data?.message);

      getEmailsApi();
    } catch (error) {
      dispatch(fetchEmailFail());
      taostStopLoading(
        idLoading,
        "error",
        "" + "" + error?.response?.data?.message
      );

      console.log("create new email api error:", error);
    }
  };
  const updateEmail = async (id, payload) => {
    const idLoading = toastLoading(`Loading...`);
    dispatch(fetchEmailStart());
    try {
      const response = await axiosToken.put(endPoint + "/" + id, payload);
      // console.log("update email response =", response);
      const data = response?.data;
      dispatch(fetchEmailSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message);

      taostStopLoading(idLoading, "success", response?.data?.message);

      getEmailsApi();
    } catch (error) {
      dispatch(fetchEmailFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(
        idLoading,
        "error",
        "" + "" + error?.response?.data?.message
      );
      console.log("update email api error:", error);
    }
  };
  const deleteEmail = async (id) => {
    const idLoading = toastLoading(`Loading...`);
    dispatch(fetchEmailStart());
    try {
      const response = await axiosToken.delete(endPoint + "/" + id);
      // console.log("delete email response =", response);
      const data = response?.data;
      dispatch(fetchEmailSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message || "Email is deleted!");

      taostStopLoading(
        idLoading,
        "success",
        response?.data?.message || "Email is deleted!"
      );

      getEmailsApi();
    } catch (error) {
      dispatch(fetchEmailFail());
      // toastErrorNotify(error?.response?.data?.message || "Deleting email is failed!");

      taostStopLoading(
        idLoading,
        "error",
        "" + "" + error?.response?.data?.message || "Deleting email is failed!"
      );
      console.log("delete email api error:", error);
    }
  };

  const sendMailToEveryOne = async (payload) => {
    const idLoading = toastLoading(`Loading...`);
    dispatch(fetchEmailStart());
    try {
      const response = await axiosToken.post(endPoint+ "/everyone", payload);
      // console.log("send email to everyone response =", response);
      const data = response?.data;
      dispatch(fetchEmailSuccessWithOutPayload());

      //warnings
      //   toastSuccessNotify(data?.message);
      taostStopLoading(idLoading, "success", response?.data?.message);

      getEmailsApi();
    } catch (error) {
      dispatch(fetchEmailFail());
      taostStopLoading(
        idLoading,
        "error",
        "" + "" + error?.response?.data?.message
      );

      console.log("send email to everyone api error:", error);
    }
  };

  return { getEmailsApi, createNewEmail, updateEmail, deleteEmail, sendMailToEveryOne };
};

export default useEmailServices;
