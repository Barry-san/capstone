import { useMutation } from "@tanstack/react-query";
import { request } from "@/lib/requests";

const useDeleteEvent = (eventId: string) => {
  return useMutation({
    mutationFn: () => {
      return request.delete(`/event/${eventId}`);
    },
  });
};

export default useDeleteEvent;
