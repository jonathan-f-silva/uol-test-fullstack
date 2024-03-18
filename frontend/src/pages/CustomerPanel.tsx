import { Button, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";
import { CustomerList } from "../components/CustomerList";
import { useContext, useEffect } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { getCustomers } from "../utils/customers";

export async function CustomerPanelLoader() {
  return getCustomers();
}

export function CustomerPanel() {
  const toast = useToast();
  const loaderResult = useLoaderData() as
    | BackendResponse<Customer[]>
    | undefined;
  const { customers, setCustomers } = useContext(CustomerContext);

  useEffect(() => {
    const loadingToastId = "loading-toast";
    if (loaderResult) {
      if (loaderResult.error && !toast.isActive(loadingToastId)) {
        toast({
          id: loadingToastId,
          title: "Erro ao carregar clientes",
          description: loaderResult.error,
          status: "error",
          duration: 10000,
          isClosable: true,
        });
      } else {
        setCustomers(loaderResult.data || []);
      }
    }
  }, [loaderResult, setCustomers, toast]);

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
