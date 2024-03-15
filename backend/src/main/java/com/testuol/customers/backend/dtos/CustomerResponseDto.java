package com.testuol.customers.backend.dtos;

import com.testuol.customers.backend.entities.Customer;

/**
 * A DTO representing the customer info to return.
 */
public record CustomerResponseDto(Integer id, String name, String email, String phone, String cpf,
    String status) {
  public CustomerResponseDto(Customer customer) {
    this(customer.getId(), customer.getName(), customer.getEmail(), customer.getPhone(),
        customer.getCpf(), customer.getStatus());
  }
}
