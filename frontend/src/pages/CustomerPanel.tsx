import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CustomerList } from "../components/CustomerList";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";

export function CustomerPanel() {
  const { customers } = useContext(CustomerContext);
  return (
    <Stack>
      <Heading as="h2" size="lg">
        Listagem de usuários
      </Heading>
      <Text>Escolha um cliente para visualizar os detalhes</Text>
      <Link to="/new">
        <Button>Novo cliente</Button>
      </Link>
      <CustomerList />
      <Text>Exibindo {customers.length} clientes</Text>
    </Stack>
  );
}
