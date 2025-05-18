import type { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
  {
    path: "/auth/login",
    element: <></>,
  },
  {
    path: "/auth/register",
    element: <></>,
  },
];

export const protectedRoutes: RouteObject[] = [
  { path: "/dashboard", element: <></>, children: [] },
];
