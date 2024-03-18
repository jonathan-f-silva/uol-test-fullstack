import { test } from "vitest";
import { renderAppAt, screen } from "./utils";

beforeEach(() => {
  renderAppAt("/");
});

test("renders heading", async () => {
  const heading = await screen.findByRole("heading", {
    name: /listagem de usuários/i,
  });
  expect(heading).toBeInTheDocument();
});

test("renders new customer button", async () => {
  const button = await screen.findByRole("button", { name: /novo cliente/i });
  expect(button).toBeInTheDocument();
});

test.todo("renders customers data", async () => {
  const customers = await screen.findAllByRole("listitem");
  expect(customers).toHaveLength(4);
});

test("renders footer with customers display status", async () => {
  const text = await screen.findByText(/exibindo [0-9]+ clientes/i);
  expect(text).toBeInTheDocument();
});
