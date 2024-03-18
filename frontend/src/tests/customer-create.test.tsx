import { test } from "vitest";
import { renderAppAt, screen } from "./utils";

beforeEach(() => {
  renderAppAt("/new");
});

test("renders heading", async () => {
  const header = await screen.findByRole("heading", { name: /novo usuário/i });
  const text = await screen.findByText(
    /informe os campos a seguir para criar novo usuário:/i
  );
  expect(header).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});

test("renders form fields", async () => {
  const textBoxes = await screen.findAllByRole("textbox");
  const select = await screen.findByRole("combobox");
  const submitButton = await screen.findByRole("button", { name: /criar/i });
  const backButton = await screen.findByRole("button", { name: /voltar/i });
  expect(textBoxes).toHaveLength(4);
  expect(select).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
});
