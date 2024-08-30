import { test } from "vitest";
import { renderComponent, screen } from "../utils";
import { CustomerForm } from "../../components";

test("renders customer form creation fields", async () => {
  renderComponent(<CustomerForm mode="create" />);
  const nameInput = screen.getByRole("textbox", { name: "name" });
  // const emailInput = screen.getByLabelText("Email");
  // const statusSelect = screen.getByRole("combobox", { name: "Status" });
  // const submitButton = screen.getByRole("button", { name: "Submit" });

  expect(nameInput).toBeInTheDocument();
  // expect(emailInput).toBeInTheDocument();
  // expect(statusSelect).toBeInTheDocument();
  // expect(submitButton).toBeInTheDocument();
});
