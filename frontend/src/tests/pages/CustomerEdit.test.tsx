import { test } from "vitest";
import { renderAppAt, screen } from "../utils";

beforeEach(() => {
  renderAppAt("/edit/1");
});

test.todo("renders heading", async () => {
  const header = await screen.findByRole("heading", {
    name: /editando cliente id #1/i,
  });
  expect(header).toBeInTheDocument();
});

test("renders form fields", async () => {
  const textBoxes = await screen.findAllByRole("textbox");
  const select = await screen.findByRole("combobox");
  const submitButton = await screen.findByRole("button", { name: /salvar/i });
  const backButton = await screen.findByRole("button", { name: /voltar/i });
  expect(textBoxes).toHaveLength(4);
  expect(select).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
});
