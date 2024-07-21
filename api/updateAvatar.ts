import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const updateAvatar = async (avatar: string) => {
  try {
    if (!avatar) return toastWarning("Аватар не загружен");

    const payload = {
      avatar,
    };

    const res: AxiosResponse = await axiosInstance.put(
      "user/update/avatar",
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

export default updateAvatar;
