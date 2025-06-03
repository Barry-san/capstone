import AuthLayout from "../layout";
import { useLogin } from "./hooks/useLogin";
import { request } from "@/lib/requests";
import { useAuthContext } from "@/context/authProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function Login() {
  const { setUser } = useAuthContext()!;
  const { mutate, isPending } = useLogin();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<{
    email: string;
    password: string;
  }>();
  const { errors } = formState;
  const loginFunction = (data: { email: string; password: string }) => {
    mutate(data, {
      onSuccess: (res) => {
        request.defaults.headers.common["Authorization"] =
          `Bearer ${res.data.token}`;
        localStorage.setItem("userToken", res.data.token);
        setUser({
          id: res.data.id,
          fullname: res.data.fullname,
          token: res.data.token,
        });
        navigate("/dashboard");
      },
      onError: () => {
        toast.error("invalid login credentials");
      },
    });
  };
  return (
    <AuthLayout>
      <section className="flex flex-col items-center justify-center p-6 bg-neutral-50 md:gap-6">
        <article className="flex flex-col gap-4">
          <h1 className="md:text-3xl font-inter text-center">
            Sign in to <span className="text-primary-700">Eventify</span>
          </h1>
          <p className="font-light">
            Log in to access your dashboard, manage your events, track RSVPs,
            view bookings, and download guest QR codes.
          </p>
        </article>
        <form
          className="flex flex-col gap-6 w-full"
          onSubmit={handleSubmit(loginFunction)}
        >
          <div>
            <label className="flex flex-col gap-2">
              email
              <input
                className="p-2 border"
                type="email"
                placeholder="e.g johndoe@example.com"
                {...register("email", {
                  required: "this field is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "please enter a valid email",
                  },
                })}
              />
            </label>
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>
          <div>
            <label className="flex flex-col gap-3">
              password
              <input
                className="p-2 border"
                type="password"
                placeholder="min 7 characters"
                {...register("password", {
                  required: "this field is required",
                  min: {
                    value: 7,
                    message: "password should contain at least 7 characters",
                  },
                })}
              />
            </label>
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <button
            disabled={false}
            className="py-3 rounded border bg-primary-500 text-neutral-50"
          >
            {isPending ? "Loading..." : "Log in"}
          </button>
        </form>
      </section>
    </AuthLayout>
  );
}
