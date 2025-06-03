import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type AttendEventInputs = {
  amount: string;
  ticketType: "REGULAR" | "VIP" | "VVIP";
};

const REQUIRED_FIELD_MESSAGE = "This field is required";

export default function AttendEventForm({ eventId }: { eventId: string }) {
  const { register, formState, handleSubmit } = useForm<AttendEventInputs>();
  const { errors } = formState;

  const handleAttend = (data: AttendEventInputs) => {
    console.log(eventId);
    console.log(data);
    toast.success("You're all set");
  };
  return (
    <form
      onSubmit={handleSubmit(handleAttend)}
      className="p-6 bg-primary-50 rounded-md flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label className="flex flex-col gap-2 ">
          Amount:
          <input
            className="border p-2 bg-white rounded-md "
            type="number"
            {...register("amount", {
              required: { value: true, message: REQUIRED_FIELD_MESSAGE },
            })}
          />
        </label>
        {errors.amount?.message && (
          <p className="text-xs text-red-500">{errors.amount?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="flex flex-col gap-2 ">
          Select Ticket Type
          <select className="p-2 border bg-white">
            <option {...register("ticketType")}>REGULAR</option>
            <option {...register("ticketType")}>VIP</option>
            <option {...register("ticketType")}>VVIP</option>
          </select>
        </label>
        {errors.amount?.message && (
          <p className="text-xs text-red-500">{errors.amount?.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="py-3 px-2 rounded-md text-white font-bold bg-primary-400"
      >
        RSVP
      </button>
    </form>
  );
}
