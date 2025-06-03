import { request } from "@/lib/requests";
import { useMutation } from "@tanstack/react-query";

type EventType = {
  name: string;
  location: string;
  date: string;
  duration: string;
  eventType: "PHYSICAL" | "VIRTUAL" | "HYBRID";
};

export default function useCreateEvent() {
  return useMutation({
    mutationFn: (data: EventType) => {
      return request.post("/event", data);
    },
  });
}
