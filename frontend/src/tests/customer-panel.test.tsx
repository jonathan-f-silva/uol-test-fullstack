import { test } from "vitest";
import { renderAppAt, screen } from "./utils";
import { mockCustomers } from "./mocks";

beforeEach(() => {
  renderAppAt("/");
});

test("renders heading", async () => {
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

test("renders customers list", async () => {
  const customerList = await screen.findByRole("list");
  expect(customerList).toBeInTheDocument();
  const customers = await screen.findAllByRole("listitem");
  expect(customers).toHaveLength(4);
  expect(customers[0]).toHaveTextContent(mockCustomers[0].name);
  expect(customers[1]).toHaveTextContent(mockCustomers[1].name);
  expect(customers[2]).toHaveTextContent(mockCustomers[2].name);
  expect(customers[3]).toHaveTextContent(mockCustomers[3].name);
});

test("renders footer with customers display status", async () => {
  const text = await screen.findByText(/exibindo 4 clientes/i);
  expect(text).toBeInTheDocument();
});
