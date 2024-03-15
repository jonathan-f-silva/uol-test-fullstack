import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

export function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </ChakraProvider>
  );
}
