import { test } from "vitest";
import { renderAppAt, screen } from "./utils";

beforeEach(() => {
  renderAppAt("/new");
});

test("renders header", async () => {
  const header = await screen.getByRole("heading", { name: /novo usuário/i });
  expect(header).toBeInTheDocument();
});

test.todo("renders form", () => {});

test.todo("renders form fields", () => {});

test.todo("renders submit button", () => {});
