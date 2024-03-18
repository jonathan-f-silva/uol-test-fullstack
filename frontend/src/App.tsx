import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { CustomerProvider } from "./contexts/CustomerContext";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: "orange",
      },
    },
  },
});

export function App() {
  return (
    <CustomerProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </ChakraProvider>
    </CustomerProvider>
  );
}
