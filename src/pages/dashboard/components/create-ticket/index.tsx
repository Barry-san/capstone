import { useForm } from "react-hook-form";
import useCreateTickets from "../../hooks/useCreateTickets";
import toast from "react-hot-toast";

type TicketInputs = {
  name: string;
  description: string;
  amount: string;
};

export default function TicketForm({
  eventId,
  close,
}: {
  eventId: string;
  close: () => void;
}) {
  const { mutate, isPending } = useCreateTickets(eventId);
  const { register, handleSubmit, formState } = useForm<TicketInputs>();
  const { errors } = formState;

  const createTicket = ({ name, description }: TicketInputs) => {
    mutate(
      { name, description, amount: 100, eventId },
      {
        onSuccess: () => {
          toast.success("Ticket Created");
          close();
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(createTicket)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <label className="flex flex-col">
          Ticket name
          <input
            className="p-2 rounded border"
            placeholder="Enter ticket name"
            {...register("name", {
              required: true,
              min: {
                value: 1,
                message: "ticket name should be at least one character",
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
            type="number"
            className="p-2 rounded border"
            placeholder="Enter amount of tickets for sale. "
            {...register("amount", {
              required: true,
              min: {
                value: 1,
                message: "minimum of 1 ticket",
              },
            })}
          />
        </label>
        {errors.amount?.message && (
          <p className="text-sm text-red-500">{errors.amount?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          Description
          <input
            className="p-2 rounded border"
            placeholder="Enter a description for the ticket"
            {...register("description", {
              required: { value: true, message: "this field is required" },
            })}
          />
        </label>
        {errors.description?.message && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <button
        disabled={isPending}
        type="submit"
        className="bg-primary-500 p-2 rounded-md text-white"
      >
        {isPending ? "Loading..." : "Create Ticket"}
      </button>
    </form>
  );
}
