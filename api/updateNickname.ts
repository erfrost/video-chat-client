import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const updateNickname = async (nickname: string) => {
  try {
    if (!nickname) return toastWarning("Никнейм не введён");

    const payload = {
      nickname,
    };

    const res: AxiosResponse = await axiosInstance.put(
      "user/update/nickname",
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

export default updateNickname;
