/* eslint-disable react-refresh/only-export-components */
import { Heading, Stack, Text } from "@chakra-ui/react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { CustomerForm } from "../components";

export async function loader({ params }: LoaderFunctionArgs) {
  console.log({ params });
  // const customer = await getCustomer(params.customerId);
  return { params };
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  console.log({ formData });
  // const config = JSON.parse(formData.get("config") as string);
  // return saveConfig(config);
}

export function CustomerCreate() {
  const data = useLoaderData();
  console.log({ data });
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
