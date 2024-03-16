import { RouteObject } from "react-router-dom";
import { AppLayout } from "./components";
import { CustomerCreate, CustomerEdit, CustomerPanel } from "./pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <CustomerPanel />,
      },
      {
        path: "/new",
        element: <CustomerCreate />,
      },
      {
        path: "/edit/:customerId",
        element: <CustomerEdit />,
      },
    ],
  },
];
