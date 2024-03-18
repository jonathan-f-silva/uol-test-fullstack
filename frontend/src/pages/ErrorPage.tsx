import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h1" size="2xl" mb={4}>
        Oops!
      </Heading>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Algo deu errado.
      </Text>
      <Text fontSize="lg">Por favor, tente novamente mais tarde.</Text>
      <Link to="/">
        <Button variant="outline" size="lg" mt={8}>
          Voltar para a página inicial
        </Button>
      </Link>
    </Box>
  );
};
