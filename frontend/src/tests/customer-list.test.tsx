import { test } from "vitest";
import { renderApp, screen } from "./utils";

beforeEach(() => {
  renderApp({ initialEntries: ["/"] });
});

test("renders new customer button", () => {
  const button = screen.getByRole("button", { name: /novo cliente/i });
  expect(button).toBeInTheDocument();
});

test("renders customers list", () => {});

test("renders footer with customers display status", () => {});
