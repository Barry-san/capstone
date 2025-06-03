import { useNavigate } from "react-router-dom";
import AuthLayout from "../layout";
import useRegister from "./hooks/useRegister";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type RegisterInputs = {
  email: string;
  password: string;
  fullName: string;
  organizer: string;
  confirmPassword: string;
};

const REQUIRED_FIELD_MESSAGE = "this field is required.";

export default function Register() {
  const navigate = useNavigate();
  const { isPending, mutate } = useRegister();
  const { register, formState, handleSubmit, getValues } =
    useForm<RegisterInputs>();
  const { errors } = formState;

  const registerUser = ({ email, password, fullName }: RegisterInputs) => {
    mutate(
      { email, password, fullName },
      {
        onError: (e) => {
          toast.error(e.message);
          toast.error(
            "Failed to register user. Please check your connection and try again",
          );
        },
        onSuccess: () => {
          toast.success("User created successfully. Proceed to login.");
          navigate("/auth/login");
        },
      },
    );
  };

  return (
    <AuthLayout>
      <section className="flex flex-col items-center justify-center p-6 bg-neutral-50 md:gap-6">
        <article className="flex flex-col gap-4">
          <h1 className="md:text-3xl font-inter text-center">
            Sign up to <span className="text-primary-700">Eventify</span>
          </h1>
          <p className="font-light font-inter text-sm">
            Start planning your events in minutes. Create custom event pages,
            share RSVP links, receive secure payments, and issue QR codes to
            your guests — all from one simple dashboard.
          </p>
        </article>
        <form
          className="flex flex-col gap-6 w-full"
          onSubmit={handleSubmit(registerUser)}
        >
          <div>
            <label className="flex flex-col gap-2">
              Full name
              <input
                className="p-2 border"
                type="text"
                placeholder="Enter full name"
                {...register("fullName", {
                  required: REQUIRED_FIELD_MESSAGE,
                  max: { value: 40, message: "maximum of 40 characters" },
                })}
              />
            </label>
            <p className="text-sm text-red-500">{errors.fullName?.message}</p>
          </div>

          <div>
            <label className="flex flex-col gap-2">
              email
              <input
                className="p-2 border"
                type="email"
                placeholder="e.g johndoe@example.com"
                {...register("email", {
                  required: REQUIRED_FIELD_MESSAGE,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "please enter a valid email",
                  },
                })}
              />
            </label>
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <label className="flex flex-col gap-2">
              organizer
              <input
                className="p-2 border"
                type="text"
                placeholder="enter organizer name"
                {...register("organizer", {
                  required: REQUIRED_FIELD_MESSAGE,
                })}
              />
            </label>
            <p className="text-sm text-red-500">{errors.organizer?.message}</p>
          </div>

          <div>
            <label className="flex flex-col gap-3">
              password
              <input
                className="p-2 border"
                type="password"
                placeholder="min 7 characters"
                {...register("password", {
                  required: REQUIRED_FIELD_MESSAGE,
                  min: {
                    value: 7,
                    message: "minimum of 7 characters",
                  },
                })}
              />
            </label>
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <div>
            <label className="flex flex-col gap-3">
              confirm password
              <input
                className="p-2 border rounded"
                type="password"
                placeholder="min 7 characters"
                {...register("confirmPassword", {
                  required: REQUIRED_FIELD_MESSAGE,
                  validate: (value) =>
                    value === getValues("password") || "passwords do not match",
                })}
              />
            </label>
            <p className="text-sm text-red-500">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            disabled={isPending}
            className="py-3 border bg-primary-500 text-neutral-50"
          >
            {isPending ? "...loading" : "Sign up"}
          </button>
        </form>
      </section>
    </AuthLayout>
  );
}
