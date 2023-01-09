import {
  toast as baseToast,
  TypeOptions,
} from "react-toastify";
import ToastCard from "../components/toast-card";

interface ToastMessageProps {
  type: TypeOptions;
  message: string;
}

export default function toast({
  type,
  message,
}: ToastMessageProps) {
  return baseToast(ToastCard, {
    type,
    role: message,
  });
}
