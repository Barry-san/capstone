import { request } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";

export function useGetEvents() {
  return useQuery({
    queryKey: ["get-events"],
    queryFn: () => {
      return request.get("/event");
    },
    refetchInterval: 5000,
  });
}
