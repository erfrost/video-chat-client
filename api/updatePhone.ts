import axiosInstance from "@/axios.config";
import { toastError, toastWarning } from "@/utils/toast";
import { AxiosResponse } from "axios";

const updatePhone = async (phone: string) => {
  try {
    if (!phone) return toastWarning("Телефон не введён");

    const payload = {
      phone,
    };

    const res: AxiosResponse = await axiosInstance.put(
      "user/update/phone",
      payload
    );

    return res.data;
  } catch (error: any) {
    console.log(error);
    toastError(
      error?.response?.data?.message ||
        "При обновлении данных произошла ошибка."
    );
  }
};

export default updatePhone;
