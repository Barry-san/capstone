import { useForm } from "react-hook-form";

type AttendEventInputs = {
  amount: string;
  ticketType: "REGULAR" | "VIP" | "VVIP";
};

export default function AttendEventForm({ eventId }: { eventId: string }) {
  const { register, formState } = useForm();

  return (
    <form>
      <div></div>
    </form>
  );
}
