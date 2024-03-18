const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

function renderValidationErrors(errors: Record<string, string>) {
  return Object.values(errors).join(", ");
}

async function fetchBackend<T>(
  url: string,
  options: RequestInit
): Promise<BackendResponse<T>> {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      return { data };
    } else if (data.errors) {
      return { error: renderValidationErrors(data.errors) };
    }
    return { error: data.errorMessage || "Erro desconhecido" };
  } catch (error) {
    return { error: "Erro de rede." };
  }
}

export async function getCustomers() {
  return fetchBackend<Customer[]>(`${BACKEND_URL}/customers`, {});
}

export async function getCustomer(customerId: CustomerId) {
  return fetchBackend<Customer>(`${BACKEND_URL}/customers/${customerId}`, {});
}

export async function createCustomer(customer: CustomerData) {
  return fetchBackend<Customer>(`${BACKEND_URL}/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });
}
export async function updateCustomer(
  customerId: CustomerId,
  customerData: CustomerData
) {
  return fetchBackend<Customer>(`${BACKEND_URL}/customers/${customerId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customerData),
  });
}
