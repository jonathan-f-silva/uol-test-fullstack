import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <Card>
      <CardBody>
        <Text>{customer.name}</Text>
        <Text>{customer.email}</Text>
        <Text>{customer.cpf}</Text>
        <Text>{customer.phone}</Text>
        <Text>{customer.status}</Text>
        <Link to={`/edit/${customer.id}`}>
          <Button>Editar</Button>
        </Link>
      </CardBody>
    </Card>
  );
}
