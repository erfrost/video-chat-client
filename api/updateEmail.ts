import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const updateEmail = async (email: string) => {
  try {
    if (!email) return toastWarning("Почта не введена");

    const payload = {
      email,
    };

    const res: AxiosResponse = await axiosInstance.put(
      "user/update/email",
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

export default updateEmail;
