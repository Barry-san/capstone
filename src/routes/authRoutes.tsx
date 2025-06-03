import type { RouteObject } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "@/pages/auth/Register";
import DashboardPage from "@/pages/dashboard";
import Attendee from "@/pages/Attend";

export const authRoutes: RouteObject[] = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];

export const protectedRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardPage></DashboardPage>,
    children: [],
  },
  {
    path: "/attend",
    element: <Attendee />,
    children: [],
  },
];
