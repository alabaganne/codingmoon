import { ReactNode } from "react";
import Main from "./components/Layouts/Main";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

type Route = {
  path: string;
  element: ReactNode;
  childrens?: [Route];
};

export const authenticatedRoutes: Route[] = [
  {
    path: "/",
    element: <Main />,
    childrens: [{ path: "/", element: <Dashboard /> }],
  },
];
