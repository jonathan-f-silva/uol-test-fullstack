import { RouteObject } from "react-router-dom";
import { AppLayout } from "./components";
import { CustomerList } from "./pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <CustomerList />,
      },
    ],
  },
];