import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { authRoutes, protectedRoutes } from "./authRoutes";
import { NotFound } from "../pages/404";
import { useAuthContext } from "@/context/authProvider";

export function AppRoutes() {
  const authState = useAuthContext();
  const routes = authState?.user ? protectedRoutes : [...authRoutes];
  return useRoutes([
    ...publicRoutes,
    ...routes,
    ...protectedRoutes,
    { path: "*", element: <NotFound /> },
  ]);
}
