// import type  from "react-router-dom"

import type { RouteObject } from "react-router-dom";
import LandingPage from "../pages/landing";

export const publicRoutes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
];
