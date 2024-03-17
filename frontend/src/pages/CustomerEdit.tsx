import { Heading, Stack } from "@chakra-ui/react";
import { CustomerForm } from "../components";

export function CustomerEdit() {
  return (
    <Stack>
      <Heading as="h2" size="lg">
        Editando Cliente 1
      </Heading>
      <CustomerForm mode="edit" />
    </Stack>
  );
}
