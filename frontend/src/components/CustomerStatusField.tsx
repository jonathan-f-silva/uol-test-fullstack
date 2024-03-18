import { Icon, HStack, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import {
  CustomerStatus,
  getCustomerStatusColor,
  getCustomerStatusLabel,
} from "../utils/customerStatus";

type CustomerStatusFieldProps = {
  status: string;
};

export default function CustomerStatusField({
  status,
}: CustomerStatusFieldProps) {
  return (
    <HStack alignItems="center">
      <Icon
        as={FaCircle}
        boxSize={3}
        color={getCustomerStatusColor(status as CustomerStatus)}
      />
      <Text>{getCustomerStatusLabel(status as CustomerStatus)}</Text>
    </HStack>
  );
}
