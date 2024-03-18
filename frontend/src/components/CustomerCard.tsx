import {
  Button,
  Card,
  CardBody,
  Stack,
  Text,
  HStack,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomerStatusField from "./CustomerStatusField";

export function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <Card as={ListItem}>
      <CardBody>
        <HStack justifyContent="space-between">
          <Stack width="25%">
            <Text fontWeight="bold">{customer.name}</Text>
            <Text>{customer.email}</Text>
          </Stack>
          <Stack width="25%">
            <Text fontWeight="bold">{customer.cpf}</Text>
            <Text>{customer.phone}</Text>
          </Stack>
          <Stack width="25%">
            <CustomerStatusField status={customer.status} />
          </Stack>
          <Link to={`/edit/${customer.id}`}>
            <Button variant="outline" minWidth={150}>
              Editar
            </Button>
          </Link>
        </HStack>
      </CardBody>
    </Card>
  );
}
