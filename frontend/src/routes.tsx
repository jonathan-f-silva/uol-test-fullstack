import { RouteObject } from "react-router-dom";
import { AppLayout } from "./components";
import {
  CustomerCreate,
  CustomerEdit,
  CustomerPanel,
  CustomerPanelLoader,
} from "./pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <CustomerPanel />,
        loader: CustomerPanelLoader,
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
