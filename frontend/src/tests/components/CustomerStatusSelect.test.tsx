import { test } from "vitest";
import { renderComponent, screen, userEvent } from "../utils";
import { CustomerStatusSelect } from "../../components";

afterEach(() => {
  vi.restoreAllMocks();
});

test("renders customer status select", async () => {
  const onChangeMock = vi.fn();
  renderComponent(
    <CustomerStatusSelect value="ACTIVE" onChange={onChangeMock} />
  );
  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
  expect(select).toHaveValue("ACTIVE");
  expect(select).toHaveAttribute("name", "status");

  await userEvent.selectOptions(select, "ACTIVE");
  expect(onChangeMock).toHaveBeenCalledWith("ACTIVE");
  await userEvent.selectOptions(select, "INACTIVE");
  expect(onChangeMock).toHaveBeenCalledWith("INACTIVE");
  await userEvent.selectOptions(select, "PENDING");
  expect(onChangeMock).toHaveBeenCalledWith("PENDING");
  await userEvent.selectOptions(select, "DISABLED");
  expect(onChangeMock).toHaveBeenCalledWith("DISABLED");
  await userEvent.selectOptions(select, "");
  expect(onChangeMock).toHaveBeenCalledWith("");
});
