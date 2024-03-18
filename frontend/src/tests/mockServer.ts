import { HttpResponse, RequestHandler, http } from "msw";
import { setupServer } from "msw/node";
import { mockCustomers } from "./mocks";

export const API_ENDPOINT =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export const DB = {
  customers: mockCustomers as Customer[],
  addCustomer: (customer: Customer) => {
    DB.customers.push(customer);
  },
  delCustomer: (customerId: CustomerId) => {
    DB.customers = DB.customers.filter(({ id }) => id !== customerId);
  },
  updateCustomer: (customerId: CustomerId, update: CustomerData) => {
    DB.customers = DB.customers.map((customer) => {
      if (customer.id === customerId) return { ...customer, ...update };
      return customer;
    });
  },
};

export const handlers: RequestHandler[] = [
  http.get(`${API_ENDPOINT}/customers`, () => {
    return HttpResponse.json(DB.customers);
  }),

  http.get(`${API_ENDPOINT}/customers/:customerId`, ({ params }) => {
    const customer = DB.customers.find(
      (customer) => customer.id === Number(params.customerId)
    );
    if (customer) return HttpResponse.json(customer);
    return new Response("Not found", { status: HTTP_STATUS_CODE.NOT_FOUND });
  }),
];

export const mockServer = setupServer(...handlers);
