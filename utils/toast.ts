import { toast } from "react-toastify";

export const toastSuccess = (message: string) => {
  return toast.success(message, {
    position: "bottom-right",
  });
};

export const toastWarning = (message: string) => {
  return toast.warning(message, {
    position: "bottom-right",
  });
};

export const toastError = (message: string) => {
  return toast.error(message, {
    position: "bottom-right",
  });
};
