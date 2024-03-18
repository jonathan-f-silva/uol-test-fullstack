import { useContext } from "react";
import { CustomerCard } from ".";
import { CustomerContext } from "../contexts/CustomerContext";
import { List, Stack } from "@chakra-ui/react";

export function CustomerList() {
  const { customers } = useContext(CustomerContext);
  return (
    <Stack spacing={4} as={List}>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </Stack>
  );
}
