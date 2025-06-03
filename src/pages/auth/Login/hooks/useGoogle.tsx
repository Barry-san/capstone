import { request } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";

export default function useGoogle() {
  return useQuery({
    queryKey: ["google auth"],
    queryFn: () => request.get("/auth/google"),
  });
}
