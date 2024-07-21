import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const updatePassword = async (password: string) => {
  try {
    if (!password) return toastWarning("Пароль не введён");

    const payload = {
      password,
    };

    const res: AxiosResponse = await axiosInstance.put(
      "user/update/password",
      payload
    );

    return res.data;
  } catch (error: any) {
    toastError(
      error?.response?.data?.message ||
        "При обновлении данных произошла ошибка."
    );
  }
};

export default updatePassword;
