import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>error page</p>,
    children: [
      {
        path: "/",
        element: <p>Home page</p>,
      },
    ],
  },
]);

export default router;
