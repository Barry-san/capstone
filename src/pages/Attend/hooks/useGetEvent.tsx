import { request } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";

export default function useGetEvent(id: string) {
  return useQuery({
    queryKey: [`get-event-${id}`],
    queryFn: () => {
      return request.get(`/event/${id}`);
    },
  });
}
