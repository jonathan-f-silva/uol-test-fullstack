import { test } from "vitest";
import { renderComponent, screen } from "../utils";
import { mockCustomers } from "../mocks";
import { CustomerCard } from "../../components";
import { List } from "@chakra-ui/react";
import {
  CustomerStatus,
  getCustomerStatusLabel,
} from "../../utils/customerStatus";

test("renders customer data", () => {
  const customer = mockCustomers[0];
  renderComponent(
    <List>
      <CustomerCard customer={customer} />
    </List>
  );
  const name = screen.getByText(customer.name);
  const email = screen.getByText(customer.email);
  const cpf = screen.getByText(customer.cpf);
  const phone = screen.getByText(customer.phone);
  const status = screen.getByText(
    getCustomerStatusLabel(customer.status as CustomerStatus)
  );
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(cpf).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
  expect(status).toBeInTheDocument();
});

test("renders edit link", () => {
  const customer = mockCustomers[0];
  renderComponent(
    <List>
      <CustomerCard customer={customer} />
    </List>
  );
  const editLink = screen.getByText("Editar");
  expect(editLink).toBeInTheDocument();
});
