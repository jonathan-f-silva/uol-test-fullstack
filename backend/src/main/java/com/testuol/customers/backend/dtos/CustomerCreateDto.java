package com.testuol.customers.backend.dtos;

import lombok.Builder;
import lombok.Data;

/**
 * A data transfer object representing the information needed to create a new customer.
 */
@Data
@Builder
public class CustomerCreateDto {
  String name;
  String email;
  String phone;
  String cpf;
  String status;
}
