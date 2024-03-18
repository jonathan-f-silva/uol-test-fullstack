export const customerStatusMap = {
  ACTIVE: {
    label: "Ativo",
    color: "green.500",
  },
  INACTIVE: {
    label: "Inativo",
    color: "red.500",
  },
  PENDING: {
    label: "Aguardando ativação",
    color: "yellow.500",
  },
  DISABLED: {
    label: "Desabilitado",
    color: "gray.500",
  },
};

export type CustomerStatus = keyof typeof customerStatusMap;

export function getCustomerStatusColor(status: CustomerStatus) {
  return customerStatusMap[status].color;
}

export function getCustomerStatusLabel(status: CustomerStatus) {
  return customerStatusMap[status].label;
}
