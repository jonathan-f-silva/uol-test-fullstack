import { Card, CardBody, Text } from "@chakra-ui/react";

export function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <Card>
      <CardBody>
        <Text>{customer.name}</Text>
      </CardBody>
    </Card>
  );
}
