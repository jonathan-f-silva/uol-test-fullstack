import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function CustomerPanelHeader() {
  return (
    <HStack justifyContent="space-between">
      <Stack>
        <Heading as="h2" size="lg">
          Listagem de usuários
        </Heading>
        <Text>Escolha um cliente para visualizar os detalhes</Text>
      </Stack>
      <Link to="/new">
        <Button margin={4}>Novo cliente</Button>
      </Link>
    </HStack>
  );
}
