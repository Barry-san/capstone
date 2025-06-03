import { useForm } from "react-hook-form";
import useCreateTickets from "../../hooks/useCreateTickets";
import toast from "react-hot-toast";

type TicketInputs = {
  name: string;
  type: "REGULAR" | "VIP" | "VVIP";
  price: number;
  amount: string;
};

export default function TicketForm({ eventId }: { eventId: string }) {
  const { mutate, isPending } = useCreateTickets(eventId);
  const { register, handleSubmit, formState } = useForm<TicketInputs>();
  const { errors } = formState;

  const createTicket = ({ name, amount, type }: TicketInputs) => {
    mutate(
      { name, type, amount: 100 },
      {
        onSuccess: () => {
          toast.success("");
        },
      },
    );
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(createTicket)} className="flex flex-col gap-4">
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
          amount
          <input
            className="p-2 rounded border"
            placeholder="Enter description"
            {...register("amount", {
              required: true,
              min: {
                value: 7,
                message: "description should be at least 7 character",
              },
            })}
          />
        </label>
        {errors.amount?.message && (
          <p className="text-sm text-red-500">{errors.amount?.message}</p>
        )}
      </div>

      <select
        className="p-2 rounded border"
        {...register("type", { required: "this is a required field" })}
      >
        <option value="VIRTUAL">Virtual</option>
        <option value="HYBRID">Hybrid</option>
        <option value="PHYSICAL">Physical</option>
      </select>

      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          price
          <input
            className="p-2 rounded border"
            placeholder="Enter date for the event"
            {...register("price", {
              required: { value: true, message: "this field is required" },
            })}
          />
        </label>
        {errors.price?.message && (
          <p className="text-sm text-red-500">{errors.price?.message}</p>
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
