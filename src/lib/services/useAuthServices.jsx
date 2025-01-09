import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

import {
  fetchAuthFail,
  fetchAuthLoginSuccess,
  fetchAuthLogout,
  fetchAuthStart,
} from "../features/authSlice";
import {
  taostStopLoading,
  toastErrorNotify,
  toastLoading,
  toastSuccessNotify,
  toastWarnNotify,
} from "@/helpers/toastify";
import { useRouter } from "next/navigation";

const useAuthServices = () => {
  const { axiosPublic } = useAxios();
  const dispatch = useDispatch();
  const router = useRouter();

  const loginApi = async (payload) => {
    const endPoint = "/auth/login";

    const idLoading = toastLoading(`Loading...`);
    dispatch(fetchAuthStart());
    try {
      const response = await axiosPublic.post(endPoint, payload);
      // console.log("login response =", response);
      const data = response?.data;
      dispatch(fetchAuthLoginSuccess(data));

      //!navigate
      router.push("/adminpanel");

      //warnings
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading, "success", response?.data?.message);
    } catch (error) {
      dispatch(fetchAuthFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(idLoading, "error", error?.response?.data?.message);
      console.log("login api error:", error);
    }
  };
  // const registerApi = async (payload) => {
  //   const endPoint = "/users";

  //   dispatch(fetchAuthStart());
  //   try {
  //     const response = await axiosPublic.post(endPoint, payload);
  //     // console.log("register response =", response);
  //     const data = response?.data;
  //     dispatch(fetchAuthRegisterSuccess(data));

  //     //!navigate
  //     navigate("/");

  //     //warnings
  //     toastSuccess(data?.message);
  //   } catch (error) {
  //     dispatch(fetchAuthFail());
  //     toastError(error?.response?.data?.message);
  //     console.log("register api error:", error);
  //   }
  // };

  const logoutApi = async () => {
    const endPoint = "/auth/logout";
    const idLoading = toastLoading(`Loading...`);

    dispatch(fetchAuthStart());
    try {
      const response = await axiosPublic(endPoint);
      // console.log("logout response =", response);
      const data = response?.data;
      dispatch(fetchAuthLogout());

      // dispatch();
      // dispatch();

      //!navigate
      router.push("/admin-login");

      //warnings
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading, "success", response?.data?.message);
    } catch (error) {
      dispatch(fetchAuthFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(idLoading, "error", error?.response?.data?.message);
      console.log("logout api error:", error);
      toastWarnNotify("Logged out without backend!")
      dispatch(fetchAuthLogout());
    }
  };

  // return { loginApi, registerApi, logoutApi };
  return { loginApi, logoutApi };
};

export default useAuthServices;
