import { request } from "../../../../lib/requests";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: { email: string; password: string }) => {
      return request.post("/auth/login", data);
    },
    retry: false,
  });
}
