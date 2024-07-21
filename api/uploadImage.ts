import axiosInstance from "@/axios.config";
import { toastError } from "@/utils/toast";
import { AxiosResponse } from "axios";

const uploadImage = async (file: File) => {
  try {
    if (!file) return toastError("Файл не выбран");

    const formData: FormData = new FormData();
    formData.append("image", file);

    const res: AxiosResponse = await axiosInstance.post(
      "images/singleUpload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.avatar_path;
  } catch (error: any) {
    toastError(
      error?.response?.data?.message || "При загрузке файла произошла ошибка."
    );
  }
};

export default uploadImage;
