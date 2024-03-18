import { CustomerCard } from ".";
import { List, Stack } from "@chakra-ui/react";

type CustomerListProps = {
  customers: Customer[];
};

export function CustomerList({ customers }: CustomerListProps) {
  return (
    <Stack spacing={4} as={List}>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </Stack>
  );
}
