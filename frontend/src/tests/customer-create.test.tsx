import { test } from "vitest";
import { renderAppAt, screen } from "./utils";

beforeEach(() => {
  renderAppAt("/new");
});

test("renders header", () => {
  const header = screen.getByRole("heading", { name: /criar cliente/i });
  expect(header).toBeInTheDocument();
});

test("renders form", () => {});

test("renders form fields", () => {});

test("renders submit button", () => {});
