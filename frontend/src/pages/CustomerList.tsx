import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function CustomerList() {
  return (
    <Stack>
      <Heading as="h2" size="lg">
        Listagem de usuários
      </Heading>
      <Text>Escolha um cliente para visualizar os detalhes</Text>
      <Link to="/create">
        <Button>Novo cliente</Button>
      </Link>
    </Stack>
  );
}
