import { Select } from "@chakra-ui/react";
import { customerStatusMap } from "../utils/customerStatus";

type CustomerStatusSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CustomerStatusSelect({
  value,
  onChange,
}: CustomerStatusSelectProps) {
  const customerStatuses = Object.entries(customerStatusMap);
  return (
    <Select
      name="status"
      placeholder="Status"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {customerStatuses.map(([status, { label }]) => (
        <option key={status} value={status}>
          {label}
        </option>
      ))}
    </Select>
  );
}
