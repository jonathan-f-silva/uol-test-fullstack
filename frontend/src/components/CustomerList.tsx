import { useContext } from "react";
import { CustomerCard } from ".";
import { CustomerContext } from "../contexts/CustomerContext";

export function CustomerList() {
  const { customers } = useContext(CustomerContext);
  return (
    <div>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </div>
  );
}
