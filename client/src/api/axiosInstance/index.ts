



import axios, { AxiosError, AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import { BaseApiResponse } from "typescript/interface/common.interface";






/* The code you provided is creating an instance of the Axios library with some custom configurations
and interceptors. */

const baseURL = "http://localhost:5000/api/v1/";


const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.request.use((config) => {
  const cookies = parseCookies();

  const token = cookies?.aperture_token 
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    // only show success notification on this routes

    // if (sucessNotificationEndPoints.includes(res.config.url as string)) {
    //   if (res?.data?.status !== 200) {
    //     globalCatchWarning(res);
    //   } else {
    //     globalCatchSucess(res);
    //   }
    // }

    return res;
  },
  async (error: AxiosError<BaseApiResponse>) => {
    // globalCatchError(error);
    // const { data, status, config } = error.response!;
    const originalRequest = error.config;

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const access_token = await refreshAccessToken();
    //   setCookieClient("token", access_token?.token);
    //   axios.defaults.headers.common["x-access-token"] = access_token?.token;
    //   return axiosInstance(originalRequest);
    // }

    return Promise.reject(error);
  }
);

export default axiosInstance;
