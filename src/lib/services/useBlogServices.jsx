import {
  taostStopLoading,
  toastErrorNotify,
  toastLoading,
  toastSuccessNotify,
} from "@/helpers/toastify";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import {
  fetchBlogFail,
  fetchBlogStart,
  fetchBlogSuccess,
  fetchBlogSuccessWithOutPayload,
  fetchOneBlogSuccess,
} from "../features/blogSlice";

const useBlogServices = () => {
  const { axiosPublic, axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getBlogsApi = async () => {
    dispatch(fetchBlogStart()); 
    try {
      const response = await axiosToken("/blogs");
      // console.log("response get blogs = ", response);
      // taostStopLoading(idLoading, "success", response?.data?.message);
      // toastSuccessNotify(data?.message);
      dispatch(fetchBlogSuccess(response?.data?.data));
    } catch (error) {
      dispatch(fetchBlogFail());
      // taostStopLoading(
      //   idLoading,
      //   "error",
      //   "" + "" + error?.response?.data?.message
      // );
      toastErrorNotify(error?.response?.data?.message);
      console.log("error get blogs", error);
    }
  };


  const getOneBlogApi = async (id) => {
    dispatch(fetchBlogStart()); 
    try {
      const response = await axiosToken("/blogs/"+id);
      // console.log("response get one blog = ", response);
      // taostStopLoading(idLoading, "success", response?.data?.message);
      // toastSuccessNotify(response?.data?.message);
      dispatch(fetchOneBlogSuccess(response?.data?.data));
    } catch (error) {
      dispatch(fetchBlogFail());
      // taostStopLoading(
      //   idLoading,
      //   "error",
      //   "" + "" + error?.response?.data?.message
      // );
      toastErrorNotify(error?.response?.data?.message);
      console.log("error get one blog", error);
    }
  };


  const createBlogApi = async (payload) => {
    const idLoading = toastLoading(`Loading...`);
    const endPoint = "/blogs";

    dispatch(fetchBlogStart());
    try {
      const response = await axiosToken.post(endPoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log("create new blog response =", response);
      const data = response?.data;
      dispatch(fetchBlogSuccessWithOutPayload());

      getBlogsApi();

      //warnings
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading, "success", response?.data?.message);
    } catch (error) {
      dispatch(fetchBlogFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(
        idLoading,
        "error", error?.response?.data?.message
      );
      console.log("create new blog api error:", error);
    }
  };
  const updateBlog = async (id, payload) => {
    const idLoading = toastLoading(`Loading...`);
    const endPoint = "/blogs/" + id;

    dispatch(fetchBlogStart());
    try {
      const response = await axiosToken.put(endPoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log("update blog response =", response);
      const data = response?.data;
      dispatch(fetchBlogSuccessWithOutPayload());

      //warnings
      // toastSuccessNotify(data?.message);
      taostStopLoading(idLoading, "success", response?.data?.message);

      getBlogsApi();
    } catch (error) {
      dispatch(fetchBlogFail());
      // toastErrorNotify(error?.response?.data?.message);
      taostStopLoading(
        idLoading,
        "error", error?.response?.data?.message
      );
      console.log("update blog api error:", error);
    }
  };
  const deleteBlog = async (id) => {
    const idLoading = toastLoading(`Loading...`);
    const endPoint = "/blogs/" + id;
    dispatch(fetchBlogStart());
    try {
      const response = await axiosToken.delete(endPoint);
      // console.log("delete blog response =", response);
      const data = response?.data;
      dispatch(fetchBlogSuccessWithOutPayload());

      getBlogsApi();

      //warnings
      // toastSuccessNotify(data?.message || "Blog is deleted!");
      taostStopLoading(idLoading, "success", response?.data?.message || "Blog is deleted!");
    } catch (error) {
      dispatch(fetchBlogFail());
      // toastErrorNotify(
      //   error?.response?.data?.message || "Deleting blog is failed!"
      // );
      taostStopLoading(
        idLoading,
        "error", error?.response?.data?.message || "Deleting blog is failed!"
      );
      console.log("delete blog api error:", error);
    }
  };
  return { getBlogsApi, getOneBlogApi, createBlogApi, updateBlog, deleteBlog };
};

export default useBlogServices;
