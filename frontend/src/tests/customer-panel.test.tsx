import { test } from "vitest";
import { renderAppAt, screen } from "./utils";

beforeEach(() => {
  renderAppAt("/");
});

test("renders heading", () => {
  const heading = screen.getByRole("heading", {
    name: /listagem de usuários/i,
  });
  expect(heading).toBeInTheDocument();
});

test("renders new customer button", () => {
  const button = screen.getByRole("button", { name: /novo cliente/i });
  expect(button).toBeInTheDocument();
});

test("renders customers data", () => {
  const customers = screen.queryAllByRole("listitem");
  expect(customers).toHaveLength(0);
});

test("renders footer with customers display status", () => {
  const text = screen.getByText(/exibindo [0-9]+ clientes/i);
  expect(text).toBeInTheDocument();
});
