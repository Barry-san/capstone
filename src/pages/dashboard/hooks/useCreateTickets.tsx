import { useMutation } from "@tanstack/react-query";
import { request } from "@/lib/requests";

export default function useCreateTickets(eventID: string) {
  return useMutation({
    mutationFn: (payload: { amount: number; type: string; name: string }) => {
      return request.post(`/event/${eventID}/ticket`, payload);
    },
  });
}
