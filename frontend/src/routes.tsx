import { RouteObject } from "react-router-dom";
import { AppLayout } from "./components";
import { CustomerPanel } from "./pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <CustomerPanel />,
      },
    ],
  },
];
