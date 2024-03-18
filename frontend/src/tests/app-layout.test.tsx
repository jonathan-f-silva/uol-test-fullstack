import { test } from "vitest";
import { renderApp, screen } from "./utils";

beforeEach(() => {
  renderApp();
});

test("renders logo", async () => {
  const logo = await screen.findByAltText(/logo do uol/i);
  expect(logo).toBeInTheDocument();
});

test("renders header", async () => {
  const header = await screen.findByRole("heading", {
    name: /painel de clientes/i,
  });
  expect(header).toBeInTheDocument();
});
