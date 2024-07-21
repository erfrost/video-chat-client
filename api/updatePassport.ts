import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const updatePassport = async (passport: string) => {
  try {
    if (!passport) return toastWarning("Паспорт не загружен");

    const payload = {
      passport,
    };

    const res: AxiosResponse = await axiosInstance.put(
      "user/update/passport",
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

export default updatePassport;
