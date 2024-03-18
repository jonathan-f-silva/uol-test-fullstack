import {
  Container,
  Heading,
  Icon,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { MdOutlinePeopleAlt } from "react-icons/md";

import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <VStack
        as="header"
        height="60px"
        backgroundColor="#333"
        justifyContent="center"
      >
        <Image src="./uol-logo.png" alt="Logo do UOL" height="32px" />
      </VStack>
      <Container maxWidth="80%" py={8}>
        <Stack spacing={4}>
          <Heading as="h1">
            <Icon as={MdOutlinePeopleAlt} marginRight={4} />
            Painel de Clientes
          </Heading>
          <Outlet />
        </Stack>
      </Container>
    </>
  );
}
