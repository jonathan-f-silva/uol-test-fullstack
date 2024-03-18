declare type BackendResponse<T> = {
  error?: string;
  data?: T;
};

declare type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  status: string;
};

declare type CustomerData = Omit<Customer, "id">;

declare type CustomerId = Customer["id"];
