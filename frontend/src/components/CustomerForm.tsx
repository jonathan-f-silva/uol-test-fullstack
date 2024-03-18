import { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";

const isNotEmpty = (value: string) => value.trim().length > 0;
const isValidEmail = (email: string) =>
  email.match(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(?:\.[a-zA-Z]{2,4})?$/
  );
const isValidCPF = (cpf: string) => cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);
const isValidPhone = (phone: string) => phone.match(/^\(\d{2}\) \d{4}-\d{4}$/);
const isValidForm = (
  name: string,
  email: string,
  cpf: string,
  phone: string,
  status: string
) =>
  isNotEmpty(name) &&
  isValidEmail(email) &&
  isValidCPF(cpf) &&
  isValidPhone(phone) &&
  isNotEmpty(status);

export function CustomerForm({ mode }: { mode: "create" | "edit" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  return (
    <VStack
      as={Form}
      method="post"
      spacing={4}
      maxWidth="60ch"
      width="90%"
      alignItems="stretch"
    >
      <FormControl isRequired isInvalid={!isNotEmpty(name)}>
        <Input
          name="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!isNotEmpty(name) && (
          <FormErrorMessage>Nome é obrigatório.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={!isValidEmail(email)}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isValidEmail(email) && (
          <FormErrorMessage>Email inválido.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={!isValidCPF(cpf)}>
        <Input
          name="cpf"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        {!isValidCPF(cpf) && (
          <FormErrorMessage>
            CPF inválido. Insira no formato 000.000.000-00
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={!isValidPhone(phone)}>
        <Input
          name="phone"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {!isValidPhone(phone) && (
          <FormErrorMessage>
            Telefone inválido. Insira no formato (00) 0000-0000
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={!isNotEmpty(status)}>
        <Input
          name="status"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        {!isNotEmpty(status) && (
          <FormErrorMessage>Status é obrigatório.</FormErrorMessage>
        )}
      </FormControl>
      <Button
        type="submit"
        isDisabled={!isValidForm(name, email, cpf, phone, status)}
      >
        {mode === "create" ? "Criar" : "Salvar"}
      </Button>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </VStack>
  );
}
