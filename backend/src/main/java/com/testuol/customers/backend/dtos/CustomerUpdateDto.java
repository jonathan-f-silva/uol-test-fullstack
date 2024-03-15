package com.testuol.customers.backend.dtos;

import lombok.Builder;
import lombok.Data;

/**
 * A DTO representing the customer info to update.
 */
@Data
@Builder
public class CustomerUpdateDto {
  String name;
  String email;
  String phone;
  String cpf;
  String status;
}
