import { test } from "vitest";
import { renderComponent, screen } from "../utils";
import { mockCustomers } from "../mocks";
import { CustomerList } from "../../components";

test("renders customers cards", () => {
  renderComponent(<CustomerList customers={mockCustomers} />);
  const customerCards = screen.getAllByRole("listitem");
  expect(customerCards).toHaveLength(mockCustomers.length);
  expect(customerCards[0]).toHaveTextContent(mockCustomers[0].name);
  expect(customerCards[1]).toHaveTextContent(mockCustomers[1].name);
  expect(customerCards[2]).toHaveTextContent(mockCustomers[2].name);
  expect(customerCards[3]).toHaveTextContent(mockCustomers[3].name);
});
