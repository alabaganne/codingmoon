import Home from "@pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";
import { Navigate } from "react-router-dom";

type Path = "/" | "/login" | "/register" | "*";
type Route = {
  path: Path;
  element: JSX.Element;
};

export const authenticatedRoutes: Route[] = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Navigate to="/" replace /> },
];

export const unauthenticatedRoutes: Route[] = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Navigate to="/login" replace /> },
];
