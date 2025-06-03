import { useForm } from "react-hook-form";
import useCreateEvent from "../../hooks/useCreateEvent";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useRegisterEvent } from "@/pages/Attend/hooks/useRegisterEvent";
type CreateEventInputs = {
  name: string;
  description: string;
  eventType: "HYBRID" | "VIRTUAL" | "PHYSICAL";
  duration: string;
  location: string;
  date: string;
};

export default function CreateEventForm({
  closeForm,
}: {
  closeForm: () => unknown;
}) {
  const { register, formState, handleSubmit } = useForm<CreateEventInputs>();

  const { errors } = formState;

  const { mutate, isPending } = useCreateEvent();
  const client = useQueryClient();

  const handleCreateFormSubmit = (data: CreateEventInputs) => {
    console.log(data);
    mutate(data, {
      onSuccess: (payload) => {
        console.log(payload);
        toast.success("event created Successfully");
        client.invalidateQueries({ queryKey: ["get-event"] });
        closeForm();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateFormSubmit)}
      className="flex flex-col gap-4 bg-white p-5 w-1/2 rounded-md "
    >
      <div className="flex flex-col gap-3">
        <label className="flex flex-col">
          Event name
          <input
            className="p-2 rounded border"
            placeholder="Enter event name"
            {...register("name", {
              required: true,
              min: {
                value: 1,
                message: "event name should be at least one character",
              },
            })}
          />
        </label>
        {errors.name?.message && (
          <p className="text-sm text-red-500">{errors.name?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          description
          <input
            className="p-2 rounded border"
            placeholder="Enter description"
            {...register("description", {
              required: true,
              min: {
                value: 7,
                message: "description should be at least 7 character",
              },
            })}
          />
        </label>
        {errors.description?.message && (
          <p className="text-sm text-red-500">{errors.description?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          Date
          <input
            className="p-2 rounded border"
            placeholder="Enter date for the event"
            type="datetime-local"
            {...register("date", {
              required: "this field is required",
              min: {
                value: 7,
                message: "description should be at least 7 character",
              },
            })}
          />
        </label>
        {errors.date?.message && (
          <p className="text-sm text-red-500">{errors.date?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          Duration
          <input
            className="p-2 rounded border"
            placeholder="Enter the event duration"
            type="time"
            {...register("duration", {
              required: true,
            })}
          />
        </label>
        {errors.duration?.message && (
          <p className="text-sm text-red-500">{errors.duration?.message}</p>
        )}
      </div>
      <select
        className="p-2 rounded border"
        {...register("eventType", { required: "this is a required field" })}
      >
        <option value="VIRTUAL">Virtual</option>
        <option value="HYBRID">Hybrid</option>
        <option value="PHYSICAL">Physical</option>
      </select>

      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          Location
          <input
            className="p-2 rounded border"
            placeholder="Enter date for the event"
            {...register("location", {
              required: { value: true, message: "this field is required" },
            })}
          />
        </label>
        {errors.location?.message && (
          <p className="text-sm text-red-500">{errors.location?.message}</p>
        )}
      </div>

      <button
        disabled={isPending}
        type="submit"
        className="bg-primary-500 p-2 rounded-md text-white"
      >
        Create Event
      </button>
    </form>
  );
}
