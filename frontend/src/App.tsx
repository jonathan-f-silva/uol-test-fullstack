import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { CustomerProvider } from "./contexts/CustomerContext";

export function App() {
  return (
    <CustomerProvider>
      <ChakraProvider>
        <RouterProvider router={createBrowserRouter(routes)} />
      </ChakraProvider>
    </CustomerProvider>
  );
}
