/* eslint-disable react-refresh/only-export-components */
import { RenderOptions, cleanup, render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { afterEach } from "vitest";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { routes as appRoutes } from "../routes";
import { CustomerProvider } from "../contexts/CustomerContext";

afterEach(() => {
  cleanup();
});

function renderApp({
  initialEntries = ["/"],
  renderOptions = {},
  routes = appRoutes,
}: {
  renderOptions?: RenderOptions;
  initialEntries?: string[];
  routes?: RouteObject[];
} = {}) {
  return render(
    <CustomerProvider>
      <ChakraProvider>
        <RouterProvider
          router={createMemoryRouter(routes, {
            initialEntries,
          })}
        />
      </ChakraProvider>
    </CustomerProvider>,
    renderOptions
  );
}

/**
 * Renders the app at a specific path
 */
function renderAppAt(path: string) {
  return renderApp({ initialEntries: [path] });
}

/**
 * Renders a component in a mock test page for unit testing
 * @param component - The component to be rendered
 */
function renderComponent(component: JSX.Element) {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: component,
    },
  ];
  return renderApp({ routes });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { renderApp, renderAppAt, renderComponent };
