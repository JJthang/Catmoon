import { createBrowserRouter } from "react-router-dom";
import LayoutClient from "../components/common/Layouts/Client";
import HomePage from "../pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

export default route
