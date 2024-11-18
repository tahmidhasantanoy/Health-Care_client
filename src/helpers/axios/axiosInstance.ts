/* want to create a axios instance. It behave like a middleware */
import { authKey } from "@/constant/authKey";
import { TResponseObjectForError, TResponseObjectForSuccess } from "@/types";
import { getTokenFromLocalStorageWithKey } from "@/utils/local-storage";
import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // Sending token to the server
    const accessToken = getTokenFromLocalStorageWithKey(authKey);
    console.log(accessToken);
    if (accessToken) config.headers.Authorization = accessToken;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const responseObjectForSuccess: TResponseObjectForSuccess = {
      data: response?.data?.data, // redux allways send data with data
      meta: response?.data?.meta,
    };
    // return response;
    return responseObjectForSuccess;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const responseObjectForError: TResponseObjectForError = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessage: error?.response?.data?.errorMessage,
    };

    return Promise.reject(error);
  }
);

export { axiosInstance };
