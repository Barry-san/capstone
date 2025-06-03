import { request } from "@/lib/requests";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

type RegisterProps = {
  email: string;
  password: string;
  fullName: string;
};

export default function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterProps) => request.post("/auth/register", data),
    retry: false,
    throwOnError: true,
    onSuccess: () => {
      toast.success("user created successfully.");
    },

    onError: (e) => {
      toast.error(e.message);
    },
  });
}
