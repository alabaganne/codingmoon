import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import CreateCampaign from "./pages/Campaigns/Create";
import EditCampaign from "./pages/Campaigns/Edit";
import Campaigns from "./pages/Campaigns/Index";
import CampaignStatistics from "./pages/Campaigns/Statistics";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreatePost from "./pages/Posts/Create";
import CreatePostSuccess from "./pages/Posts/CreatePostSuccess";
import Posts from "./pages/Posts/Index";
import PostStatistics from "./pages/Posts/Statistics";
import Statistics from "./pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/campaigns", element: <Campaigns /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/campaigns/create", element: <CreateCampaign /> },
      {
        path: "/campaigns/:campaignId/statistics",
        element: <CampaignStatistics />,
      },
      { path: "/campaigns/:campaignId/edit", element: <EditCampaign /> },
      { path: "/campaigns/:campaignId/posts", element: <Posts /> },
      { path: "/campaigns/:campaignId/posts/create", element: <CreatePost /> },
      {
        path: "/campaigns/:campaignId/posts/create/success",
        element: <CreatePostSuccess />,
      },
      {
        path: "/campaigns/:campaignId/posts/statistics",
        element: <PostStatistics />,
      },
      {
        path: "/campaigns/:campaignId/posts/:postId/edit",
        element: <EditCampaign />,
      },
    ],
  },
]);

export default router;
