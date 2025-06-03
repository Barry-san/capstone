import { request } from "@/lib/requests";
import { useMutation } from "@tanstack/react-query";

export function useRegisterEvent(eventID: string, ticketId: string) {
  return useMutation({
    mutationFn: () => {
      return request.post(`/events/${eventID}/ticket/${ticketId}`);
    },
  });
}
