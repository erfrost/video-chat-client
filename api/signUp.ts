import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const signUp = async (
  nickname: string,
  email: string,
  phone: string,
  password: string,
  gender: string,
  dateBirth: string,
  avatar: string,
  passport: string
) => {
  try {
    if (!nickname || !email || !phone || !password || !gender || !dateBirth) {
      return toastWarning("Не все поля заполнены");
    }

    if (gender === "female" && !passport) {
      return toastWarning("Паспорт не загружен");
    }

    const payload = {
      nickname,
      email,
      phone,
      password,
      gender,
      dateBirth,
      avatar,
      passport,
    };

    const res: AxiosResponse = await axiosInstance.post("auth/signUp", payload);

    return res.data;
  } catch (error: any) {
    toastError(
      error?.response?.data?.message || "При регистрации произошла ошибка."
    );
  }
};

export default signUp;
