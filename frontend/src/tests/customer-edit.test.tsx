import { test } from "vitest";
import { renderAppAt, screen } from "./utils";

beforeEach(() => {
  renderAppAt("/edit/1");
});

test.todo("renders heading", async () => {
  const header = await screen.findByRole("heading", {
    name: /editando cliente id #1/i,
  });
  expect(header).toBeInTheDocument();
});

test.todo("renders customer details", () => {});

test.todo("renders edit button", () => {});

test.todo("renders delete button", () => {});
