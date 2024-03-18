import { test } from "vitest";
import { renderComponent, screen } from "../utils";
import { CustomerPanelHeader } from "../../components";

test("renders heading", async () => {
  renderComponent(<CustomerPanelHeader />);
  const heading = await screen.findByRole("heading", {
    name: /listagem de usuários/i,
  });
  const text = await screen.findByText(
    /escolha um cliente para visualizar os detalhes/i
  );
  const newClientButton = await screen.findByRole("button", {
    name: /novo cliente/i,
  });
  expect(heading).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(newClientButton).toBeInTheDocument();
});
