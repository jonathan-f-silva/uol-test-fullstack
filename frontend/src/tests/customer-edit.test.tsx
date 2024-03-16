import { test } from "vitest";
import { renderAppAt, screen } from "./utils";

beforeEach(() => {
  renderAppAt("/edit/1");
});

test("renders header", () => {
  const header = screen.getByRole("heading", { name: /editar cliente/i });
  expect(header).toBeInTheDocument();
});

test("renders customer details", () => {});

test("renders edit button", () => {});

test("renders delete button", () => {});
