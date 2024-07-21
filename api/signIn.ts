import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const signIn = async (phone: string, password: string) => {
  try {
    if (!phone || !password) {
      return toastWarning("Не все поля заполнены");
    }

    const payload = {
      phone,
      password,
    };

    const res: AxiosResponse = await axiosInstance.post("auth/signIn", payload);

    return res.data;
  } catch (error: any) {
    toastError(
      error?.response?.data?.message || "При авторизации произошла ошибка."
    );
  }
};

export default signIn;
