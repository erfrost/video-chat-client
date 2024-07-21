import axiosInstance from "@/axios.config";
import { toastError } from "@/utils/toast";
import { AxiosResponse } from "axios";

const getUser = async () => {
  try {
    const res: AxiosResponse = await axiosInstance.get("user");

    return res.data;
  } catch (error: any) {
    toastError(
      error?.response?.data?.message || "При загрузке данных произошла ошибка."
    );
  }
};

export default getUser;
