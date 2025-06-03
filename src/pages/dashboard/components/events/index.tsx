type EventType = {
  id: string;
  name: string;
  description: string;
  location: string;
  duration: string;
  date: string;
  eventType: "VIRTUAL" | "PHYSICAL" | "HYBRID";
};
import { useState } from "react";
import { useGetEvents } from "../../hooks/useGetEvents";
import useDeleteEvent from "../../hooks/useDeleteEvents";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import CreateTicketForm from "../create-ticket";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const { data, isLoading } = useGetEvents();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data?.data.length === 0) {
    return <p>No events available at the moment</p>;
  }
  if (data?.data) {
    console.log(data.data);
    return (
      <div className="flex flex-col gap-4">
        {data.data.map((event: EventType) => (
          <EventCard
            selectedEvent={selectedEvent}
            event={event as EventType}
            handleAddTickets={() => {
              setSelectedEvent(event.id);
              console.log(selectedEvent);
            }}
          ></EventCard>
        ))}

        {!!selectedEvent && (
          <div className="flex flex-col items-center justify-center w-full h-screen fixed left-0 right-0 top-0 bottom-0 z-10 bg-primary-300/50">
            <div className="p-6 flex flex-col gap-4 bg-white w-1/3 rounded-md">
              <CreateTicketForm
                eventId={selectedEvent}
                close={() => setSelectedEvent("")}
              />
              <button
                className="bg-red-400 p-2 rounded-md text-white"
                onClick={() => setSelectedEvent("")}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const EventCard = ({
  event,
  handleAddTickets,
  selectedEvent,
}: {
  event: EventType;
  handleAddTickets: () => unknown;
  selectedEvent: string;
}) => {
  const { mutate } = useDeleteEvent(event.id);
  const client = useQueryClient();

  console.log(selectedEvent);
  return (
    <div className="flex gap-3 w-full justify-between odd:bg-primary-50 p-2">
      <img src="/images/eventcard.png" />
      <div className="flex gap-2 p-2 items-center justify-between w-full rounded-lg">
        <section className="flex flex-col justify-center py-4 gap-3">
          <span className="inline-block p-1 text-xs bg-primary-200 w-fit rounded-lg">
            {event.eventType}
          </span>
          <article className="">
            <h3 className="font-semibold text-lg">{event.name}</h3>
            <p className="text-sm">{event.description}</p>
          </article>
        </section>
        <section className="flex flex-col justify-center py-4 gap-2">
          <p className="text-sm text-light flex gap-2 items-center justfy-between">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9996 12.8108C12.5792 12.8108 13.8596 11.5304 13.8596 9.95082C13.8596 8.37129 12.5792 7.09082 10.9996 7.09082C9.42011 7.09082 8.13965 8.37129 8.13965 9.95082C8.13965 11.5304 9.42011 12.8108 10.9996 12.8108Z"
                stroke="#474747"
                stroke-width="1.375"
              />
              <path
                d="M3.31823 8.28251C5.12406 0.344179 16.8849 0.353346 18.6816 8.29168C19.7357 12.9483 16.8391 16.89 14.2999 19.3283C12.4574 21.1067 9.5424 21.1067 7.69073 19.3283C5.16073 16.89 2.26406 12.9392 3.31823 8.28251Z"
                stroke="#474747"
                stroke-width="1.375"
              />
            </svg>

            <span className="font-semibold">{event.location}</span>
          </p>
          <p className="text-sm text-light text-right flex gap-2 ">
            <span className="text-right">
              {new Date(event.date).toDateString()}
            </span>
          </p>
        </section>
        <section className="flex items-center justify-center py-4 gap-2">
          <button
            onClick={() => handleAddTickets()}
            className="bg-blue-600 text-white px-4 rounded-md"
          >
            Add tickets
          </button>

          <button
            onClick={() => {
              mutate(undefined, {
                onSuccess: () => {
                  toast.success("Event deleted");
                  client.invalidateQueries({ queryKey: ["get-events"] });
                },
              });
            }}
            className="bg-red-400 text-white px-3 rounded-md"
          >
            delete event
          </button>
        </section>
      </div>
    </div>
  );
};
