import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { NotFound } from "../common/404";

export function AppRoutes() {
  return useRoutes([...publicRoutes, { path: "*", element: <NotFound /> }]);
}
