import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Campaigns from "./pages/Campaigns/Index";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/campaigns", element: <Campaigns /> },
    ],
  },
]);

export default router;
