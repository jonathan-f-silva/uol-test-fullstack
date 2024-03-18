import { Heading, Stack, useToast } from "@chakra-ui/react";
import { CustomerForm } from "../components";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import { getCustomer, updateCustomer } from "../utils/customers";
import { useEffect } from "react";

export async function CustomerEditLoader({ params }: LoaderFunctionArgs) {
  const customerId = Number(params.customerId);
  return getCustomer(customerId);
}

export async function CustomerEditAction({
  params,
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const customerData = Object.fromEntries(formData) as CustomerData;
  return updateCustomer(Number(params.customerId), customerData);
}

export function CustomerEdit() {
  const toast = useToast();
  const loaderResult = useLoaderData() as BackendResponse<Customer> | undefined;
  const actionResult = useActionData() as BackendResponse<Customer> | undefined;
  useEffect(() => {
    const loadingToastId = "loading-toast";
    const updateToastId = "update-toast";
    if (loaderResult) {
      if (loaderResult.error && !toast.isActive(loadingToastId)) {
        toast({
          id: loadingToastId,
          title: "Erro ao carregar cliente",
          description: loaderResult.error,
          status: "error",
          duration: 10000,
          isClosable: true,
        });
      }
    }
    if (actionResult) {
      if (!toast.isActive(updateToastId)) {
        toast({
          id: updateToastId,
          title: actionResult.error
            ? "Erro ao atualizar usuário"
            : "Usuário atualizado",
          description: actionResult.error || "Usuário atualizado com sucesso",
          status: actionResult.error ? "error" : "success",
          duration: 10000,
          isClosable: true,
        });
      }
    }
  }, [loaderResult, actionResult, toast]);
  const customer = loaderResult?.data;
  if (customer) {
    return (
      <Stack>
        <Heading as="h2" size="lg">
          Editando Cliente ID #{customer.id}
        </Heading>
        <CustomerForm mode="edit" customerData={customer} />
      </Stack>
    );
  }
  return (
    <Stack>
      <Heading as="h2" size="lg">
        Carregando...
      </Heading>
    </Stack>
  );
}
