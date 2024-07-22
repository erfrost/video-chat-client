import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";
import { getCookie, setCookie } from "cookies-next";

const updateToken = async () => {
  try {
    const refresh_token: string | undefined = getCookie("refresh_token");
    if (!refresh_token) {
      return toastWarning("refresh_token не найден. Войдите в аккаунт еще раз");
    }

    const payload = {
      refresh_token,
    };

    const { data }: AxiosResponse = await axiosInstance.post(
      "auth/token",
      payload
    );

    const { accessToken, refreshToken, userId } = data;

    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);
    setCookie("user_id", userId);
  } catch (error: any) {
    toastError(
      error?.response?.data?.message ||
        "При обновлении токена произошла ошибка."
    );
  }
};

export default updateToken;
