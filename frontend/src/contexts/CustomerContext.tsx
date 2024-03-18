import { PropsWithChildren, createContext, useState } from "react";

export const CustomerContext = createContext<{
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}>({ customers: [], setCustomers: () => {} });

export const CustomerProvider = ({ children }: PropsWithChildren) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};
