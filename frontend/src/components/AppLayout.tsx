import { Heading, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Stack spacing={4}>
      <Heading as="h1">Painel de Clientes</Heading>
      <Outlet />
    </Stack>
  );
}
