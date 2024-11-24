/* Server path 2 : axiosInstance */
/* want to create a axios instance. It behave like a middleware */
import { authKey } from "@/constant/authKey";
import {
  generateNewAccessToken,
  setTokenToLocalStorage,
} from "@/services/auth.services";
import { TResponseObjectForError, TResponseObjectForSuccess } from "@/types";
import { getTokenFromLocalStorageWithKey } from "@/utils/local-storage";
import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] =
  "application/json"; /* 32-10 Add headers {"Content-Type"} = "application/json";*/
axiosInstance.defaults.headers["Accept"] =
  "application/json"; /* Get data as headers ["Accept"] = "application/json"; */
axiosInstance.defaults.timeout = 60000; /* 60 seconds time */

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // Sending token to the server
    const accessToken = getTokenFromLocalStorageWithKey(authKey);
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
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const config = error?.config;
    if (error?.status === 500) {
      console.log("error here", error);

      const generateNewToken = await generateNewAccessToken();
      console.log(generateNewToken);
      const newToken = generateNewToken?.data?.accessToken;
      config.headers["Authorization"] = newToken; // same as above

      // Now set to local storage
      setTokenToLocalStorage(newToken);

      return axiosInstance(config); //35-4 why it return to axiosInstance?
      /* This ensures that the request which initially failed 
      (due to the expired or invalid token) is re-sent with the correct token, potentially 
      succeeding this time. */
    } else {
      const responseObjectForError: TResponseObjectForError = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessage: error?.response?.data?.errorMessage,
      };
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
