import { test } from "vitest";
import { renderApp, screen } from "./utils";

beforeEach(() => {
  renderApp();
});

test("renders header", () => {
  const header = screen.getByRole("heading", {
    name: /painel de clientes/i,
  });
  expect(header).toBeInTheDocument();
});
