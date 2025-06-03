import { request } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";

const useGetTickets = (eventId: string) => {
  return useQuery({
    queryKey: [`get-tickets-${eventId}`],
    queryFn: () => {
      return request.post(`/event/${eventId}/ticket`);
    },
  });
};

export default useGetTickets;
