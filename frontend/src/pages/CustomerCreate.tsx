/* eslint-disable react-refresh/only-export-components */
import { Heading, Stack, Text, useToast } from "@chakra-ui/react";
import { CustomerForm } from "../components";
import { createCustomer } from "../utils/customers";
import { ActionFunctionArgs, useActionData } from "react-router-dom";
import { useEffect } from "react";

export async function CustomerCreateAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const customerData = Object.fromEntries(formData) as CustomerData;
  return createCustomer(customerData);
}

export function CustomerCreate() {
  const toast = useToast();
  const actionResult = useActionData() as BackendResponse<Customer> | undefined;
  useEffect(() => {
    if (actionResult) {
      toast({
        title: actionResult.error ? "Erro ao criar usuário" : "Usuário criado",
        description: actionResult.error || "Usuário criado com sucesso",
        status: actionResult.error ? "error" : "success",
        duration: 10000,
        isClosable: true,
      });
    }
  }, [actionResult, toast]);

  return (
    <Stack>
      <Heading as="h2" size="lg">
        Novo usuário
      </Heading>
      <Text>Informe os campos a seguir para criar novo usuário:</Text>
      <CustomerForm mode="create" />
    </Stack>
  );
}
