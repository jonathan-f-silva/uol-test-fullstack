import { useContext } from "react";
import { CustomerCard } from ".";
import { CustomerContext } from "../contexts/CustomerContext";
import { Stack } from "@chakra-ui/react";

export function CustomerList() {
  const { customers } = useContext(CustomerContext);
  return (
    <Stack spacing={4}>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </Stack>
  );
}
