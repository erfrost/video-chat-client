import axios from "axios";
import { getCookie } from "cookies-next";
import updateToken from "./api/updateToken";

const axiosInstance = axios.create({
  baseURL: "http://147.45.246.145:8000/api",
  // baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken: string | undefined = getCookie("access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      try {
        await updateToken();

        originalRequest._retry = true;
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
