import { test } from "vitest";
import { renderComponent, screen } from "../utils";
import CustomerStatusField from "../../components/CustomerStatusField";

test("renders customer active status", () => {
  renderComponent(<CustomerStatusField status="ACTIVE" />);
  expect(screen.getByText("Ativo")).toBeInTheDocument();
});

test("renders customer inactive status", () => {
  renderComponent(<CustomerStatusField status="INACTIVE" />);
  expect(screen.getByText("Inativo")).toBeInTheDocument();
});

test("renders customer pending status", () => {
  renderComponent(<CustomerStatusField status="PENDING" />);
  expect(screen.getByText("Aguardando ativação")).toBeInTheDocument();
});

test("renders customer disabled status", () => {
  renderComponent(<CustomerStatusField status="DISABLED" />);
});
